<script>
  let score = 0;

  function updateGameState() {
    score += 1;
  }

  const interval = setInterval(updateGameState, 1000); // Update every 1000 milliseconds
    window.onunload = () => {
    clearInterval(interval);
  };
</script>



<div>
  <h1>Testing Game Loop</h1>
  <p>Score: {score}</p>
</div>


<style>
  /* Your game styles go here */
</style>