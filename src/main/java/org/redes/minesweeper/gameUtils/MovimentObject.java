package org.redes.minesweeper.gameUtils;

import java.io.Serializable;

public class MovimentObject implements Serializable {
    private int[]moviment;
    private winStatus status;

    public int[] getMoviment() {
        return moviment.clone();
    }

    public void setMoviment(int[] moviment) {
        this.moviment = moviment.clone();
    }

    public winStatus getStatus() {
        return status;
    }

    public void setStatus(winStatus status) {
        this.status = status;
    }

    public MovimentObject(){
        this.status = winStatus.STARTING;
    }
}
