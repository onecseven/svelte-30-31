<script lang="ts">
  import type { AnimationEventHandler } from "svelte/elements"
  import { setView } from "../../Store/actions/root/setView"
  import { set_timer } from "../../Store/actions/taskList/set_timer"
  import { bg, light, medium } from "../../Store/color"
  import { LightenDarkenColor } from "./lightenColor"
  import { onEnter } from "./onEnter"
  import { withAudio } from "./withAudio"
  export let cb;
  //anim handler
  export let ariaIndex: number;
  export let anim: boolean = false;
  export let label:string;
  let playAnim = false;
  let addAnimCB = () => {
    playAnim = true;
    cb()
  }
  let takeAwayAnim = (e: AnimationEvent) => {
    if (e.animationName.includes("click-wave")) playAnim = false;
  }
  //hover anim
  let isHovered = false;
  let onMouseEnter = () => { isHovered = true;}
  let onOut = () => { isHovered = false;}
  //background colors
  $: bgT = bg($medium);
  $: darkbgT = bg(`#${LightenDarkenColor($medium, -25)}`);
</script>

<div
style={isHovered ? darkbgT : bgT} 
role="button"
aria-label={label}
on:mouseenter={onMouseEnter}
on:keyup={onEnter(withAudio(addAnimCB))}   
on:mouseleave={onOut}
on:click={anim ? withAudio(addAnimCB) : withAudio(cb)}  
class={"settingsBtn fadeIn" + (playAnim ? " anim" : "")} 
on:animationend={takeAwayAnim}
tabindex={ariaIndex}
>

  <slot />
</div>

<style>
.settingsBtn {
  background-color: transparent;
  transition: background-color 0.325s linear;
  height: 80px;
  border-radius: 1rem;
  transition: 0.27s background-color linear;
  flex: 1;
  text-align: center;
  position:relative;
}

.settingsBtn:hover {
    transition: 0.27s box-shadow linear;
    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.6);
    transition: 0.27s background-color linear;

  }

  .settingsBtn:active {
    filter: brightness(110%);
    transition: 0.27s filter linear;
  }
  
  @keyframes click-wave {
    0% {
      height: 100%;
      width: 100%;
      opacity: 0.35;
      scale: 0.1;
    }
    80%{
      border: 2px solid #404040;
    }
    100% {
      height:100%;
      width:100%;
      scale: 1.3;
      opacity: 0;
    }
  }
  .anim::before {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  position:absolute;
  display: flex;
  border-radius: 1em;
  background: #40e0d0;
  content: '';
  z-index: 2;
}

</style>