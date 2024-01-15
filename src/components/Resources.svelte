<script>
    import { resources } from "../stores/resources";

    const sellPotatoes = () => {
        resources.set({
            ...$resources,
            money : $resources.money += $resources.potatoes * 2,
            potatoes: 0
        })
        console.log($resources.money)
    }
</script>

<div class="sidebar">
    Potatoes: {$resources.potatoes} (+{$resources.potatoRate}/s)
    <button on:click={sellPotatoes}> Sell Potatoes!</button>
</div>


<style>
    .sidebar {
        background-color: grey;
        height: 100%;
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>