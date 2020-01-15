# @ueler/ng-lazyload-script
[![npm version](https://badge.fury.io/js/%40ueler%2Fng-lazyload-script.svg)](https://badge.fury.io/js/%40ueler%2Fng-lazyload-script)

Load external javascript libraries/files (e.g. Google Maps JavaScript API, Stripe JavaScript API, ...) in your components and services on the fly (when you need them) and execute code as soon as it's loaded.

## Installation
Using npm:
```
npm i --save @ueler/ng-lazyload-script
```

## Features
- Provides an Angular service to load javascript files.   
- The service loads each library only once, i.e. remembers which libraries were already loaded.
- You can subscribe to the returned observable to execute code relying on the lazy loaded script.

## How does it work?
The service creates a ``<script>`` tag with the provided source url and appends it to the document body.

## Usage
1\. Inject the service into your own service or component:
```
constructor(private ngLazyloadScriptService: NgLazyloadScriptService) {
}
```

2\. Use the service to load an external javascript library (like Google Maps JS API or Stripe JS API).  
3\. Subscribe to the observable and use the loaded library on success case.
```
this.ngLazyloadScriptService.loadScript('URL_TO_JAVASCRIPT_FILE').subscribe(() => {
  // success case: do something with the loaded library
}, () => {
  // error case
});
```


## Example
It can be used to load the Stripe Javscript API (https://stripe.com/docs/js):
```
this.ngLazyloadScriptService.loadScript('https://js.stripe.com/v3/').subscribe(() => {
  // use Stripe constructor from loaded library
  const stripe = Stripe('stripe_public_key', {
    betas: ['payment_intent_beta_3']
  });

  // ...
});
```

## Angular compatibility
The library works with Angular versions ``>=8.0.0``.

## Browser compatibility
Works in all modern browsers if the ``browserlist`` file in your Angular project is configured appropriately.  
Tested successfully in IE11, Edge, Chrome and Firefox.
