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
import javafx.scene.effect.Blend;
import javafx.scene.effect.BoxBlur;
import javafx.scene.effect.ColorAdjust;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.layout.Background;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import javafx.util.Duration;
import org.redes.minesweeper.gameUtils.winStatus;

import java.io.IOException;
import java.util.Objects;
import java.util.function.Consumer;


public class Board {

    @FXML
    Label timer;
    @FXML
    Label noMines;
    @FXML
    GridPane gridBoard;
    @FXML
    MenuItem exitButtonItem;
    @FXML
    VBox gameDialogBox;
    @FXML
    Label gameDialog;
    @FXML
    VBox gameVBox;
    @FXML
    VBox howToPlayBox;

    Image mineImg, flagImg;
    Button[][] buttons;
    private int seconds = 0;
    private int x, y;
    private int no_mines;
    private int []size;
    Timeline timeline;

    @FXML
    public void initialize() {
        BaseClient.game.startGame();
        size = BaseClient.game.gameClassShared.getDifficulty().getSize();
        no_mines = BaseClient.game.gameClassShared.getDifficulty().getMines();
        noMines.setText(String.format("%04d", no_mines));
        buttons = new Button[size[0]][size[1]];
        System.out.println(BaseClient.game.getStatus());
        //cargamos la fuente externa
        Font customFont = Font.loadFont(getClass().getResourceAsStream("font/PressStart2P-Regular.ttf"),20);
        mineImg = new Image(Objects.requireNonNull(Board.class.getResourceAsStream("img/mine-medium.png")));
        flagImg = new Image(Objects.requireNonNull(Board.class.getResourceAsStream("img/flag.png")));

        x = gridBoard.getColumnCount();
        y = gridBoard.getRowCount();
        timeline = new Timeline(new KeyFrame(Duration.seconds(1), event -> {
            seconds++;
            timer.setText(String.format("%04d",seconds));
        }));
        timeline.setCycleCount(Timeline.INDEFINITE);
        timeline.play();
        for(int i = 0; i < x; i++){
            for(int j = 0; j < y; j++) {
                // Crear un nuevo botón
                Button button = new Button();
                button.setMaxWidth(Double.MAX_VALUE);
                button.setMaxHeight(Double.MAX_VALUE);
                button.setId(i + "," + j);

                button.setOnMouseClicked(event -> {
                    Button sourceButton = (Button) event.getSource();
                    if (event.getButton() == MouseButton.PRIMARY)
                        discoverMine(sourceButton);
                    else
                        addFlag(sourceButton);
                });

                buttons[i][j] = button;
                gridBoard.add(button, i, j);
            }
        }
    }

    public void discoverMine(Button sourceButton){
        //si es una bandera que no haga nada
        if(sourceButton.getAccessibleHelp() != null)
            return;
        BaseClient.game.alertMovimentInBoard(parseIDtoIntArr(sourceButton.getId()), winStatus.PLAYING);
        int [][] newBoard = BaseClient.game.getNewBoard();
        for(int i = 0; i < x; i++){
            for(int j = 0; j < y;j++){
                if(buttons[i][j].isDisabled()) continue;
                // mina sin descubrir
                if(newBoard[i][j] == 11 || newBoard[i][j] == 12) continue;
                if(newBoard[i][j] != 0)
                    buttons[i][j].setText(String.format("%d",newBoard[i][j]));
                if(newBoard[i][j] == -1){
                    setMineDiscovered(buttons[i][j]);
                }
                buttons[i][j].setDisable(true);
            }
        }

        if(BaseClient.game.serverResponse.getStatus() == winStatus.WIN){
            System.out.println("Winned!");
            gameDialogBox.setVisible(true);
            timeline.stop();
            gameDialog.setText("You have won!");
        } else if(BaseClient.game.serverResponse.getStatus() == winStatus.LOSE){
            System.out.println("Loser!");
            gameDialogBox.setVisible(true);
            timeline.stop();
            gameDialog.setText("You have lost!");
        }
    }

    public void addFlag(Button sourceButton){
        if(sourceButton.getAccessibleHelp() == null){
            System.out.println("Bandera puesta: " + sourceButton.getId());
            sourceButton.setAccessibleHelp("Flag");
            noMines.setText(String.format("%04d",--no_mines));
            BaseClient.game.alertMovimentInBoard(parseIDtoIntArr(sourceButton.getId()), winStatus.FLAG_ADD);
            setFlagImage(sourceButton);
        } else{
            System.out.println("Bandera removida: " + sourceButton.getId());
            sourceButton.setAccessibleHelp(null);
            noMines.setText(String.format("%04d",++no_mines));
            BaseClient.game.alertMovimentInBoard(parseIDtoIntArr(sourceButton.getId()), winStatus.FLAG_REMOVE);
            sourceButton.setText(""); sourceButton.setGraphic(null);
        }
    }

    public int[] parseIDtoIntArr(String id){
        String[] idArray = id.split(",");
        return new int[]{Integer.parseInt(idArray[0]), Integer.parseInt(idArray[1]) };
    }

    public void setMineDiscovered(Button sourceButton){
        ImageView mine = new ImageView(mineImg);
        mine.setFitWidth(sourceButton.getHeight()/2); mine.setFitHeight(sourceButton.getHeight()/2);
        sourceButton.setGraphic(mine);
        sourceButton.setContentDisplay(ContentDisplay.GRAPHIC_ONLY);
    }

    public void setFlagImage(Button sourceButton){
        ImageView flag = new ImageView(flagImg);
        flag.setFitWidth(2*sourceButton.getHeight()/3); flag.setFitHeight(2*sourceButton.getHeight()/3);
        sourceButton.setGraphic(flag);
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

    public void showHowToPlay(ActionEvent event){
        BoxBlur blur = new BoxBlur(10,10,3);
        gameVBox.setEffect(blur);
        timeline.stop();
        // Añadir la clase CSS para el fondo acrílico
        gameDialogBox.getStyleClass().add("acrylic-background");
        gameDialogBox.setVisible(true);
        gameDialog.setVisible(false);
        howToPlayBox.setVisible(true);
    }

    @FXML
    public void closeHowToPlayButton(ActionEvent event){
        gameVBox.setEffect(null);
        howToPlayBox.setVisible(false);
        // Remover la clase CSS para quitar el fondo acrílico
        gameDialogBox.getStyleClass().remove("acrylic-background");
        gameDialogBox.setVisible(false);
        gameDialog.setVisible(true);
        timeline.play();
    }

    @FXML
    public void onStopClick(ActionEvent event) {
        MenuItem stopButton = (MenuItem) event.getSource();
        if (stopButton.getText().equals("Stop")) {
            stopButton.setText("Resume");

            // Añadir la clase CSS para el fondo acrílico
            gameDialogBox.getStyleClass().add("acrylic-background");
            gameDialogBox.setVisible(true);
            gameDialog.setVisible(false);
            timeline.stop();
        } else {
            stopButton.setText("Stop");

            // Remover la clase CSS para quitar el fondo acrílico
            gameDialogBox.getStyleClass().remove("acrylic-background");
            gameDialogBox.setVisible(false);
            gameDialog.setVisible(true);
            timeline.play();
        }
    }


}
