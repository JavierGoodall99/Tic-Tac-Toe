// Select all elements with the class name 'box'
const boxes = document.querySelectorAll('.box');
// Select the reset button by its ID
const resetBtn = document.querySelector('#reset');
// Initialize the current player as X
let currentPlayer = 'X';

// Checks if the current player has won
function checkWin() {
  // Define all possible winning patterns
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
  ];
  // Check if any winning pattern is satisfied by the current player
  return winningPatterns.some(pattern =>
    pattern.every(index => boxes[index].textContent === currentPlayer)
  );
}

// Handles the click event for each box
function handleBoxClick(e) {
  // Get the clicked box element
  const box = e.target;
  // Ignore clicks on non-empty boxes
  if (box.textContent !== '') return;
  // Set the clicked box's text to the current player's symbol
  box.textContent = currentPlayer;
  // Check if the current player has won
  if (checkWin()) {
    // Display a message with the winner and reset the game
    alert(`${currentPlayer} wins!`);
    reset();
    return;
  }
  // Switch to the other player's turn
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Resets the game to the starting state
function reset() {
  // Clear the text of all boxes
  boxes.forEach(box => box.textContent = '');
  // Reset the current player to X
  currentPlayer = 'X';
}

// Add a click event listener to each box
boxes.forEach(box => box.addEventListener('click', handleBoxClick));
// Add a click event listener to the reset button
resetBtn.addEventListener('click', reset);
