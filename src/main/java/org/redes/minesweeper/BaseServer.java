package org.redes.minesweeper;
import org.redes.minesweeper.gameUtils.BoardObject;
import org.redes.minesweeper.gameUtils.Difficulty;
import org.redes.minesweeper.gameUtils.winStatus;

import javax.swing.*;
import java.awt.*;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Random;

public class BaseServer {
    static int port = 3000;
    static DisplayLog gameStatus;
    static ObjectInputStream ois;
    static ObjectOutputStream oos;
    static BufferedReader input;
    static Difficulty gameDifficulty;
    static boolean [][] mines;
    static int[][] board;
    static int[][] boardClient;
    static int[] size;
    static int uncoveredCells;
    static BoardObject response;

    public static void main(String[] args) {
        gameStatus = new DisplayLog();
        try {
            gameStatus.println("Inciando server...");
            ServerSocket s = new ServerSocket(port);
            gameStatus.println("Server iniciado en el puerto " + s.getLocalPort() + ". En espera del cliente.");

            //esperamos la conexión
            Socket cl = s.accept();
            cl.setSoLinger(true,5);
            gameStatus.println("Cliente conectado desde " + cl.getInetAddress() + ":" + cl.getPort());
            ois = new ObjectInputStream(cl.getInputStream());
            //recibimos la primer instancia del juego
            gameDifficulty = (Difficulty) ois.readObject();
            System.out.println(gameDifficulty);
            size = gameDifficulty.getSize();
            uncoveredCells = gameDifficulty.getSize()[0]*gameDifficulty.getSize()[1] - gameDifficulty.getMines();

            //ahora queremos recibir el primer movimiento
            input = new BufferedReader(new InputStreamReader(cl.getInputStream()));
            int x = Integer.parseInt(input.readLine());
            int y = Integer.parseInt(input.readLine());

            gameStatus.println("Primer movimiento: [" + x + ", " + y + "]");
            gameStatus.println("Realizando tablero...");
            //poner minas
            System.out.println("Mina presionada: "+x+y);
            placeMines(x,y);
            contarMinasAlrededor();
            //mostramos el tablero
            gameStatus.println("Tablero final: ");
            printBoard(board);
            //mandamos el primer tablero
            response = new BoardObject();
            descubrirCelda(x,y);
            response.setBoard(boardClient);
            gameStatus.println("Tablero recien descubierto: ");
            printBoard(boardClient);

            //primer respuesta
            oos = new ObjectOutputStream(cl.getOutputStream());
            oos.writeObject(response);
            oos.flush();

            cl.close();
            s.close();
        } catch(Exception e){
            gameStatus.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }

    //las variables recibidas son para quitar una mina de ahí
    static private void placeMines(int x, int y){
        Random randoms = new Random();
        int no_mines = gameDifficulty.getMines();
        mines = new boolean[size[0]][size[1]];

        //la habilitamos
        mines[x][y] = true;
        while(no_mines > 0){
            int i = randoms.nextInt(size[0]);
            int j = randoms.nextInt(size[1]);
            if(!mines[i][j]){
                mines[i][j] = true;
                no_mines--;
            }
        }
        //luego la quitamos :)
        mines[x][y] = false;
    }

    static private void contarMinasAlrededor() {
        int rows = size[0];
        int cols = size[1];
        board = new int[rows][cols];
        boardClient = new int[rows][cols];

        //11 es el valor de cubierto
        for(int i = 0; i < rows; i++)
            for(int j = 0; j < cols; j++)
                boardClient[i][j] = 11;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (!mines[i][j]) {
                    int count = 0;
                    // Verificar las ocho posiciones alrededor de la celda actual
                    if (i > 0 && mines[i - 1][j]) count++;           // arriba
                    if (i < rows - 1 && mines[i + 1][j]) count++;     // abajo
                    if (j > 0 && mines[i][j - 1]) count++;            // izquierda
                    if (j < cols - 1 && mines[i][j + 1]) count++;     // derecha
                    if (i > 0 && j > 0 && mines[i - 1][j - 1]) count++; // arriba izquierda
                    if (i < rows - 1 && j < cols - 1 && mines[i + 1][j + 1]) count++; // abajo derecha
                    if (i > 0 && j < cols - 1 && mines[i - 1][j + 1]) count++; // arriba derecha
                    if (i < rows - 1 && j > 0 && mines[i + 1][j - 1]) count++; // abajo izquierda

                    board[i][j] = count;
                } else {
                    board[i][j] = -1; // Representación de una mina
                }
            }
        }
    }

    static private void printBoard(int[][] tablero) {
        StringBuilder line;
        int[] size = gameDifficulty.getSize();
        for (int i = 0; i < size[0]; i++) {
            line = new StringBuilder();
            for (int j = 0; j < size[1]; j++) {
                // Formato de ancho fijo de 3 caracteres para centrar los números
                if(tablero[i][j] == 11)
                    line.append("[   ] ");
                else line.append(String.format("[%2d] ", tablero[i][j]));
            }
            gameStatus.println(line.toString());
        }
    }


    static private void descubrirCelda(int x, int y){
        if(mines[x][y]){
            response.setWin(winStatus.LOSE);
            response.setBoard(board.clone());
        } else {
            boardClient[x][y] = board[x][y];
            uncoveredCells--;
            if(uncoveredCells == 0){
                response.setWin(winStatus.WIN);
            }
            if(board[x][y] == 0){
                descubrirCeldasAlrededor(x,y);
            }
        }
    }
    static private void descubrirCeldasAlrededor(int i, int j) {
        //int[] dx = {-1, -1, -1, 0, 0, 1, 1, 1}; // Direcciones para las filas
        //int[] dy = {-1, 0, 1, -1, 1, -1, 0, 1}; // Direcciones para las columnas
        int[] dx = { -1, 0, 0, 1}; // Direcciones para las filas
        int[] dy = { 0, -1, 1, 0}; // Direcciones para las columnas

        for (int k = 0; k < 4; k++) { // Iteramos por cada dirección alrededor de la celda (i, j)
            int newX = i + dx[k];
            int newY = j + dy[k];

            // Verificamos que la celda está dentro de los límites y que aún no está descubierta
            if (newX >= 0 && newX < board.length && newY >= 0 && newY < board[0].length && boardClient[newX][newY] == 11) {
                boardClient[newX][newY] = board[newX][newY];
                uncoveredCells--;

                // Si la celda descubierta también tiene un valor 0, llamamos recursivamente
                if (board[newX][newY] == 0) {
                    descubrirCeldasAlrededor(newX, newY);
                }
            }
        }
    }

}

class DisplayLog {
    private final JTextArea textArea;
    public DisplayLog() {
        JFrame frame = new JFrame("Server - Game Status");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new BorderLayout());

        // Crear el área de texto
        textArea = new JTextArea();
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea);
        frame.add(scrollPane, BorderLayout.CENTER);
        frame.setLocationRelativeTo(null);
        // Hacer la ventana visible
        frame.setVisible(true);
    }

    public void println(String message) {
        textArea.append("\n" + message);
        textArea.setCaretPosition(textArea.getDocument().getLength()); // Desplazarse al final
    }
    public void print(String message) {
        textArea.append(message);
        textArea.setCaretPosition(textArea.getDocument().getLength()); // Desplazarse al final
    }
}