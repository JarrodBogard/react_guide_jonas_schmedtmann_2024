// Lesson 107. How to Split a UI Into Components

// Questions:
// 1. How should a ui be split into components?
// 2. When should new components be created?

// 1. Components can be classified based on size, which means that every component can be placed on a small-to-large scale.
// 2. Components that are too large create a whole set of problems.
//      a. Too much stuff.
//      b. Too many responsibilities.
//      c. Too many props.
//      d. Too much complexity (i.e. difficult to understand).
//      e. These problems make it difficult to reuse a component.
// 3. Components are like js functions, in the sense that if a function does too many different things, break it up into multiple functions.
// 4. Components that are too small have many issues as well.
//      a. The code base (i.e. files/directories) becomes large and becomes confusing to navigate and to understand.
//      b. Too abstracted.
//          i. Abstraction means to create something new in order to hide the implementation details of that thing.
//          ii. In a way, each component that is created is an abstraction.
// 5. The goal is to create components that strike the right balance between being too specific and too broad (i.e. too big or too small).
// 6. These problems help identify how to split a ui into components.
// 7. Criteria for splitting the ui into components:
//      a. A logical separation of the content/layout/page.
//      b. Reusability.
//      c. A single, well-defined responsibility.
//      d. Personal coding style.

// 1. When creating a new component, start with a relatively big component, then split that bigger component into smaller components as it becomes necessary.
// 2. Use the four criteria listed above to help determine when to split big components into multiple smaller ones.
//      a. Logical separation of content.
//      b. Reusability.
//      c. The responsibilities and complexity of the component.
//      d. Personal coding style.
// 3. Logical separation:
//      a. If a component contains pieces of code, or some parts of the app layout that don't belong together, separate the parts that don't belong into a new and separate component.
// 4. Reusability:
//      a. If it's possible to reuse a piece of a big component, and that part is needed elsewhere in the app as well, then extract that portion of code into a new component.
// 5. The responsibilities and complexity of the component:
//      a. If a component is handling too many different things, or if it's relying on too many props (i.e. it has too many pieces of state or effects), or the code is way too complex or too confusing, separate the component into smaller components.
// 6. Personal coding style:
//      a. It's important to feel productive when working with components.
//          i. If smaller functions or components are preferred, then split up big components into smaller ones, and vice versa.
// 7. General guidlines:
//      a. Be aware that creating a new component creates a new abstraction.
//          i. Abstractions have a cost, because having more abstractions requires more mental energy to think about different components and switching back and forth between them.
//              1. Therefore, try not to create new components too early if it can be avoided.
//      b. It's important that components are named according to what it does or what it displays.
//          i. Don't be afraid of using long component names because that's completely normal in react development.
//      c. Even more importantly, never declare a new component inside another component,
//          i. Instead, in situations where components are related, co-locate these related components in the same file.
//      d. It's completely normal that an application has components of many different sizes, including some very small ones and some huge ones.
//          i. Small components are needed because they are typically highly reusable and have very low complexity.
//          ii. Most apps will also have a few huge components that are not meant to be reused.
//              1. These components typically contain the layout of the entire app, or a page, and that might very well be a fairly complex component which is not meant to be reused.
//                  a. In situations like this, don't worry about reusability or about needing to split the component up into smaller components.
//      e. As a general rule, the reusability range is pretty similar to the size range.
//          i. That is, smaller components are generally more reusable, and as components get bigger, they will become less reusable.
// 8. However, not all components are meant to be reusable.
// 9. There are also medium-sized components, which all have different degrees of size, reusability, responsibility, and complexity.

// Lesson 108. Splitting Components in Practice

