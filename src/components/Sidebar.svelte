<script>
    import { resources } from "../stores/resources";


    const buyPotato = () => {
        if($resources.plants[$resources.selectedPlot] === '') {
            resources.set({
                ...$resources,
                potatoRate: $resources.potatoRate += 1
            })
            $resources.plants[$resources.selectedPlot] = "potato"
            console.log($resources.plants)
        }

    }

    const buyCarrot = () => {
        if($resources.plants[$resources.selectedPlot] === '') {
            resources.set({
                ...$resources,
                carrotRate: $resources.carrotRate += 1
            })
            $resources.plants[$resources.selectedPlot] = "carrot"

        }
       
    }

</script>
  

  <div class={`sidebar ${$resources.sidebarOpen ? 'open' : ''}`}>
    <h5>Plot {$resources.selectedPlot + 1}</h5>
    <button on:click={buyPotato}>Buy Potato</button>
    <button on:click={buyCarrot}>Buy Carrots</button>
  </div>

<style>
    .sidebar {
        width: 200px;
        height: 91%;
        background-color: grey;
        position: fixed;
        bottom: 0;
        right: -200px; /* Initially off-screen */
        transition: right 0.3s ease;
    }

    .open {
        right: 0;
    }
</style>
  
  