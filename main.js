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