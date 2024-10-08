declare namespace svelteHTML {
  // enhance elements
  interface IntrinsicElements {
      'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
  }
  // enhance attributes
  interface HTMLAttributes<T> {
      // If you want to use on:beforeinstallprompt
      'on:hswipe'?: (event: any) => any;
      'on:swipe'?: (event: any) => any;
      'on:pinch'?: (event: any) => any;
      'on:press'?: (event: any) => any;
      'on:multi'?: (event: any) => any;
      'on:double'?: (event: any) => any;

      // If you want to use myCustomAttribute={..} (note: all lowercase)
      mycustomattribute?: any;
      // You can replace any with something more specific if you like
  }
}