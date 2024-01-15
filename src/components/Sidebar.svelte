<script>
    import { resources } from "../stores/resources";
</script>
  

  <div class={`sidebar ${$resources.sidebarOpen ? 'open' : ''}`}>
    <p>sidebar</p>
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
  
  