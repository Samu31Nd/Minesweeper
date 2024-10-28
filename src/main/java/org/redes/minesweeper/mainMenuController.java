package org.redes.minesweeper;

import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.scene.text.Font;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.Node;
import javafx.fxml.FXML;

import java.io.IOException;

public class mainMenuController {
    private Stage stage;

    @FXML
    public void initialize() {
        //cargamos la fuente externa
        Font customFont = Font.loadFont(getClass().getResourceAsStream("font/PressStart2P-Regular.ttf"),20);
        System.out.println(BaseClient.game.getStatus());
        BaseClient.game.setStatus("Menu");
    }
    

    @FXML
    protected void onExitButtonClick() {
        Platform.exit();
    }

    @FXML
    protected void onOptionsButtonClick(ActionEvent event) throws IOException {
        stage = (Stage)((Node)event.getSource()).getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(mainMenuController.class.getResource("optionsMenu.fxml"));
        Scene scene1 = new Scene(fxmlLoader.load(), 320, 240);
        stage.setScene(scene1);
        stage.centerOnScreen();
        stage.setTitle("Options");
        stage.show();
    }

    @FXML
    protected void onStartButtonClick(ActionEvent event) throws IOException {
        stage = (Stage)((Node)event.getSource()).getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(mainMenuController.class.getResource("selectDificulty.fxml"));
        Scene scene1 = new Scene(fxmlLoader.load());
        stage.setScene(scene1);
        stage.centerOnScreen();
        stage.setTitle("Select dificulty");
        stage.show();
    }
}