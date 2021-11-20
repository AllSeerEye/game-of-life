# Game of Life
The Game of Life cellular automata (automaton??) written in Javascript using p5.js

## Rules
The Game of Life has the following rules
* If the current cell is alive and has 2 or 3 neighbors, the cell stays alive in the next generation
* If the current cell is alive and has less than two neighbors, the cell dies in the next generation
* If the current cell is alive and has more than 3 neighbors, the cell dies in the next generation
* If the cell is dead and has exactly 3 neighbors, the cell becomes alive in the next generation

These rules simulate underpopulation, overpopulation, and reproduction.

## Cellular Automaton
The Game of Life is a cellular automaton. Cellular automaton is laid out on a grid of cells (I used a 2D array) each with a finite number of states, such as on or off. Different cellular automata have different rules. Some more examples of cellular automata are Langton's Ant and Rule 110.

## My Visualization
My visualization uses a 2D array of either 1s or 0s. If it is a 1, it is black, or alive. It can be kind of slow because it's checking every single cell every frame two times. Because of this, I usually set the frame rate to something like 24 or even 16.