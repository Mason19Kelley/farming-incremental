<script>
	import Resources from './Resources.svelte';
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
    <div class="wrapper">
        <Resources />
        <div class="main-content">
            <div>
                <h1>Testing Game Loop</h1>
                <p>Score: {score}</p>
                <button on:click={resetScore}>Reset Score</button>
            </div>
        </div>
    </div>
  
  
  
  <style>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%
    }

    .main-content {
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

  </style>