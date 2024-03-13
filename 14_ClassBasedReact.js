// Lesson 175. Our First Class Component

So basically, back in the day before 2019, in React

we would write components, not using functions

but using JavaScript classes.

So the class keyword, then the name of the component

and then this class would actually be a child class

of React.Component.

So extends and then React.Component.

And so therefore we would have to also import React

in every component file.

So import React from React.

Okay, and then we should also export this component.

Let's do that down here.

Export default Counter.

Now okay.

And so this is how we would set up

a brand new component using classes.

So again, using ES six classes,

so modern JavaScript classes

which extend the parent class of React component.

And so this parent class gives us a couple of methods

and one of them is the render method.

So every single React component that is written

with classes needs to include the render method.

So this render method is basically equivalent

to the function body of a function component.

So every single class component needs to have

a render method which returns some JSX.

So let's just do that here.

And JSX of course, works in the exact same way

as in function components.


So next up,

let's actually add some state to our component,

which works in a very different way

than in function components,

because here we cannot use the use date hook.

So hooks are only for function components

but not, of course, for class components.

That's the huge difference between the two actually.

And so in a class component,

if we want to add state to a component,

we first need to call the constructor method.

So this one is part of all ES six classes

and then this one receives props

and it calls the parent constructor as well

by using the super method or the super function.

And it does so by passing in the props again.

So this is a lot of boiler plate

that we have to write when we want to use class components.

And so this is why basically all React developers

now prefer functional components.

So again, this is a lot of work

and super annoying to having to write

all this boiler plate that really doesn't do anything.


now to initialize state,

we do that also right here in the construction method.

So that's because this method here is called

each time a new object is instantiated from this class. - this.state = {}

And so that's just how ES six classes work,

which I hope you're familiar with, but if not,

that's also not a big deal at all.

But anyway, here we are now defining basically

a state property on the current object.

So the current component will get the state

that we define here.

So that has to be an object.

And then for each state variable that we want,

we need to create one property in this object.

So we want to count to start at one.

And so this is yet another huge difference

between functional and class components.

So in class components, again,

we only have one huge state object

and not multiple state variables

like we do with the use state hook.

But anyway, let's use actually a different value here

so that now we can access that here in our render method.

So instead of the zero, let's actually access now

this state and the way we have to do this is again

a little bit annoying.

So we have to write this.state.count.

So the this keyword here will, in this case,

simply point to the current component instance.

And so then from there we read the state

and from there the count.

And so in class components

you will see this kind of thing all the time.

It's always gonna be this.state.something

or this.props.something.

But anyway, let's now save this.

And we see that indeed our value here got updated to five,

so it's reading our value from the state now.

// Lesson 176. Working With Event Handlers

Let's now learn how we can work

with event handlers

and how we update state in class components.

So just like before, basically here,

we now want to use the onClick property

in order to add an event handler to this button.

But now where do we actually write that event handler?

Well, remember how I said

that this render method here is basically equivalent

to the function body

of a functional component or a function component.

So I use these two terms interchangeably

so they're basically the same.

But anyway, since this is equivalent

to basically the function body of the functional component,

we might think

that this is where we now define our event handlers.

So just like we do in functional components, right?

However, that's not what we do in class components.

So in class components,

this render method should be as clean as possible,

so it should contain as little render logic as possible.

And so instead, our handler functions are defined

as class methods.

So let's define handleDecrement, decrement like this.

And so with this, we have a brand new class method.

And so here now we update the state.

But before we do that, let me actually show you something

that we need to do first.

So let me log the this keyword

because the this keyword is necessary all the time.

So we will actually also need it here.

Okay, but now let's then connect this onClick prop

with this handler function.

And the way we do that is again using the this keyword

and then handleDecrement.

And so again, the this keyword basically points

to the current component instance,

which will inherit this method here

from the class definition.

All right, let's give it a save

and then let's click this button.

And so you see that we get undefined or in other words,

that the this keyword inside this handler here is undefined.

However, we need the this keyword to point

to the current component

because that's how we will update the state.

So we will update the state by doing this.setState

and then here something.

So we are going to need the this keyword, but again,

it is currently undefined.

