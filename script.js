const gameBoard = (() => {
  const blankBoard = [0, 0, 0, 0, 0, 0, 0, 0];
  let gameArray = [0, 0, 0, 0, 0, 0, 0, 0];

  checkRows = () => {
    let rowOne = gameArray[0] + gameArray[1] + gameArray[2];
    let rowTwo = gameArray[3] + gameArray[4] + gameArray[5];
    let rowThree = gameArray[6] + gameArray[7] + gameArray[8];

    if (rowOne === "XXX" || rowTwo === "XXX" || rowThree === "XXX") {
      playerWins();
    } else if (rowOne === "OOO" || rowTwo === "OOO" || rowThree === "OOO") {
      computerWins();
    } else {
      noWinner();
    }
  };

  checkCols = () => {
    let colOne = gameArray[0] + gameArray[3] + gameArray[6];
    let colTwo = gameArray[1] + gameArray[4] + gameArray[7];
    let colThree = gameArray[2] + gameArray[5] + gameArray[8];

    if (colOne === "XXX" || colTwo === "XXX" || colThree === "XXX") {
      playerWins();
    } else if (colOne === "OOO" || colTwo === "OOO" || colThree === "OOO") {
      computerWins();
    } else {
      noWinner();
    }
  };

  checkDiag = () => {
    let diagOne = gameArray[0] + gameArray[4] + gameArray[8];
    let diagTwo = gameArray[6] + gameArray[4] + gameArray[2];

    if (diagOne === "XXX" || diagTwo === "XXX") {
      playerWins();
    } else if (diagOne === "OOO" || diagTwo === "OOO") {
      computerWins();
    } else {
      noWinner();
    }
  };

  // Winning

  playerWins = () => {
    console.log("Player Wins");
  };

  computerWins = () => {
    console.log("Computer Wins");
  };

  noWinner = () => {
    console.log("Keep Playing");
  };

  // Players

  createPlayers = () => {
    return [
      {
        name: "Player",
        mark: "X",
      },

      {
        name: "Computer",
        mark: "O",
      },
    ];
  };

  getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 9);

    return computerChoice;
  };
})();
