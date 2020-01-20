# @ueler/ng-lazyload-script
[![npm version](https://badge.fury.io/js/%40ueler%2Fng-lazyload-script.svg)](https://badge.fury.io/js/%40ueler%2Fng-lazyload-script)  &nbsp; 
[![Actions Status](https://github.com/ueler/ng-lazyload-script/workflows/Build%20and%20Test/badge.svg)](https://github.com/ueler/ng-lazyload-script/actions)

Load external javascript libraries/files (e.g. Google Maps JavaScript API, Stripe JavaScript API, ...) in your components and services on the fly (when you need them) and execute code as soon as it's loaded.

## Introduction
There are mainly two options to include a javascript library into your Angular project:
- Add it via the package manager ``npm``
- Include it in your ``index.html`` file

However, sometimes
- You don't want to include it upfront in your application to reduce size 
and thus initial loading time of your application. 
- An appropriate ``npm`` package does not exist and you 
don't want to add the library to ``index.html``.


**This library provides a service to lazy load javascript libraries when you need them, 
one a component and service basis.**

### Features
- Provides an Angular service to load javascript files.   
- The service loads each library only once, i.e. remembers which libraries were already loaded.
- You can subscribe to the returned observable to execute code relying on the lazy loaded script.

## Installation
Using npm:
```
npm i --save @ueler/ng-lazyload-script
```

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
### Stackblitz
View an example app using the library:
https://stackblitz.com/edit/angular-m4jjyu

### Real-world example
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

## How does it work?
The service creates a ``<script>`` tag with the provided source url and appends it to the document body.

## Angular compatibility
The library works with Angular versions ``>=8.0.0``.

## Browser compatibility
Works in all modern browsers if the ``browserlist`` file in your Angular project is configured appropriately.  
Tested successfully in IE11, Edge, Chrome and Firefox.
