module org.redes.minesweeper {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.desktop;


    opens org.redes.minesweeper to javafx.fxml;
    exports org.redes.minesweeper;
}