// Lesson 57. Let's Build a Steps Component

// 1. Data that doesn't depend on anything that is inside the component should be located outside of the function component
//      a. Otherwise, each time the component is executed/rendered, that data will be created again.

// Lesson 58. Handling Events the React Way

// 1. Inline event listeners/handlers can be applied to jsx elements, in react.
//      a. Event listeners (e.g. onClick, onChange, etc.) can be applied directly to jsx elements.
//          i. The event handler function can then be passed to the onClick prop, without function call parens (i.e. pass the function name only).
//              1. Invoking the function would cause the event handler to execute on render.
//              2. By passing the function name, the handler function will only execute when the event occurs on the element.
//                  a. Essentially, define a callback function which will be called at a later time, when an event occurs.
//                  b. It's very important to not call a function but simply specify a function.
//      b. All event listeners in react start with 'on' and are camel-cased (e.g. onClick, onSubmit, onChange, etc.).
// 2. Specify an event handler function directly on the element using the necessary 'onEvent' listener.
//      a. Multiple event listeners/handlers can be applied to the same jsx element.
// 3. Commonly, the event handler function is not defined inline.
//      a. A separate event handler function is defined outside of the jsx element.
//          i. The jsx element simply points to that handler function via the event listener prop, which receives the event handler function as a value.
// 4. Event handler functions commonly start with the word 'handle' followed by the task/event they are responsible for (e.g. handleClick, handleSubmit).

// Lesson 59. What is State in React?

// 1. State is the most important concept in React.
//      a. Everything revolves around state.
// 2. State is essentially data that a component can hold/store over time,
// 3. State is used to store data that a component needs to remember throughout its lifecycle.
// 4. Think of state as being the memory of a component.
// 5. Examples of state can be simple things like a notification count, the text content of an input field, or the active tab in a tab component.
//      a. It can also be more complex data such as the content of a shopping cart.
// 6. What all pieces of state have in common is that in the application the user can easily change these state values.
//      a. Examples: When a user reads a notification the count will go down by one, when they click on another tab, that tab will become active.
//      b. Each component in a react app needs to be able to hold/store this type of data over time (i.e. over the lifecycle of the application).
//          i. For that reason, each piece of data is a piece of state.
// 7. A piece of state, or a state variable, is just one single variable defined in the component.
//      a. On the other hand, the term 'state' itself is commonly about the entire state that the component is in (i.e. the entire condition at a certain point in time).
//      b. The general term 'state' is all the pieces of state together.
// 8. The most important aspect of state is the fact that updating state triggers react to re-render the component, where the state is defined.
//      a. Whenever a piece of state is updated in a component, it will cause react to re-render that component in the ui.
//          i. It will create a new updated 'view' for that component.
// 9. A component's view is just the component visually rendered on the browser/ui.
// 10. When one single component is rendered that is called a view.
//      a. All the views combined together make up the final/entire/whole ui.
// 11. State is how React keeps the ui in sync with data.
// 12. Change the state, change the ui.
// 13. State allows developers to do two important things:
//      a. State allows for updating the component's view by re-rendering the component, when state changes occur.
//          i. It provides a way to change parts of the ui.
//      b. State allows developers to persist local variables between multiple renders and re-renders.
// 14. Sate is a tool.
//      a. It's the most powerful tool that exists in react.

// Lesson 60. Creating a State Variable With useState

// 1. Using useState requires 3 steps:
//      a. Add/invoke a new state variable in a component.
//      b. Use the state variable inside the component.
//      c. Update the piece of state via an event handler.
// 2. The useState hook is a function, which can receive any data type as an argument.
//      a. The argument specifies the default value of the state variable.
// 3. In addition, the useState function call returns an array with two values.
//      a. The first value returned by the array is the default/current value for the state variable.
//      b. The second value is a function that can be used to update the state variable.
// 4. These two values should be destructured from the useState function call array.
// 5. When the useState update/setter function is called, react updates the state variable and automatically re-renders the component view.
// 6. useState is a react hook.
//      a. Hooks start with the use keyword (e.g. useState, useEffect, useReducer, etc.).
// 7. React hooks can only be called at the top level of the function component.
//      a. They cannot be called inside an if statement, another function, a for/while loop, etc.
// 8. State variables should only be updated using the useState setter function, not manually.

// Lesson 61. Don't Set State Manually!