And the reason for that is simply the way

in which JavaScript works.

So when React calls our event handler here,

it first actually, behind the scenes, creates a copy

of this function.

And so then the function call

is just a normal function call,

which is not bound to any object.

And so because of that, this function then loses the binding

to the current this keyword.

But that's all not really important.

The only thing that matters to know

is that all event handlers that are called here

inside the JSX will lose their binding to the this keyword.

And so we need to fix that

by coming here again to our constructor method.

And then we basically need to override the method.

So writing this .handleDecrement is equal

to this.decrement.

And then we use the bind method

to manually bind the this keyword to this function here.

And so by doing this,

we basically give this method here access

to the current component instance again.

All right, and so if you ever come across

some older React code base,

you will see this kind of thing everywhere.

So this manually binding the this keyword

to our event handler functions.


So we are here to update the state.

And so as I mentioned earlier, we do this

by calling the setState method on the this keyword.

And the way this setState method works is very similar

to the stateSetter functions that we get back

from a useState hook call.

So basically, we can update state in two different ways.

We can just pass in the new state here

or we can update the state based on the current state.

So let's actually do the second one.

So by providing a callback function here,

which gets access to the entire current state object.

So let's call it currentState.

And then let's actually explicitly return

the new state object here just so we know

that this is what we need to do.

So we need to return a new object where the count property

is then updated.

So we can get the current count

from curState.ount, and then we just add one.


All right, and by the way, notice how all the concepts

behind React that we have been talking about before

still apply to class components.

So things like updating the state will rerender the UI

and all things like that.

So those fundamentals haven't changed.

The only thing that's changing

is that we write the component

in a completely different way.


And so now let's, instead of just displaying

the number here, display the date.

So just like we did before in that date calculator.

And so this kind of very simple render logic

is actually allowed here in the render method.

So we just shouldn't define functions here like we do

in our render logic in functional components

but some simple logic like this is allowed. -> simple js functions


So we define our date.

Let's just pass in a string here

so that JavaScript can parse the date object out of it.

So let's say we are in 2027, and then we want

to set the date on that to date.getDate.

And this is similar again to what we already did before.

So we're just transforming that

to a class-based component.

Right, so here you basically want to add the current state

to this state.

So that's this.state.count,

which again is a lot of work

where in functional components,

we would simply call that count, right?

And so let's just place that here.

So date and then toDateString.

And then let's place this here into some brackets.


Now before we really dive into class components,

it's a good idea to get familiar

with all the main differences

between function components and class components.

So, as we already know,

function components are the current way

of creating components in React,

as they were introduced into React in 2019

Class components, on the other hand,

have been around for a long time,

so since version 0.13 back in 2015.

Now, technically React has always had function components

but without hooks.

So before 16.8,

function components were very limited and not really useful,

because they couldn't even have their own state.

Now, in order to create a function component,

we just use any type of JavaScript function,

no matter if a function declaration or an arrow function.

With class components,

as the name says, we have to create an ES6 class

that extends the provided React.Component parent class,

so just like we did in the previous two lecturers.

So when we're using class components,

we're actually using object-oriented programming principles

like having to use the this keyword

to read incoming props and to define local component state,

which can become a bit annoying over time.

With function components on the other hand,

these things are much easier.

So to read props,

all we have to do is to use the received props object.

And to define local state,

we can use the useState hook.

But probably the biggest difference

between these two types of components

is how they handle side effects and the component lifecycle.

So in class components,

we actually have special methods

that were defined by React

in order to run code at different points of the lifecycle.

And so these are called Lifecycle methods,

and we will look

at the most important ones throughout this section.

Now, with function components,

we now care a lot more about synchronization

rather than the component lifecycle.

And we do so by using the useEffect hook.

I mean, we know that this synchronization with useEffect

still kind of translates into the component lifecycle,

but the focus is more on synchronizing the component

with a side effect.

And, actually, I think it's safe to say

that hooks in general are the big and the main difference

between function and class components.

Hooks just introduced a completely new way of thinking

and of writing React applications.

So the day that hooks were introduced,

React development really changed forever.

And if you ask me, it actually changed for a lot better.

