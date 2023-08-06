import { useEffect, useState } from "react";
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
  const [isSpecialDisabled, setIsSpecialDisabled] = useState(false);
  const [isHealDisabled, setIsHealDisabled] = useState(false);

  // generate random width nums which should be dicreased while clicking on attack button
  const monsterAttackNum = Math.trunc(Math.random() * 20) + 1;
  const newMonsterAttackNum = monsterHealth - monsterAttackNum;

  const playerAttackNum = Math.trunc(Math.random() * 20) + 1;
  const newPlayerAttackNum = playerHealth - playerAttackNum;

  const healNum = Math.trunc(Math.random() * 40) + 1;
  const updateHealing = playerHealth + healNum;

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
        setIsSpecialDisabled(false);
        setIsHealDisabled(false);
      }, 1000);
    }
    if (updateMonsterHealth === 0) {
      setIsDisabled(!isDisabled);
      handlePlayerPoint();
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
      handleMonsterPoint();
    }
  }

  function handleMonsterPoint() {
    setTimeout(() => {
      setMonsterPoint(() =>
        updatePlayerHealth !== updateMonsterHealth
          ? monsterPoint + 1
          : monsterPoint
      );
    }, 1000);
    // if (monsterPoint === 2) {
    //   setMonsterPoint(0);
    // }
  }

  function pointsRestart() {
    if (monsterPoint === 5 || playerPoint === 5) {
      setIsSpecialDisabled(true);
      setIsHealDisabled(true);
      setIsDisabled(true);
      setTimeout(() => {
        setMonsterPoint(0);
        setPlayerPoint(0);
        setIsDisabled(false);
        setIsSpecialDisabled(false);
        setIsHealDisabled(false);
      }, 2000);
    }
  }
  useEffect(() => {
    pointsRestart();
  });
  function handlePlayerPoint() {
    setTimeout(() => {
      setPlayerPoint(() =>
        updatePlayerHealth !== updateMonsterHealth
          ? playerPoint + 1
          : playerPoint
      );
    }, 1000);
  }

  function handleAttack() {
    monsterHandleAttack();
    playerHandleAttack();
  }
  function handleSpecialAttack() {
    monsterHandleAttack();
    playerHandleAttack();
    setIsSpecialDisabled(true);
  }
  function handleHealing() {
    setPlayerHealth(() => (updateHealing >= 100 ? 100 : updateHealing));
    setIsHealDisabled(() => (playerHealth < 100 ? true : false));
  }
  return (
    <div id="controls">
      <button
        disabled={isDisabled}
        id="attack-button"
        className={` ${isDisabled ? "disabled" : "attack_button"} `}
        onClick={handleAttack}
      >
        ATTACK
      </button>
      <button
        disabled={isSpecialDisabled}
        id="attack-button"
        // className="attack_button"
        className={` ${isSpecialDisabled ? "disabled" : "attack_button"} `}
        onClick={handleSpecialAttack}
      >
        SPECIAL ATTACK
      </button>
      <button
        disabled={isHealDisabled}
        id="attack-button"
        // className="attack_button"
        className={` ${isHealDisabled ? "disabled" : "attack_button"} `}
        onClick={handleHealing}
      >
        HEAL
      </button>
    </div>
  );
}

export default Buttons;
