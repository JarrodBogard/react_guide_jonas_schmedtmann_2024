// Lesson 78. What is "Thinking in React"?

// 1. Thinking in React means having a good mental model of how and when to use all the React tools.
//      a. Tools like components, state, props, general data flow, effects, and many more.
// 2. It's also about thinking in terms of state transitions rather than in element mutations.
// 3. Thinking in react can be viewed as a process, which can help with building apps in a more structured way.
//      a. The first step in this process is to break the desired ui into components and establish how these components are related.
//          i. Establish the component tree.
//          ii. Consider reusability and composability of components.
//      b. Build a static version of the application, without any state or interactivity.
//          i. By doing this, most of the coding is completed upfront before having to worry about state and interactivity.
//      c. The third step is to consider state.
//          i. Decide what state is needed (i.e. what types of state) and where to place each piece of state.
//      d. Finally, consider how data flows through the application.
//          i. This includes thinking about one-way data flow, child-to-parent communication, and the way global state should be accessed.
//      e. These points, three and four, is what is collectively called state management.
// 4. Thinking in react means knowing:
//      a. How to break up ui design into components.
//      b. How to make components reusable.
//      c. How to assemble a user interface from reusable components.
//      d. What state is needed and where.
//          i. Which components should control state.
//      e. How does data flow through the application.

// Lesson 79. Fundamentals of State Management

// 1. Use the useState function to create multiple pieces of state in order to track data that changes over the life cycle of an application.
// 2. Think of state management as:
//      a. Deciding when to create new pieces of state.
//      b. What types of state are needed
//      c. Where to place each piece of state inside the code base
//      d. How all the data should flow through the app.
// 3. Think of the analogy that state management is basically giving each piece of state (i.e. data) a 'home' within the code base of an app.
//      a. As an application grows, the need to find the right home for each piece of state starts to become more important.
//          i. Whether that's where the piece of state was first needed, some parent component, or even global state.
// 4. In React, each piece of state is either local state or global state.
//      a. Local state is state that is only needed in one component or a few different components, like child or sibling components.
//          i. Simply create a piece of local state using the useState function inside a certain component.
//          ii. That piece of state is then only accessible to that exact component and to its child components as needed, by passing that piece of state using props.
//          iii. An example of local state might be the input text in a search bar.
//                  1. Likely only that component needs to know about this data, therefore, this is local state (i.e. state local to that search bar component).
//      b. Global state is state that many different components in the app might need access to.
//          i. When a piece of state is defined as global state, that piece of state will become accessible to every single component in the entire app.
//              1. It's shared between all components, and therefore, it can also be called shared state.
//          ii. Global state can be defined using react's context api or also an external global state management library like Redux .
//          iii. An example of global state is a shopping cart on a website.
//                  1. That piece of data is used all over the webpage/app.
//                      a. Many of the components in the app need access to the shopping cart state.
//                          i. Therefore, it makes sense that it is global state.
// 5. The distinctions between local and global state will matter more in large applications.
// 6. One important guideline in state management is to always start with local state and only move to global state if/when needed.
// 7. Using state starts with realizing when state is needed (i.e. when data needs to be stored and managed).
// 8. Questions for when to implement state:
//      a. Will this data change at some point in time?
//          i. If the answer is no, then all that is needed is a regular variable like a const variable.
//      b. If the data does need to change in the future, the next question is, is it possible to compute or to calculate this new data from an existing piece of state (i.e. data) or props (i.e. data)?
//          i. If the answer is yes, then the state should be derived from the current state variables (i.e. derived state).
//              1. Basically, calculate the new state based on an already existing state or prop.
//          ii. However, most of the time state cannot be derived.
//      c. If the state cannot be derived, the next question is, should updating the state/data cause the component to re-render?
//          i. Updating state variables - via the state setter function extracted from the useState hook - always re-renders a component.
//              1. There is actually something called a ref which persists data over time like regular state, but does not re-render a component.
//                  i. It's basically a special type of state.
//          ii. If the answer is yes to re-rendering the component when the data changes, then a new state variable should be created via the useState function.
//                  1. Place the new piece of state into the component that is being built.
//                      a. This is the guideline for always starting with local state.
//      d. With all these questions answered, the decision making process of when to create state has been completed.
// 9. Summary:
//      a. Most of the time just create a new piece of state using the useState Hook.
//      b. If the state variable just created is only used by the current component, then simply leave it in that component.
//          i. However, the state variable might also be necessary for a child component.
//              1. In that case, pass the state down into the child component by using props.
//      c. If the state variable is needed in sibling components, or in the parent component of the current component, move that piece of state to the first common parent component for all components that need that state.
//          i. This is called lifting state up.
//      d. If the state variable is needed throughout the entire component tree, make it a piece of global state.