But anyway, some smaller differences are in event handlers

and in the way in which we return the JSX

from our components.

So in function components,

we simply handle events with functions

that we define inside the component function body.

While in class components,

we have to create a new class method

for every single event handler.

Now as for the JSX,

in function components,

we return our JSX from the function,

while in class components,

we need to return JSX from a special render method,

which is yet another React-specific thing

that you need to remember

when you work with class components.

So, in general,

function components with hooks

have a lot of advantages over class components.

They are easier to build,

because they require

a lot less React-specific boilerplate code,

and they produce much cleaner code.

And the main reason for this cleaner code

is that the useEffect hook

combines all code related to the lifecycle

in one single place.

While in class components,

that code is usually spread

across multiple lifecycle methods,

which can become quite confusing in large components.

Now, one of the big reasons

why hooks were introduced in the first place

is that they make it much easier

to share stateful logic simply by creating custom hooks.

And, finally, in function components,

we can get rid of the annoying and error-prone this keyword,

which was especially hard to grasp for many beginners.

The only advantage, I would say, that class components have

is the fact that some people find it easier

to understand the component life cycle

because of lifecycle methods

with explicit names such as componentDidMount

or componentWillUnmount.

// Lesson 178. Starting the "Classy Weather" App

So we start by importing React from React,

and then again we use a JavaScript class,

we call it "app" and it need to extend

"React dot component" so that we can inherit

all the things that we need from React

here inside this class.

For example, the render method to return some JSX.


Okay, and next up, let's make this

input field here a controlled element.

So an element where React controls and owns the state.

And so this idea of controlled elements

is exactly the same as before in function components.

So many of the things that we learned previously

still apply to class components.

And so this means that we now need to

give this component state, and remember that we do that

by calling the constructor method,

which is a method that is available

on all JavaScript classes.

So this is not coming from React,

but this one is called with props

so that we can then call the parent component.

So that is React component by using here the super keywords.

And again, we do that with props.

Okay, so this is really like a recipe

that you need to follow and it's always the same.

And so that's why we say that these

class components have a lot more boiler plate code.

So it's all of this stuff that doesn't really do much

but which we still have to do in order to make this work.

But anyway, let's now define state again

by using "this dot state" and then setting it to an object.

And this one will have the location property.

And let's start with a default location.

So for example, Lisbon.

And so now just like always, we use this state as a value

but now that state lives in

"this dot state dot location."

So as we save this, we see that immediately

our state got added to our input field.


Now notice that here in this event handler function that is applied to the input directly/inline

we didn't have to manually bind the disc keyword

like we did before.

We only have to do that when we define

the event handler as an outside method,

which is exactly what we will do next.

So basically as an event handler

for the event of clicking here on this button


And now as we click here, we get loading data.

And we also get again that

our disk keyword is undefined.

And that's going to be a problem because we

will need the disk keyword here to later set some state.

And so just like we did in our counter

we need to now explicitly bind

the disk keyword to this method.

So we say "this dot weather" is equal

to this "dot fetch weather."

And then we explicitly bind the disc keyword to this method.

So basically giving it access

to the current component instance

so that then we can set the state on there.


Now, immediately we see that we have a problem

because we are using the await keyword

and so this needs to be an a-sync function.

But that's

but that's, luckily for us, very easy.

So we can simply make these methods here a-sync methods,


Okay. Now one thing that I want to start by doing here

is to create an is loading state.

So just like we have been doing before,

we want to indicate to the user

that we are currently loading.

And so, let's add a new piece of state.

And, as I said previously here we know

to not create multiple state variables.

But instead, we add them all to the same object.

And so here, let's say is loading

and we start at false.

And then here, in the beginning of this tri block

we simply do this dot set state.

And so now here comes a very important part.

So, in this object that we pass to setState,

we only need to specify the actual properties

that we want to change.

So here, we just need to write is loading set to false.

And that will then not override the location.

So it will really only update this is loading property.

And this is important to mention because

with the you state hook, if we updated the state

that is an object, we could not do this.

We would first have to de-structure the current state.

So like this dot state, for example

and then we would mutate this one property.

So, basically we would have to return the entire object.

