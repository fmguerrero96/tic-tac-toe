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
  })