// Lesson 107. How to Split a UI Into Components

// Questions:
// 1. How should a ui be split into components?
// 2. When should new components be created?

is by looking at component size.

So we can classify every component based on its size,

which means that we can place every component

on this axis of component size.

On one side, we have really small components,

and on the other extreme, we have huge components.

At many times, none of these extremes are ideal.


// too big 
just one huge component for the entire card.

However, that would create a whole set of problems.

First, there is way too much stuff

going on in this component,

so it has way too many responsibilities.

So components are just like JavaScript functions,

in the sense that if a function

does too many different things,

we should break it up into multiple functions.

And so the same applies to React components.

Now, another way in which it becomes apparent

that a component is too large

is when it needs to receive too many props

in order to work properly.

So for example, if we need like 10 or 15 props

to properly configure a certain component,

that component is probably way too big,

and should be split up.

So in general,

these two problems make it very hard to reuse the component,

which is one of the big advantages

of components in the first place.

Also, huge components generally contain a lot of code

that might be complex and intertwined,

which ultimately makes the whole component

hard to understand and to use.


// too small 
Well, most of the time,

that would probably be a terrible idea as well.

If we would build a UI or an entire app in this way,

we would end up with hundreds

if not thousands of mini-components.

This, of course, would create a code base

that is super confusing to navigate and to understand,

and it would be way too abstracted.

And if you're not familiar with the term abstraction,

in programming, it basically means to create something new

in order to hide the implementation details of that thing.

For example, when we create a button component,

the user of that component might have no idea

how the button actually does what it does,

because the implementation details

are hidden behind this abstraction,

so behind this component.

So in a way,

each new component that we create is an abstraction.

Now, if both ends of the spectrum,

so both really small and huge components,

have these problems, then what should we do?

Well, most of the time,

the goal is to create components

that strike the right balance

between being too specific and too broad,

or in other words,

between being too small and being too big.



Now, these problems that we identified here,

like components having too many responsibilities

and being hard to reuse,

can help us understand

how we should actually split a UI into components.


// 4 criteria for splitting ui into components // how to split ui
Okay, and so from this,

we can now derive a couple of criteria that we can use

to split a user interface into components.

First, when we decide which components

we need to implement a certain UI,

it's important that these components

create a logical separation of the content,

or even of the layout of a page.

We should also strive to make

some of these components reusable

and ensure that each component has a single,

well-defined responsibility.

Finally, there's one even more subjective criterion,

which is your personal coding style.

So some people work better with smaller components,

and some people just prefer larger components,

and therefore, you need to create components

in a way that works best for you

so that you can stay as productive as possible.


// when to create new components
So what I want to do in this slide

is to give you something like a framework

that will help you create new components

from bigger components.

So the idea is that, when you're creating a new component,

and you're in doubt about what the component should include,

just start with a relatively big component,

but not a huge component,

and then split that bigger component into smaller components

as it becomes necessary.

But naturally, you will now ask,

when does it actually become necessary

to split big components into multiple small ones?

Well, that's where the four criteria come into play again.

so logical separation of content, reusability,

the responsibilities and complexity of the component,

and your personal coding style.

Now, of course, if you already know that you need

a small and reusable component, such as a button,

you can just skip all this and simply create a component.

But otherwise, you can just start big,

and don't need to focus on reusability

and complexity at the very beginning.


// analyzing the 4 criteria 

and so let's analyze them one by one,

starting with logical separation.

So if, after writing your big component,

you feel like the component contains some piece of code,

or of the layout, that don't really belong together,

then that means that it's probably a good idea

to create a new component.

Now, about reusability,

if it's possible to reuse a part of your big component,

and if you actually want or need to reuse that part,

then you should take that code

and extract it into a new component.

Another sign that you should probably extract

part of your component into a new one

is that your component is doing

way too many different things,

or that it's relying onto many props.

So if your big component

has too many pieces of state or effects,

or if the code is way too complex or too confusing,

it might be once again

time to create a new, smaller component.

And finally, as I said in the previous slide,

it's important that you feel productive

when working with your components.

So if you prefer smaller functions or components,

just split up big components into smaller ones.

But on the other hand, if you prefer big components,

that's also totally fine.

It's all up to you, because remember, in the end,

these are all just guidelines and best practices

that will become intuitive over time,

and by then, building your components

will become second nature to you.


// other guidelines
I actually have a few more general guidelines for you.

So first off, you need to be aware

that creating a new component creates a new abstraction.

