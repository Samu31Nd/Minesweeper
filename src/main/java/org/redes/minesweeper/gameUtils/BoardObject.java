package org.redes.minesweeper.gameUtils;

import java.io.Serializable;

public class BoardObject implements Serializable {
    private int[][] board;
    private winStatus isWin;

    public BoardObject(){
        this.isWin = winStatus.PLAYING;
    }

    public int[][] getBoard() {
        return board;
    }

    public void setBoard(int[][] board) {
        this.board = board;
    }

    public winStatus isWin() {
        return isWin;
    }

    public void setWin(winStatus win) {
        isWin = win;
    }
}