But here, again that's not necessary.

So just mutating this one property,

and of course it needs to be true.

And then let's copy it and at the end,

set it to false.

So let's add a finally block here,

which will run no matter if the code here

through an error or not.

And then, down here in our render output ,

let's do some conditional rendering.

So, this dot state dot is loading

and maybe you start seeing that it is

quite annoying to always type that this dot state.

But anyway, that's why we no longer use these

components in practice.

Okay. But so here we just render a paragraph

with this predefined class name.

And so, let's try that again.


The String.fromCodePoint() method in JavaScript converts a sequence of Unicode code points into a string. Each Unicode code point represents a specific character or symbol in the Unicode standard.

In your example, you have an array of code points [127470, 127475], which are Unicode code points for the flags of different countries. These code points represent the regional indicator symbols for the letters "I" and "N", which together form the flag emoji for India.

Here's how it works step by step:

String.fromCodePoint() takes each code point as an argument.

It converts each code point to its corresponding character or symbol according to the Unicode standard.

It concatenates these characters together to form a single string.

So, when you call String.fromCodePoint(127470, 127475), it converts 127470 to the character for the regional indicator symbol for the letter "I" and 127475 to the character for the regional indicator symbol for the letter "N". When these characters are displayed together, they form the flag emoji for India, '🇮🇳'.

// Lesson 180. Displaying the Weather

And in class components there's actually no easy way

of destructuring all the received props.

So we can only do that in each method separately.


And so now of course we need to include

this component here in our JSX.

So let's do that and let's do so conditionally.

So only when there actually is some weather data

then we want to display the weather component.

So let's say this.state.weather.

But this is not enough actually,

because by default this is also an object, right?

And so we actually need to read some property from this

so to see if it exists.

So let's for now comment this out

and run our code again so that.

Ah, no, we are not logging it through console anymore

but we can still take a look at it here in our dev tools.

So let's then say here

if this.state.weather.weathercode exists

so this array here,

this can only exist if the weather does exist.

And so if that's the case

then let's render the weather component.

And as a prop let's actually paste in the weather

that we want to render.

And then also the location.

And here of course it's not weather,

this is how we would do it in normal functional components.

But here we need to do this.state.weather.


So let's de-structure the props, which again

we have to do it manually inside of each method here.

So we cannot do that centrally

like we do in function components.

So props.weather.

And so now let's take out all these things there.

So temperature_2m_max

and let's also rename these.

So let's use the HTML entity for degrees and dash, -> &deg; &mdash;


And if we had more methods

that also needed access to these props

then we would have to de-structure them again in there.


Now, also notice that this component here

and also the day component,

they both don't have de-constructor method, right?

And so the reason for that is that

when we don't need to initialize state

and we don't need to explicitly bind to these keywords

to some event handler methods

then we actually don't even need

to implement the constructor in the component in question.

And so that's why these two actually don't have it.

// Lesson 181. Removing Boilerplate Code With Class Fields

Let's now remove some

of the boilerplate code that we have been writing

using the modern JavaScript class fields feature.

But before we do that, let's quickly duplicate

our file again and rename this one to version 1,

so then you can keep both versions of doing things.

So yeah, let's come back here to our app component

and now use the class fields feature.

So, in JavaScript with class fields,

we can basically declare properties directly

on a component instance, right in the class definition,

so outside of any method.

So, basically what we can do is taking this

and pasting it right here.

And so with this,

we can then completely remove this thing from here.

And notice that here we do not need any "this" keyword word

because this will basically simply be placed

on the component instance.

And since the "this" keyword is also the component instance,

well then, that's really not needed anymore.

So we just basically take

everything that we want to declare on a class instance

and place that here outside.

So again, that's a JavaScript feature, not a React feature.

And so if we now save this and then run our code again here,

then you see that it still works.

So, it's doing the exact same thing.

So, that's already a huge win, but we can do even better

because we can also define methods as class fields as well.

So, instead of writing a method in the traditional way,

we can instead do this.

So let's comment out this part.

And so now we can do fetch Weather like this

and then we can simply assign a function value

to this variable.

And the great thing about this

is that we can now use an arrow function here.

