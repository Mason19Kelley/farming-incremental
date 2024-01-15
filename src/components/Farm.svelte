<script>
	import Plot from './Plot.svelte';
    export let potatoRate;
</script>

<div class="grid">
    {#each new Array(16) as _, i}
        <Plot {potatoRate}/>
    {/each}
  </div>


<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
</style>