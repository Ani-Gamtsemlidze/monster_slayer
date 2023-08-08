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
  setMonsterWinner,
  setPlayerWinner,
  setDraw,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSpecialDisabled, setIsSpecialDisabled] = useState(false);
  const [isHealDisabled, setIsHealDisabled] = useState(false);
  const [isSurrender, setisSurrender] = useState(false);

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
      setMonsterWinner(updatePlayerHealth !== updateMonsterHealth);
    }, 1000);
  }

  function pointsRestart() {
    if (monsterPoint === 5 || playerPoint === 5) {
      setIsSpecialDisabled(true);
      setIsHealDisabled(true);
      setisSurrender(true);

      setIsDisabled(true);
      setTimeout(() => {
        setMonsterWinner(false);
        setPlayerWinner(false);
        setDraw(false);
        setMonsterPoint(0);
        setPlayerPoint(0);
        setIsDisabled(false);
        setIsSpecialDisabled(false);
        setIsHealDisabled(false);
        setisSurrender(false);
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
    setMonsterWinner(updatePlayerHealth !== updateMonsterHealth);
    setDraw(updatePlayerHealth === updateMonsterHealth ? true : false);
  }

  function handleAttack() {
    setPlayerWinner(false);
    setMonsterWinner(false);
    setDraw(false);
    monsterHandleAttack();
    playerHandleAttack();
  }
  function handleSpecialAttack() {
    setPlayerWinner(false);
    setDraw(false);
    setMonsterWinner(false);
    monsterHandleAttack();
    playerHandleAttack();
    setIsSpecialDisabled(true);
  }
  function handleHealing() {
    setPlayerHealth(() => (updateHealing >= 100 ? 100 : updateHealing));
    setIsHealDisabled(() => (playerHealth < 100 ? true : false));
  }

  function surrenderAlert() {
    alert("Do you want to give up?");
    setMonsterHealth(100);
    setPlayerHealth(100);
    setMonsterPoint(0);
    setPlayerPoint(0);
  }
  return (
    <section id="controls">
      <button
        disabled={isDisabled}
        className={` ${isDisabled ? "disabled" : "attack_button"} `}
        onClick={handleAttack}
        // style={
        //   monsterPoint === 5
        //     ? { backgroundColor: "#d02a2a" }
        //     : playerPoint === 5
        //     ? { backgroundColor: "#00a876" }
        //     : { backgroundColor: "#88005b", color: "#fff" }
        // }
      >
        ATTACK
      </button>
      <button
        disabled={isSpecialDisabled}
        // className="attack_button"
        className={` ${isSpecialDisabled ? "disabled" : "attack_button"} `}
        onClick={handleSpecialAttack}
      >
        SPECIAL ATTACK
      </button>
      <button
        disabled={isHealDisabled}
        // className="attack_button"
        className={` ${isHealDisabled ? "disabled" : "attack_button"} `}
        onClick={handleHealing}
      >
        HEAL
      </button>
      <button
        disabled={isSurrender}
        // className="attack_button"
        className={` ${isSurrender ? "disabled" : "attack_button"} `}
        onClick={surrenderAlert}
      >
        SURRENDER
      </button>
    </section>
  );
}

export default Buttons;