// 1. React cannot detect udpates to normal js variables inside of components.
//      a. It cannot track those, which is why React provides the setter function.
//          i. The setter function is a functional way of updating the state value, but without mutating it.
// 2. React is about immutability.
//      a. Therefore, state can only be updated using the tools that react provides.
// 3. The setter function is actually linked/connected to its state variable.
//      a. Therefore, when using the setter function to update a piece of state, react is aware of the change.
// 4. Always treat state as immutable in react.
//      a. Treat state as something that cannot be changed directly, but that can only be changed using the tools react provides (i.e. the state setter function).

// Lesson 62. The Mechanics of State

// 1. React is declarative, not imperative.
//      a. The DOM is never manipulated directly.
// 2. React updates a component view by re-rendering that entire component whenever the underlying data (i.e. state) changes.
//      a. Re-rendering means that react calls the component function again (i.e. executes the function component again).
// 3. Conceptually, imagine this as react removing the entire view, and replacing it with a new view, each time a re-render occurs.
// 4. React preserves the component state throughout re-renders.
//  a. Even though a component can be rendered and re-rendered over and over, the state will not be reset unless the component disappears from the UI entirely, which is called unmounting (e.g. refreshing the browser forces an unmount???).
// 5. It is when state is updated that a component is automatically re-rendered.
//      a. When react detects that state has been changed, it will automatically re-render the component, which will result in an updated view for that component.
// 6. As React developers, in order to update a component view, update the component's state.
//      a. React will then react to that update, and do its re-evaluation of the component, and re-render a new view to the ui.
// 7. This whole mechanism is so fundamental to react that it's actually the reason why react is called react in the first place.
//      a. On a high level, moving from the component level, to the application level, react reacts to state changes by re-rendering the ui.

// Lesson 63. Adding Another Piece of State

// 1. Using the html entity, &times; , will create an 'X' in the browser/ui.
// 2. Whenever a piece of jsx should return two elements, react fragments must be implemented.

// Lesson 64. React Developer Tools

// In the react dev tools, the components tab is for displaying the component tree of a react app.

// Lesson 65. Updating State Based on Current State

// 1. It's very common to update a state variable based on the current value of that state.
//      a. To implement this approach use a callback function inside the useState setter function instead of a value.
//          i. Instead of a value, pass a function, which will receive as the argument, the current value of the state.
//          ii. The state can then be updated based on the current value.
//      b. It's best practice to always use this callback function approach when updating state based on the current value of that state.
// 2. When not setting state based on the current state, then just pass in the updated value to the setter function.
//      a. That is, pass in the new state value, without a callback function.

// Lesson 66. More Thoughts About State + State Guidelines

// 1. Each component manages its own state.
//      a. Even if rendering the same component multiple times on one page, each of the component instances will operate independently from all the others.
//          i. Each instance operates independently of all others and each has its own independent state.
//      b. State really is isolated inside of each component.
// 2. Think of the entire application view/ui as a function of state.
//      a. In other words, the entire ui is always a representation of all the current states in all components.
// 3. A react application is fundamentally about changing state over time, and correctly displaying that state at all times.
//      a. This is the application of the declarative approach to building user interfaces.
// 4. Instead of viewing a ui as explicit DOM manipulations, with state, view a ui as a reflection of data changing over time.
// 5. That reflection of data is described by using state, event handlers, and jsx.
//      a. Describe the ui/components, and let react do the rest.
// 6. Create a new state variable for any data that a component should keep track of over time.
//      a. Think of variables that need to change at some point.
// 7. In vanilla js the let or var variables, or an array, or object would be used to handle updates/changes and make mutations over the applications lifecycle.
//      a. In react, useState is used to handle these update/changes to the data and ui.
// 8. Whenever something in a component should be dynamic, create a piece of state related to that element.
//      a. Then update the state when the element should change.
//          i. Think of a modal window that can be either open or closed.
//              1. Use a state variable that will keep track of whether the modal is currently open or not.
//              2. When true, display the window, and when false, hide the window.
// 9. To change a component's view, or the data that it displays, update its state.
//      a. This is commonly done via an event handler function.
// 10. When building components, it's useful to imagine the components view as a reflection of state changing and evolving over time.
// 11. One common mistake that many beginners make is to use state variables for every single variable that's needed in a component.
//      a. IMPORTANT: Do not use state for variables that should not trigger a re-render.
//          i. That will cause unnecessary re-renders, which can cause performance issues.
//          ii. It's very common to need some variables that are not state.
//          iii. For those, just use regular variables defined with "const".

// Lesson 67. A Vanilla JavaScript Implementation

// Lesson 68. CHALLENGE #1: Date Counter (v1)

