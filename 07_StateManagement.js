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

So as you already know, we can use the useState function

to create multiple pieces of state in order to track data

that changes over the life cycle of an application.



But I like to think of state management

as deciding when we need to create new pieces of state,

what types of state we need,

where to place each piece of state inside our code base,

and also how all the data should flow through the app.

And to summarize all this,

I like to use the analogy that state management

is basically giving each piece of state

a home within our code base.

But as an application grows, the need to find the right home

for each piece of state start to become really important,

no matter if that home is the component

where we first need that state,

some parent component or even global state.



So in React, each piece of state

is either local state or global state.

So local state is state that is only needed in one component

or any few different components,

like child or sibling components.

We simply create a piece of local state

using the useState function inside a certain component.

And that piece of state is then only accessible

to that exact component and maybe to its child components

if we pass the state using props.

Now going back to our Udemy app,

an example of local state

might be the input text in the search bar.

So probably only that component

needs to know about this data.

And therefore, this is local state,

so state local to that search bar component.

Now about global state,

this is state that many different components

in the app might need access to.

Therefore, when we define state as being global,

that piece of state will become accessible

to every single component in the entire app.

It's shared between all components,

and therefore, we can also call this shared state.

In practice, we can define global state

using React's Context API

or also an external global state management library

like Redux that you might have heard of.

Now, in this Udemy app,

one piece of global state is the shopping cart.

So that piece of data is used all over the place here.

So all these components need access

to the shopping cart state,

and therefore, it makes sense that this is global state.

Now, this distinction between local

and global state will matter more in large applications.



And in fact, one important guideline in state management

is to always start with local state

and only move to global state if you really truly need it.




So it all starts with you realizing

that you need to store some data.

Now when this happens, the first question to ask is,

will this data change at some point in time?

And if the answer is no,

then all you need is a regular variable,

so probably a const variable.

However, if the data does need to change in the future,

the next question is, it is possible to compute

or to calculate this new data

from an existing piece of state or props?

If that's the case, then you should derive the state.

So basically calculate it

based on an already existing state or prop.

And this is a pretty important concept,

so there is a separate lecture

on derived state later in the section.

However, most of the time you cannot derive state.

And so in that case, you need to ask yourself

whether updating the state should re-render the component.

Now, we have already learned before that updating state

always re-renders a component,

but there is actually something called a Ref

which persists data over time like regular state,

but does not re-render a component.

So it's basically a special type of state

that we will look at later.

Now, most of the time you actually do want state

to re-render the component.

And so what you do is to create a new piece of state

using the useState function,

and you then place that new piece of state

into the component that you are currently building.

And so that's the always start with local state guideline

that we talked about in the previous slide.

And with this, we have completed

the decision process of when to create state.

So again, most of the time you will just create

a new piece of state using the useState Hook,


So if the state variable that we just created

is only used by the current component,

then simply leave it in that component, and you're done.

So that's the end of the process right there.

However, the state variable might also be necessary

for a child component.

And in that case, simply pass the state down

into the child component by using props.

So easy enough, right?

Now, if the state variable is also necessary

for one or a few sibling components

or even for a parent component of your current component,

it's time to move that state

to the first common parent component.

And in React, this is what we call lifting state up.

And this is another one of those super important topics

which we will actually start using in practice

in the next video.

Now finally, the state variable might be needed

in even more than just a few siblings,

so it might be necessary

all over the place in the componentry.

And what does that sound like to you?

Well, that's right, that sounds just like global state.


// Lesson 80. Thinking About State and Lifting State Up

So, remember that in React,

we are not allowed to mutate state.

So, we cannot do this.

So, we can not simply push the new item

into the items array

because with that, we would be mutating.

So, we would be changing this item's array right here.

And again, that's really not allowed in React.

And so, the solution here

is to create a brand new array

which contains all the current items, plus, the new one.

So, let's return a new array

and then, in there, we simply spread the current items

and then we add another item

which is simply called item.

So, the item that we are receiving here.

is that actually, we do not need these items

in this current component.

The only goal of the form component

is to add new items to this array,

but not to render it.

Instead, remember that who renders these items

is actually the packing list component.


Well, we cannot pass it as a prop

because the form is not a parent component of packing list,

it is simply a sibling component.

Instead, we now need to use a technique

that I mentioned before,

which is to lift up state.

So, what we're going to do now

is to take this state here,

so this line of code,

and we will move it to the closest common parent component.

So, which one is that?

Well, it's simply the app component, right?

So, this component is both, a parent of the form

and of the packing list

which are the two components which need this state.

And now let's take care here

of this handleAddItems function.

So actually, I will grab this entire function

and move it here.

And so now, all we have to do

in order to enable the form to update the state

is to pass in this handleAddItems function.

Let's create a new prop

and kind of a convention is to call this now onAddItems,

handleAddItems.

So, we could create a prop called handleAddItems

and then pass it to function with the same name,

but it's kind of a convention for it to be like this.

So, it then becomes a bit more readable,

like onAddItems, call handleAddItems,


this is what happened.

So, we now have our handleAddItems function

right here in the app,

which is exactly where the piece of state also lives.

So, where we have the home of the items state.

And so all the logic about updating that state

is here in the same component.

However, it is the form that is actually responsible

for creating new items.

And so, therefore, we need to give this component,

so this form component here,

access to a function that can update the state.

And so, that function is handleAddItems.

So, as I mentioned before,

we can actually pass anything as a prop.

And so, that includes functions.

So, here we pass in handleAddItems as a prop

and we call that prop onAddItems,

which of course, again,

could also be called handleAddItems

which some people prefer,

but many times, you will see this convention.

So then, we come here, destructure the props

and then we call that function

whenever the form is submitted.

And that's it.

So, this is how we lift up state.

So, basically what that means

