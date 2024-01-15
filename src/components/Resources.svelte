<script>
    import { resources } from "../stores/resources";

    const sellPotatoes = () => {
        resources.set({
            ...$resources,
            money : $resources.money += $resources.potatoes,
            potatoes: 0
        })
    }

    const sellCarrots = () => {
        resources.set({
            ...$resources,
            money : $resources.money += $resources.carrots * 2,
            carrots: 0
        })
    }
</script>

<div class="sidebar">
    <div class="resource">
        Potatoes: {$resources.potatoes} (+{$resources.potatoRate}/s)
        <button on:click={sellPotatoes}>Sell Potatoes!</button>
    </div>

    <div class="resource">
        Carrots: {$resources.carrots} (+{$resources.carrotRate}/s)
        <button on:click={sellCarrots}>Sell Carrots!</button>
    </div>
</div>


<style>
    .sidebar {
        background-color: grey;
        height: 100%;
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px
    }
    .resource {
        display: flex;
        flex-direction: row;
    }

</style>