<script>
	import Sidebar from './components/Sidebar.svelte';
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
<Sidebar />

<style>
</style>