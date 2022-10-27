var content = document.getElementById('content');

var initialBoard = [
  ["-", "-", "-"], // 0
  ["-", "-", "-"], // 1
  ["-", "-", "-"] // 2
];

var ticTacToe = {
  board: initialBoard,
  currentPlayer: "X"
}

content.innerHTML = renderGame(ticTacToe);

function playGame(row, column) {
  console.log(`clicked play game on: ${row} ${column}`);
  console.log(ticTacToe.board[row][column]);

  // checking the position wasn't played already.
  if (ticTacToe.board[row][column] != '-') {
    alert('That position was already selected');
    return;
  }

  // changing the board with the position selected.
  ticTacToe.board[row][column] = ticTacToe.currentPlayer;

  // check if someone won.
  // 0,0 == 1,0  AND 1,0 == 2,0
  if (ticTacToe.board[0][0] != '-'
    && ticTacToe.board[0][0] == ticTacToe.board[1][0]
    && ticTacToe.board[1][0] == ticTacToe.board[2][0]) {
    declareWinner();
  } else if (ticTacToe.board[0][1] != '-'
    && ticTacToe.board[0][1] == ticTacToe.board[1][1]
    && ticTacToe.board[1][1] == ticTacToe.board[2][1]) {
    declareWinner();
  } else if (ticTacToe.board[0][2] != '-'
    && ticTacToe.board[0][2] == ticTacToe.board[1][2]
    && ticTacToe.board[1][2] == ticTacToe.board[2][2]) {
    declareWinner();
  } else if (ticTacToe.board[0][0] != '-'
    && ticTacToe.board[0][0] == ticTacToe.board[0][1]
    && ticTacToe.board[0][1] == ticTacToe.board[0][2]) {
    declareWinner();
  } else if (ticTacToe.board[1][0] != '-'
    && ticTacToe.board[1][0] == ticTacToe.board[1][1]
    && ticTacToe.board[1][1] == ticTacToe.board[1][2]) {
    declareWinner();
  }

  // chaning the current player.
  if (ticTacToe.currentPlayer == 'X') {
    ticTacToe.currentPlayer = 'O';
  } else {
    ticTacToe.currentPlayer = 'X';
  }

  // re rendering the page
  content.innerHTML = renderGame(ticTacToe);
}

function declareWinner() {
  alert(`Player: ${ticTacToe.currentPlayer} Won!`)
  clearBoard();
}

function clearBoard() {
  ticTacToe.board = [
    ["-", "-", "-"], // 0
    ["-", "-", "-"], // 1
    ["-", "-", "-"]  // 2
  ];
  content.innerHTML = renderGame(ticTacToe);
}

function renderGame(game) {
  // Change this render function to use the "game" parameter

  return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player ${game.currentPlayer}'s turn!</h4>
            <div class="w-50 text-center"> <!-- 0 -->
                <button class="game_button selection_${game.board[0][0]}" onclick="playGame(0,0)">${game.board[0][0]}</button>
                <button class="game_button selection_${game.board[0][1]}" onclick="playGame(0,1)">${game.board[0][1]}</button>
                <button class="game_button selection_${game.board[0][2]}" onclick="playGame(0,2)">${game.board[0][2]}</button>
            </div>
            <div class="w-50 text-center">  <!-- 1 -->
                <button class="game_button selection_${game.board[1][0]}" onclick="playGame(1,0)">${game.board[1][0]}</button>
                <button class="game_button selection_${game.board[1][1]}" onclick="playGame(1,1)">${game.board[1][1]}</button>
                <button class="game_button selection_${game.board[1][2]}" onclick="playGame(1,2)">${game.board[1][2]}</button>
            </div>
            <div class="w-50 text-center">  <!-- 2 -->
                <button class="game_button selection_${game.board[2][0]}" onclick="playGame(2,0)">${game.board[2][0]}</button>
                <button class="game_button selection_${game.board[2][1]}" onclick="playGame(2,1)">${game.board[2][1]}</button>
                <button class="game_button selection_${game.board[2][2]}" onclick="playGame(2,2)">${game.board[2][2]}</button>
            </div>
        </div>
    `
}