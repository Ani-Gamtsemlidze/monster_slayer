import "./style.css";

function WinnerAllert({ monsterWinner }) {
  return (
    <div>
      {monsterWinner && (
        <div class="monster-box">
          <span id="monsterWon">MONSTER WON!</span>
          <span id="playing1">Keep playing</span>
        </div>
      )}
    </div>
  );
}

export default WinnerAllert;