And we talked about abstractions

a bit earlier in this lecture, right?

Now, abstractions have a cost,

because having more abstractions requires more mental energy

to think about different components

and to switch back and forth between components.

So try not to create new components

too early if you can avoid it.

Next, it's important that you name a component

according to what it does or what it displays.

And don't be afraid of using long component names.

That's completely normal in React development.

Now, what's even more important

is that you never, ever declare

a new component inside another component,

and we will learn the reason for that in the next section.

What you can do instead

when you have some related components

is to co-locate these related components

inside the same file.

Finally,

and going back to our initial topic of component size,

it's completely normal that an application

has components of many different sizes,

including some very small ones and some huge ones.

// more on component size and reusability 
Finally,

and going back to our initial topic of component size,

it's completely normal that an application

has components of many different sizes,

including some very small ones and some huge ones.

So even though we said in the beginning

that very small components have some problems,

of course, we always need some small components

like these in any application,

because they're highly reusable

and have very low complexity,

which is sometimes exactly what we need.

Most apps will also have a few huge components

that are not meant to be reused.

For example, we might have a huge page component

which contains the layout of the entire app or a page,

and that might very well be a fairly complex component

which is not meant to be reused.

So in situations like this, don't worry about reusability

or about needing to split this component up.

And speaking of reusability, as you can see from this,

we can say that, as a general rule,

the reusability range is pretty similar to the size range.

So generally speaking,

the smaller components are, the more reusable they will be.

And of course, as components get bigger,

they will become less reusable.

But again, that's no problem at all for some components.

So not all components are meant to be reusable.

But anyway, finally,

we have all these medium-sized components as well,

which all have different degrees of size,

reusability, responsibility, and complexity.

So in the end,

our application will have many different components

across the entire spectrum,

and that's completely normal and natural.

// Lesson 108. Splitting Components in Practice

But now something happened here that I personally

really don't like, which is to have one piece of JSX

which mixes like these native HTML elements

with our custom components.

So we have this div,

we have this P,

but then in the middle we have like our own search.

So that I think looks really ugly

and I really don't like that.

I think it's quite confusing.

And so let's actually also extract the logo

and the number results.

And so then we make this component here really nice

and clean and end up with these three components here

where each of them has its own responsibility.


classnames must be applied to html elements not react components for them to work properly
classnames can be passed to components as props which are then applied to the jsx element(s) that the component returns
// that is the html elements that are used to create the components

This logo is doing just one thing

so it has one responsibility already

which is basically to display this logo,

which is all this.

So there's absolutely no need to break it down even further.



But if it comes down to my personal coding style

or my personal preference,

I would actually like to still extract

this list element here into its own movie.

And we have actually done that many times before already

in this application where we had one component for the list

which would then simply loop over some array

and then display one component for each element.

And so now I will do exactly the same here.


remember optional chaining using the nullish collasceing operator and dot notation, using a question mark followed by the dot notation after the prop in question



So again, what we did is that these three pieces here

are derived state and they are derived

from this watched array right here.

And so we simply passed the watched array

into this component and then yeah,

just moved these three here

of course, also into this component.

And so we did that instead of leaving this year

in the parent component and passing all of them one by one.

But this code here clearly belongs in this component.

So it's clearly part of the responsibility

of watched summary to calculate its own statistics.


So again, I was calling watch box in here.

And so the problem was

that this then created an infinite loop

of the component calling itself.

And so that's why when I was reloading the application

React here wasn't really reacting.

So the application wasn't really able to then render itself.

// Lesson 109. Component Categories

// 3 types of component catergories
So most of your components will naturally fall

into one of three categories,

stateless or presentational components,

stateful components or structural components.

And I say naturally

because we shouldn't force our components

into one of these categories.

Now, these are all still normal React components

in our code, so just like the ones

that we have been writing.

But we can categorize them in this way

when we think about components.



So starting with stateless or presentational components,

as the name says, these don't have any state.

Usually, they are components that receive some props

and then they simply present that data

or even some other content,

and therefore the name presentational.

Many times these are quite small components,

such as the logo, num results

and movie components in our current app.

Next, stateful components are simply components

that do have state.

Now, just because these components have state,

that doesn't mean that they can't be highly reusable.

For example, the search component that we built

does have state and we could reuse this input

as many times as we wanted throughout the app.

Now finally, you can think of structural components

as pages, layouts, or screens of the application,

which are oftentimes the result

of composing many smaller components together.

