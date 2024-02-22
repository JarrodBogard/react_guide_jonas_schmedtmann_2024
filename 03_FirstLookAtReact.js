// Lesson 9. Why Do Front-End Frameworks Exist?

// 1. Before 2010, most web applications/sites were rendered on the server (i.e. server-side rendering) before being received by the browser/UI.
//      a. Data and templates were executed on the server and composed in HTML/CSS/JS which was then passed on to the browser for client-side rendering (e.g. Wordpress applications/sites).
//      b.JQuery was a popular library used on the client-side to process animations, interactions, effects, etc, across all web browsers (i.e. JQuery made JS work the same across all browsers).
// 2. Single page applications (SPAs) are apps that are entirely executed and rendered on the client-side without any backend assistance (i.e. SPAs are the exact opposite of server-side applications, where all the code for the program is executed on the client-side).
//      a. The work of rendering a webpage/application shifts from the server to the client.
//      b. Alt def: The job of rendering on the server shifts to the client (i.e. the client takes care of all the rendering instead of the server).
//      c. That is why they are called web applications instead of web pages.
//      d. SPAs still require data, which they can get from the backend, in the form of an API.
//          i. The SPA uses an API to assist with retreiving data from the backend/server.
//      e. The application consumes API data and renders a screen for each view of the application.
// 3. Single page applications essentially feel like using a native desktop or smartphone application, but the page never reloads, so it's technically always on the same page, and therefore the name single page app (SPA).
// 4. Next.js and Remix are frameworks built on top of modern client-side frameworks (e.g. React.js) that are bringing back server-side applications.
// 5. A frontend application is about handling data and then displaying that data in a user interface.
//      a. It receives data, changes the data as the user interacts the app, and it always displays the current data on the screen.
// 6. What this means is that the most important task of a single page app, and really of any application or website, is to keep the user interface in sync with the data, or in other words, to make sure that the UI always displays the current state of the data.
// 7. A piece of data = a piece of state
// 8. Problems with using vanilla JS to build complex apps:
//      a. 1) It requires large amounts of direct DOM traversing and manipulation.
//          i. Examples:  manual element selection, class toggling, DOM traversing, and manipulation of text and CSS styles.
//      b. 2) State (i.e. changeable data such as text, numbers, objects, etc) is oftentimes stored directly in the DOM, in the HTML elements themselves, rather than in a central place in the application. The result is that many parts of the application are accessing and changing that DOM state directly, which makes the code even harder to understand. And even worse, it will most certainly introduce bugs into the application.
//          i. With vanilla JS, data (i.e. state) is usually stored directly in the DOM and shared across the entire app.
// 9.The big fundamental reason why these frameworks exist is because keeping a user interface in sync with data is very hard, and it's a lot of work.
//      a. Frameworks like Angular, React or Vue, take this hard work of synchronizing data with the user interface away from developers.
//          i. They solve this really hard problem so that developers can focus only on the data and on building user interfaces.
//          ii. Different frameworks have different approaches to doing this, but they are all similar in the fact that they keep UI and data (i.e. state) in sync over time.
// 10. Frameworks also enforce a "correct" way of structuring and writing code.
//      a. Essentially, the authors of each of these frameworks came up with a good way of structuring applications, so that other developers can then follow these conventions as well, to build better applications.
// 11. Frameworks give developers, and especially teams, a consistent way of building web applications.
//      a. Everyone on the team will build their part of the app in the same style as everyone else, which will help facilitate a more consistent code base and product.

// Lesson 10. React vs. Vanilla JavaScript

// 1. In vanilla JS, the HTML file is essentially controlling/including the JS script file.
// 2. In React, the JS is essentially controlling/including the HTML elements via the functional components and JSX syntax.
// 3. HTML control vs. JS control.
// 4. With react, "setter" functions from useState, for example, facilitate updating the data (i.e. state) and then updating the UI to reflect those changes, automatically.
//      a. useReducer and useEffect also assist in updating state and UI in react.
// 5. With vanilla JS, updating the UI to reflect state changes must be handled by the developer, manually.
// 6. These are fundamental differences between frameworks like react and vanilla JS.

// Lesson 11. What is React?