// Lesson 80. Thinking About State and Lifting State Up

// 1. In react state should not be mutated.
//      a. Example: New items cannot simply be added to an array list (i.e. a piece of state), by pushing items onto the array.
//          i. This would mutate the array list (i.e. it would mutate the state of the array).
//          ii. The solution is to create a brand new array which contains all the current items, plus, the new item.
//                  1. Return a new array, spread in the current items, and then add the new item.
//                      a. When using the state setter function, the current state can be accessed by passing a callback function to it.
//                          i. It then receives an argument, which is the current state.
// 2. Commonly, event handler functions that update a piece of state are placed in the same component where the state variable is defined.
// 3. Anything can be passed as a prop, including functions.
//      a. Commonly, a state variable and an event handler function for updating that state will be defined in a single component.
//      b. The event handler function will then be passed as a prop to any child components that need that event handler.
//      c. The naming convention is to name the event handler with the first word being "handle" and the following words being a description of the action/event that is to be executed by the event handler.
//          i. When passing event handlers as props, it is naming convention to remove the "handle" portion and replace it with "on".
// 4. Lifting state up is the technique of moving a piece of state up to the first common parent component of all the components that need access to that piece of state.

// Lesson 81. Reviewing "Lifting Up State"

// 1. Lifting state up simply means to place some state in a component that is a parent of all components that need that piece of state.
//      a. To provide the child components with access to the piece of state, pass the state down to the child components as props.
// 2. By lifting state up, state can be successfully shared with multiple components in different position in the component tree.
// 3. This pattern is needed as a direct consequence of react's one-way data flow.
// 4. Data flows in one direction in react apps, which is why props are required for child components to have access to data.
//      i. Props allow components further down the component tree to access data from their parent components.
//      ii. Passing a useState setter function as a prop to a child component is a common technique of child-to-parent communication.
//          1. It is also called inverse data flow because it allows a child component to update state in the parent component via the setter function passed to it.
//              a. It is inverse, because usually data only flows down, but this is a way of making data flow up.
//                  i. It is not truly flowing up but it is a workaround for updating the parent's state variable.

// Lesson 82. Deleting an Item: More Child-to-Parent Communication!

// Lesson 83. Updating an Item: Complex Immutable Data Operation

// 1. A controlled element is an element that has its value defined by some state variable.
//      a. It also has an event handler which listens for an event to occur and then updates the state variable according to the changes made by the event.
// 2. To update an object in an array:
//      a. Loop over the array using the map method.
//      b. For each item of the array, use a conditional that checks for some validating feature of the current item such as an id.
//          i. The current item with a matching id will be isolated for updating.
//      c. Create a new object by using curly braces.
//          i. Spread the current item/object into the new object.
//      d. Set the object's properties that are to be updated to their new values.
//      i. All the other objects will simply return their current item/object in the new array.

// Lesson 84. Derived State

// 1. Derived state is simply state that is computed from another existing piece of state or props.
// 2. Creating additional state when derived state could be used can create issues:
//      a. State can become out-of-sync.
//      b. Unnecessary re-renders will occur.
// 3. A state variable that is used to derive other variables is commonly called a 'single source of truth'.
// 4. Whenever one state can easily be computed from another, using derived state is preferred.
//      a. Don't create two state variables if only one is needed.
// 5. IMPORTANT: If an array contains a list of objects with a prop that needs to be summed/subtracted to derive the total of all the items in the list, use the reduce method to simplify the calculation.

