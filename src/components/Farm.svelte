<script>
	import Plot from './Plot.svelte';
</script>

<div class="grid">
    {#each new Array(16) as _, i}
        <Plot />
    {/each}
</div>


<style>
  .grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: .1rem;
    width: 14rem;
    height: 13rem;
    }

  
</style>