<script>

  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleFX } from "../../Store/actions/root/toggleFX"
  import { FXOn } from "../../Store/settingStore"
</script>

<SettingsBtn label={$FXOn ? "select low graphics" : "select high graphics"} ariaIndex={7} cb={toggleFX} anim> 
  <h1>{$FXOn ? "LOW" : "HIGH"} FX</h1>
</SettingsBtn >

<style>
  :global(.settingsBtn > h1) {
    margin-top: 1.5vh;
  }
  h1{
    user-select: none;
  }
</style>  