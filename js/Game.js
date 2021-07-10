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

    dupa(){
        console.log(message)
    }

    #newGame(rows = this.#config.easy.rows,cols = this.#config.easy.cols,mines = this.#config.easy.mines){
        this.#numberOfRows = rows;
        this.#numberOfCols = cols;
        this.#numberOfmines = mines;

   

    }

    #numberOfRows = null;
    #numberOfCols = null;
    #numberOFmines = null;


    
}

window.onload = function(){
    const game = new Game();
    game.initializeGame();
}
