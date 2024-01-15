<script>
    let isPotato = false;
    let potatoImg = 'potato.png';
    import { resources } from "../stores/resources";

    const increasePotatoRate = () => {
        resources.set({
            ...$resources,
            potatoRate: $resources.potatoRate += 1
        })
    }
    const plotClick = () => {
        isPotato = true;
        increasePotatoRate();
    }
</script>


<div  class="plot">
    {#if isPotato}
        <img src={potatoImg} alt="potato"  style="max-width: 100%; max-height: 100%;" />
    {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={plotClick}>Click</div>
    {/if}
</div>

<style>
.plot {
    width: 30px;
    height: 30px;
    border: 2px solid white;
    
}
</style>