And more about composition later in this section.

So these structural components can be large

and non reusable components, but they don't have to.

Structural components are sometimes quite small too.

What matters is that they are responsible

for providing some sort of structure

to applications such as pages or layouts.

Therefore, these components might not be present

in really small apps,

but you will definitely have a few structural components

as your app grows bigger and bigger.

// Lesson 110. Prop Drilling


// prop drilling involves passing a prop (i.e. piece of data) down multiple component tree levels via multiple components until it reaches the component that needs it. 

// Lesson 111. Component Composition

Now, in order to talk about component composition,

we first need to take a look

at what happens when we simply use

or include a component in another component in JSX.

So let's say that we have this model component

that we want to reuse, and also this success component

which simply renders the message well done.

And then we just use the success component

inside the modal component like this.

And this sort of thing is exactly what we have been doing

with our components most of the time, right?

So we just use them inside of other components.

However, when it comes to re-usability

this creates a big problem.

That's because right now the success component

really is inside of modal.

They're deeply linked together

in the JSX right now, and therefore

we cannot reuse this modal component to display some

other message inside of it, for example, an error message.

But as you can imagine, in order to solve this, we now bring

in the technique of component composition where

we can compose the model and success components together.

So here we have our modal component again, but

with a fundamental difference.

So this component does not include a predefined component

but instead it accepts children with the children prop.

So just like we have learned before, so

if we get our success component again, we can now basically

just pass it into the modal by placing it

between the opening and closing tags when we use modal.

And if you need a minute to analyze this code a bit better

feel free to just pass the video right now

because I want you to really grasp the fundamental

difference here.

So in the first example, the success component is really

tied to the model.

And so that model might as well be called a success model

because we can't use it for anything else anymore.

But with component composition, we simply passed the success

component right into the model and composed them together

in this way.

And again, this works thanks to the children prop.

Now, of course, we could have passed in any other component

which makes the model component highly reusable.

So essentially when we do component composition,

we leave this hole or this empty slot in the component

ready to be filled with any other component that we want.

So let's say that later we needed another model window

somewhere else in the app,

but one that renders this error message.

Well, that's pretty easy now.

We just used the model component again

but this time we pass in the error component as a children.

And with this, we have also successfully

composed these two components together as well.

So formally component composition is the technique

of combining different components by using the children prop

or by explicitly defining components as props.

Now we use composition

for two big reasons or in two important situations.

First, when we want to create highly reusable

and flexible components such as the modal window

or really a million other reusable components

that we can think of.

And we do this really all the time.

Now, the second situation in which we can use composition is

in order to fix a prop drilling problem

like the one that we found in the previous video.

And this is actually great for creating layouts

as we will do in the next video.

Just keep in mind once again

that this is only possible because components

do not need to know their children in advance

which allows us to leave these empty slots inside

of them in the form of the children prop.

// Lesson 112. Fixing Prop Drilling With Composition (And Building a Layout)


//// REVIEW ////

And so this then really shows that the prop drilling

has been eliminated and all by using component composition

where we now basically composed the NavBar together

with these three other components here.

So these three is what are becoming the children

of the NavBar.

And so here again, we then accept those children

and simply display them here.


it never even needed it in the first place.

It only needed it to pass it further down the tree

but now the tree is basically built in a different way.

And so then again, this component no longer needs that prop.

And now thanks to all this composition here

we can pass the movies directly

into the movies list, which is

in fact the only component that does actually need it.

Great. So this is actually a really,

really nice way of building layouts in React applications.

So just by looking at the return JSX from the app component

we can nicely see the entire layout

and also basically the entire componentry.

// Lesson 113. Using Composition to Make a Reusable Box

//// REVIEW ////

we made our application tree here

even more explicit in the app component.

So now it really is very clear what exactly is happening

in the application.

Just by looking at this one component,

we can immediately see the entire structure

of the application.

Which is really, really helpful.

So really, really keep this technique

of component composition in mind.

Both for building better layouts, for solving prop drilling

and also for creating reusable components like this one.

// Lesson 114. Passing Elements as Props (Alternative to children)

//// REVIEW ////

// implicit vs explicit passing components (children vs props passing components)

So instead of using the children prop in a component

and then passing in a component like this,

we can use an explicit prop as an alternative.

So down here, and now instead of accepting children here,

let's say we accept something called element,

and it can really be called anything.

So just L or really whatever.

And so now we can go back up here

and include the box in the old way.

So closing it immediately

