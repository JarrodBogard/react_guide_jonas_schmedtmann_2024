// Lesson 33. Rendering the Root Component and Strict Mode

// 1. The root js file in any create-react-app project needs to be called index.js because webpack, which is the module bundler in the project, expects the entry point to be called index.js.
// 2. Importing modules is part of JavaScript, and specifically since ES6.
//      a. Use simple JS language to import modules.
// 3. In the index.js file, where the root component is being injected into the index.html file of the public folder via the render method on the root object created by ReactDOM.createRoot("root"), wrap the React.StrictMode component around the root component to implement strict mode for development.
//      a. If the root component inside the root.render() method is not wrapped in the React.StrictMode component, the app will not be using the strict mode debugging features.
//      b. This should only be implemented in development mode because it will render all components twice in order to find certain bugs.
//          i. Also, React will check if outdated parts of the React API are being used.

// Lesson 34. Before We Start Coding: Debugging

// 1. If any extensions such as prettier or eslint stop working, go to the output tab of the terminal in the project and inspect the specific extension by choosing it from the dropdown menu.

// Lesson 35. Components as Building Blocks

// 1. Components are the most fundamental concept in React, because React apps are made entirely of components.
//      a. With any React app, there's nothing that is not a component, or at least there is not anything store outside of some component.
// 2. Components are the building blocks of any user interface in React.
//      a. React mostly takes components and renders them onto a webpage (i.e. UI).
//      b. React renders a view for each component, and all these views together make up the user interface.
// 3. One key property of components is that each component has its own data, JavaScript logic, and appearance.
//      a. Each component describes how it works and what it looks like.
//      b. Components can also pass data to each other via props (i.e. pass data from the parent component to the child component(s)).
// 4. Complex UIs are built in React by building multiple components, and then combining these components together like lego pieces.
// 5. It is very common to place components inside of other components (i.e. nested components).
//      a. Nesting components is a key aspect of using components in React, along with component reusability.
//          i. Whenever duplication is necessary in the UI, a new component should be created and then used wherever and however many times it is needed.
// 6. One important tool that helps in analyzing the components that are created and used in a React project is a component tree.
//      a. A component tree shows the hierarchy that exists between the components that make up the user interface and how they relate to one another (i.e. parent, child, sibling).
//          i. Relationships can be clearly viewed between components.

// Lesson 36. Creating And Reusing a Component

// 1. In React, there are two important rules for function components:
//      a. The function name needs to start with an uppercase letter.
//      b. The function needs to return some markup, usually in the form of JSX, but it can even return nothing (i.e. null).
// 2. Additionally, each component can only return exactly one element.
// 3. Never nest function component declarations inside of other function components.
//      a. All function components should be declared in the top-level of the file they are declared in.
//      b. The function component invocation/call is what will be nested inside of a parent component.
// 4. All of the 'assets' of the react app should be placed in the public folder, because webpack (i.e. the module bundler) will be able to automatically access/load them from there.
//      a. The assets can be accessed in the src folder by using the pathname of the asset (e.g. "folderName/fileName.fileExtension")
// 5. When creating a new project with 'create-react-app', it will automatically set up the project as a GitHub repo.
//      a. To disable this go to settings > diff decorations > none.

// Lesson 37. What is JSX?

// 1. JSX is a declarative syntax that is used to describe what components should look like, and how they should work, based on each component's data and logic.
//      a. It's concerned with the component appearance based on the component data and logic.
// 2. Each component must return exactly one block of JSX, which React will then use to render the component to the UI.
// 3. JSX is an extension of JS, which allows it to combine parts of HTML, CSS, and JS all into one block of code.
//      a. It allows for writing html and then embedding pieces of JS where necessary (e.g. JS variables).
//          i. It can also embed other React components.
// 4. JSX is just an extension of JS, which means that there is a simple way of converting JSX to JS.
//      a. This is done by a tool called Babel, which is automatically included in a react project when running 'create-react-app'.
//      b. The result of this conversion is that each JSX element is converted to a React.createElement() function call.
//          i. This conversion is necessary because browsers do not understand JSX, only html.
//          ii. Behind the scenes, all the JSX is converted into many nested React.createElement() function calls.
//          iii. These function calls are what create the html elements that are displayed to the UI.
//          iiii. It's possible to manually write React.createElement() functions instead of JSX, but it would be quite difficult.
// 5. Building UIs using vanilla JS, by default, implements an imperative approach.
//      a. This means manually selecting elements, traversing the DOM, and attaching event handlers to elements.
//      b. Each time something happens in the app, like a button click, the browser is given step-by-step instructions on how to mutate the DOM elements until the UI is updated correctly.
//      c. In the imperative approach, the browser is being told exactly HOW to do things.
//      d. Doing this in a complex app is completely unfeasible.
//          i. This is why react chose to use a declarative approach in building user interfaces.
// 6. A declarative approach is simply describing what the UI should look like at all times, based on the current data that's in the component.
//      a. That is, JSX is used to describe the UI based on props and state (i.e. the most current component data).
//      b. This is all accomplished without any DOM manipulation.
// 7. React is essentially a huge abstraction away from the DOM, so that developers never have to touch the DOM directly.
//      a. Instead, think of the UI as a reflection of the current data, and let React automatically synchronize the UI with that data.
// 8. The difference between imperative and declarative is that in the declarative approach, for react apps, JSX is used to tell React WHAT should be displayed, but not HOW to achieve it step-by-step.
//      a. React can figure that out on its own, essentially..

// Lesson 38. Creating More Components
