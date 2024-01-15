<script>
	import Body from './components/Body.svelte';
	import Header from './components/Header.svelte';
  import { resources } from "./stores/resources";

  const incrementPotatoes  = () => {
      $resources.potatoes += $resources.potatoRate;
  }


  setInterval(incrementPotatoes, 1000);
</script>

<Header />
<Body />


<style>
</style>