is that whenever multiple sibling components

need access to the same state,

we move that piece of state up

to the first common parent component,

// Lesson 81. Reviewing "Lifting Up State"

Well, lifting state up simply means

to place some state in a component

that is a parent of both components

that need the piece of state in question.

And now giving both these components access

to the state is as easy

as passing it down using props and that's it.

So by lifting state up,

we have just successfully shared

one piece of state with multiple components

in different positions in the component tree,

which is something that we need to do

all the time in React apps.

And so it's really important

that you get used to this pattern and remember,

that we need this pattern in the first place

as a direct consequence of React one-way data flow.


Promotions only receive this data via props

but as you know, we cannot mutate props.

So that's one of the hard rules of React.

So what we're asking here is

if we have one-way data flow,

so if data can only flow from parents to children,

then how can the child component promotions update

the state that lives in the parent component, checkout?

Well, actually the solution is quite simple.

All we have to do

is to also pass the set coupons function

down as a prop to the components

who need to update the state.

And so now that we have

the set coupons function in promotions,

once a new coupon is added,

we can simply use set coupons to update the state

that lives in the parent component.

And this is actually exactly

what we also did in the previous lecture

with the difference that

we didn't directly pass set items,

but a function that uses set items

to update the items,

which is essentially the same thing.

But anyway, we can call this technique

of passing down a setter function,

child-to-parent communication

or also inverse data flow.

Inverse because usually data only flows down

but here we basically have a trick

that allows us to basically

have the data flowing up as well.

Now of course, this is not truly flowing up

but this workaround of passing down the setter function

and use it to update the parent state

is pretty close to actually

having data flowing up the tree.

// Lesson 82. Deleting an Item: More Child-to-Parent Communication!

Well, when we simply specify the function here like this,

then React will call the function as the event happens,

and it does so by passing in the event object.

So we actually used this to our advantage in the form,

so right here where we then received the event.

But right now we do not want to receive the event,

but instead the ID of the current item.

// Lesson 83. Updating an Item: Complex Immutable Data Operation

And remember, a controlled element means

that the element has the value defined by some state

and it also has an event handler

which listens for the change

and updates the state accordingly.


And so now in order

to update one of the objects in the array,

we will simply loop over the entire items array

using the map property

which will then in the end return a brand new array

with the same length of the initial items array.

But one of the objects

will then, of course, have been updated.

So in the iteration, each of the elements is called an item.

And then here is what we're gonna do.

So whenever the item has the ID

that is equal to the ID that we passed in,

so which means that this is the object

that we want to actually update,

then we create a brand new object based on the current item,

and then we set packed to the opposite of packed,

so of item.packed.

And that's it.

And if else, so for all the other objects,

we will simply return the current item.

I want to emphasize that I covered exactly

that this is how we update an object in an array

in great depth, in the section where we review

essential JavaScript for React.

// Lesson 84. Derived State

So, essentially, derived state is simply state

that is computed from another existing piece of state

or also from props.


So numItems is simply the number of items in the cart

and totalPrice is the sum of all the prices in the cart.

And so, all the data for these two pieces of state

is actually already in the cart,

so there's no need

to create these additional state variables,

and doing so is actually quite problematic,

first, because now we have to keep all these states in sync.

So, we need to be careful to always update them together.

So, in this situation, whenever we update the cart,

we will also need to manually update the number of items

and the total price,

otherwise our states would get out of sync.

But updating these three states separately

creates a second problem

because that will then re-render the component three times

which is absolutely unnecessary in this example.


But updating these three states separately

creates a second problem

because that will then re-render the component three times

which is absolutely unnecessary in this example.

Instead, we can simply derive the numItems

and totalPrice state from the cart

and therefore solve all these problems

because the cart already contains

all the data that we need.

So here, we simply calculate numItems as the cart length

and totalPrice as the sum of all prices

and store them in regular variables.

There is no used date required here

which will cause no unnecessary re-renders.

The cart state acts as a single source of truth

for these related pieces of state,

making sure that everything will always stay in sync.

And this works because updating the cart

will re-render the component

which means that the function is called again.

And, so then, as all the code is executed, again,

numItems and totalPrice will also, automatically,

get recalculated.

Now, of course, most of the time, we cannot derive state

but whenever you have a situation like this one,

where one state can easily be computed from another,

always prefer derived state.

So, don't create two state variables

if you actually only need one.

IMPORTANT: when an array contains a list of objects with a prop that needs to be summed/subtracted to derive the total of all the items in the list use the reduce method to simplify the calculation

// Lesson 85. Calculating Statistics as Derived State

So instead we can just define a new variable

called also numItems, but we can simply derive it

so we can calculate it based on the items array.

So that simply items.length

and so this works because as soon as the items are updated,

so as soon as this piece of state is updated,

the component will re-render.

And when the component re-renders

that means that the function here is called again.

And therefore then this piece of code here will run again.

And so if a new item has been added then now the item state.

So this array is different

and therefore the length will also be different.


So we have two options now.

The first one is to keep numItems here

and pass it as a prop into stats,

but I think what makes more sense

is to actually calculate this state here.

So this derived state inside the stats itself.

Also because we will actually calculate three values

and so if we were to calculate them here

then we would have to pass three props

which doesn't make a lot of sense.


So if this is the case,

if there are not even any items in the array,

then it's not even necessary actually

to perform all these calculations

because they will just be zero anyway.

So what I want to do now here is to show you a good use case

of an early return as conditional rendering.

So what we're going to do is to say

if there is no items.length,

then simply return.



So it's also quite legible here if you ask me.

So when you arrive at this component

maybe you have never seen it before

because one of your coworkers wrote it,

then you can right away see that if there are no items,

well then just return this

and in all other cases then perform the rest of the logic

of the component.

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