import "./monsterPlayer.css";

function MonsterPlayer({ monsterHealth, monsterPoint }) {
  return (
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
  );
}

export default MonsterPlayer;
