import "./monsterPlayer.css";

function MonsterPlayer({ monsterHealth, monsterPoint, monsterWinner }) {
  return (
    <div className="monster_box">
      <section id="monster" class="container">
        <h2>Monster Health</h2>
        <div class="healthbar">
          <div
            class="healthbar__value"
            style={{ width: `${monsterHealth}%` }}
          ></div>
        </div>
        <div class="monster-points points">
          <h2 class="points">
            Monster Point: <span id="monster-point">{monsterPoint}</span>
          </h2>
        </div>
      </section>
      <div>
        {monsterWinner && (
          <div class="monster-box">
            <span id="monsterWon">MONSTER WON!</span>
            <span id="playing1">Keep playing</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MonsterPlayer;
