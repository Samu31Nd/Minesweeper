package org.redes.minesweeper.gameUtils;

import java.io.Serializable;

public class BoardObject implements Serializable {
    private int[][] board;
    private winStatus isWin;

    public BoardObject(){
        this.isWin = winStatus.PLAYING;
    }

    public void setNumber(int x, int y, int num){
        board[x][y] = num;
    }

    public int[][] getBoard() {
        return board;
    }

    public void setBoard(int[][] board) {
        this.board = board;
    }

    public winStatus getStatus() {
        return isWin;
    }

    public void setStatus(winStatus status) {
        isWin = status;
    }
}
