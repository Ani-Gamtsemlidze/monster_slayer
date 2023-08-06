// import { useState } from "react";

// function SpecialAttackButton({
//   monsterHealth,
//   playerHealth,
//   setMonsterHealth,
//   setPlayerHealth,
// }) {
//   const [isSpecialDisabled, setIsSpecialDisabled] = useState(false);

//   const monsterSpecialAttackNum = Math.trunc(Math.random() * 40) + 1;
//   const newMonsterSpecialAttackNum = monsterHealth - monsterSpecialAttackNum;

//   const playerSpecialAttackNum = Math.trunc(Math.random() * 40) + 1;
//   const newPlayerSpecialAttackNum = playerHealth - playerSpecialAttackNum;

//   const updateMonsterHealth =
//     newMonsterSpecialAttackNum < 0 ? 0 : newMonsterSpecialAttackNum;
//   const updatePlayerHealth =
//     newPlayerSpecialAttackNum < 0 ? 0 : newPlayerSpecialAttackNum;

//   function monsterHandleAttack() {
//     setMonsterHealth(() => updateMonsterHealth);
//     if (updateMonsterHealth === 0 || updatePlayerHealth === 0) {
//       setTimeout(() => {
//         setMonsterHealth(100);
//         setIsSpecialDisabled(false);
//       }, 1000);
//     }
//     if (updateMonsterHealth === 0) {
//       setIsSpecialDisabled(!isSpecialDisabled);
//       //   handleMonsterPoint();
//     }
//   }

//   function playerHandleAttack() {
//     setPlayerHealth(() => updatePlayerHealth);
//     if (updatePlayerHealth === 0 || updateMonsterHealth === 0) {
//       setTimeout(() => {
//         setPlayerHealth(100);
//         setIsSpecialDisabled(false);
//       }, 1000);
//     }
//     if (updatePlayerHealth === 0) {
//       setIsSpecialDisabled(!isSpecialDisabled);
//       //   handlePlayerPoint();
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
//   return (
//     <div id="controls">
//       <button
//         disabled={isSpecialDisabled}
//         id="attack-button"
//         className={` ${isSpecialDisabled ? "disabled" : "attack_button"} `}
//         // onClick={handleAttack}
//       >
//         SPECIAL ATTACK
//       </button>
//     </div>
//   );
// }

// export default SpecialAttackButton;