// 1. Classnames must be applied to native html elements, not react components, for them to work properly.
//      a. Classes can be passed to components as props, which are then applied to the jsx element(s) that the components return.
//          i. That is, they can be applied to the native html elements that are used to create the components.
// 2. Typically, small components shouldn't be broken down further if they handle just one responsiblity already.
//      a. This would be pointless and make the app more confusing.
// 3. One common techique for creating a new component that renders list items is to have one component for the list, which would then loop over that list (i.e. array of data), and then display one component for each elementin the array.
// 4. Optional chaining is an effective approach for ensuring that a value is extracted from a variable.
//      a. This can be accomplished by using the nullish collasceing operator with dot notation.
//          i. Place a question mark before the dot, after the variable or property in question.
//              1. This tells js to only check for the value stored on the variable, or the property on the variable, if that variable or property is not undefined.
// 5. Define derived state variables in the component where they are being used and also have access to the state variable they are deriving their value from.
//      a. This approach will avoid unnecessary passing of props and keep the derived state variable in the component where it is needed.
// 6. Components cannot call themselvse in their own component file.
//      a. This will create an infinite loop.
// Lesson 109. Component Categories

// 1. Three common types of component categories:
//      a. Stateless/presentational components.
//      b. Stateful components.
//      c. Structural components.
// 2. Stateless/presentational components:
//      a. They don't have any state.
//      b. They are components that receive some props and then simply present that data, and possibly other content, to the ui.
//      c. Many times these components are quite small such as a logo component.
// 3. Stateful components:
//      a. Components that do have state.
//          i. Just because these components have state doesn't mean that they can't be highly reusable (e.g. a search component).
// 4. Structural components:
//      a. These could be pages, layouts, or screens of the application.
//      b. They are often times the result of composing many smaller components together.
//      c. These can be large and non-reusable components, but they don't have to be.
//          i. Structural components are sometimes quite small too.
//          ii. What matters is they are responsible for providing some sort of structure to applications such as pages or layouts.
//              1. These components might not be present in very small applications.
//              2. There will definitely be some structural components for apps that are bigger.

// Lesson 110. Prop Drilling

// 1. Prop drilling involves passing a prop (i.e. piece of data) down multiple component tree levels via multiple components until it reaches the component that needs it.

// Lesson 111. Component Composition

// 1. Component composition is where the parent component does not include a predefined child component in its jsx return template
//      a. Instead, it accepts children with the children prop.
//      b. Child components can then be passed into the parent by placing them between the opening and closing tags of the parent
//          i. Instead of making the parent component a self-closing tag, use opening and closing tags for the parent.
//          ii. Pass any child components between the tags.
//              1. These will be accepted into the parent component as chilren via the children prop.
// 2. Component composition works because of the children prop.
//      a. It makes the component highly reusable.
//      b. Essentially, with component composition, there is an empty slot created between the opening and closing tags of the component.
//          i. The slot can receive any component as a child, which will then be handled by the children prop on the parent component.
//              1. The parent can then use the child component via the children prop, in its jsx.
// 3. Component composition is the technique of combining different components either implicitly, by using the children prop (i.e. receive the component on the children prop by passing it between the opening and closing tags of a component), or explicitly, by passing components as props (i.e. passing them as standard props on the parent component, with any prop name that is chosen).
// 4. Component composition is used for two reasons/situations:
//      a. To create highly reusable and flexible components such as a modal component.
//      b. To fix prop drilling, and as a result, creating easy to view/read app layouts
// 5. Component composition works because components do not need to define any child components directly in their jsx.
//      a. They simply accept any components passed between their opening and closing tags as children via the children prop.
//          1. They don't have any predefined child component in their jsx return template, only the children prop.

// Lesson 112. Fixing Prop Drilling With Composition (And Building a Layout)

// 1. Prop drilling is eliminated by using component composition as mentioned in the previous lesson.
//      a. As a result, this makes for a nice way of building layouts in react applications.
//          i. Once implemented, the return jsx of the main app file will look much cleaner and easier to read.
//              1. The entire layout and component tree will be easy to view and understand.

// Lesson 113. Using Composition to Make a Reusable Box

// 1. As previosly mentioned, the application component tree is very readable in the main app file, when implementing component composition.
//      a. It's very clear what exactly is happening in the application.
//          i. The structure of the app is very easy to view and understand.
// 2. Component composition is beneficial for building better layouts, solving the issue of prop drilling, and also for creating reusable components.

