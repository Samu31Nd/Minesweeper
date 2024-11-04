package org.redes.minesweeper;
import org.redes.minesweeper.gameUtils.BoardObject;
import org.redes.minesweeper.gameUtils.Difficulty;
import org.redes.minesweeper.gameUtils.MovimentObject;
import org.redes.minesweeper.gameUtils.winStatus;

import javax.swing.*;
import java.awt.*;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;
import java.util.Arrays;
import java.util.Random;

public class BaseServer {
    //VARIABLES DE ENTORNO
    static int port = 3000;
    static int FLAG = 12;
    static int MINE = -1;
    static int UNDISCOVERED_CELL = 11;

    static DisplayLog gameLog;
    static ObjectInputStream ois;
    static ObjectOutputStream oos;

    static Difficulty gameDifficulty;
    static boolean [][] mines;
    static int[][] board;
    static int[] size;
    static int uncoveredCells;
    static BoardObject response;
    static winStatus gameStatus;
    static int[] lastPosition;

    public static void main(String[] args) {
        gameLog = new DisplayLog();
        gameStatus = winStatus.STARTING;
        try {
            gameLog.println("Inciando server...");
            ServerSocket s = new ServerSocket(port);
            gameLog.println("Server iniciado en el puerto " + s.getLocalPort() + ". En espera del cliente.");
            Socket cl = s.accept();
            gameLog.println("Cliente conectado desde " + cl.getInetAddress() + ":" + cl.getPort());

            ois = new ObjectInputStream(cl.getInputStream());

            //recibimos la primer instancia del juego
            gameDifficulty = (Difficulty) ois.readObject();
            size = gameDifficulty.getSize();
            //damos valor a esto
                mines = new boolean[size[0]][size[1]];
                board = new int[size[0]][size[1]];
            //cantidad de casillas que faltan por descubrir
            uncoveredCells = size[0]*size[1] - gameDifficulty.getMines();
            //recibimos el primer movimiento
            MovimentObject lastMoviment = (MovimentObject) ois.readObject();
            lastPosition = lastMoviment.getMoviment();
            gameStatus = lastMoviment.getStatus();

            response = new BoardObject();
            response.setBoard(new int[size[0]][size[1]]);

            gameLog.println("Primer movimiento: [" + lastPosition[0] + ", " + lastPosition[1] + "]");
            gameLog.println("Realizando tablero...");
            //poner minas
            placeMines(lastPosition[0],lastPosition[1]);
            contarMinasAlrededor();
            //mostramos el tablero
            gameLog.println("Tablero final: ");
            printBoard(board, lastPosition[0], lastPosition[1]);
            //Ejecutamos el primer movimiento
            descubrirCelda(lastPosition[0],lastPosition[1]);
            gameLog.println("Tablero recien descubierto: ");
            printBoard(response.getBoard(), lastPosition[0], lastPosition[1]);
            //primer respuesta
            oos = new ObjectOutputStream(cl.getOutputStream());
            oos.writeObject(response);
            oos.flush();
            //empezamos a recibir en loop
            while(gameStatus != winStatus.WIN && gameStatus != winStatus.LOSE){
                MovimentObject newLastMoviment = (MovimentObject) ois.readObject();
                lastPosition = newLastMoviment.getMoviment();
                // Si es bandera
                if(newLastMoviment.getStatus() == winStatus.FLAG_ADD){
                    setFlag(lastPosition[0],lastPosition[1]);
                } else if (newLastMoviment.getStatus() == winStatus.FLAG_REMOVE) {
                    removeFlag(lastPosition[0],lastPosition[1]);
                } else {
                    descubrirCelda(lastPosition[0],lastPosition[1]);
                    gameLog.println("Movimiento en el juego: [" + lastPosition[0] + ", " + lastPosition[1] + "]");
                    response.setStatus(gameStatus);
                    gameLog.println("Estatus del juego: [" + gameStatus + "].");
                    printBoard(response.getBoard(), lastPosition[0], lastPosition[1]);
                    //mandamos la respuesta
                    oos.reset();
                    oos.writeObject(response);
                    oos.flush();
                }
            }

            gameLog.println("End game status: [" + gameStatus + "].");

            cl.close();
            s.close();
        } catch(Exception e){
            if (e instanceof SocketException && "Connection reset".equals(e.getMessage())) {
                gameLog.println("Conexión terminada por el cliente.");
            } else {
                gameLog.println("Error: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }

    //las variables recibidas son para quitar una mina de ahí
    static private void placeMines(int x, int y){
        Random randoms = new Random();
        int no_mines = gameDifficulty.getMines();
        // Habilitamos las minas alrededor de (x, y) si están dentro de los límites
        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                int newX = x + i;
                int newY = y + j;
                if (newX >= 0 && newX < size[0] && newY >= 0 && newY < size[1]) {
                    mines[newX][newY] = true;
                }
            }
        }

        while(no_mines > 0){
            int i = randoms.nextInt(size[0]);
            int j = randoms.nextInt(size[1]);
            if(!mines[i][j]){
                mines[i][j] = true;
                no_mines--;
            }
        }
        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                int newX = x + i;
                int newY = y + j;
                if (newX >= 0 && newX < size[0] && newY >= 0 && newY < size[1]) {
                    mines[newX][newY] = false;
                }
            }
        }
    }