// 1. React is a JavaScript library for building user interfaces.
// 2. React is an extremely popular, declarative, component-based, state-driven, JavaScript library for building user interfaces, created by Facebook.
// 3. Components are the building blocks of user interfaces in react.
//      a. Essentially, all react does is take components and draw them on a webpage.
//      b. Complex UIs in react are built by creating multiple components and then combining these components like LEGO pieces.
// 4. JSX is a special declarative syntax used to describe what a component looks like, or should look like, in the browser when it is rendered (i.e. JSX describes how a component should render to the browser/UI).
//      a. Declarative simply means that instructions are provided to react on what a component, and ultimately the entire UI, should look like, based on the current state.
//          i. Simply tell react what should happen when some data changes, but not how to do it.
//          ii. Again, this is accomplished with the help of JSX syntax.
//          iii. JSX is basically a syntax that combines parts of HTML, CSS, JavaScript, and other react components.
//      b. React is essentially a huge abstraction away from the DOM so that the DOM is never manipulated directly as it would be with vanilla JavaScript.
//      c. The declarative nature of react is an essential concept to understanding how react works.
// 5. Remember that the main goal of React is to always keep the UI in sync with data.
//      a. Data is referred to as state in react.
// 6. Whenever the state changes in an application, the state is manually updated in the app and React will then automatically re-render the user interface to reflect that latest state update.
//      a. In other words, react simply reacts to state changes by re-rendering the UI.
//          i. That is the reason why react is called react in the first place.
// 7. React is actually just a library.
//      a. The reason being that React itself is really only the "view" layer of the application.
//          i. To build a complete application (i.e. SPA), multiple external libraries need to be added and used along with the react library, in a react project.
//          ii. Routing and data fetching are examples of functionalities that require external libraries in order to implement those functionalities in react projects.
// 8. There are multiple frameworks that have been built on top of React to address these "shortcomings".
//      a. These are frameworks that include all these functionalities that React is missing.
//      b. The most popular ones are called Next.js and Remix.
// 9. The biggest reason to choose React over all the other similar frameworks is because React is extremely popular.
//      a. React is by far the most used framework.
//      b. A big reason is that many large companies adopted React early on (e.g. Netflix, Tesla, Airbnb, etc).
//      c. Another positive outcome of React's huge popularity is that now, there is a very large and active React developer community, which means that there are always going be plenty of tutorials, stack overflow questions and answers, and plenty of support given to other React developers.
//              i. Also, because this community has grown so much, there is a truly gigantic third-party library ecosystem around React, so that, there are many useful libraries and tools available that can be intergrated into React applications.
// 10. React was created by Facebook.
//      a. More specifically, React was created in 2011 by Jordan Walke, who is an engineer who was working at Facebook at the time.
//              i. React was first used on the newsfeed and also the chat app.
//              ii. From there, it spread out to the entire Facebook and Instagram applications.
//      b. In 2013, React was open-sourced for everyone to use.
//      c. React has truly and completely transformed frontend web development, not only by developers that are using React itself, but because many other modern frameworks were created as a response, which changed the industry forever.
// 11. React is really good at two things:
//      a. 1) Rendering components on a webpage, as a user interface, based on their current state.
//      b. 2) Keeping the user interface in sync with the app state by re-rendering (i.e. reacting) when the state of one of the components changes.
//      c. Important terms to come back to: virtual DOM, fiber tree, one-way data flow.

// Lesson 13. Pure React

// 1. "Pure react" only requires two scripts - which can be found on the react website - to create and run a react project within a directory.
//      a. The first script is the core react package.
//          i. It includes the components, state, and all other react related objects/elements needed to build react projects.
//          ii. It is basically the interface for developers to interact and build/work with react.
//          iii. This is the most pure form of react.
//                  1. It does not allow for writing JSX syntax inside function components.
//                      a. This is because a build tool is not included with this core react package.
//                  2. Components and their associated elements - as well as state and effect functions - must be created using dot notation on the React object.
//                      a. The react object is generated by running the core react script.
//                      b. The createElement method can then be called on the react object to facilitate the creation of a component.
//                      c. The arguments passed to createElement help configure the component.
//                      d. These arguments include the type of HTML element to be created, props (if any), and children.
//      b. The second script is the react-dom package.
//          i. It is the rendering layer which can render react components into the DOM.
//          ii. (It contains/is the virtual DOM???)
//          iii. The ReactDOM object has a createRoot method which can be used to inject the root React.createElement into the index.html file of the react project, which is then rendered to the DOM/browser (i.e. UI).
// 2. React is based on components.
//      a. A component is basically just a function that starts with an uppercase letter.

// Lesson 14. A Quick Look at React's Official Documentation

// The learn and reference tabs on the react.dev website are helpful in learning about react and its state and effect functionalities.

// Lesson 15. Setting Up a New React Project: The Options

// Option 1: Create-React-App
// 1. Complete "starter kit" for react apps
// 2. Everything is already configured: eslint, prettier, jest, fable, etc
// 3. Uses slow and outdated tech (e.g. webpack).
// 4. Great for tutorials and experiments, but not real-world apps.

// Option 2: Vite
// 1. Modern build tool that contains a template for setting up react apps
// 2. Need to manually set up eslint and other packages/tools.
// 3. Exremely fast hot module replacement (HMR) and bundling.
// 4. Great for real-world apps.

// 1. A React framework is a framework built on top of the React library, which makes it even easier to build applications than with just vanilla React itself.

// Lesson 16. Setting Up a Project With Create-React-App

// 1. When using a command line interface (CLI), the CLI is always working within a folder.
