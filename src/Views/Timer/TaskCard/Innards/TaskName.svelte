<script lang="ts">
  export let name:string;
</script>
<div class="taskName">{name}</div>

<style>
  .taskName {
    grid-area: 1 / 2 / 2 / 3; 
    font-size: 40px;
    margin-top: 3%;
    margin-left: 1%;
    user-select: none;
    -webkit-user-select: none;
  }
</style>