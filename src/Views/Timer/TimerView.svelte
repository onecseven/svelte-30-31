<script lang="ts">
  import Timer from "./Timer/Timer.svelte"
  import {IconRegistry} from "./TaskCard/taskCardIcons/IconRegistry";
  import TopBar from "./TopBar/TopBar.svelte"
  import Button from './TaskCard/TaskCard.svelte'
  let keys: TASKBAR_ITEM[] = Object.keys(IconRegistry) as TASKBAR_ITEM[];
</script>

<TopBar/>
<Timer/>
<div class="card">
{#each keys as key}
  <Button btnType={key} />
  {/each}
</div>


<style>
  .card{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
