<script>
	import Sidebar from './components/Sidebar.svelte';
	import Body from './components/Body.svelte';
	import Header from './components/Header.svelte';

  import { resources } from "./stores/resources";
  import { onMount } from 'svelte';

  const incrementPotatoes  = () => {
      $resources.potatoes += $resources.potatoRate;
      $resources.carrots += $resources.carrotRate;
      localStorage.setItem("save",convertResourcesToJSON());    
  }

    onMount(() => {
      const data = JSON.parse(localStorage.getItem("save"));
      if(data) {
        resources.set(data)
      }
      
    });

  function convertResourcesToJSON() {
    const storeValue = $resources; // Use the $ prefix to access the current value of the store
    const jsonString = JSON.stringify(storeValue, null, 2);
    return jsonString
  }

  setInterval(incrementPotatoes, 1000);
</script>

<Header />
<Body />
<Sidebar />

<style>
</style>