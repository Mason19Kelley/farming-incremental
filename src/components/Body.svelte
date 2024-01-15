<script>
	import Farm from './Farm.svelte';
	import Resources from './Resources.svelte';
    

</script>
    <div class="wrapper">
        <Resources />
        <Farm />
    </div>
  
  
  
  <style>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%
    }

    .main-content {
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

  </style>