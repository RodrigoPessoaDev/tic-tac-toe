// const gameBoard = (() => {})();

const gameBoard = (() => {
  let arrayBoard = ["X", "X", "", "", "", "", "", "", ""];
  let playerTurn = "Player One";

  getBoard = () => {
    return arrayBoard;
  };

  clearBoard = () => {
    arrayBoard = ["", "", "", "", "", "", "", "", ""];
    console.log("Board cleared");
  };

  player1 = () => {
    return {
      name: "Player One",
      mark: "X",
    };
  };

  player2 = () => {
    return {
      name: "Player Two",
      mark: "O",
    };
  };

  checkTurn = () => {
    if (playerTurn === player1().name) {
      playerTurn = "Player Two";
      console.log("It's Player Two turn.");
    } else if (playerTurn === player2().name) {
      playerTurn = "Player One";
      console.log("It's Player One turn.");
    }
  };
})();
