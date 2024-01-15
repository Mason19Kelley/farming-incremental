<script>
  let score = 0;

  function updateGameState() {
    score += 1;
  }

  const interval = setInterval(updateGameState, 1000); // Update every 1000 milliseconds
    window.onunload = () => {
    clearInterval(interval);
  };

  const resetScore = () => {
    score = 0;
  }
</script>



<div>
  <h1>Testing Game Loop</h1>
  <p>Score: {score}</p>
  <button on:click={resetScore}>Reset Score</button>
</div>


<style>
</style>