// Lesson 85. Calculating Statistics as Derived State

// 1. Use conditional early returns to prevent renderings/calculations from being performed when no data/state is currently available in a component.
//      a. If an array has zero length, which means no items/elements, then work should not be done on that array inside a component.
//          i. Especially, if the purpose of the array is for rendering a list inside the component.
//          ii. Example: If there are no items, then return, and in all other cases perform the rest of the logic of the component.

// Lesson 86. Sorting Items

// Lesson 87. Clearing the List

// Lesson 88. Moving Components Into Separate Files

// 1. In vs code a component function can be highlighted and right-clicked and then the refactor option can be selected.
//      a. The option to move the function into a new file can be selected, which will take that component and its necessary imports and place them into a new file.
//      b. The necessary exports will be included as well in other files.
//          i. The components and other functions will be exported and imported as named functions.
//                  1. Usually in react development, default exports are implemented.
//      c. Ensure all pathnames are updated and correct for all imports.

// Lesson 89. EXERCISE #1: Accordion Component (v1)

// 1. Whenever there is some update happening in the ui, it means that a piece of state is needed.
// 2. When separate component instances of the same component function operate independently of each other, it means that each of them must hold their own state.
//      a. A state variable should be defined in each instance.

// Lesson 90. The "children" Prop: Making a Reusable Button

// 1. Just like html elements that have opening and closing tags, with content in between, the same can be done with react components.
//      a. This gives parent components access to the child components content via the children prop.
//          i. Actually, any content including native html elements or text can be passed as children to the parent component in this way.
// 2. The children prop is a prop that each react component automatically receives.
//      a. The value of the children prop is exactly what is between the opening and the closing tag of the react component.
//          i. Pass the children prop to the parent component (i.e. higher order component).
//              1. 'Children' is a predefined/reserved keyword in react.
//              2. Enter js mode and pass the children prop between the opening and closing tags of the jsx element of the parent component.
// 3. This allows for making components truly reusable.
//      a. Via the children prop, any content can be passed into a parent component.
//          i. The parent component does not need to know what the content of the children are.
//                  1. All it does is take the children - all the content and jsx that is passed into it - and render it inside its own jsx template.
//          ii. The children prop can be thought of as an empty space inside of a highly reusable parent component that can be filled with any content that is needed for a component instance of that reusable component.
//          iii. (By defining child elements between the opening and closing tags of a parent component - using html and jsx markup including other child component instances - elements can be passed as props to the parent component just like any other prop is passed in via a self-closing component???).
//                  1. The difference is in the way in which other props are specified.
//  4. The children prop is an ideal way of making reusable and configurable components.
//      a. Especially, when it comes to the content of the component.
//      b. Examples: a modal window, a generic slider, or simply a generic button.

// Lesson 91. More Reusability With the "children" Prop

// Lesson 92. EXERCISE #2: Accordion Component (v2)

// 1. (How to set a toggle via a useState setter function:
//      a. The parent component passes down the necessary state variable and setter function to the child component via props.
//      b. The child component creates a regular js boolean variable.
//          i. The value of the boolean variable is determined by comparing the current state variable to the current element the child component receives.
//      c. An onClick handler function in the child component updates the state variable via the setter function, but only if the current js boolean variable is false.
//          i. This condition is written via a ternary operator inside of the setter function return value, using the current state value and comparing it to the current boolean variable value.???)

// Lesson 93. CHALLENGE #1: Tip Calculator

// 1. Sometimes it is necessary to create two pieces of state in the direct parent component of two sibling components that are identical, but indepenedent, and require separate state.
//      a. A piece of state is created by the direct parent for each sibling/child component.
// 2. By having derived state from a state variable, each time that the component re-renders as the state is updated, the derived state value will be calculated again and the updated value will also be rendered onto the ui.
