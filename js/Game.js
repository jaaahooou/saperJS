class Game {

    #config ={
        // ========= rendering buttons for each difficult
        easy:{
            rows:8,
            cols:8,
            mines:10   
        },
        medium:{
            rows:16,
            cols:16,
            mines:40   
        },
        expert:{
            rows:16,
            cols:30,
            mines:99   
        }
    }
    initializeGame(){

        this.#newGame();

    }

    #newGame(rows,cols,mines){
        this.#numberOfRows = rows;
        this.#numberOfCols = cols;
        this.#numberOfmines = mines;

    }

    #numberOfRows = null;
    #numberOfCols = null;
    #numberOFmines = null;

    
}

window.omload = function(){
    const game = new Game();
    game.initializeGame();
}