but then we can specify the element prop.

And now here we can then

do exactly what we had here.

So let's copy that and paste it,

give it a save and that worked.

So now we have our movie list like here

and it was passed into the box component

as an explicit prop.

In this case, a prop called element.

So before what we had here

is that we were basically implicitly passing

in this component into the box,

and then we read it there

with the children prop.

But here we now basically pass it in more explicitly.

So we really say that we have an element prop

and then we place whatever

we want to pass in right here,

so right into the element prop.

And this pattern is used in some library,

for example, in React Router.

And so this is why I thought

it might be interesting

to show this to you right now.

Now here, basically we are passing

in a brand new piece of JSX.

And so here we now actually need a fragment.

So the app now looks exactly the same as before

but we basically passed in an element

or multiple elements here

instead of using the children prop.

But the result is exactly the same.

So this can be a viable pattern

in case you need to pass in multiple elements

and give them separate names.

So that would be a perfectly fine use case

for using something like an element prop

or really any other prop with any other name

instead of the implicit children prop.

But in our case,

let's go back to what we had before

because I think it looks a lot nicer actually

and it's also clearly the preferred way

of doing this inside React. that is implicitly via the children prop


// vs code trick 

or control on Windows,

we can actually go right

to the definition of the function.

So in this case, of the component,

so I'm hovering box here

then I hit the command key, click,

and then I immediately move there.

And what's even nicer is that

if we do the same down here,

so again, hitting the command or the control key,

then we go right back up.

Well, in this case,

somehow it doesn't work,

but usually it should.

But yeah, what matters is that we can move

from where the component is called

into the place where it is actually defined. ctrl + click

// Lesson 115. Building a Reusable Star Rating Component

// for testing stand alone/reusable components in a react app, remove the index.css file and app file imports on the index.js and import the stand alone component. remove the app component from the root.render method and insert the stand alone component in its place. just so that we don't have to create a brand new project

just for building this one component.

So for now we will just use this project

that we already have

instead of creating a new Create-React-App.


in which we could sometimes have five stars

in other situations, 10 stars or really any other number.

So let's use the technique that we used before

in the faraway app.

So entering JavaScript mode

and then we can write, array.from.

And here we can then specify an object

with the length property

and let's set it here to five, initially.

And so this then creates an empty array

with five elements

that we can then immediately loop over

by passing in a function.

So like a map function, here as the second argument.

So in this function

we are not interested in the elements themselves.

Let's just use a placeholder variable.

But we are interested here in the number.

All right,

and now here we can just render anything.

Let's just do a span element for now,

but later we will place the stars in here.

So let's just write S for star.

And then here the number,

and actually this should be S plus one

because I, of course, is zero based here.

Okay, and this should already be something.

And indeed we see star 1, 2, 3, 4, and 5.

pass the length as a prop so that it can be set dynamically and independently for each component invocation



And now we can do even better

which is to take this entire object

which will never change.

And it doesn't depend on anything

that is here in the component.

And we can place it completely outside of the component.

And by doing so,

this object here will not have to be regenerated

by JavaScript each time that this component here rerenders

because, otherwise, each time that a component does rerender

dysfunction will get called again.

And so then this object would also get regenerated again.

And so that's not necessary.

And so we can just place it outside here.


So what we need to do is to set a default value

for the rating.

So how do we do that?

Well, we can actually leverage the power of destructuring

in JavaScript because whenever we destructure an object,

we can actually set a default value as we do so.

So here we are actually destructuring the props object.

And so if max rating doesn't exist,

we can set a default simply by writing this.

And so if we save this now,

then we are back to having our five stars by default.

And so this is a very common way of setting default props

in React applications.

default values can be set on destructured props. if the prop is undefined it will be assigned to the default value

// Lesson 116. Creating the Stars

// Review //

so we have indeed our stars here,

but they appear to not have any height.

And so let's try to fix that right here.

So I will just wrap this SVG into a span element.

Let's cut it from here, place it at the end,

and then I will again define some style object out here.

So let's say const starStyle equals,

so width, let's say, 48 pixels.

And let's do the same for the height.

Let's give it a display of block property as well

and setting the cursor to a pointer

so that they behave a bit like a button.

And so then we should also define the role property here

for accessibility.

So this is just HTML for accessibility,

it has nothing to do with React.

Okay, and then our starStyle.

when using direct svg in react they do not have any height. they need a wrapper element like a span tag with preconfigured styles to give the svg elements height

