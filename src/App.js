import "./App.css";
import Buttons from "./Buttons/Buttons";
import MonsterPlayer from "./MonsterPlayer/MonsterPlayer";
import UserPlayer from "./UserPlayer/UserPlayer";
import { useState } from "react";
import WinnerAllert from "./WinnerAlert/WinnerAlert";
import PlayerWinner from "./PlayerWinner/PlayerWinner";
import DrawBox from "./DrawBox/DrawBox";

function App() {
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);

  const [monsterPoint, setMonsterPoint] = useState(0);
  const [playerPoint, setPlayerPoint] = useState(0);

  const [monsterWinner, setMonsterWinner] = useState(false);
  const [playerWinner, setPlayerWinner] = useState(false);
  const [draw, setDraw] = useState(false);

  // const [monsterWinner, setMonsterWinner] = useState("");

  return (
    <>
      <Header monsterPoint={monsterPoint} playerPoint={playerPoint} />
      <MonsterPlayer
        monsterHealth={monsterHealth}
        monsterPoint={monsterPoint}
      />
      <WinnerAllert monsterWinner={monsterWinner} />
      <UserPlayer
        playerHealth={playerHealth}
        setPlayerHealth={setPlayerHealth}
        monsterPoint={monsterPoint}
        playerPoint={playerPoint}
      />
      <PlayerWinner playerWinner={playerWinner} />
      <DrawBox draw={draw} />
      <Buttons
        monsterHealth={monsterHealth}
        setMonsterHealth={setMonsterHealth}
        playerHealth={playerHealth}
        setPlayerHealth={setPlayerHealth}
        setMonsterPoint={setMonsterPoint}
        monsterPoint={monsterPoint}
        playerPoint={playerPoint}
        setPlayerPoint={setPlayerPoint}
        monsterWinner={monsterWinner}
        draw={draw}
        setDraw={setDraw}
        setMonsterWinner={setMonsterWinner}
        setPlayerWinner={setPlayerWinner}
      />
    </>
  );
}

function Header({ monsterPoint, playerPoint }) {
  return (
    <header
      className="header_text"
      style={
        monsterPoint === 5
          ? { backgroundColor: "#d02a2a" }
          : playerPoint === 5
          ? { backgroundColor: "#00a876" }
          : { backgroundColor: "#88005b" }
      }
    >
      <h1>
        {monsterPoint === 5
          ? "Monster Won. Play again!"
          : playerPoint === 5
          ? "You Won. Play again!"
          : "Monster Slayer"}
      </h1>
    </header>
  );
}
export default App;
