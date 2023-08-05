import { useState } from "react";
import "./buttons.css";

function Buttons({
  monsterHealth,
  setMonsterHealth,
  playerHealth,
  setPlayerHealth,
  setMonsterPoint,
  monsterPoint,
  playerPoint,
  setPlayerPoint,
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  // generate random width nums which should be dicreased while clicking on attack button
  const monsterAttackNum = Math.trunc(Math.random() * 20) + 1;
  const newMonsterAttackNum = monsterHealth - monsterAttackNum;

  const playerAttackNum = Math.trunc(Math.random() * 20) + 1;
  const newPlayerAttackNum = playerHealth - playerAttackNum;

  /*if monster health is less than 0 it should become 0.
  if monster health equals 0 it should become 100 as well
   */

  const updateMonsterHealth = newMonsterAttackNum < 0 ? 0 : newMonsterAttackNum;
  function monsterHandleAttack() {
    setMonsterHealth(() => updateMonsterHealth);
    if (updateMonsterHealth === 0 || updatePlayerHealth === 0) {
      setTimeout(() => {
        setMonsterHealth(100);
        setIsDisabled(false);
      }, 1000);
    }
    if (updateMonsterHealth === 0) {
      setIsDisabled(!isDisabled);
      handleMonsterPoint();
    }
  }

  const updatePlayerHealth = newPlayerAttackNum < 0 ? 0 : newPlayerAttackNum;
  function playerHandleAttack() {
    setPlayerHealth(() => updatePlayerHealth);
    if (updatePlayerHealth === 0 || updateMonsterHealth === 0) {
      setTimeout(() => {
        setPlayerHealth(100);
        setIsDisabled(false);
      }, 1000);
    }
    if (updatePlayerHealth === 0) {
      setIsDisabled(!isDisabled);
      handlePlayerPoint();
    }
  }

  function handleMonsterPoint() {
    setMonsterPoint(() => monsterPoint + 1);
  }

  function handlePlayerPoint() {
    setPlayerPoint(() => playerPoint + 1);
  }

  function handleAttack() {
    monsterHandleAttack();
    playerHandleAttack();
  }

  return (
    <section id="controls">
      <button
        disabled={isDisabled}
        id="attack-button"
        className={` ${
          monsterHealth === 0 || playerHealth === 0
            ? "disabled"
            : "attack_button"
        } `}
        onClick={handleAttack}
      >
        ATTACK
      </button>
      <button id="special" className="attack_button">
        SPECIAL ATTACK
      </button>
      <button id="heal" className="attack_button">
        HEAL
      </button>
      <button id="give-up" className="attack_button">
        SURRENDER
      </button>
    </section>
  );
}

export default Buttons;
