package org.redes.minesweeper.gameUtils;

public enum Difficulty {
    Easy {
        @Override
        public int getMines() {
            return 10;
        }
        @Override
        public int[] getSize() {
            return new int[]{9, 9};
        }
        @Override
        public String toString() {
            return "Easy";
        }
    },
    Medium {
        @Override
        public int getMines() {
            return 40;
        }
        @Override
        public int[] getSize() {
            return new int[]{16, 16};
        }
        @Override
        public String toString() {
            return "Medium";
        }
    },
    Hard {
        @Override
        public int getMines() {
            return 99;
        }
        @Override
        public int[] getSize() {
            return new int[]{16, 30};
        }
        @Override
        public String toString() {
            return "Hard";
        }
    };

    // Métodos abstractos que cada constante debe implementar
    public abstract int getMines();
    public abstract int[] getSize();
}
