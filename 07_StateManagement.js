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

// the option values inside a select tag can be chosen to set the select value????????????
// by using the event object and selecting the target and then value, i.e. e.target.value


Well, basically we will just create a new items

which is then sorted by that criteria.

So we are not going to manipulate the original items array.

That state should stay unchanged.

Instead, we will now use again, derived state

because sorting one array can of course be computed based

on that initial array.

That makes total sense, right?

So once again, we will not create a new state variable here

because that's totally unnecessary.

We will simply create a new variable, and here,

actually a let variable.

So sorted items and we're using a let

so that now we can simply do a couple

of simple if statements.

So if sortBy is equal to input, then this is the default,

right?

And so then in this case,

we can simply say that sorted items should be just equal

to the original items.

So if I do this now,

then we get an error because sorted items is then just

this empty variable that React doesn't know how to render.


All right, and now let's write one if

for the other two cases.

So if or sort by change is, that's a description,

then we will want to sort our items actually.

So sortedItems will then become items.

And now first we use slice.

Because with this we basically take a copy

of the array and that's very important

because the sort method is a mutating method.

And so if we didn't do this

then the items would actually get sorted as well.

So we don't want that.

So we use slice dot sort.

And now here I will just write the code because again,

I already explained exactly how this method works

in the review of JavaScript section.

Now in this case, since we want to sort alphabetically,

we can use the localCompare method.

So we want to take a, which is basically one object

of the array, and then we want to take the description

of that, which is one of the properties of each object.

And then since this is a string, we can call localCompare.

And then here we simply pass in another string

which is b dot description.


And so something very similar here

sortedItems is going to be equal to items

Taking a copy dot sort .

And then a and b which are basically two objects

of the array which are being compared.

And then since we want to order by the packed status

which is a bullion,

we need to first convert that to a number.

So a dot packed minus number b dot packed,

and that's it.


We just implemented this simple feature

but also a very common feature simply

by using the power of derived state.

So again, we didn't create any new piece

of state for the sorted items.

The only state that we need is the sortBy state.

So that React actually has at all times the value

of this input field right here.

And then based on that, we simply create this derived state

of sorted items, which then

in the end is what we render onto the user interface.

// Lesson 87. Clearing the List

// Lesson 88. Moving Components Into Separate Files

we also have to export this function from here.

And remember that in JavaScript,

we can export in two ways.

So we can have named exports,

which would simply be this.

So with this, we would create an export called logo

which we would then have to import

with exactly that name

into the other file,

so into the file where we need it.

But usually, in React apps,

what we do is to use a default export.

So export default, just like this.

And then of course, now if we try to reload this,

we will get an error that, well, not this one.

Yeah, right here.

So we see that the logo is not defined.

And so of course,

that's because now we have to import it right here.

So import.

And here, actually we can use any name that we want.

So because we used a default export.

But of course, we will still call it logo here.

So import logo from,

and then simply the path to that file.

And yes.

And again, we could indeed change the name here to X,

for example, and then here as well,

So it's not enough

to just include it one time anywhere in the code.

You really have to include the parts of React

that you need in each single component file.


it's actually time to do it automatically.

So let's again select all of this.

We can even click this triangle here

to collapse the function.

And so then we can select all of it

and then right click here,

and then click on refactor.

And so now here, this gives us the option

to move this function into a new file.

So let's click that.

And you see that a brand new file

with the name of packing list was created.

So VS Code automatically took this function here

and then created a new file

with this exact same name.

And it also automatically imported

all the parts that we need inside this function.

So we have useState and we also have item.

Well, this actually doesn't make a lot of sense

at this point

because the item is still here.

So that's actually not ideal,

but we will fix that in a moment.

So what matters here for now

is that VS Code automatically created this new file,

placed this new component here

and also exported it.

Now it's actually using a named export.

So you can see here

that it's importing it in this other way.

So this is how you do a named import.

But again, we usually in React development,

do default exports.

But of course, the other way is also perfectly fine.

I will just change it here.

Export default.

And then here, I need to change the way I import it.

So getting rid of these curly braces.

we now have one component per file

which makes our component here

a little bit easier to manage.

So then there's not so much scrolling up and down,

but instead,

well, we can develop basically each component

in isolation in its separate file.

Now taking it one step further,

we can also move each of the components

into a new components folder.

So components,

and then let's select all of them actually.

So everything except for index.js

which is not a component

and our CSS file.

Grab them here.

And now we only have one problem

which is the app file cannot be found here in index.js.

So here we need to now fix this path

to components/App.

n the same folder as App.js.

And with this,

we actually finished this project.

// Lesson 89. EXERCISE #1: Accordion Component (v1)

And then here, let's just change this one to title.

So that should work.

And yeah, and with this let's go back to the original

because now we need to start thinking about state.

So remember how we can open and close

each of these boxes here individually,

which basically means that each of these boxes

holds their own state.

So whenever we click here, you see that the UI changes.

So that's the most fundamental thing

that we need to think about whenever the UI changes.

So whenever there is some update here happening in the UI

it means that we need a piece of state.

Now, each of these items here operates

completely independently from the other ones.

So if I open this one here

nothing happens to the other two.

So I can open all of them at the same time

or I can have all of them close, meaning that

again, each of them really operates in an independent way

which means that each of them must hold their own state.

