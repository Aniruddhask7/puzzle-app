import React, { useState } from "react";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';

const initialTiles = [1,2,3,4,5,6,7,8,null];

function App() {
  const [tiles, setTiles] = useState(initialTiles);

  // ✅ Move tile logic
  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null);

    const validMoves = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - 3,
      emptyIndex + 3
    ];

    if (validMoves.includes(index)) {
      let newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] =
      [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
    }
  };

  // ✅ Shuffle
  const shuffleTiles = () => {
    let shuffled = [...tiles].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
  };

  // ✅ Win check
  const isWin = () => {
    return tiles.join() === "1,2,3,4,5,6,7,8,";
  };

  return (
    <div className="container">
      <h1>Puzzle Game</h1>

      {/* ✅ Shuffle button (correct place) */}
      <button onClick={shuffleTiles}>Shuffle</button>

      {/* ✅ Win message */}
      {isWin() && <h2>You Win! 🎉</h2>}

      <div className="grid">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === null ? "empty" : ""}`}
            onClick={() => moveTile(index)}
          >
            {tile}
          </div>
        ))}
      </div>
      <Analytics />
    </div>
  );
}

export default App;