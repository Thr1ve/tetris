export default function score(state, callbacks) {

  function updateScore(completedRows) {
    let points = getPoints(completedRows);
    state.score += points;
    console.log(state.score);
  }

  function getPoints(n) {
    if (n === 1) {
      return 100;
    } else if (n === 2) {
      return 250;
    } else if ( n === 3) {
      return 300;
    } else if ( n === 4) {
      return 500;
    }
    return 0;
  }

  callbacks.updateScore = updateScore;

  return {};
}