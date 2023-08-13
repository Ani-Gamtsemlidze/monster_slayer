import "./userPlayer.css";

function UserPlayer({ playerHealth, playerPoint, playerWinner, draw }) {
  return (
    <div className="player_box">
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
      <div>
        {playerWinner && (
          <div class="player-box">
            <span id="youWon">YOU WON!</span>
            <span id="playing">Keep playing</span>
          </div>
        )}
      </div>
      <div>
        {draw && (
          <div class="draw-box">
            <span id="draw">IT'S A DRAW</span>
            <span id="playing2">Keep playing</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPlayer;
