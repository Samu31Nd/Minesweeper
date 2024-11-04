package org.redes.minesweeper;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import org.redes.minesweeper.gameUtils.Difficulty;

import java.io.IOException;

public class SelectDificulty {
    private Stage stage;

    @FXML
    public void initialize() {
        //cargamos la fuente externa
        Font customFont = Font.loadFont(getClass().getResourceAsStream("font/PressStart2P-Regular.ttf"),20);
        System.out.println(BaseClient.game.getStatus());
        BaseClient.game.setStatus("Selecting difficulty");
    }

    @FXML
    protected void onEasyClick(ActionEvent event) throws IOException {
        BaseClient.game.gameClassShared.setDifficulty(Difficulty.Easy);
        stage = (Stage)((Node)event.getSource()).getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(SelectDificulty.class.getResource("newEasyBoard.fxml"));
        Scene scene1 = new Scene(fxmlLoader.load());
        stage.setScene(scene1);
        stage.setTitle("Minesweeper");
        stage.centerOnScreen();
        stage.show();
    }

    @FXML
    protected void onMediumClick(ActionEvent event) throws IOException {
        BaseClient.game.gameClassShared.setDifficulty(Difficulty.Medium);
        System.out.println("Medium!");
        stage = (Stage)((Node)event.getSource()).getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(SelectDificulty.class.getResource("mediumBoard.fxml"));
        Scene scene1 = new Scene(fxmlLoader.load());
        stage.setScene(scene1);
        stage.centerOnScreen();
        stage.setTitle("Minesweeper");
        stage.show();

    }

    @FXML
    protected void onHardClick(ActionEvent event) throws IOException {
        BaseClient.game.gameClassShared.setDifficulty(Difficulty.Hard);
        System.out.println("Hard!");
        stage = (Stage)((Node)event.getSource()).getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(SelectDificulty.class.getResource("boardEasy.fxml"));
        Scene scene1 = new Scene(fxmlLoader.load());
        stage.setScene(scene1);
        stage.setTitle("Minesweeper");
        stage.show();
    }
}
