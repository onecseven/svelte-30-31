<script lang="ts">
  import Settings from "./Views/Settings/Settings.svelte"
  import TimerView from "./Views/Timer/TimerView.svelte"
  import List from "./Views/List/List.svelte"
  import TaskEdit from "./Views/TaskEdit/TaskEdit.svelte"
  import {bg, light, medium} from "./Store/color"
  $: bsg = bg($light)
  import Debug from "./lib/Debug.svelte"
  import { currentView } from "./Store/settingStore"
  import { currentTaskList } from "./Store/rootStore"
  $: debugMode = $currentTaskList.name === "$DEBUG$"
</script>

<div class="container" style={bsg} >
  <main class="bgt">
    {#if $currentView == "TIMER"}
    <TimerView/>
    {:else if $currentView == "PICKER"}
    <List/>
    {:else if $currentView == "SETTINGS"}
    <Settings/>
    {:else if $currentView == "TASK_EDIT"}
    <TaskEdit/>
    {/if}
  </main>
  {#if debugMode}
    <div class="asidecontainer">
        <Debug/>  
    </div>
  {/if}
</div>
<style>
  main{
    max-width: 650px;
    background-size: 100%; 
  }
  .float {
    float: left;
    margin-left: 5%;
    z-index: 2;
    position:absolute;
  }
  .asidecontainer {
    display: inline-flex;
    height:fit-content; 
    flex-shrink: 1;
  }


.bgt{
  transition: background-color 0.325s linear;
}
.container {
  display: grid; 
  grid-template-columns: 1fr; 
  padding-bottom: 1%;
  min-height: 100%;
  height:max-content;
  width: 100%;
}
</style>