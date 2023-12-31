import { useState, useEffect } from "react";
import Cell from "./Components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = go=="circle"?"Coca-cola":"Dolly" 
  console.log(cells);

  const checkScore = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let circleWins = false;
    let crossWins = false;

    for (const array of winningCombinations) {
      circleWins = array.every((cell) => cells[cell] === "circle");
      crossWins = array.every((cell) => cells[cell] === "cross");

      if (circleWins || crossWins) {
        break;
      }
    }

    if (circleWins) {
      setWinningMessage("Coca Cola Venceu!");
    } else if (crossWins) {
      setWinningMessage("Dollinho venceu!");
    }
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="app">
         <h1>{winningMessage || message}</h1>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            go={go}
            setGo={setGo}
            cells={cells}
            cell={cell}
            setCells={setCells}
            winningMessege={winningMessage}
          />
        ))}
        
      </div>
    </div>
  );
};

export default App;
