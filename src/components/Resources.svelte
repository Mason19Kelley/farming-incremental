<script>
    import { resources } from "../stores/resources";

    const sellPotatoes = () => {
        resources.set({
            ...$resources,
            money : $resources.money += $resources.potatoes * 2,
            potatoes: 0
        })
    }
</script>

<div class="sidebar">
    <div class="resource">
        Potatoes: {$resources.potatoes} (+{$resources.potatoRate}/s)
        <button on:click={sellPotatoes}>Sell Potatoes!</button>
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