import {
  DEFAULT_DELAY,
  DEFAULT_MIN_SWIPE_DISTANCE,
  DEFAULT_TOUCH_ACTION,
  setPointerControls,
  type BaseParams,
  type ParametersSwitch,
  type GestureReturnType,
} from './shared';

export type SwipeParameters = {
  timeframe: number;
  minSwipeDistance: number;
  touchAction: string;
  swipingBuffer: number;
} & BaseParams;

export type SwipePointerEventDetail = {
  direction: Direction;
  target: EventTarget | null;
  isSwiping: {
    delta: [number, number]
  } | null
};

type Direction = 'top' | 'right' | 'bottom' | 'left' | null;

export type SwipeCustomEvent = CustomEvent<SwipePointerEventDetail>;

export function swipe<R extends ParametersSwitch<SwipeParameters> = undefined>(
  node: HTMLElement,
  inputParameters?: R
): GestureReturnType<SwipeParameters, R> {
  const parameters: SwipeParameters = {
    timeframe: DEFAULT_DELAY,
    minSwipeDistance: DEFAULT_MIN_SWIPE_DISTANCE,
    touchAction: DEFAULT_TOUCH_ACTION,
    composed: false,
    swipingBuffer: 0,
    ...inputParameters,
  };

  const gestureName = 'swipe';

  let startTime: number;
  let clientX: number;
  let clientY: number;
  let lastX: number;
  let lastY: number;
  let target: EventTarget | null;

  function onDown(activeEvents: PointerEvent[], event: PointerEvent) {
    clientX = event.clientX;
    clientY = event.clientY;
    lastX = event.clientX;
    lastY = event.clientY;
    startTime = Date.now();
    if (activeEvents.length === 1) {
      target = event.target;
    }
  }

  function onMove(activeEvents: PointerEvent[], event: PointerEvent) {
    let x =  event.clientX - clientX;
    let y =  event.clientY - clientY;
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    console.log(`
    clientX: ${clientX}
    clientY: ${clientY}
    eventX: ${event.clientX}
    eventY: ${event.clientY}
    deltaX: ${x}
    deltaY: ${y}
    lastX: ${lastX}
    lastY: ${lastY}
    `)
    if (absX >= 2 * absY && absX > parameters.minSwipeDistance) {
      let direction: Direction = x > lastX ? 'right' : 'left';      
      node.dispatchEvent(
        new CustomEvent<SwipePointerEventDetail>("swiping", {
          detail: { direction, target, isSwiping:{delta: [x,y]} },
        })
      );
    } else if (absY >= 2 * absX && absY > parameters.minSwipeDistance) {
      let direction: Direction = y > lastY ? 'bottom' : 'top';
      node.dispatchEvent(
        new CustomEvent<SwipePointerEventDetail>("swiping", {
          detail: { direction , target, isSwiping:{delta: [x,y]} },
        })
      );
    }
    lastX = x;
    lastY = y;

    return true;
  }

  function onUp(activeEvents: PointerEvent[], event: PointerEvent) {
    if (
      event.type === 'pointerup' &&
      activeEvents.length === 0 &&
      Date.now() - startTime < parameters.timeframe
    ) {
      const x = event.clientX - clientX;
      const y = event.clientY - clientY;
      const absX = Math.abs(x);
      const absY = Math.abs(y);

      let direction: Direction = null;
      if (absX >= 2 * absY && absX > parameters.minSwipeDistance) {
        // horizontal (by *2 we eliminate diagonal movements)
        direction = x > 0 ? 'right' : 'left';
      } else if (absY >= 2 * absX && absY > parameters.minSwipeDistance) {
        // vertical (by *2 we eliminate diagonal movements)
        direction = y > 0 ? 'bottom' : 'top';
      }
      if (direction) {
        node.dispatchEvent(
          new CustomEvent<SwipePointerEventDetail>(gestureName, {
            detail: { direction, target, isSwiping : null},
          })
        );
      }
    }
  }

  if (parameters.composed) {
    return { onMove, onDown, onUp } as GestureReturnType<
      SwipeParameters,
      R
    >;
  }

  return setPointerControls(
    gestureName,
    node,
    onMove,
    onDown,
    onUp,
    parameters.touchAction
  ) as GestureReturnType<SwipeParameters, R>;
}
