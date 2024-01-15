<script>
    let potatoes = 0;
    export let potatoRate;
</script>

<div class="sidebar">
    Potatoes: {potatoes} (+{potatoRate}/s)
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