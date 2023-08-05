import "./userPlayer.css";

function UserPlayer({ playerHealth, playerPoint }) {
  return (
    <section id="player" class="container">
      <h2>Your Health</h2>
      <div class="healthbar">
        <div
          class="healthbar__value playerValue"
          style={{ width: `${playerHealth}%` }}
        ></div>
      </div>
      <div class="player-points points">
        <h2 class="health-points">
          Your Point: <span id="player-point">{playerPoint}</span>
        </h2>
      </div>
    </section>
  );
}

export default UserPlayer;
