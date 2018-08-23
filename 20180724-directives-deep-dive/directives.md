# Vue Built in Directives

- [v-text](#v-text)
- [v-html](#v-html)
- [v-show](#v-show)
- [v-if](#v-if)
- [v-else](#v-else)
- [v-else-if](#v-else-if)
- [v-for](#v-for)
- [v-on](#v-on)
- [v-bind](#v-bind)
- [v-model](#v-model)
- [v-pre](#v-pre)
- [v-cloak](#v-cloak)
- [v-once](#v-once)

## Defining Vue Directives

Here is the basic syntax for defining a Vue directive. (The following comes from the [Vue directive docs](https://vuejs.org/v2/guide/custom-directive.html))


```javascript
// register
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// register (function directive)
Vue.directive('my-directive', function () {
  // this will be called as `bind` and `update`
})

// getter, return the directive definition if registered
var myDirective = Vue.directive('my-directive')
```

All of the functions that can be defined are called **hook functions**.

- `bind` - called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
- `inserted` - called when the bound element has been inserted into its parent node (this only guarantees parent node presence, not necessarily in-document)
- `update` - called after the containing component's VNode has updated, *but possibly before its children have updated*. The directives value may or may not have changed, but you can skip unnecessary updates by comparing the binding's current and old values (see below on hook arguments).
- `componentUpdated` - called after the containing component's VNode *and the VNodes of its children* have updated.
- `unbind` - called only once, when the directive is unbound from the element

> These function similar to lifecycle hooks for components.

> If you need children to be updated previous to your operation use componentUpdated, otherwise updated is sufficient.

All of the directives also recieve the following arguments when being called (except for the last two):

- `el` - The element the directive is bound to. Can be used to manipulate the DOM
- `binding` - An object containing the following properties: 
    - `name` - The name of the directive, without the `v-` prefix.
    - `value` - The value passed to the directive. For example: `v-my-directive="1 + 1"`, the value would be `2`.
    - `oldValue`: The previous value, only available in `update` and `componentUpdated`. It is available whether or not the value has changed.
    - `expression` - The expression of the binding as a string. For example: `v-my-directive="1 + 1"`, the expression would be `"1 + 1"`.
    - `arg` - The argument passed to the directive, if any. For example: `v-my-directive:foo`, the arg woudl be `"foo"`.
    - `modifiers` - An object containing modifiers, if any. For example: `v-my-directive.foo.bar`, the modifiers object would be `{ foo: true, bar: true }`.
    - `vnode` - The virtual node produced by Vue's compiler. see the [VNode API](https://vuejs.org/v2/api/#VNode-Interface) for full details.
    - `oldVnode` - The previous virtual node, only available in the `update` and `componentUpdated` hooks

> Apart from `el`, you should treat these areguments as read-only and never modify them. If you need to share information across hooks, it is recommend you do so through element's [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

There is a function shorthand that will implement `bind` and `update` but not the other hooks: 

```javascript
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})
```

If you need multiple values, use an object literal to pass data.

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```


## v-text

This directive will updated the elements `text-content`. If you need to update only part of the `textContext`, use a mustache interpolation.

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>
```


## v-html

This directive will update an elements `innerHTML`. 

```html
<div v-html="html"></div>
```

> The contents of the innerHTML are inserted as plain HTML and will not be compiled as a Vue template. If you need a template with Vue syntax to be inserted, use components/slotting instead.

> Do **not** use this to render user entered data, as it can be used for **XSS attacks** very easily.

> With single file components, `scoped` classes will not apply to content inside `v-html` as it is not processed by the compiler.


## v-show

This directive toggles an elements CSS `display` property based on the expression passed to it.

```html
<div v-show="false">Hidden</div>
```

> This will guarantee that your element is still in the DOM while hiding/showing elements


## v-if

This directive conditionally renders the element based on the expression passed to it. 

```html
<div v-if="false">Not rendered</div>
```

> If the element is a `<template>` element, its context will be extracted as the conditional block.

> Note: The expression is of type `any` which means it will evaluate truthiness as JS. ie any string will be truthy, etc.

> Important! - `v-for` has a higher priority than v-if, this means that lists will render before evaluating the v-if tag. (This is necessary to guarantee that elements render properly) see [this](https://vuejs.org/v2/guide/list.html#v-for-with-v-if) for more details.

> For more details on conditional rendering read the [conditional rendering docs](https://vuejs.org/v2/guide/conditional.html).


## v-else

This directive conditionally renders the element based on the expression passed to a sibling `v-if`

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

> The `v-else` directive requires a `v-if` directive as a previous sibling element.


## v-else-if

Similar to the `v-else` directive, this directive conditionally renders based on a previous `v-if` and `v-else` directives. This directive can be chained in multiple siblings for different conditionals.

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

> The `v-else-if` directive requires its previous sibling element to have a `v-if` or `v-else-if` directive.


## v-for

The `v-for` directive is used for rendering lists. It accepts the following options: `Array | Object | number | string` and will render based on the input passed in. 

The `v-for` directive requires the special syntax `alias in express` to provide an alias for the element being iterated on.

```html
<div v-for="item in items">
  {{ item.text }}
</div>
```

It is also possible to alias the index:

```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```

`v-for` will attempt to patch elements in-place without moving them to increase performance. For this to work correctly it needs a `key` attribute:

```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

> Be careful with how you use your keys. If you do not have a unique identifier, you can use a computed list to generate a useable id. One way to generate them could be as follows: 
```javascript
computed: {
  myKeyedList: () {
    return myList.forEach((item, index) => item.id = `${item.name}-${index}`;
  }
}
```
> Another great option is to use a library like lodash to generate your keys:
```javascript
import uniqueId from 'lodash';

export default {
  computed: {
    myKeyedList: () {
      return myList.forEach(item => item.id = uniqueId());
    }
  }
}
```

TODO: talk with Joe about this, need to verify how computed properties handle rerenders, may need to recommend modifying original list first as computed may rerender

> Note: `v-for` has a higher priority than `v-if`.


## v-on 

The `v-on` directive attaches an event listener to the element. The event type is denoted by the argument. The express can be a method name, an inline statement, or omitted if there are modifiers present.

When used on a normal element, it will only listen to **native DOM events**. When use on a custom element component it listens to **custom events** emitted on the child component.

When listening to native DOM events, the method recieves the native event as the only arg. If using an inline statment, the statement has access to the special `$event` property: `v-on:click="handle('ok', $event)`.

Starting in 2.4.0+, v-on also supports binding to an object of event/listener pairs without an argument. Note when using the object syntax, it does not support any modifiers.

TODO: investigate this last statement more.

`v-on` also has a shorthand: `@` that can be used.

Examples: 

```html
<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- shorthand -->
<button @click="doThis"></button>

<!-- stop propagation -->
<button @click.stop="doThis"></button>

<!-- prevent default -->
<button @click.prevent="doThis"></button>

<!-- prevent default without expression -->
<form @submit.prevent></form>

<!-- chain modifiers -->
<button @click.stop.prevent="doThis"></button>

<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter">

<!-- key modifier using keyCode -->
<input @keyup.13="onEnter">

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>

<!-- object syntax (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```
Listening to a custom event on child component: 

```html
<my-component @my-event="handleThis"></my-component>

<!-- inline statement -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- native event on component -->
<my-component @click.native="onClick"></my-component>
```

There are also modifiers that can be used to modifier the behavior of the event:
- `.stop` - call `event.stopPropogation()`.
- `.prevent` - call `event.preventDefault()`.
- `.capture` - add event listener in capture mode.

TODO: what the heck is capture mode
- `.self` - only trigger handler if event was dispatched from this element.
- `{keyCode | keyAlias}` - only trigger handler on certain keys
- `.native` - listen for a native event on the root element of component.
- `.once` - only trigger handler once
- `.left` - (2.2.0+) only trigger handler for left button mouse events.
- `.right` - (2.2.0+) only trigger handler for right button mouse events.
- `.middle` - (2.2.0+) only trigger handler for middle button mouse events.
- `.passive` - (2.3.0+) attaches a DOM event with `{ passive: true}`

TODO: what does passive do?

Example: 

```html
<div @click="doSomething">
  <!-- Clicking this button will not trigger the parent elements click event -->
  <button @click.stop="onlyClickButton">Only trigger button event</button>
</div>
```

There are aliases for the most common key codes: 
- `.enter`
- `.tab`
- `.delete`
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

> You can also create custom keycodes by using the global `config.keyCodes` object: `Vue.config.keyCodes.f1 = 112`

There are also system modifier kyes that you can use:

- `.ctrl`
- `.alt`
- `.shift`
- `.meta` - this is the command key (⌘) on mac and the windows key (⊞) on windows.

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

These modifier keys also have an `.exact` modifier which will trigger only when that specific key is pressed:

```html
<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```

There are also mouse button modifiers, restricting it to events triggered by a mouse button:

- `.left`
- `.right`
- `.middle`

The events that are available by default are available [here](https://developer.mozilla.org/en-US/docs/Web/Events/).

TODO: Array/Object change detection with v-for?

TODO: No filters, use computed props or methods (methods are used in nested arrays)

TODO: Using numbers with v-for

TODO: Using v-for on a template tag

TODO: Using v-for with components

## v-bind

The `v-bind` directive is used to dynamicall bind attributes or components props.

When used to bind the `class` or `style` attributes, it supports additional value types such as Array or Objects. See linked guide section below for more details.

When used for prop binding, the prop must be properly declared in the child component.

When used without an argument, can be used to bind an object containing attribute name-value pairs. (Note: in thie mode `class` and `style` will not support Array or Objects).

The `v-bind` directive also contains a shorthand symbol `:` 

Examples:

```html
<!-- bind an attribute -->
<img v-bind:src="imageSrc">

<!-- shorthand -->
<img :src="imageSrc">

<!-- with inline string concatenation -->
<img :src="'/path/to/images/' + fileName">

<!-- class binding -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style binding -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- DOM attribute binding with prop modifier -->
<div v-bind:text-content.prop="text"></div>

<!-- prop binding. "prop" must be declared in my-component. -->
<my-component :prop="someThing"></my-component>

<!-- pass down parent props in common with a child component -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

The `.camel` modifier allows camelizing a `v-bind` attribute name when using in-DOM templates, e.g. the SVG `viewBox` attribute:

```html
<svg :view-box.camel="viewBox"></svg>
```

`.camel` is not needed if you are using string templates, or compileing with `vue-loader / vueify`.

TODO: these links: https://vuejs.org/v2/guide/class-and-style.html https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier

## v-model

The `v-model` directive is used to bind values with various inputs or components.

`v-model` can only be used on the following: 

- `<input>`
- `<select>`
- `<textarea>`
- components

There are also several modifiers that can be used:

- `.lazy` - listen to `change` events instead of `input`
- `.number` - cast input string to numbers (useful to prevent number inputs from returning strings)
- `.trim` - trim input

## v-pre

The `v-pre` directive is used to skip compilation for the innerHTML. Can be used to display raw mustache tags

Example: 

```html
<span v-pre>{{ this will not be compiled }}</span>
```

## v-cloak

The `v-cloak` directive remains on an element until the associated Vue instance finishes compilation. Combined with CSS rules such as `[v-cloak] { display: none }` it can be used to hide un-compiled mustache bindings until the Vue instance is ready

> Similar to ng-cloak used in Angular

Example: 
```css
[v-cloak] {
  display: none;
}
```
```html
<!-- Div will not display now until compilation has completed, this prevents a plaintext {{ message }} from displaying -->
<div v-cloak>
  {{ message }}
</div>
```

## v-once

The `v-once` directive will force the component to render only once. This will apply to the component *and* all it's children.

This is very useful for performance if you have data that does not need to be rerendered.

Example:

```html
<!-- single element -->
<span v-once>This will never change: {{msg}}</span>
<!-- the element have children -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- component -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` directive -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```