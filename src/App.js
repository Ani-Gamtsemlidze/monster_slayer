import "./App.css";
import Buttons from "./Buttons/Buttons";
import MonsterPlayer from "./MonsterPlayer/MonsterPlayer";
import UserPlayer from "./UserPlayer/UserPlayer";
import { useState } from "react";

function App() {
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterPoint, setMonsterPoint] = useState(0);
  const [playerPoint, setPlayerPoint] = useState(0);

  return (
    <>
      <Header monsterPoint={monsterPoint} playerPoint={playerPoint} />
      <MonsterPlayer
        monsterHealth={monsterHealth}
        monsterPoint={monsterPoint}
      />
      <UserPlayer
        playerHealth={playerHealth}
        setPlayerHealth={setPlayerHealth}
        monsterPoint={monsterPoint}
        playerPoint={playerPoint}
      />
      <Buttons
        monsterHealth={monsterHealth}
        setMonsterHealth={setMonsterHealth}
        playerHealth={playerHealth}
        setPlayerHealth={setPlayerHealth}
        setMonsterPoint={setMonsterPoint}
        monsterPoint={monsterPoint}
        playerPoint={playerPoint}
        setPlayerPoint={setPlayerPoint}
      />
    </>
  );
}

function Header({ monsterPoint, playerPoint }) {
  return (
    <header className="header_text">
      <h1>
        {monsterPoint === 5
          ? "Monster Won"
          : playerPoint === 5
          ? "You Won"
          : "Monster Slayer"}
      </h1>
    </header>
  );
}
export default App;
