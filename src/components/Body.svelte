<script>
	import Farm from './Farm.svelte';
	import Resources from './Resources.svelte';
    

</script>
    <div class="wrapper">
        <Resources />
        <div class="main-body">
          <Farm />
        </div>
        
    </div>
  
  
  
  <style>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%
    }
    .main-body {
      display: flex;
      justify-content: center;
      margin-top: 3%;
      width: 100%
    }



  </style>