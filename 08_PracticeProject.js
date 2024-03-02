// Lesson 96. Building the Static App: List of Friends

// Lesson 97. Building the Static App: Forms

// Lesson 98. Displaying the New Friend Form

// 1. Components can't handle event listener props like onClick, onSubmit, onChange, etc.
//      a. They can only pass them down as props.
//      a. Only native html elements/tags can use event listeners (e.g. span, div, button, etc.).

// Lesson 99. Adding a New Friend

// 1. Create element IDs using the built-in browser crypto.randomUUID() function.
//      a. This is a very good way of generating random IDs right in the browser.
//      b. It is not an external package, which is convenient, but it won't work in older browsers.
//          i. Spread in the current state into the new array so that each item is placed in the new array individual and not as one array.
//      c. Add the new item into the new array.
// 2. Using the push method on the original array would mutate the array (i.e. the original data).
//      a. It wouldn't create a new one and therefore react, in that case, would not re-render.
// 3. Don't mutate original arrays because react is all about immutability.
//      a. This is also the reason why props should not be mutated.
// 4. Original data (i.e. arrays, objects, etc.) should always be copied in react and then the copy of that data can be mutated as needed.
//      a. To copy data simply create a new object/array and place the original data in it.
// 5. Steps for adding new items to a list (i.e. array):
//          i. Create a new array using opening and closing brackets.
//          ii. Spread the current elements into the new array (e.g. [...currentElements]).
//              1. With the useState setter function, the current state (i.e. data/elements) can be received as an argument.
//              2. The current state can then be inserted into the new array via the spread operator as shown in the above example.
//          iii. This is now a copy of the original data.
//          iiii. Add the new element(s) to the end of the new array (e.g. [...currentElements, newElement]).
// 6. Adding the word 'on' before function props that are executed by event listeners is a common naming convention in react.
//      a. This is because in react the event listeners all start with the word 'on' (e.g. onClick, onChange, onMouseOver, etc).
//      b. This is to identify functions that handle state changes when events occur (e.g. onAddItem, onDeleteItem, onToggle, etc).
//          i. These are not reserved keywords and can be named anything.

// Lesson 100. Selecting a Friend

// 1. Lifting state up involves:
//      a. Moving state variables up to the nearest common parent for the child components that need access to the state.
//      b. Creating a handler function which updates the state.
//      c. Passing that handler function down via props.
//      d. Implementing the handler function in the child component via an event listener on the appropriate tag/element.
//      e. Passing and using the current state variable in the child component and displaying or using that state where needed.
// 2. Prop drilling is when a piece of state (i.e. data) needs to be passed down to a child component via its parent component, even though the parent does not need the state.
// 2a. Prop drilling is when a parent component receives and passes down a prop to a child component that it does not need/use itself.
// 3. To avoid undefined errors in modern JavaScript use optional chaining on objects that use dot notation inside components.
//      a. This could be for accessing properties on variables/objects/arrays that don't currently have values.
// 4. When a definite state response is needed the current state is not required in the state setter function.

// Lesson 101. Creating Controlled Elements

// 1. Remember to chain logic together in conditional rendering.
//      a. Errors can occur if the conditional logic is based on a variable or object that may not have a value yet.
//          i. The initial state of the variable may be an empty string or an empty array/object, which will be updated at some point.
//          ii. If a component attempts to access the variable before the variable contains any data, it can cause an error.
//      b. Create conditionals that check if the underlying data exists before anything is done.
//          i. Example: If something exists THEN do something with it.
// 2. Derived state variables are variables that are not themselves pieces of state.
//      a. Their values are derived from state variables.
//          i. Their values are dependent on state variables.
//      b. They do not cause re-renders.
//      c. Their values are updated indirectly when the state variables they are tied to update.
//          ii. When the state variables update, the component is re-rendered.
//          iii. When the component re-executes, the derived state variables will be recalculated based on the updated state variables.
//                  1. The derived state values will be updated as a result of the state variables updating.x
// 3. If a component's state is not updated/changed, the component will not re-render.

// Lesson 102. Splitting a Bill

// 1. To update an item in a list via the useState setter function, take the current list state and execute the map method on it.
//      a. This will return a new array with the same length and items.
//      b. Set a condition to find/isolate the item to be updated via a ternary operator.
//          i. Typically, an id prop of the selected item is used in a comparison operation with the current item.
//      c. The if condition should update the current item and the else condition will simply return the current item in its current state.
//          i. Typically, the item will be an object.
//              1. Create a new object with the opening and closing curley braces and spread in the current item.
//              2. Extract the props to be updated by writing them below the spread item line.
//              3. Insert the new values for those props.
//          2. Only the item that meets the condition will be updated, and the other items will be left unchanged.

// Learning Resource Links //

// 👉 Writing Resilient Components (By Dan Abramov from the React team)

// 👉 Things I think about when I write React code (GitHub repository)

// 👉 A (Mostly) Complete Guide to React Rendering Behavior (By Mark Erikson from the redux team)

// 👉 A Visual Guide to React Rendering (A multi-part series, check out the other ones)

// 👉 Inside Fiber: in-depth overview of the new reconciliation algorithm in React

// 👉 A Cartoon Intro to Fiber (YouTube video)

// 👉 What Is React Fiber? React.js Deep Dive (YouTube video)

// 👉 The React and React Native Event System Explained

// 👉 Under the hood of event listeners in React

// 👉 A DIY guide to build your own React

// 👉 useSyncExternalStore First Look

// 👉 Under the hood of React's hooks system

// 👉 Why Do React Hooks Rely on Call Order? (By Dan Abramov

// 👉 So you think you know everything about React refs

// 👉 react-use: Reusable React Hook Library (GitHub repository)

// 👉 react-hookz: React hooks done right (GitHub repository)