And the great advantage of that is that arrow functions

do not lose their binding to the "this" keyword.

So arrow functions don't have their own "this" keyword,

and instead they get access to the surrounding one,

and therefore we then no longer will have to do this.

So watch as I type async, and then again, an arrow function,

and I'm missing just the curly braces here

but that should be enough.

And so now I can delete this.

So let's try that.

And yeah, it still works exactly the same.

And so now we no longer need this.

So yes, Lint even tells us that this

is now a useless constructor.

So with this, we got rid

of all the boilerplate code that we had

and the biggest win by far is this one here,

so that we no longer need

to manually bind the "this" keyword

to our event handler methods.

So now these methods are basically defined

as a normal variable.

And so then using the async function,

that problem that we had

with the "this" keyword simply disappears.

Now, this function here is really huge,

but unfortunately for us, with class components,

there is no easy way of extracting it into,

well, somewhere else, basically.

So we cannot just remove this function from here

like we could do with custom hooks in function components.

So if we have a lot of long methods like this,

then our components can get really annoyingly long.

But again, there's not really a way around this

but I still wanted to mention this here

just so you could see another great advantage

of functional components.

// Lesson 182. Child to Parent Communication

However, this state will of course still not update

because the state, again,

still lives in that other component.

So in the app component.

And so this is where child to parent communication

comes into play again.

So remember that that basically means

that a child component needs to update the state

in a parent component.

And the way we do that,

is to simply pass down the state updating function

into the child component.

So basically, we need now this and pass it as a prop.

So let's grab that, and actually let's create

a brand new event handler function here,

and we will do it just like this other one.

So just like we did in the previous lecture

as a class field.

So let's call this one setlocation,

and then this one needs to receive the event.

And actually it's just copy paste at this point.

So let's remove that.

And so with this, we created ourselves the event handler.

And so now all we have to do, is to pass that in also here.

So let's call that prop maybe onChangeLocation,

and then the set location function.

So actually this.setLocation.

So we have so many "this" here,

it's getting a bit confusing indeed.

So on unchanged location, let's just copy that.

And so now, again, this.props.onChangeLocation.

And so, now we are back

to being able to change the input here.

But now we are doing it using child to parent communication.

So this technique is just as important

in class-based React as in function component-based React.

So the whole thinking in React part

is actually exactly the same in class

and in function components.

// Lesson 183. Lifecycle Methods

So, lifecycle methods are essentially special methods

that all React components get access to,

and which we can use to run side effects

at different points of the component lifecycle.

And the most important points of the lifecycle are mounting,

re-rendering, and unmounting of the component.

So we already talked about these before

when we first talked about the use effect hook.

Right?

Now, the lifecycle methods are not exactly the same thing

as the use effect hook in function components;

but they are the closest similar thing that we have

in class components.

And so let's now start with the component did mount method.


So component did mount,

and so this is really just another method.

And as the name of the method says,

this one is called immediately after rendering.

So basically, after the dom has been created,

just like a use effect hook with the empty dependency array.

And so this is the ideal place to perform

some initial side effects as the component loads.


So again, this is not exactly the same

as the use effect hook, but the closest thing

that we can imagine this being is a use effect

with the empty dependency array.

So only running on mount but not on re-renders.


Okay, but speaking of re-renders

of course we also have a lifecycle method for that event.

And so that one is called component did update.

All right?

Now what's special about this method

is that React actually gives it access

to the previous state and the previous props.

So the first argument is the previous props

and the second one is the previous state.

And so this is then a bit similar to the use effect hook

with some variable here in the dependency array.

For example, we can now use these previous state

here to check if the location has changed.

And so, that's then similar to having a use effect

with location in the dependency array.

The difference is that this method right here

is not called on mount.

So really only on re-render,

while this use effect

would of course also be called on mount.

So, on the initial render.

So, as I was saying, we can now compare the current state

with the previous state.

So, this dot state dot location,

if it's different,

so if it has changed across renders,

then we can do something.

And of course we can also not do this comparison

and not even do anything

with this previous date or the previous props.

But in this case we actually need them,

because now what we want to do

is to again fetch the weather

