<script>
    export let potatoRate;
    let isPotato = false;
    let potatoImg = 'potato.png';
    
    const increasePotatoRate = () => {
        potatoRate += 1;
        isPotato = true;
    }
</script>


<div  class="plot">
    {#if isPotato}
        <img src={potatoImg} alt="potato"  style="max-width: 100%; max-height: 100%;" />
    {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={increasePotatoRate}>Click</div>
    {/if}
</div>

<style>
.plot {
    width: 30px;
    height: 30px;
    border: 2px solid white;
    
}
</style>