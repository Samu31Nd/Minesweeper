package org.redes.minesweeper.gameUtils;

import java.io.Serializable;

public class GameClass implements Serializable {

    private int[][] board;
    transient private boolean[][] mines;
    private Difficulty difficulty;
    private double time;

    public GameClass(){

    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public boolean[][] getMines() {
        return mines;
    }

    public void setMines(boolean[][] mines) {
        this.mines = mines;
    }

    public int getW(){
        return difficulty.getSize()[0];
    }
    public int getH(){
        return difficulty.getSize()[1];
    }
}
