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

// Lesson 39. JavaScript Logic in Components

// 1. Since components are just JS functions, any JS can be executed in them.
//      a. Variables and JS functions can be declared above the return template inside the function component.
//          i. That code is then executed as soon as the function component is called (i.e. when the component is initialized).
//      b. The JS variables, functions, etc. can then be embedded into the return template with the help of JSX syntax.

// Lesson 40. Separation of Concerns

// 1. Before single page apps, apps had one file for HTML, one for JS, and one for CSS.
//      a. Basically, one technology per file was the traditional 'separation of concerns'.
// 2. As pages became more interactive, they eventually became single page applications (SPAs), where JS started to determine the UI and the content in general.
//      a. In other words, JS became more and more in charge/control of the HTML in webpages, which lead to SPAs.
// 3. The fact that logic and UI are so tightly coupled in modern web applications, is the reason why a React component contains the data, the logic, and the appearance/view of one piece of the UI.
//      a. In fact, it's the fundamental reason why React is all about components.
//      b. The same is also true for most other modern frontend frameworks.
// 4. Content and logic are co-located in react projects/apps.
//      a. Co-located simply means that elements that change together should be located as close as possible to each other.
//      b. Therefore, since content and logic are tightly coupled together, it makes sense that they are co-located together.
// 5. In the case of React apps, instead of one technology per file, there is one component per file.
//      a. One component that contains data, logic, and appearance/view all 'mixed' together.
// 6. React does actually have separation of concerns.
//      a. It's just not one 'concern' per file, as it has traditionally been, but one 'concern' per component.
//      b. Each component is only concerned with one piece of the UI.
//          i. Then, within each of these components, the three concerns of HTML, CSS, and JS are all 'mixed' together.
//      d. Compared to the traditional separation of concerns, this is a completely new paradigm.

// Lesson 41. Styling React Applications

// 1. React doesn't handle styling.
//      a. The reason is that react is actually more of a library than a framework.
//      b. Therefore, it doesn't have a preferred method for styling components.
//      C. Choose between different options including: external css files, sass files, css modules, styled components, or Tailwind
// 2. In JSX, inline styles are defined with JavaScript objects.
//      a. Therefore, JSX syntax is required to instantiate and use JS objects for inline styles, in react components.
//      b. In tradition html web development, inline styles are not good practice because of the separation of concerns.
//          i. There, css is in a separate file and is never mixed with the markup (i.e. html) file.
//      c. In React, inline styles are completely fine.
//      d. In JS, all css property names have been converted to camel case notation.
//          i. In react, the camel case notation must also be used for css property names via/in JSX syntax.
//      e. The values for the css property names inside the JS object must always be strings.
//      f. This is the easiest way of adding styling to individual components.
// 3. Css style sheets can be imported into react component files with standard JS syntax(i.e. 'import' ... or 'import' ... 'from' ...).
//      a. It is webpack that will handle importing the styles from the css file and injecting them into the application.
// 4. In react, className is used in place of class, because class is already a reserved keyword in JavaScript.

// Lesson 42. Passing and Receiving Props

// 1. Props are how data is passed between components.
//      a. In particular, from parent components to child components.
//          i. Imagine props as being like a communication channel between a parent and a child component.
// 2. First, pass the props into the receiving child component function call, within the parent component return template.
// 3. Second, receive the props in the child component function, which were passed in to it by the parent component.
//      a. Typically, the parent component is in a separate file from its child components.
//          i. Thus, the parent component file is where the props are passed into the child component function call.
//          ii. And, the child component file is where the props are received from the parent component, by the child component function.
//          iii. Effectively, when the parent component executes/renders it will execute the child component function call and pass a props object to the child component, which will contain any/all of the props passed to the child.
//          iiii. JS syntax is required to retreive the values from the props object in the child component function.
// 4. Props are passed just like normal attributes.
//      a. Prop means property.
//      b. The order in which props are passed is irrelevant.
//      c. Whenever passing values as props that are not strings, JSX syntax must be used.
//      d. Anything (i.e. any data type) can be passed as a prop (e.g. arrays, objects, numbers, boolean, etc.).
// 5. JSX syntax is required to access and use props in the child component return template, for rendering the passed data.

