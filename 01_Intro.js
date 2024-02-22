// Lesson 2. Building Our First React App!

// 1. React function components are functions which return JSX syntax/elements that look like HTML and render content to the browser, once compiled.
// 2. Whenever something in the UI needs to change, some type of state management is required to change the "state" of the UI.
// 3. The useState hook from the react library is a function which returns an array with two items.
//      a. The first item is the current state value (i.e. what the value of the state currently is set to).
//      b. The second item is a "setter" function, which allows for the related piece of state (i.e. the state value) to be updated/changed.
// 4. Using curly braces in the return statement/template of a react functional component informs the react app that JS is acceptable - within the curly braces - and should be executed and interpreted to the browser/UI.
// 5. useEffect takes two arguments.
//      a. The first argument is a function that should be executed when the component renders.
//      b. The second argument is a dependency array which configures when the useEffect function is executed.
//          i. An empty dependency array will tell the useEffect to execute only on the initial render.
//          ii. A dependency array with values will tell the useEffect to execute on initial render and whenever any of the values inside the dependency array change/update.
// 6. Props are essentially parameters that can be passed to and from functional components (i.e. passed from parent to child).
//      a. Props can only be passed downstream (i.e. only from a parent component to a child component, not vice versa).
//      b. The child component can access the props passed to it via the props object.