the role prop in html will assign the specified role to an html element to give it the same functionality as the tag that is specified in the role. e.g. <span role="button"> - span will have button functionality


So let's start by defining a onClick prop here,

which we will then later receive inside the star.

So here we will now define a function

which will actually set the rating.

So let's say setRating,

and then whatever the current index is, plus 1,

because remember that array indexes start at 0,

but our rating should start at 1.

Okay, so now, of course, nothing will happen right now,

because we actually need to listen for that event

on an HTML element,

so like a JSX element.

So what that means

is that here we need to now accept that onClick handler,

so this function that we defined right here,

and then use the onClick prop right here

to then actually listen for the event and react to it.

And if this is a bit confusing,

then let's maybe change the name here

from onClick to onRate.

And so then it becomes really obvious

that this is actually our own prop.

So this is our own handler function,

and we could, of course, even have created that separately.

So onClick should be onRate.

And so this is basically

what we have been doing all the time,

which is to pass an event handler function

from the component that owns the state, so this one,

right into a component

// that wants to actually update that state. define onClick listener which uses parent state setter function and pass the onClick with event handler into the component in the parent component that is created via the map method. extract the prop and set to onClick in the appropriate html element in the jsx element that creates the component


So how do we define whether a star is full or not?

Well, it's actually pretty simple.

So full should basically be a true or false value, right?

That's why this conditional rendering here works.

So again, when full is true, then this one will be rendered.

And if it's false, than the empty star.

So here we just want to now write a condition basically

that will always be either true or false.

So all we have to do is to say,

"Is the current rating greater or equal i + 1?"

Which is always the rating

for the currently generated star.



So it all starts with this i variable right here.

And so this comes from the index of the empty array

that we create here with the length of maxRating.

So we create that array

and then we immediately loop over it.

And so then the first star that we create has the number 0.

So this one is star 0, 1, 2, 3, and 4.

We then use that index in order to handle our rating.

So if we click on the very first star here,

it will be 0 + 1, and so it becomes 1.

If we click on the third star here,

well, then here the index is 2,

and then 2 plus 1 makes 3.

And so then the rating, as we see, is set to 3.

And then in order to determine

whether a star is full or not,

all we need to do is to compare the currently set rating

to the index of the current star.

So here the index is 0 + 1.

So here it's 1, here it's 2,

here it's 3, 4, and 5.

And so right now, our rating is 3.

And so here, of course, that 3 is greater than 1.

Here, it's greater than 2.

Here it's greater or equal 3, and so it's still true,

but then here,

it's, of course, false.

So 3 is not greater or equal 4,

and therefore, this one here is then not full.

So this condition will return false,

which will then make the star being rendered as empty.

// Lesson 117. Handling Hover Events

So the rating is set to five, but again

whenever we hover over some other number of stars

then that temporarily changes to that rating now, right?

So what that means is that now we need a brand new piece

of state to basically store that temporary rating.

And again, that makes sense

because something should happen on the screen.

So the component should re-render whenever

there is some hover event.

That's how we then get that new rating in there.


Now, there's not really a hover event

but instead we have on mouse enter.

So let's just do some console log lock here for now.

So that's one of them.

And then we have mouse leave.

So we basically need to handle these two separately.


So let's call this one here on hover in.

And the prop name here is different again

from the event name, just to avoid some confusion here.

So we could also call this prop on mouse Enter again,

but then it might be a bit confusing and you might think

that the event is actually handled right here

on the star component, which of course is not possible.

So the event always needs to be handled

on a JSX element itself.

So like an HTML element such as a span.



The only part that is not working

is that the stars are not getting full.

And so let's quickly fix that

here inside this condition here.

So here we can say that if there is a temp rating.

So if there is a temporary rating

then do the same thing,

but with that temp rating.

So then temp rating, greater or equal I plus one.

But if not, well then we just do what we had before.

And so this should fix that and yeah, beautiful.

So that works great.

And if we click here,

well then the number disappears,

but the stars stay the same.

So that works great.

And if we click here,

well then the number disappears,

but the stars stay the same.

And so that's because now we have the rating set.

And then, so here in this full prop

we enter the second branch,

which then just like before

sets these four stars here, two full.

Now all we have to do here is to place another

or here and say basically

if there is no temp rating, then display the current rating.

And if that also doesn't exist

well then we get the empty string.

All we had to do is some tricks

with these two rating states.

And then handling all of these different events.

So basically handling the click, the mouse enter

and the mouse leave.