// 1. IMPORTANT: Ternary operators can be nested inside of other ternary operators.

// Lesson 69. Starting a New Project: The "Far Away" Travel List

// Lesson 70. Building the Layout

// Lesson 71. Rendering the Items List

// 1. List items (i.e. li tags) are the direct children of the ol/ul tags.
//      a. In react, these elements should be used together to create and render lists, in most cases.

// Lesson 72. Building a Form and Handling Submissions

// 1. By default, input field values are only string data types (i.e. they only record user inputs as strings, even when a number is entered).
// 2. To convert input values to number data types, the Number function wrapper (i.e. Number()) or the plus sign (i.e. '+') should be placed in front of the event.target.value.
//      a. This technique should be implemented when passing an input field value (i.e. event.target.value) to a state setter function, for updating a state variable that should be a number type.
// 3. When dealing with elements like select tags that have many nested option tags, create an array between the select opening and closing tags with the desired length, and then loop over that array, and create a list of option elements.
//      a. This can be used as a template for other use cases not just select/option tags.
//          i. EXAMPLE: {Array.from({ length: <number> }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
//              1. NOTE: The array constructor has a 'from' method, which receives two arguments.
//                  a. The first argument is an object which contains a length prop, which can be set to the desired length.
//                  b. The second argument is a callback function.
//                      i. The callback function receives two arguments.
//                          1. The current value for each position created in the array, which is not needed for this technique.
//                              a. Set the current value to an underscore (i.e. "_").
//                          2. The index of each position created in the array.
//                              a. The length of the array configured by the first 'from' argument determines how many elements will be created in the array.
//                              b. Each element will be the index plus 1 (i.e. i + 1) as determined by the return of the callback function.
//              2. NOTE: The map method is called on the newly created array to create an option tag for each element in the array.
//                  a. The number previously created for each element will be used as the value and key props as well as the text content for each option tag.
// 4. When rendering lists via the map method, the id of an element is commonly used as the key prop value for each element.
// 5. In react, the onSubmit event listener is used to handle form submissions.
// 6. In a single page application, submit forms without reloading the page.
//      a. Disable the default behavior of html form submission by using event.preventDefault().
//          i. This prevents the page from reloading and keeps the app on the same page.
// 7. When submitting forms via an event handler, the event object will contain all the information about the current event that was submitted.
// 8. Use onSubmit over onClick when submitting forms.
//      a. onSubmit allows the enter key and the button within the form to submit the form.
//          i. If an onClick is applied to the button, but no onSubmit listener is attached to the form, then only clicking the button will submit the form.

// Lesson 73. Controlled Elements

// 1. By default, input fields maintain their own state inside the DOM (i.e. inside the html element itself).
//      a. This makes it hard to read their values and it also leaves their state in the DOM, which is not ideal for react apps.
// 2. In react, its best practice to keep state in just one central place.
//      a. Inside the react application and not inside the DOM.
// 3. This best practice is accomplished via controlled elements.
//      a. With controlled elements, it is react which controls the state of these input fields and no longer the DOM.
// 4. State is required to implement controlled elements.
//      a. This is because form/input data changes over time and the goal is to maintain the app in sync with those data changes.
// 5. In order to implement the controlled elements technique, there are three steps:
//      a. Create a piece of state.
//      b. Set the state value as the value of a given element to be controlled.
//          i. Set the state value to the value prop of the necessary html/jsx tag/element.
//      c. Connect the state with the input value that is made by the user.
//          i. On the same element where the value prop was set to the state value, listen for an event (i.e. onChange, onClick, etc.).
//      d. With these steps in place, the element is synchronized with the state in the application.
//      e. React now controls the state of the element.
//          a. When the associated event occurs on the element, the event handler will react/handle the event and update the state accordingly.
//          b. This will maintain the synchronization of the app with the event.
// 6. The event handler function always receives the event.
//      a. On the event, the target object (i.e. event.target) is the entire element.
//      b. The value on the target object of the element contains the current input value of the event object (i.e. event.target.value).
// 7. Both the state value and the event handler, which handles updating the state value, should be included on the element that is being controlled.
//      a. This is so that react can update the state each time the value of the element changes via the useState setter function.
//      a. At this point, the DOM is no longer in control of the element value.
// 8. It's important to set the value prop on options tags, inside a select tag, because that is how the select tag is able to read the current e.target.value that is selected via the onChange event handler.
// 9. event.target.value is always a string.
//      a. Before updating the state variable, convert the value to a number, if necessary.
//          i. To do this, wrap the event.target.value in the Number() function, inside of the useState setter function call.
//          ii. Alternatively, convert the value to a number by placing a plus sign (i.e. '+') in front of event.target.value.
// 10. The technique of controlled elements basically consists of three steps:
//      a. Define a piece of state.
//      b. Use that piece of state on the element that should be controlled.
//          i. Make the element take the value of the state variable.
//      c. Update that state variable.
//          i. Use event handlers/listeners and the useState setter function to accomplish this.
// 11. After completing these steps, it's react which is in charge of the state and essentially the entire element.
//      a. That's the reason why this technique is called controlled element.
// 12. In react, using Date.now() for an id is a simple, but not a recommended way, to quickly create an id for an item that needs one.
// 13. Be sure to include necessary conditionals inside of event handler functions to prevent state from being updated when improper user data is entered.
//      a. Also, reset state to its initial value following form/input submissions via the setter functions.
//          i. This is commonly done within a submit event handler function following submission of a form.
// 14. Data (i.e. props) can only flow down the tree but not up or sideways.

