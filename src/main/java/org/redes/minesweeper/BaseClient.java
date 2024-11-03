package org.redes.minesweeper;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;
import org.redes.minesweeper.gameUtils.*;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;
import java.net.Socket;

public class BaseClient extends Application {

    static gameClient game;

    @Override
    public void start(Stage stage) throws IOException {
        game = new gameClient();
        Thread clientThread = new Thread(game);
        clientThread.start();
        game.setStatus("Not loaded...");
        //load scene
        FXMLLoader fxmlLoader = new FXMLLoader(BaseClient.class.getResource("mainMenu.fxml"));
        Scene scene = new Scene(fxmlLoader.load());
        stage.setTitle("Minesweeper menu");

        stage.setOnCloseRequest((WindowEvent event) -> {
            clientThread.interrupt();
        });
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}

class gameClient implements Runnable{
    //instancia de juego que se comparte con el servidor
    public final GameClass gameClassShared;
    private String status;
    private Socket cl;
    private ObjectOutputStream oos; private ObjectInputStream ois;
    private MovimentObject lastMoviment;
    public BoardObject serverResponse;

    //Setters y getters
    public void setStatus(String status){
        this.status = status;
    }
    public String getStatus(){
        return  status;
    }

    @Override
    public void run() {
        waitToThreadToStart();
        System.out.println("The game has started!");
        conectionToServer();
    }

    public void conectionToServer(){
        try {
            cl = new Socket("localhost",3000);
            oos = new ObjectOutputStream(cl.getOutputStream());
            oos.writeObject(gameClassShared.getDifficulty());
            oos.flush();
            waitMovimentToRecieve();
            //ahora mandamos el movimiento
            oos.writeObject(lastMoviment);
            oos.flush();
            //ahora tenemos que esperar de respuesta el primer tablero
            ois = new ObjectInputStream(cl.getInputStream());
            recieveNewBoard();

            while(serverResponse.getStatus() != winStatus.LOSE && serverResponse.getStatus() != winStatus.WIN){
                waitMovimentToRecieve();
                oos.reset();
                oos.writeObject(lastMoviment);
                oos.flush();
                if(lastMoviment.getStatus() == winStatus.FLAG_ADD || lastMoviment.getStatus() == winStatus.FLAG_REMOVE)
                    continue;
                recieveNewBoard();
            }


            oos.close();
            cl.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    synchronized public int[][] getNewBoard(){
        try {
            wait();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return serverResponse.getBoard();
    }

    synchronized private void recieveNewBoard(){
        try {
            serverResponse = (BoardObject) ois.readObject();
            notify();
        } catch (IOException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    synchronized private void waitMovimentToRecieve(){
        try {
            wait();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
    synchronized public void alertMovimentInBoard(int[]xy, winStatus typeOfMoviment){
        lastMoviment.setMoviment(xy.clone());
        lastMoviment.setStatus(typeOfMoviment);
        notify();
    }

    synchronized public void startGame(){
        notify();
    }
    synchronized private void waitToThreadToStart(){
        try{
            wait();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
    public gameClient(){
        gameClassShared = new GameClass();
        lastMoviment = new MovimentObject();
    }
}