    static private void contarMinasAlrededor() {
        int[][] boardClient = new int[size[0]][size[1]];
        //11 es el valor de cubierto
        for(int i = 0; i < size[0]; i++)
            for(int j = 0; j < size[1]; j++)
                boardClient[i][j] = UNDISCOVERED_CELL;
        response.setBoard(boardClient);

        for (int i = 0; i < size[0]; i++) {
            for (int j = 0; j < size[1]; j++) {
                if (!mines[i][j]) {
                    int count = 0;
                    // Verificar las ocho posiciones alrededor de la celda actual
                    if (i > 0 && mines[i - 1][j]) count++;           // arriba
                    if (i < size[0] - 1 && mines[i + 1][j]) count++;     // abajo
                    if (j > 0 && mines[i][j - 1]) count++;            // izquierda
                    if (j < size[1] - 1 && mines[i][j + 1]) count++;     // derecha
                    if (i > 0 && j > 0 && mines[i - 1][j - 1]) count++; // arriba izquierda
                    if (i < size[0] - 1 && j < size[1] - 1 && mines[i + 1][j + 1]) count++; // abajo derecha
                    if (i > 0 && j < size[1] - 1 && mines[i - 1][j + 1]) count++; // arriba derecha
                    if (i < size[0] - 1 && j > 0 && mines[i + 1][j - 1]) count++; // abajo izquierda

                    board[i][j] = count;
                } else {
                    board[i][j] = MINE; // Representación de una mina
                }
            }
        }
    }

    static private void printBoard(int[][] tablero, int x, int y) {
        StringBuilder line;
        int[] size = gameDifficulty.getSize();

        for (int i = 0; i < size[1]; i++) {
            line = new StringBuilder();
            for (int j = 0; j < size[0]; j++) {
                // Formato de ancho fijo de 3 caracteres para centrar los números
                if (tablero[j][i] == UNDISCOVERED_CELL) {
                    line.append("[   ] ");
                } else {
                    if (i == y && j == x) {
                        // Imprimir la celda (x, y) en rojo
                        line.append(String.format("{%2d} ", tablero[j][i]));
                    } else {
                        line.append(String.format("[%2d] ", tablero[j][i]));
                    }
                }
            }
            gameLog.println(line.toString());
        }
    }


    static private void setFlag(int x, int y){
        response.setNumber(x,y,FLAG);
    }

    static private void removeFlag(int x, int y){
        response.setNumber(x,y,UNDISCOVERED_CELL);
    }

    static private void descubrirCelda(int x, int y){
        int[][] boardClient = response.getBoard();
        if(mines[x][y]){
            gameStatus = winStatus.LOSE;
            response.setBoard(board);
            return;
        }

        boardClient[x][y] = board[x][y];
        uncoveredCells--;
        if(uncoveredCells == 0){
            gameStatus = winStatus.WIN;
            response.setBoard(board);
        }
        if(board[x][y] == 0){
            descubrirCeldasAlrededor(x,y);
        }
    }
    static private void descubrirCeldasAlrededor(int i, int j) {
        int[][] boardClient = response.getBoard();
        int []dx = {-1, -1, -1,  0, 0,  1, 1, 1};
        int []dy = {-1,  0,  1, -1, 1, -1, 0, 1};

        for (int k = 0; k < 8; k++) { // Iteramos por cada dirección alrededor de la celda (i, j)
            int newX = i + dx[k];
            int newY = j + dy[k];

            // Verificamos que la celda está dentro de los límites y que aún no está descubierta
            if (newX >= 0 && newX < board.length && newY >= 0 && newY < board[0].length && boardClient[newX][newY] == UNDISCOVERED_CELL) {
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
        textArea.setLineWrap(true);
        JScrollPane scrollPane = new JScrollPane(textArea);
        frame.add(scrollPane, BorderLayout.CENTER);
        frame.setLocationRelativeTo(null);
        // Hacer la ventana visible
        frame.setVisible(true);
    }

    static int no_line = 0;
    public void println(String message) {
        textArea.append("\n" + (no_line++) + " . " + message);
        textArea.setCaretPosition(textArea.getDocument().getLength()); // Desplazarse al final
    }
    public void print(String message) {
        textArea.append(message);
        textArea.setCaretPosition(textArea.getDocument().getLength()); // Desplazarse al final
    }
}