// Lesson 74. State vs. Props

// State is internal data.
//      a. Data that is controlled by the component in which it is declared.
// 2. Props are external data.
//      a. Data that is controlled by the parent component.
//      b. Props can be thought of as function parameters (i.e. passed to child function component as arguments).
//          i. They are a 'communication channel' between parent and child components.
//                  1. Parents can pass props (i.e. data) down to children, but children can not pass props up to parents.
// 3. State can be thought of as the component's memory, because it can hold/store data over time (i.e. across multiple re-renders).
// 4. State can be updated by the component itself (i.e. the component which declares the piece of state).
//      a. Updating state will cause the component to be re-rendered by React.
//      b. State is the mechanism used to make components interactive.
// 5. Props are read-only.
//      a. They cannot be modified by the component that is receiving them.
//      b. When the child component receives new updated props, that will cause the child component to re-render.
//          i. The parent component will clearly be re-rendered, because it declares and controls the state that is being passed as a prop to the child component.
//          ii. It's important to reiterate that the child component, which receives the state as props from the parent component, will also be re-rendered.
//          iii. This is how data is kept in sync across applications between parent and child components, and ultimately the ui.
// 6. Whenever a piece of state is passed as a prop, when that state updates, both components are re-rendered.
//      a. Both the component controlling the state, and the component receiving the state as a prop, will be re-rendered.
// 7. While state is used by developers to make components interactive, props are used to give the parent component the ability to configure their child components.
//      a. Props can be viewed as settings in child components, which the parent component defines.

// Lesson 75. EXERCISE #1: Flashcards

// 1. The three steps of using state:
//      a. Define a state variable.
//          i. Invoke the useState hook with a default value and destructure the current value and state setter function.
//      b. Use that state variable.
//          i. Commonly, this is done by setting the value prop of an element tag (e.g. input, select, etc) to the current value of the state variable.
//          ii. This can also include simply using the current value of the state variable somewhere in the return template of the jsx element.
//      c. Update that state variable.
//          i. This is accomplished via event handlers (e.g. onClick, onChange, onSubmit, etc.) and the state setter function.
//          ii. When implementing event handlers in jsx, either pass the event handler function (i.e. function name only, without invocation parens) by itself, or apply an anonymous arrow function wrapper around the event handler function call.
//              1. The second option is commonly used when an argument such as prop data or an event need to be passed to the event handler function.
//                  a. This is for when an event handler requires data from the element that is calling the event handler (i.e. pass an anonymous arrow function that wraps the event handler function with the required param/argument passed into the event handler function parens (i.e. function call) )
//          iii. The event handler function should be passed so that React can then call the function as soon as the event happens.
// 2. NOTE: The useState setter function can have a ternary operator or short-circuit passed directly into the state setter function call to conditionally set an updated/new value on the state variable.

// Lesson 76. CHALLENGE #2: Date Counter (v2)

// 1. The input element has a slider feature/option
//      a. Set the input type to range.
//      b. Then set the min and max prop values.ontrolled by that step state.
// 2. Controlled elements are elements that are connected to a piece of state via the value prop.
//      a. The value prop on the element is set to the state variable current value.
//      b. The event handler is also applied to the element.
//          i. For certain elements (e.g. input, select, etc.) the event.target.value is passed as an argument to the event handler function.
//              1. This is commonly used when user input data is required by the event handler (e.g. form submission).
//              2. The most common application is for forms and form submissions.