// Lesson 114. Passing Elements as Props (Alternative to children)

// implicit vs explicit passing components (children vs props passing components)

// Instead of using the children prop in a component, and then passing the child component between the parent component's opening and closing tags, an explicit prop can be used as an alternative.
//      a. Instead of accepting the children prop on the parent in the jsx, pass the child component as a standard prop to the parent.
//          i. It does not use a reserved keyword (i.e. any name can be used for the prop name).
//      b. The parent component can be converted back to a self-closing tag for this approach to component composition.
// 2. The previous approach with the children prop, is implicitly passing in the child component into the parent via the children prop.
// 3. The approach of passing the child component as a standard prop on the parent component is a more explicit approach.
//      a. Multiple elements can be passed into same prop.
//          i. However, since this is essentially creating a new jsx element, it will require a parent wrapper (i.e. a fragment) to ensure the rule of rendering one jsx element per component is maintained
// 4. The explicit approach is a viable pattern when multiple jsx elements (i.e. components) need to be included/passed in the parent, by giving them separate prop names.

// vs code trick

// 1. In vs code, pressing ctrl + click, while hovering over a function/component name, will result in navigation to the origin of the function/component in the app.
//      a. Navigate from where a component is called into the place where it is actually defined using ctrl + click.

// Lesson 115. Building a Reusable Star Rating Component

// 1. For testing stand alone/reusable components in a react app, remove the index.css file, and app file imports on the index.js, and import the stand alone component.
//      a. Additionally, remove the app component from the root.render method and insert the stand alone component in its place.
//      b. This is an easy way to test a stand alone component without having to create a new project.
// 2. For creating an array of items in a component:
//      a. Enter js mode inside the jsx template.
//      b. Use Array.from() and specify an object with the length property as the first argument, and specify a length value.
//      c. This creates an empty array, which can then immediately be looped over by passing in a function as a second arguemnt (i.e. similar to a map function).
//      d. In this function, the first argument represents the current element being iterated over, which is not significant.
//          i. Simply implement an underscore as a placeholder variable.
//      e. The second argument the function receives is the index of the current element.
//      f. The function should then return a component or native html element with the index as the key of that element.
//              1. This will generate/create a copy of the specified component/element for each position in the array.
//      g. Remember that array indices are zero-based, therefore one should be added to the current index if the desired result is to start with position one at one.
//      h. Additionally, the length could be passed as a prop so that it can be set dynamically and independently for each component invocation.
//      i. Additionally, the length prop that is received in the component could contain a default value just in case a dynamic value is not passed to it.
//          1. Default values can be set on destructured props. I
//          2. If the prop is undefined it will be assigned to the default value.
// 3. For data that does not change in the application, it can be placed outside/above the function component.
//      a. The data will not be re-evaluated/regenerated each time the component re-renders.
//          i. This will improve the performance of the application.
//          ii. Example: inline style objects that do not depend on props.
// 4. If a variable depends on props or state then it will need to be included in the function component.
//      a. Props and state are only accessible inside a component.

// Lesson 116. Creating the Stars

// 1. When using an svg element in react,  it does not have any height by default.
//      a. It will need a wrapper element like a span tag, with preconfigured styles, to give the svg element height.
// 2. The role prop in html will assign the specified role to an html element.
//      a. This will give the element the same functionality as the tag that is specified in the role (e.g. <span role="button"> - span will have button functionality).
//          i. This is simply providing the html element with accessiblity to the functionality of the specified role.
// 3. Pass an event handler function or a state setter function from the component that defines and controls the state, into a child component that will update that state.
//      a. Define a prop with the same name as the native event listener that needs to be executed by the child component.
//      b. Pass the state setter function or the event handler function that executes the state setter function to that prop.
//      c. Extract that prop in the child component and set the native event listener to the event handler or state setter prop with the same event listener name on the appropriate html element in the jsx of the child component.
// 4. When passing in numbers as props to components, use curly braces to maintian the data type of number.

// Lesson 117. Handling Hover Events

