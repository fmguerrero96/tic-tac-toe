const Player = (name, symbol) => {
    return {name, symbol}
  }
  
  const playerX = Player('PlayerX', 'X');
  const playerO = Player('PlayerO', 'O');

  const gameboard = (() => {
    const boardContainer = document.querySelector('.board-container');
    const board = ['','','','','','','','','']
    let cellIndex = 0 
    function displayBoard() {
      board.forEach(function (item){
        let cell = document.createElement('div');
        cell.className = ('cell');
        cell.id = cellIndex
        boardContainer.appendChild(cell);
        cellIndex += 1
      })
    };
    
    return{displayBoard, board};
  })();

  const game = (() => {
    const restartBtn = document.querySelector('.restart');
    const message = document.querySelector('.turn');
    let playerTurn = playerX.symbol;
    message.textContent = `Player ${playerTurn}'s Turn`;

    function displaySymbol(){
        document.addEventListener('click', e =>{
          if (e.target.matches('.cell') && (gameboard.board[e.target.id] === '')){
            gameboard.board[e.target.id] = playerTurn;
            e.target.textContent = gameboard.board[e.target.id]
            switchPlayer()
            checkTie();
            checkWin();
          }
        })
      }

    function switchPlayer(){
    if(playerTurn === playerX.symbol){
        playerTurn = playerO.symbol;
        message.textContent = `Player ${playerTurn}'s Turn`
    } else{playerTurn = playerX.symbol
        message.textContent = `Player ${playerTurn}'s Turn`}
    }

    function checkWin(){
    if (gameboard.board[0] === gameboard.board[1] && gameboard.board[0] === gameboard.board[2] && gameboard.board[0] != ''||
    gameboard.board[3] === gameboard.board[4] && gameboard.board[3] === gameboard.board[5] && gameboard.board[3] != '' ||
    gameboard.board[6] === gameboard.board[7] && gameboard.board[6] === gameboard.board[8] && gameboard.board[6] != '' ||
    gameboard.board[0] === gameboard.board[3] && gameboard.board[0] === gameboard.board[6] && gameboard.board[0] != '' ||
    gameboard.board[1] === gameboard.board[4] && gameboard.board[1] === gameboard.board[7] && gameboard.board[1] != '' ||
    gameboard.board[2] === gameboard.board[5] && gameboard.board[2] === gameboard.board[8] && gameboard.board[2] != '' ||
    gameboard.board[0] === gameboard.board[4] && gameboard.board[0] === gameboard.board[8] && gameboard.board[0] != '' ||
    gameboard.board[2] === gameboard.board[4] && gameboard.board[2] === gameboard.board[6] && gameboard.board[2] != '' )
            {
        gameWin()
        }
    }

    function checkTie() {
    if (gameboard.board.every(tieEvent)){
        gameTie()
        }
    }

    const gameWin = () => {
        if (playerTurn === playerX.symbol){
          message.textContent = 'Player O Wins'
        } else {message.textContent = 'Player X Wins'}
      }
    
      const gameTie = () => {
        message.textContent = "It's a tie"
      }

  })