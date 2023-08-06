// import { useEffect, useState } from "react";

// function AttackButton({
//   monsterHealth,
//   setMonsterHealth,
//   playerHealth,
//   setPlayerHealth,
//   setMonsterPoint,
//   monsterPoint,
//   playerPoint,
//   setPlayerPoint,
// }) {
//   const [isDisabled, setIsDisabled] = useState(false);

//   const monsterAttackNum = Math.trunc(Math.random() * 20) + 1;
//   const newMonsterAttackNum = monsterHealth - monsterAttackNum;

//   const playerAttackNum = Math.trunc(Math.random() * 20) + 1;
//   const newPlayerAttackNum = playerHealth - playerAttackNum;

//   const updateMonsterHealth = newMonsterAttackNum < 0 ? 0 : newMonsterAttackNum;

//   function monsterHandleAttack() {
//     setMonsterHealth(() => updateMonsterHealth);
//     if (updateMonsterHealth === 0 || updatePlayerHealth === 0) {
//       setTimeout(() => {
//         setMonsterHealth(100);
//         setIsDisabled(false);
//       }, 1000);
//     }
//     if (updateMonsterHealth === 0) {
//       setIsDisabled(!isDisabled);
//       handleMonsterPoint();
//     }
//   }

//   const updatePlayerHealth = newPlayerAttackNum < 0 ? 0 : newPlayerAttackNum;
//   function playerHandleAttack() {
//     setPlayerHealth(() => updatePlayerHealth);
//     if (updatePlayerHealth === 0 || updateMonsterHealth === 0) {
//       setTimeout(() => {
//         setPlayerHealth(100);
//         setIsDisabled(false);
//       }, 1000);
//     }
//     if (updatePlayerHealth === 0) {
//       setIsDisabled(!isDisabled);
//       handlePlayerPoint();
//     }
//   }

//   function handleMonsterPoint() {
//     setTimeout(() => {
//       setMonsterPoint(() =>
//         updatePlayerHealth !== updateMonsterHealth
//           ? monsterPoint + 1
//           : monsterPoint
//       );
//     }, 1000);
//     // if (monsterPoint === 2) {
//     //   setMonsterPoint(0);
//     // }
//   }

//   function pointsRestart() {
//     if (monsterPoint === 2 || playerPoint === 2) {
//       setIsDisabled(true);
//       setTimeout(() => {
//         setMonsterPoint(0);
//         setPlayerPoint(0);
//         setIsDisabled(false);
//       }, 2000);
//     }
//   }
//   useEffect(() => {
//     pointsRestart();
//   });

//   function handlePlayerPoint() {
//     setTimeout(() => {
//       setPlayerPoint(() =>
//         updatePlayerHealth !== updateMonsterHealth
//           ? playerPoint + 1
//           : playerPoint
//       );
//     }, 1000);
//   }

//   function handleAttack() {
//     monsterHandleAttack();
//     playerHandleAttack();
//   }

//   return (
//     <div id="controls">
//       <button
//         disabled={isDisabled}
//         id="attack-button"
//         className={` ${isDisabled ? "disabled" : "attack_button"} `}
//         onClick={handleAttack}
//       >
//         ATTACK
//       </button>
//     </div>
//   );
// }
// export default AttackButton;