// Lesson 43. Props, Immutability, and One-Way Data Flow

// 1. Props are used in React to pass data from parent components to child components.
//      a. Essentially, information/data is being passed down the component tree.
//      b. Basically, props are used to communicate between parent and child components.
//      c. Therefore, props are an essential react tool to configure and also to customize components.
//      d. Imagine props as settings that can be used to allow a parent component to control what its child component should look like and how it should work.
//          i. In that regard, props are just like arguments passed to regular JavaScript functions.
//          ii. One parent function passing arguments to its child/nested/helper function.
//      e. Anything (i.e. any data type) can be passed into JavaScript functions.
//          i. The same is true for props in function components.
//          ii. Pass any type of value as a prop (e.g. strings, numbers, arrays, objects, functions, and even other React components).
// 2. The data that React uses to render a component is made out of props and state.
// 3. State is basically internal component data that can be updated by the component's logic (i.e. by the component itself).
// 4. Props, on the other hand, are data that is coming from a parent component, so from an external/outside source.
//      a. It's the parent component which controls the prop data and is responsible for making any updates to it (via state???).
//          i. Importantly, it cannot be modified by the child component.
//          ii. Instead, props can only be updated by the parent component itself.
// 5. Props are immutable.
//      a. They cannot be changed, they are read-only.
//      b. If at any point it seems like props need to be mutated, what is actually needed is state, because state is for data that changes over time.
//      c. This is because 'props' are just an object.
//          i. If the props object is changed in a child component, it would also affect the same data in the parent component because that's how reference data types work in JS.
//              1. When a JS object (i.e. reference type) is copied and mutated, the original object will also be mutated.
//      d. If a function component mutates an object, that is located outside its function block/scope, that function has created a so-called side-effect (i.e. if a child component changes the props object of its parent component).
//          i. A side-effect happens whenever some data that's located outside of a function is changed within that same function.
//          ii. Alt def: Whenever data that is defined/declared outside of a function, is changed/mutated by that function, a side-effect occurs as a result.
//      e. React is concerned with pure functions, so functions without side effects, at least when dealing with component data.
//      f. Components should be pure functions in terms of their props and state.
//          i. This allows React to optimize apps and avoid bugs that can occur when external data is manipulated.
//          ii. This idea of immutability can be extended to react development in general.
//      g. IMPORTANT: Components should never mutate any data that is written outside of its function scope.
// 6. One-way data flow means that in React applications, data can only be passed from parent to child components, which happens by using props.
//      a. Data can flow from parents to children but never the opposite way.
//          i. Data only flows down the component tree from top to bottom.
//      b. Other frameworks such as Angular actually employ a two-way data flow.
//      c. The reason react uses one-way data flow is that it makes applications more predictable and easier to understand for developers.
//          i. This is because it is easier to understand and see where the data is coming from when it only flows in one direction.
//          ii. It also makes applications way easier to debug, because there is more control over the data and the flow of data.
//          iii. Additionally, two-way data binding is usually less efficient and less performant to implement.

// Lesson 44. CHALLENGE #1: Profile Card (v1)

// Lesson 45. The Rules of JSX

