import "./style.css";
function DrawBox({ draw }) {
  return (
    <div>
      {draw && (
        <div class="draw-box">
          <span id="draw">IT'S A DRAW</span>
          <span id="playing2">Keep playing</span>
        </div>
      )}
    </div>
  );
}
export default DrawBox;
