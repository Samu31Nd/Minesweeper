package org.redes.minesweeper;

import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ContentDisplay;
import javafx.scene.control.Label;
import javafx.scene.control.MenuItem;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.layout.GridPane;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import javafx.util.Duration;

import java.io.IOException;
import java.util.Objects;
import java.util.function.Consumer;


public class Board {

    Consumer<String> showId = System.out::println;

    @FXML
    Label timer;
    @FXML
    Label noMines;

    @FXML
    GridPane gridBoard;
    Image mineImg;
    Button[][] buttons;
    @FXML
    MenuItem exitButtonItem;
    private int seconds = 0;
    private int x, y;

    @FXML
    public void initialize() {
        BaseClient.game.startGame();
        buttons = new Button[9][9];
        System.out.println(BaseClient.game.getStatus());
        //cargamos la fuente externa
        Font customFont = Font.loadFont(getClass().getResourceAsStream("font/PressStart2P-Regular.ttf"),20);
        mineImg = new Image(Objects.requireNonNull(Board.class.getResourceAsStream("img/mine-medium.png")));

        x = gridBoard.getColumnCount();
        y = gridBoard.getRowCount();

        for(int i = 0; i < x; i++){
            for(int j = 0; j < y; j++){
                // Crear un nuevo botón
                Button button = new Button();
                button.setMaxWidth(Double.MAX_VALUE);
                button.setMaxHeight(Double.MAX_VALUE);
                button.setId(i + "" + j);

                button.setOnMouseClicked(event -> {
                    Button sourceButton = (Button) event.getSource();
                    if(event.getButton() == MouseButton.PRIMARY)
                        discoverMine(sourceButton);
                    else
                        System.out.println("A implementar el click derecho");
                    //si es click derecho, esto otro
                    //addFlag(sourceButton);
                });

                buttons[i][j] = button;
                gridBoard.add(button, i, j);
            }
            Timeline timeline = new Timeline(new KeyFrame(Duration.seconds(1), event -> {
                seconds++;
                timer.setText(String.format("%04d",seconds/10));
            }));
            timeline.setCycleCount(Timeline.INDEFINITE);
            timeline.play();
        }
    }

    public void discoverMine(Button sourceButton){
        System.out.println("Botón clickeado: " + sourceButton.getId());
        BaseClient.game.alertMovimentInBoard(parseIDtoIntArr(sourceButton.getId()));
        int [][] newBoard = BaseClient.game.getNewBoard();
        for(int i = 0; i < x; i++){
            for(int j = 0; j < y;j++){
                if(buttons[i][j].isDisabled()) continue;
                // mina sin descubrir
                if(newBoard[i][j] == 11) continue;
                if(newBoard[i][j] != 0)
                    buttons[i][j].setText(String.format("%d",newBoard[i][j]));
                buttons[i][j].setDisable(true);
            }
        }
    }

    public int[] parseIDtoIntArr(String id){
        return new int[]{Integer.parseInt(String.valueOf(id.toCharArray()[0])),Integer.parseInt(String.valueOf(id.toCharArray()[1])) };
    }

    public void setMineDiscovered(Button sourceButton){
        ImageView mine = new ImageView(mineImg);
        mine.setFitWidth(sourceButton.getHeight()/2); mine.setFitHeight(sourceButton.getHeight()/2);
        sourceButton.setGraphic(mine);
        sourceButton.setContentDisplay(ContentDisplay.GRAPHIC_ONLY);
    }

    public void goToMenu(ActionEvent event) throws IOException {
        Stage stage = (Stage) gridBoard.getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(Board.class.getResource("mainMenu.fxml"));
        Scene scene1 = new Scene(fxmlLoader.load());
        stage.setScene(scene1);
        stage.centerOnScreen();
        stage.setTitle("Menu");
        stage.show();
    }
}
