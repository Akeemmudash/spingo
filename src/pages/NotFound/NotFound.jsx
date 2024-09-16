import { useState } from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const TicTacToe = () => {
  const [gameState, setGameState] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameActive, setGameActive] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCellClick = (index) => {
    if (gameState[index] === "" && gameActive) {
      const updatedGameState = [...gameState];
      updatedGameState[index] = currentPlayer;
      setGameState(updatedGameState);
      checkGameResult(updatedGameState);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkGameResult = (updatedGameState) => {
    const isWin = winningConditions.some(
      ([a, b, c]) =>
        updatedGameState[a] &&
        updatedGameState[a] === updatedGameState[b] &&
        updatedGameState[a] === updatedGameState[c]
    );

    if (isWin) {
      setWinner(currentPlayer);
      setGameActive(false);
    } else if (!updatedGameState.includes("")) {
      setWinner("draw");
      setGameActive(false);
    }
  };

  const handleRestartGame = () => {
    setGameState(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameActive(true);
    setWinner(null);
  };

  const renderStatus = () => {
    if (!gameActive && winner) {
      return winner === "draw"
        ? `Game ended in a draw!`
        : `Player ${winner} has won!`;
    }
    return `It's ${currentPlayer}'s turn`;
  };

  return (
    <section className="notfound" style={{ backgroundColor: "#e4e4e4" }}>
      <h1 className="notfound--title">404 - Page Not Found</h1>
      <p className="notfound--text">Oops! Looks like you lost your way...</p>
      <h3 className="game--title">
        But you can play Tic-Tac-Toe while you&apos;re here!
      </h3>
      {!gameActive && winner && (
        <h1 className="game--winner">{renderStatus()}</h1>
      )}
      <div className="game--container">
        {gameState.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
            role="button"
            tabIndex={0}
          >
            {cell}
          </div>
        ))}
      </div>
      <h2 className="game--status">{gameActive ? renderStatus() : ""}</h2>
      <button className="game--restart" onClick={handleRestartGame}>
        Restart Game
      </button>
      <br />
      <button className="homepage--btn">
        <Link to="/">Go to Homepage</Link>
      </button>
    </section>
  );
};

export default TicTacToe;
