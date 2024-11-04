package org.redes.minesweeper;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.text.Font;
import javafx.stage.Stage;

import java.io.IOException;

public class OptionsMenu {

    @FXML
    public void initialize() {
        //cargamos la fuente externa
        Font customFont = Font.loadFont(getClass().getResourceAsStream("font/PressStart2P-Regular.ttf"),20);
    }

    @FXML
    protected void onReturnClickButton(ActionEvent event) throws IOException {
        Stage stage = (Stage)((Node)event.getSource()).getScene().getWindow();
        FXMLLoader fxmlLoader = new FXMLLoader(OptionsMenu.class.getResource("mainMenu.fxml"));
        Scene scene = new Scene(fxmlLoader.load());
        String css = BaseClient.class.getResource("css/mainMenu.css").toExternalForm();
        scene.getStylesheets().add(css);
        stage.setTitle("Minesweeper menu");
        stage.setScene(scene);
        stage.centerOnScreen();
        stage.show();
    }
}