So again, that's because this one can be open

but this one as well.

And so what that means is that we should now define

a state variable in each of these items.

// Lesson 90. The "children" Prop: Making a Reusable Button

So instead of passing in this side here, this emoji,

and the text, which are basically the content

here of this button element,

what if we could simply pass the content

right into the button as well?

Or in other words, what if we could pass simply some JSX

into the component and then the component could use that JSX

and simply display it?


Well, we can actually do that in React.

So let's come up here, and notice how up until this point

all our components have always been self-closing.

So we never had, like this,

and then any content, and then closed the element.

So we never had this before, but in fact,

we can do exactly this.

So just like we do with HTML elements

where we have an opening tag,

then some content, and then a closing tag,

we can do exactly the same with React components.

So basically now it is time to give the button element

access to whatever content we wrote

into the opening tag and the closing tag of the react component

And so that's where, finally,

the children prop comes into play.

So, the children prop is a prop that each React component

automatically receives.

And the value of the children prop is exactly

what is between the opening

and the closing tag of the react component.

pass the children prop to the hoc component which is a predefined/reserved keyword in react.

enter js mode and pass the children prop into the curly braces in between the opening and closing tags of the element.


Because, this content here of this element

would simply be passed as the children prop into the button.

And then here we use that children prop

and display all that content right here

inside this HTML button.

And with this, we just gained a brand new

and really, really important tool

that is used all the time in React.

It's actually one of its most useful features, I would say.

And the reason for that

is that it allows us to make our components truly reusable.

So with this children prop, I am now able to pass

whatever content I want into this button element.

And the button component doesn't even need to know

what content this is going to be.

All it does is to take the children,

so all the content and all the JSX that we just passed in,

and will simply then render it inside this button component.

And so because of that, we can think of the children prop

as a hole that can be filled by us passing in the content

into that component.


So, by using the children prop in the button component,

we basically left an empty hole

right in the component that we could then fill

with any JSX markup that the component receives as children.

But then the question is, how do we pass in these children?

Well, when we include the button component in some JSX,

instead of immediately closing the element,

we can write some more JSX into that element.

So just like we can write any HTML markup

inside other HTML elements, right?

So just like an HTML,

we can write anything that we want between the opening

and the closing tag of the component that we are using.

So, in this example, this piece of JSX creates the elements

that are then the children of the button component,

and they will then be accessible inside that button

as props.children.

So that's why we say it is the children prop.

So, basically, by defining child elements like this,

we are passing them into the button

just like we can pass in any other prop.

The difference is in the way

in which we specify other props.

So, the more regular props, and this one.

So by passing in content

between the opening and the closing tag of an element

we basically fill the hole that we left

in the component by using props.children

in the JSX of that button, so of that button component.

So, if we think about this,

the children prop is really an ideal way

of making reusable and configurable components.

Especially when it comes to the content of the component.

So for example, let's say that we wanted to create

a second, similar button,

but with some other emojis and text.

Well, now that we know about the children prop,

that is really easy.

All we have to do is to pass in some different JSX

and then the button gets completely different content.

And this technique is really, really useful

for building generic components that do not know

about their content before actually being used.

Like, for example, a model window, a generic slider,

or simply a generic button like the one that we just built.

So, again, this button component had absolutely no idea

about the content that it was receiving,

and therefore about the content that it was displaying.

And so this is really amazing

to create generic and reusable components.

So using the children prop like this

is really an extremely powerful technique

that you will need to master as you learn React.

// Lesson 91. More Reusability With the "children" Prop


And then again, the children prop.

Which each component, remember,

automatically receives as soon

as we pass in some content between the opening

and the closing tag when we call.

So, when we use the component.

So, this part here is then that empty hole

that we talked about in the last lecture.

And this empty hole can then of course be filled

with whatever we pass in.

And again, whatever we pass in

between the opening and the closing tag of step message.


And so now we have again created a reusable component here

that we can use anywhere in our application,

and give it any content that we want.

And it will always, as you see,

display this step here with the number that we gave it,

and then whatever content that we passed into it.

So into the component itself.


and then the content itself here with the children prop.

So, if we always just want to pass in a string

this could, of course, also be a normal prop.

But since sometimes we want some other content

like here with some actual JSX, like this span element here.

Well, then we should really take advantage

of the children prop.

// Lesson 92. EXERCISE #2: Accordion Component (v2)

which is the currently open item, and so that means

that we now need to move our state from the item

onto here, the accordion.


setting a toggle conditionally in a setter function. a parent component passes down state and setter to child. Child creates standard js boolean var which is determined by current state variable compared to current element

onClick in child updates state variable via setter function, but only if the current js boolean var is false, and this condition is written inside the setter function return value
should current value of state be used in comparison????

// Lesson 93. CHALLENGE #1: Tip Calculator

create two pieces of state in the direct parent component of two sibling components that are identical but indepenedent with independent state, a piece of state is created by the direct parent for each sibling/child component.

So that's percentage1 plus percentage2,

divided by two,

and then the whole thing divided by 100.

Because here the percentages are these actual values.

So between 0 and 100

but then we need to calculate them between zero and one

because, well, that's how we calculate percentages.


And instead by having it as derived state

each time that the component rerenders

as the state is updated, this value will be calculated again

and can then also be rendered here onto the UI.