// 1. JSX works essentially just like HTML.
//      a. It has a very similar syntax, but it can enter a JS mode by using curly braces anywhere in its markup where a value is expected.
//      b. In JS mode, JS expressions can be implemented (i.e. anything that produces a value).
//      c. These JS expression include referencing variables, creating arrays or objects, looping over arrays using the map method, or using operators such as the ternary operator,
//      d. Statements are now allows
//          i. In JSX, if/else statements, for loops, switch statements, or any other types of statements cannot be implemented.
//          ii. This is because non of these produce or return values.
// 2. JSX produces a JS expression.
//      a. A piece of JSX is just like any other JS expression.
//          i. JS expressions always produce/output/return a value.
//          ii. JSX is converted behind-the-scenes to a React.createElement function call, which is in fact an expression.
//      b. This fact has two important implications:
//          1.
//              i. It means that separate/other pieces of JSX can be placed inside the curly braces of the JSX expression (i.e. inside the JS mode).
//              ii. This is possible because any type of JS expression can be placed inside the curly braces, and that includes the expressions produced by JSX.
//              iii. Consider ternary operators and short-circuiting as examples.
//          2.
//              i. JSX can be written anywhere inside a component.
//              ii. JSX can be assigned to variables, used inside of if/else statements, passed into functions, etc.
//                      1. This is done outside/above the return template within the function component.
// 3. Each piece of JSX can have only one root element (i.e. one parent element).
//      a. If a piece of JSX needs to return two elements, without a parent element, a react fragment can be implemented.

// Lesson 46. Rendering Lists

// 1. The basic concept of rendering a list is that an array contains elements and the desired result is that a component is created for each element of the array.
//      a. The map method is used to render lists.
//          i. This is because for each element of the original array, the map method will create a new component.
//      b. When rendering lists, each item that is rendered needs a unique key property.
//          i. The key prop is internal to React, and it needs a key value for each item/element of the rendered list to optimize performance of the app.
//          ii. The key value should be unique to each element.
// 2. Semantic markup is important.
//      a. In react, it is common to implement ul/li tags for rendering lists, where the ul wraps the elements of the list  (i.e. wraps the list items).
//          i. Use a ul tag to wrap the jsx mapping expression
//          ii. Pass each element of the array as a prop to the child component function call, within the jsx mapping expression
//          iii. Ensure that a unique key is passed to the key prop as well.
//          iiii. Best practice is to pass the key to the child component function call in the jsx mapping expression of the parent component.
//          iiiii. The child function component can access the prop object and render each prop element and its associated data via an li tag.
//          iiiiii. Using the ul in the parent and li in the child ensures that semantic markup is accurate/correct.

// 3. By using the map method on the list (i.e. the original array), it will create a new array.
//      a. In this array, in each position, there will be a new component.
//      b. Pass, as a prop, the current object/element and also pass a unique key via the special key prop, which optimizes performance in react.
// 4. forEach will not work for rendering lists because jsx is required and the only way to get jsx is by creating a new array.
//      a. This is what the map method does.
//          i. It creates a new array, which will contain the new components.
//          ii. React can then render the new array of components to the UI.

// Lesson 47. Conditional Rendering With &&

// 1. Conditional rendering is about rendering some piece of JSX to the UI, based on a condition.
//      a. When using the length of an array, in react, to conditionally render an element/component, it's important that a true/false value is used for the conditional and not a truthy/falsey value.
//          i. This is because React cannot render true/false values but it could render a falsey value of 0.
//                  1. If the value is truthy/falsey (e.g. the length of an array equals zero) then a short-circuit conditional that is implementing the && operator will return that zero (i.e. falsey) value to the UI.
//          ii. This is because an && short-circuit conditional always returns the first falsey value it evaluates and does not go any further (i.e. it "short-circuits" at the first falsey value).
//                  1. If the result of the conditional is a falsey value of zero, then zero will be returned to the UI, since it is the first falsey value of the short-circuit.
//          iii. Converting the conditional from a truthy/falsey value to a true/false value will improve the functionality of the conditional render.

// 2. React does not render true/false values from JSX syntax to the UI, but it will render certain truthy/falsey values.
//      a. Therefore, truthy/falsey values should not be used on their own.
//      b. They should be used with a comparison operator to instead return a true or false value.
//      c. This is so that the underlying truthy/falsey value (e.g. 0) is not returned to the UI.
//      d. Always use a true/false condition for conditionally rendering components/elements/jsx in react.
// 3. Many devs say that short-circuits should never be used to conditionally render jsx.
//      a. Ternary operators may be a better option for conditional rendering.

