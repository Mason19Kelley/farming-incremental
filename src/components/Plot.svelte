<script>
    export let plantIndex;
    import { resources } from "../stores/resources";


    const plotClick = () => {
        toggleSidebar(plantIndex)
    }

    const toggleSidebar = (selectedPlot) => {
        resources.set({
            ...$resources,
            sidebarOpen: !$resources.sidebarOpen,
            selectedPlot: selectedPlot
        })
    }

    
</script>


<div  class="plot" on:click={plotClick}>
    {#if $resources.plants[plantIndex] !== ""}
        <img src={`${$resources.plants[plantIndex]}.png`} alt="potato"  style="max-width: 100%; max-height: 100%;" />
    {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="buy-plot" >+</div>
    {/if}
</div>

<style>
    .plot {
        width: 3rem;
        height: 3rem;;
        border: 1px solid white;
    }

    .buy-plot {
        text-align: center;
        vertical-align: middle;
    }
</style>