// 1. It is common to make prop names for event handler functions that are passed down as props, by starting with the word "on". This is to keep the naming in line with event listener reserved keywords like onClick, onSubmit, etc.

// 2. Different event listeners that can be used together on a rating component:
//  a. onClick
//  b. onMouseEnter
//  c. onMouseLeave
//  d. Each of the above events could handle a different event handler, or update a different piece of state, depending on the desired result.

// Lesson 118. Props as a Component API

// 1. When building a reusable component, carefully consider what props the component needs.
//      a. It's always a good idea to think in terms of there being a 'creator' and a 'consumer' of a component.
//          i. That is, different entities, even if it's just yourself.
//          ii. The creator is the person building a component, and defining what props the component can accept.
//          iii. The consumer uses the component somewhere in the application, by specifying values for the props.
//      b. The reason for the separation between creator and consumer is that this mindset allows for thinking of component props as a type of public api for the component.
//          i. The component creator can choose what props the consumer is allowed to pass in.
//          ii. The creator is essentially defining the public interface of the component.
//          iii. The creator is choosing how much complexity of the component to expose to the consumer of the api.
//      c. The component is basically just an abstraction.
//          i. An abstraction that encapsulates a part of the ui and the associated logic into a component.
//                  1. This allows consumers to interact with that component via props.
//                  2. This is what creating a new component is typically about.
//      d. It is important to find a good balance on how many props a component should receive.
//          i. That is, how many props are necessary to enable configuration of a component effectively.
//          ii. Too few props might make the component not flexible enough, while too many props might make the component too complex.
//                  1. Too many props equals very complex code.
//          iii. If lots of props are needed in a component, be sure to provide default values where needed.

// Lesson 119. Improving Reusability With Props

// 1. It's important to provide good default values for props on components.
//      a. The default values can be provided during destructuring of the props.
// 2. Sometimes consumers like to have more control over the styling of a component.
//      a. Therefore, it may be useful to have the component receive a className prop.
//          i. This will allow the consumer to pass in a className to add styles.
//          ii. By default, it should just be an empty className.

// and that is to allow the consumer to set a default rating.

// 1. Technically, state should never be initialized from props.
//      a. However, this is only true if the state variable needs to stay in sync with the passed in prop,
//          i. That is, if the state value should be updated when the prop value is updated.
//      b. However, for some instances, the prop data is only being used as a kind of 'seed' data.
//          i. The data is just required for the initial state, and it is unimportant following that initial assignment to the state variable.
//          ii. In these cases, it is not a problem to initialize state based on a prop.
//          iii. This was more relevant in the old react apps before hooks.

// Lesson 120. PropTypes

// 1. With proptypes, specify the type of value that is expected to be passed in for each of the props, by the consumer of the component.
//      a. Alt defintion: With proptypes, the type of value (i.e. data type) expected for a prop can be set.
//          i. The consumer of the component will then be made aware of any incorrect data types they may enter for the props of a component.
//      b. This is called 'type checking'.
//      c. Check each type of the prop and specify what type is required.
// 2. TypeScript should be used instead of js if this is a real concern.
// 3. How to use proptypes:
//      a. Import the proptypes object from the proptypes package.
//          i. Create-react-app already comes with this package pre-installed.
//              1. It is a separate package from react itself.
//      b. Specify the proptypes property.
//          i. It's important that it is written in lowercase.
//          ii. Import proptypes with a capital p but the property name is with a lowercase p.
//      c. Then for each of the props, specify the type.
//      d. Use the proptypes object that was imported.
//      e. Use one of the validators that is inside the proptypes object (e.g. strings, numbers, func, arrays, objects, bool).
//          i. These validator will provide warningsto allow other developers to catch bugs.
//      f. These propTypes are declared outside of the function component they are used in.
//      g. Chain the isRequired property, which will then make the prop required.
//          i. If props have default values for their props then the isRequired property is not necessary.
// 4. Adding proptypes is a good way of documenting components because the type definition makes it obvious what kind of data is expected.
// 5. Proptypes are useful for highly reusable components that are used across multiple applications.

// Lesson 121. CHALLENGE #1: Text Expander Component
