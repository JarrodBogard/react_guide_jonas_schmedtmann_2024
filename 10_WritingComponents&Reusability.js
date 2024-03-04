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

//// REVIEW ////

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

consider data such as inline style objects that do not depend on props. if they do depend on props then they will need to be included in the function And so, now I actually need to take this object here

back into the component because now we will specify

some properties which will depend on the props.

And so the props are, of course, only accessible

inside the component.

So, then this object will have to live

inside the component as well.

// Lesson 116. Creating the Stars

// 1. When using an svg element in react,  it does not have any height by default.
//      a. It will need a wrapper element like a span tag, with preconfigured styles, to give the svg element height.
// 2. The role prop in html will assign the specified role to an html element.
//      a. This will give the element the same functionality as the tag that is specified in the role (e.g. <span role="button"> - span will have button functionality).
// 3. Pass an event handler function or a state setter function from the component that defines and controls the state, into a child component that will update that state.
//      a. Define a prop with the same name as the native event listener that needs to be executed by the child component.
//      b. Pass the state setter function or the event handler function that executes the state setter function to that prop.
//      c. Extract that prop in the child component and set the native event listener to the event handler or state setter prop with the same event listener name on the appropriate html element in the jsx of the child component.

// Lesson 117. Handling Hover Events

// 1. It is common to make prop names for event handler functions that are passed down as props, by starting with the word "on". This is to keep the naming in line with event listener reserved keywords like onClick, onSubmit, etc.

// 2. Different event listeners that can be used together on a rating component:
//  a. onClick
//  b. onMouseEnter
//  c. onMouseLeave
//  d. Each of the above events could handle a different event handler, or update a different piece of state, depending on the desired result.

// Lesson 118. Props as a Component API

// 1. When building a reusable component, carefully consider what props the component needs.
But in any case, it's always a good idea

to think in terms of there being a creator

and a consumer of a component,

so, different entities, even if it's just yourself.

So, basically, the creator

is the person building a component,

and defining what props the component can accept.

While the consumer uses the component

somewhere in the application,

by specifying values for the props.

Now, the reason for the separation

between creator and consumer,

even if you're just working on your own,

is that if we have this mindset,

we can think of the component's props

as the public API of the component.

So, as a component creator,

when we choose what props

the consumer is allowed to pass in,

we are essentially defining

the public interface of our component.

And, at the same time, we are choosing

how much complexity of the component

we want to expose to the consumer of the API.

Because, in the end,

a component is basically just an abstraction.

So, we are encapsulating a part of the UI

and the associated logic into a component,

and allow consumers

to interact with that component via props.

That's basically what creating a new component is.

But, anyway, when we decide about

what props to allow in a component,

we need to find a good balance on how strict we want to be.

So about how many props we want to enable for configuration.

// too few props 
but it might also make the component not flexible enough,

or maybe even straight out, useless for the consumer.

// too many 

But the point is that exposing so many props,

might make the component

way too hard to use for the consumer,

because we're exposing too much complexity.

And speaking of complexity,

you'll end up with very complex code,

if you want to allow so many props.

So, when deciding on the right API for your components,

try to strike the right balance

between too little and too many props,

and a balance that works well,

for both the creator,

and the consumer of the component,

based on the project's needs.

Now, if for some reason

you really need to expose so many props,

make sure to at least provide

some good default values for many of them.

// Lesson 119. Improving Reusability With Props

it's a good idea to provide default values.

So, we already learned that we can do that

by providing the default values during destructuring.


Now, sometimes consumers or users of the component

want to have even more control over the styling.

So, sometimes it's a good idea to allow users

to pass in a class name.

accept the class name,

and by default, it will just be an empty class name,

and then, we just edit here to the overall container.

So class name

and then, class name like this.

So, for example, if the user wants to somehow change

the font style, they can do that right inside

this class name that they pass in,

and so, that class name will then be added here.

It will then change the font family of our component.


So really, really important to always give default values.

is to just check if messages.length

is equal to the maxRating.

And if that is the case, then that means

that a messages array was passed in.

And if not, then we just do exactly what we had before.


// and that is to allow the consumer to set a default rating.

So basically, we will initialize our rating state

with whatever default rating comes into the prop.

And if that prop is not specified,

then that's simply exactly the zero that we had before.