// Lesson 48. Conditional Rendering With Ternaries

// 1. When using the ternary operator to conditionally render a component, the else (i.e. what comes after the colon) portion of the expression can simply return null, if nothing should be rendered for that condition, while the if (i.e. what comes after the question mark) portion can render a component/element/jsx.
// 2. The advantage of using the ternary operator is that it can display some alternative jsx based on a condition.
// 3. Inside JS mode, only code which produces values, or a value, can be used.
//      a. If/else statements do not produce values.
// 4. To use ternary operators or short-circuits, inside of JSX, JS mode must be implemented using curly braces.
//      a. Within jsx, the ternary operators and short-circuits will only work inside the curly braces.

// Lesson 49. Conditional Rendering With Multiple Returns

// 1. Another option for conditionally rendering jsx is by using multiple returns.
//      a. Each component can only return one block of jsx, but that return could be configured to depend on a condition, or conditions.
//          i. Other returns can be added to a function component based on some condition(s).
//      b. If/else conditions can be set outside/above the return template of a function component.
//          i. Within the if/else statement, other return templates can be created based on multiple conditions.
//          ii. Simply ensure that any styling/features/functionality is duplicated for the alternate return(s) so that the component maintains consistency (i.e. the same design and functionality) when rendering the alternative return template (i.e. JSX/elements/components)
//              1. For this reason, 'early' returns are more useful when rendering entire components conditionally.
// 2. Returning null is a common technique when the desired result of a condition is to return nothing to the UI.

// Lesson 50. Extracting JSX Into a New Component

// 1. When the jsx in a component is getting too complex, extract it into its own component.
//      a. If the jsx that was extracted into a child component depends on some value that was in the parent component, pass it to the child component as a prop.
// 2. Start building components, and when they get too big, extract parts of them into other components.

// Lesson 51. Destructuring Props

// 1. Each time props are passed into a component, that component will then automatically receive the props object, which will contain all the props that were passed to it.
// 2. All components receive the props object.
// 3. If the props object is empty it will return undefined.
// 4. Props on the prop object can be destructured in the argument line of the function component.
//      a. As with all object destructuring in JS, the name of the props need to match exactly the name of the props that are passed to it by the parent component.

// Lesson 52. React Fragments

// 1. JSX, no matter where it is defined, can return only one root element.
// 2. React fragments (i.e. <React.Fragment><React.Fragment/> or <></>) allow different jsx elements within a component to be grouped together, without a parent div.
//      a. The benefit is that it does not leave any trace in the HTML tree (i.e. the DOM).
//      b. When using fragments, no new html elements are created.
//          i. It is as if the fragment wrapper does not exist.
// 3. If keys need to be passed to a piece of jsx (e.g. rendering list items) the React.Fragment format, for fragments, is required.
// 4. React fragments are a very simple concept, which basically allows components to return more than one single root element in the return template.
//      a. Multiple jsx elements can be grouped together and wrapped in a fragment which can then be returned by the component as a single jsx element.
//          i. This does not leave any trace of the fragment in the DOM tree (i.e. the browser).

// Lesson 53. Setting Classes and Text Conditionally

// 1. A template literal is JavaScript, therefore JavaScript mode can be entered by using a dollar sign and curly braces, within the backtics.
//      a. Since this is a JS expression, anything included must return a value.
//          i. Ternary operators, short-circuits, JS variables, and function calls that return values can be included inside the JS mode.
// 2. This is a similar idea to entering JavaScript mode inside of JSX.
//      a. The difference is that in the template literal a dollar sign must be placed in front of the curly braces.
// 3. This is a great way to add css classes to jsx elements, conditionally.
//      a. Use a template literal for the classNames prop instead of quotations and then insert a ternary operator conditional.