in case that the new location

is different from the previous one.

And so this will then basically enable us to search

for the weather as we type.

So, you see it's already working.

So it's doing exactly the same thing

as before in our demo app.

Now, one downside that you can immediately see

is that our fetching logic here is now spread

across these two lifecycle methods.

So, fetching the weather on mount and also on re-render.

And so, then we need to call this function here

in two places.

Now that's not a big deal of course in the situation

but in real world applications,

this used to be really a big problem.

So, we used to have logic that belongs together

spread out over these different methods.

So, that then makes the code a lot harder to understand

and to use effect actually solved

some of these problems.

Again, because this one here.

So this effect like this would run both

on mount and on re-render.

But anyway, we can now remove this button here

as we now no longer need it.


But this will now give us a problem

because right now on the component mount

this will still attempt to fetch the weather;

even though right now we have no location.

And so actually, in this particular case,

it doesn't make any sense

to even fetch the weather as the component mounts.

So I will now remove this from here

but it was still important to understand initially

how this lifecycle method here works;

and we will actually need it again here in a minute.


So this API only starts searching for something

if we have at least two characters in our string.

So, let's quickly fix that by coming here into this function

and we can just say if this dot state dot location

dot length is less than two, then just return.


Well, basically each time that we type a new character here

we want to store the location into local storage.

And so then once again,

the component did update lifecycle method

is the perfect place for doing that.

So, besides fetching the weather,

we also want local storage dot set item.

Let's call this one location.

And then what we want to store there is

this, dot

state

dot location.

And since this is already a string,

we don't even need to convert it to a string.

And so,

now as we keep typing,

let's check out our

application tab here

with a bit more space,

and then indeed, here we have faro

in the local storage right now.

And so, all we have to do now

because right now of course we don't get that value yet.

And so what we have to do now is to read that value

from local storage as the component mounts.

And so the perfect place for that is again

or component did mount lifecycle method.

So, here we will want to set our state,

based on that data that's coming from local storage.

So this dot set state

and then remember it always needs to be an object here.

So with the location property,

and then simply local storage

dot get item

from the key of location.

Now, when we run this up for the first time

there won't be no local storage yet

at least not with this key.

And so let's then set a default off an empty string.

Okay? And there it is.

So, let's reload here and then that's working great.

So, let's just analyze what happens here.

So, as the component is mounted,

it will then read this value here

from local storage right here.

So, in this lifecycle method.

So, this then sets the state,

which will in turn re-render the component.

And so, then after that re-render,

the component did update method will get called.

And so that's where we then fetch the weather

because of course the new location will be different

than the previous one.

But if we copy this, for example,

and then just paste the same thing here,

then the new state is the same as the current one.

And so then nothing happened here.


about another lifecycle method

which is the component will unmount method.

So this one is a bit less important

but let's just mention it here as well.

Now this component,

so the app component will actually never unmount,

so it doesn't make sense to use it here.

So, let's do it here in the weather

because of course, this component will sometimes not exist.

So, when there is no string here

then there's also no weather component.

So, we can just then use component will unmount.

And so doing this is very similar

to returning a cleanup function from a effect function.

The difference is that this one really only runs

after the component unmounts,

so after it disappears and is destroyed,

not between renders.

So again, this lifecycle method is mostly used to clean up

after some effects, which in this case we don't really have,

and so there's not really any meaningful thing

that we can do here.

So, let's just log something through the console

just to show you.

So, weather will unmount,

or is unmounting,

it doesn't really matter.

All right?

So again, between renders, this is not running

so it's not doing anything.

But then well, nothing happens actually.

So our weather didn't even disappear

but that's just because we probably have some problem here.

So let's come back here

to the function where we fetch this data.

And so here, what we want to do instead

is to not only return,

but also just set the state to empty weather again.

Basically doing return this dot set state

and then the weather should basically be reset

to an empty object.

So, let's try that again.

Okay.

And then now we saw that the component disappeared

and so then the component will unmount method was called

and therefore we got this log here in our console.

And so, this again would be ideal

to clean up after some side effects that we created.

So not really the case here,

but now you know that this method exists

and that it's one of the three most important ones