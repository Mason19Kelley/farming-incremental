<script>
	import Plot from './Plot.svelte';
  import { resources } from "../stores/resources";
</script>

<div class="grid">
    {#each $resources.plants as _, plantIndex}
        <Plot {plantIndex}/>
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