<script lang="ts">
  import Icon from "../Icon.svelte"

  export let width = 55;
  export let height = 55;
  export let x = 8;
  export let y = 5;
  export let style: string = "";
  var stle = `fill: transparent; fill-opacity: 0; stroke-width: 35.3357px; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: none; stroke-opacity: 1; stroke:${style};`
</script>

<svg
  class="fadeIn icon fillT"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 700 700"
  x={x}
  y={y}
  {style}
  width="80"
  height="80"
>
  <g id="g561">
    <path
    fill={style}
    d="m 166.14029,548.26092 -15.85852,25.4032 c -11.1147,17.71527 1.13855,40.05707 21.79997,41.08193 l 180.17166,7.52124 c 19.8765,0.48187 33.15067,-20.35861 23.84462,-37.77511 L 295.57276,430.55822 C 284.22365,409.41823 254.7383,408.6357 242.00174,428.69249 l -15.31396,24.6242 c -3.66616,6.12656 -13.03503,7.14841 -18.07889,1.91923 -37.11342,-38.98024 -57.34578,-93.99505 -50.13517,-151.94971 8.8938,-78.73561 66.75612,-143.80429 135.04521,-175.41449 66.32056,-29.926385 94.91564,-27.69753 97.02166,-42.40963 4.6863,-26.786385 -78.1554,-18.308883 -112.8949,-7.3228 C 186.84773,105.45898 95.903881,184.307 82.501931,294.57263 c -9.79537,85.04036 21.968439,165.94047 79.079399,221.07791 9.18373,9.25151 10.92584,22.58304 4.56053,32.61303 z"
      id="path471"
      stroke-width="1.19904"/>
    <rect
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-dasharray="none"
    stroke-opacity={1}
    stroke-width="35.3356px"
    fill="transparent"
    fill-opacity={0}
    stroke={style}

      class="stubborn circle"
      id="rect1539"
      width="129.10551"
      height="116.3347"
      x="435.60693"
      y="88.1688" />
    <rect
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-dasharray="none"
    stroke-opacity={1}
    stroke-width="35.3356px"
    fill="transparent"
    fill-opacity={0}
    stroke={style}
      class="stubborn circle "
      id="rect1539-0"
      width="129.10551"
      height="116.3347"
      x="435.50156"
      y="300.59494" />
    <rect
      class="circle light-fill-stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="none"
      stroke-opacity={1}
      stroke-width="35.3356px"
      fill={style}
      fill-opacity={1}
      stroke={style}
  
      id="rect1539-0-4"
      width="129.10551"
      height="116.3347"
      x="431.55075"
      y="512.4364" />
  </g>
</svg>