Now, maybe you heard or read that we should never initialize

state from props.

However, this is only true if you want the state variable

to stay in sync with that passed in props,

or in other words, if you want the state value

to update in case that the prop value is also updated.

However, that is clearly not the case here.

So, we are really only using this defaultRating here

basically as seed data,

so really just as the initial state,

and we don't care whether this value here

maybe changes somewhere else in the application,

so outside this component.

And, therefore, this is perfectly fine and normal to do.

All right, so it's really no problem to initialize

your state based on a prop.

So this was more relevant in the old days of React

before we had hooks, but now,

that's really no longer a problem.


For example, we could say that

we want the colors here to change according to the rating,

or we could allow for some different spacing

between the stars.

We could also allow the consumer to specify on

which site this text label here appears.

So maybe they want it on the left or at the top

or at the bottom here,

// ???

passing in a setter function as a prop from parent to the ratings child component 

an onSetRating

handler.

And so, in this case, what this component wants to pass in

is simply this function right here.

And this one by default doesn't need any

default value

And now, it's very simple.

All we have to do here is, on the handle rating,

is to not only set the internal rating,

but also to basically set the external rating.

So, we can now just say onSetRating.

also set that external rating.

And with this, we now gave the outside test component,

basically, the ability to get access to that internal state

right inside this component.

Okay, and now, if we change this here,

you see that it did, indeed, get updated to seven.

So, this additional configuration,

so this final prop that we updated here,

or that we actually added here to our component,

was really, really important

because without this, this component would really just be

presentational in the end.

// Lesson 120. PropTypes

So with proptypes, we can basically specify the type

of value that we expect the consumer

of the component to pass in for each of the props.


For example, we can define that this max rating

here really must be a number and nothing else.

And this is what we call type checking.

So again, checking each type of the prop

and specifying what type they need to have.

Now, if you really care about this, you should actually just

use TypeScript instead of JavaScript.



and for that we import the proptypes object

from the proptypes package.

So there's no need to install this proptypes package here

in this case because Create-React-App already comes

with this package pre-installed.

But we do need to import it here.

So just as we did here, because it is actually

a separate package from React itself.


Now, okay. And now in order to do the type checking,

let's use our component.

So that's star rating.

And then on this component

we specify the proptypes property.

And here it's important that we write it with a lower case.

So proptypes net then here we then assign

those proptypes an object.

So, again, we imported proptypes here with the capital P

but the property name here is with this lowercase p.

Okay. And now here for each of the props,

we can specify the type.


And then now we actually use that proptypes object

that we imported in the very beginning.

And so now all we need to do is to use one

of the validators that is inside this object.

So here we can simply say proptypes.number, and that's it.


And so then here we get this problem or this warning here

which says invalid prop of max rating.

And that's because it has the type

of string instead of the expected number.

And it is these warnings right here that will then

allow other developers to catch bugs like this


these propTypes are declared outside of the function component they are used in


Now, we can also chain the is required property here

which just as the name says

will then make this prop required.

So somewhere here, we probably have one without.

Yeah, so this one doesn't have the max rating.

And then immediately we get this warning down here.

All right, but in our case, we actually

have some default values

for all of our props already defined.

And so it doesn't make sense then to mark

any of them as required.

So by default, you shouldn't use this one.

So instead just use default values

for all or most of your props.


And so we basically have one of these validators here

for all the types that we can imagine. strings arrays, numbers, func for functions, objects, etc, bool for Boolean, 


So proptypes and this one is a func,

which stands for function.


And as you see here, adding proptypes is also a nice way

of documenting our components because this type

definition right here makes it really obvious what kind

of data we are expecting.

this was mostly just to show you

that you can use this yourself

in case that you have some component like this

which you want to make highly reusable

across multiple applications

or even just inside one application.

// Lesson 121. CHALLENGE #1: Text Expander Component

We will then usually have the text directly in here,

for example, instead of relying on the props

and on default values of those props.

But, again, here we are striving for maximum reusability.


And, again, this is necessary,

because we want this component here

to be 100% reusable and standalone.

So, it cannot depend on any external styles.


So, this text expander component is now highly reusability

and it hides all the complexity from the user,

so from the consumer of this component,

which again is really nice and really important.

So, as the developer of this component,

then we chose the public API, basically,

and therefore allowed the user

to customize it to their needs.