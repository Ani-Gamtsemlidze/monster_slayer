import "./style.css";

function PlayerWinner({ playerWinner }) {
  return (
    <div>
      {playerWinner && (
        <div class="player-box">
          <span id="youWon">YOU WON!</span>
          <span id="playing">Keep playing</span>
        </div>
      )}
    </div>
  );
}

export default PlayerWinner;
