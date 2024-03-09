// Lesson 141. The Component Lifecycle

And actually, I should say that we're gonna learn

about the LIFECYLE of a COMPONENT INSTANCE,

because it's only an actual physical INSTANCE

of a COMPONENT that can go through a LIFECYCLE.

But as I mentioned earlier,

it's just a bit too much work to always say,

COMPONENT INSTANCE.

And so, for the rest of this lecture,

I will just say COMPONENT most of the time,

which is what everybody else also does.

So no one can always say COMPONENT INSTANCE,

that's just too much work.

But anyway, what does COMPONENT LIFECYCLE actually mean?


Well, the LIFECYCLE of a COMPONENT basically encompasses

the different phases that a specific COMPONENT INSTANCE

can go through over time.

And the first phase in any COMPONENT'S LIFECYCLE

is that a COMPONENT INSTANCE is MOUNTED.

Which is also called the INITIAL RENDER.

So this is when the COMPONENT is rendered

for the very first time,

based on everything that we have learned

in the previous section.

This is also when fresh state and props are created

for the COMPONENT INSTANCE.

And therefore, I like to use the analogy

that the COMPONENT is born in this phase.

Now, once the COMPONENT has been rendered

and is on the screen,

it can be re-rendered an unlimited number of times.

Now, as we learned in the previous section,

a React Application is re-rendered,

whenever there is a State Update, right?

However, back then, we were only talking

about the entire application,

not about one specific COMPONENT INSTANCE.

So in practical terms, a COMPONENT will also

be re-rendered when the props that it receives change,

when its parent COMPONENT re-renders,

or when something called CONTEXT changes.

And more about CONTEXT later.

Now, the RE-RENDER Phase is actually optional,

so it doesn't always happen in all COMPONENTS.

So some COMPONENTS are only mounted and then unmounted,

right away, which actually brings us to the next phase.

So finally, there comes a point in time,

where a COMPONENT INSTANCE is no longer needed.

And so that's when the COMPONENT is unmounted.

And as you can see from that not so subtle emoji,

this is when the COMPONENT basically dies.

So in this step,

the COMPONENT INSTANCE is completely destroyed and removed

from the screen along with its state and props.

And of course,

we have already seen this happening many times

in the applications that we have been building.

So this can happen when users navigate

to a new section or a new page of the app

or when they close the app all together.

Now, of course, a new INSTANCE

of the same COMPONENT can be mounted later,

but this specific INSTANCE is now gone.

So it has been unmounted.

and that's actually it.

So pretty straightforward, right?

Especially, after that deep dive last section.

So why was it even worth learning about this now?

Well, it's important to know

about the COMPONENT LIFECYCLE,

because we can hook into different phases

of this LIFECYCLE.

So we can basically define code to be executed

at these specific points in time,

which can be extremely useful.

And we do so by using the useEffect Hook,

// Lesson 142. How NOT to Fetch Data in React

Now, as we have learned before in the previous section,

we should never update state in render logic, right?

But now in this lecture, let's actually break that rule

so that we can see

why it actually exists in the first place.


So when you're just defining a variable like this

that doesn't depend on anything that's inside the component,

then just declare it outside.

Now I'm just getting my own API key,



Now as we learned in the previous section,

this data fetching that we're doing right here is actually

introducing a side effect into the component's render logic.

So it is clearly an interaction with the outside world,

which should never be allowed in render logic.

So again, all this code that is here

at the top level of the function is of course

code that will run as the component first mounts

and therefore it is called render logic.

And so again, here we should have no side effects.

I mean, in this example

where we only log something to the console,

it actually appears to work just fine,

but watch what happens if we set some state here.


Why do you think all these fetch requests

are being fired off?

Well, the reason is that setting the state here

in the render logic will then immediately

cause the component to re-render itself again.

So that's just how state works, right?

However, as the component is re-rendered,

the function here of course is executed again,

which then will fetch again,

which in turn will set the movies again as well.

And then this whole thing starts over and over again.

So as the state instead the component is re-rendered again,

which then will fetch again,

which will set the movies again.

And so this really is an infinite loop of state setting

and then the component re-rendering.

And so this is the reason why

it is really not allowed to set state in render logic.


So let's say we did set watched immediately here

in the top level code to some empty array

and then actually we do get a real error.

I mean, let's reload that.

And yeah, here we are now reloading all the time again

the data from the API.

But what matters here is that

we get the error of too many re-renders.

And so that's now because of this state setting right here.

So if we're really setting the state here in the top level

even without being inside a then handler

then immediately React will complain

that there are too many renders,

which means that we again entered that infinite loop

where updating state will cause a component to re-render,

which will cause the state to be set

and so on into infinity.

// Lesson 143. useEffect to the Rescue

Now, the idea of the useEffect hook is to give us a place

where we can safely write side effects like this one.

Just, again, like our data fetching.

But the side effects registered with the useEffect hook

will only be executed after certain renders.

For example, only write after the initial render,

which is exactly what we are looking for in this situation.

// steps for using useEffect 

So just like with useState, we just write useEffect,

and then we also need to make sure

that it has been imported automatically here from React.

So just like useState, again,

this is also a function that is part of React,

and so therefore that we need to import.

Now, the use effect doesn't return anything

so we don't store the result into any variable,

but instead we pass in a function.

And so this function is then called our effect,

and it contains the code that we want to run

as a side effect.

So basically that we want to register as a side effect

to be executed at a certain point in time.

So let's paste that here, but we are actually not done yet,

because now we need to pass in a second argument,

which is the so-called dependency array.

Now, this dependency array is actually

the most confusing part of this hook, and we will, again,

learn all about this throughout this section.

But for now, what you need to do here

is to just pass in this empty array,

which means that the effect that we just specified here

will only run on mount.

So it'll only run when this app component here

renders for the very first time.


Great, and so this is basically the very bare bones way

in which we do data fetching in simple React applications

like this one, at least if we want to fetch our data

as soon as the application loads.

Now, in a larger, more real world application,

we may use some external library for data fetching.

But again, in a small application like this one,

this is now a great way to fetch some data on mount,

so when our application first loads.


o let's just quickly recap here.

So we used the useEffect hook to register an effect.

And so that effect is this function right here,

which contains the side effect that we want to register.

And basically, register means that we want this code here

not to run as the component renders,

but actually after it has been painted onto the screen.

And so that's exactly what useEffect does.

So while before, the code was executed

while the component was rendering,

so while the function was being executed,

now this effect will actually be executed after render.

And so that's a lot better.

Then, as a second argument,

we passed this empty array here into useEffect.

And so this means that this effect will only be executed

as the component first mounts.

// Lesson 144. A First Look at Effects

let's start by reviewing what a side effect is.

So basically in React,

a side effect is any interaction between a React component

and a world outside that component.

And we can think of a side effect

as some code that actually makes something useful happen.

For example, fetching data from some API.

So what this means is that we actually need

side effects all the time when we build React apps.

Now, we already know that side effects should not happen

during the component render, or in other words

side effects should not be in render logic.

Instead, we can create side effects

in two different places in React.

And the first one is inside event handlers.

And remember that event handlers are simply

functions that are triggered whenever the event

that they are listening to happens.

However, simply reacting to events is sometimes not enough

for what an application needs.

Instead, in some situations, we need to

write some code that will be executed automatically

as the component renders.

And so this is when we can create a so-called effect

by using the useEffect hook.

So by creating an effect

we can basically write code that will run

at different moments of a component instance life cycle.

So when the component mounts, when it re-renders,

or even when it unmounts.

And this is really great

because it opens up a whole new door of possibilities.

summary: sometimes event handlers are not enough for the app's needsand that is where effects come in

effects allow us to write code that will run at different moments: mount, re-render, or unmounted

side effects are useful because they make apps do something and they are not to be used in render logic

a side effect is basicall any interaction between a react component and an external source outside of the component.
think of a side effect as code that actually does something. e.g. data fetching, setting up subscriptions, setting up timers, manually accessing the DOM, etc.



Okay, but let's now get just a bit deeper

into how effects work by comparing event handlers

to effects created with the useEffect hook.

And let's go back to the example

of fetching movie data that we have been using.

So fetching movie data is very clearly a side effect

because it's clearly an interaction

with the world outside the component.

Now, there are two different possibilities

of when we might want to create this side effect.

The first possibility is that we might want to

fetch movie data only when a certain event happens.

So in that case, we will

of course just use an event handler function.

So just like we have been doing up until this point

I mean we haven't been using event handlers to fetch data

but we have used them for other stuff.

Now the other possibility

of when to fetch the data would be to do so immediately

after the component mounts,

so after it is first rendered.

And so this is exactly what we did

in the previous lecture when we first used the use event

to specify an effect that was executed right

after the component was painted to the screen.

So we can say that these two pieces

of code produce the exact same result.

So they both fetch data about a movie

but they do so at different moments in time.

So the event handler executes when an event happens

and the effect executes whenever the component first renders

at least in this situation because the exact moment

at which the effect is executed actually depends

on its dependency array

which I shortly mentioned in the last video.

So we can basically use this dependency array to

tell the effect to also run after a component re-renders.

But I won't go deep into this right now

because that's easier to explain with code.

But speaking of the dependency array, this array is just one

of three parts that any effect can have.

So besides the dependency array

we have of course the effect code itself.

And also each effect can return a so-called

cleanup function, which is a function that will be called

before the component re-renders or unmounts.

Now thinking about different moments

of the component lifecycle,

so mounting, re-rendering and unmounting, can be very

helpful to understand how effects work.

However, we should actually not think about life cycles,

but about synchronization.

So the real reason why effects exist is not to run code

at different points of the life cycle, but to

keep a component synchronized with some external system.

So in this example, that would be to keep the component

in sync with the movie data that comes

from some external API.

And if that sounds super confusing, keep in mind

that this is just a first introduction to effects.

We will come back to all this after having used

the useEffect hook a bit more in practice.

But anyway, to finish our comparison here,

as we just learned, we use effects to keep a component

in sync with the external world.

While on the other hand we use event handlers

to React to a certain event

that happened in the user interface.

Now, what's very important to note here is

that event handlers are always the preferred way

of creating side effects.

So whenever possible

we should not overuse the useEffect hook.

So basically everything that can be handled

inside event handlers should be handled there.

summary: event handlers -> executed when the corresponding even happens, used to react to an event, preferred way of creating side effects

effects(useEffect) -> executed after the component mounts (intial render), and after subsequent re-renders (according to the dependency array), used to keep a component synchronized with some external system (in this example, with the api movie data)

3 parts to the useEffect: effect, cleanup function, dependency array

think about useEffect in terms of synchronization with ui not in terms of the lifecycle events.

events and effects produce the same results but at different moments. events are preferrable to effects in general and should be used over effects when possible

// Lesson 145. Using an async Function

So, many times when we need a lot of code

to handle a promise,

it's a lot easier and nicer to just have an async function.


So we might think that all we need to do

in order to use an async function

is to place the async keyword here,

and then use await inside of it.

However, we immediately get this warning from ESLint

which tells us that effect callbacks

are synchronous to prevent race conditions.

So basically the effect function

that we place into use effect cannot return a promise,

which is what an async function does.

So instead of doing it directly like this,

we just create a new function.

And then we place the async function in there.

So let's call this one fetchMovies.

And then let's of course adapt this function here,

to using the await keyword.

So const res equals await,

and again, I'm assuming that you already know

how all of this works.

So that converting to promises to an async function

is nothing new for you at this point.

So data will be the result

of converting the response to JSON,

which is again, an asynchronous operation.

And then, finally, we can set the movies to data.Search.

So just what we had here.

All right.

But now of course nothing is happening,

because nowhere we are calling this function.

So that's also why this gets this yellow underline here.

So our effect is now this function right here.

But this function, all it's doing right now,

is to define yet another function.

So this async fetchMovies.

And so then at the end, we just call it,

and then it is back to working.

Now here, I just want to extract this here

for now into another variable,

which I'm going to call query.

And this is just temporary here.

Now, okay.

And now what I also want to do is to log our movies here.

So the movies that we received from the API to the console,

just so I can show you something.

Let's first reload to get rid of the arrows there.

And now what I want to do here, again,

is to log our movies to the console.

So, do you think that I can just do this?

So you think that this is going to work?

Well, let's see.

And let's reload to actually see the truer result,

which is an empty array.

So why is this happening?

Well, hopefully you learned in the previous section

that setting state is asynchronous.

So in other words, after the state

has been set here in this line of code,

or actually after we instructed React to set the state,

that doesn't mean that this happens immediately.

So instead, it will happen

after this function here has been called.

And so right here in this line of code, we have stale state

which basically means that we still have the old value

as the state was before.

And in this case, before, it was just the empty array.

So our initial state.

So here we can basically then use data.Search again.

And so, as we reload now, then we get here the output.


Now what I wanted to talk about

is why we always have these two outputs.

So, basically why we have these two requests here happening.

Well, the reason for that is React's strict mode.

So when strict mode is activated in React 18,

our effects will not run only once, but actually twice.

So React will call our effects twice

but only in development.

So when our application is in production,

this will no longer be happening.

And so this is just so that React can identify

if there are any problems with our effects.

So if we come here quickly just to index.JS

and if we remove the strict mode from here,

well then we have this problem.

Let's actually remove the code.

Let's save and let's reload.

And then you see that we only get one output here,

which means that there was only one HTTP request.

So the effect was only called once indeed.

But let's put it back

because this is somehow a bit safer.

// Lesson 146. Adding a Loading State

we want to display some loading indicator

so in order to do that we need some more state.

So a state variable which basically tells our UI

that the data is still being loaded

and then as soon as the data has been loaded,

we want to display then the data

and not that loading indicator anymore.

But anyway, let's simply create that state variable

and usually it is called isLoading.

And so then set isLoading and let's start with false.

Now then let's come here to our effect

into our async function,

and so then right before the fetching actually starts

let's set isLoading to true.

And so this then will indicate our UI

that loading is being happened

and it can then render that indicator over there.

And then when all of this is done,

so let's do it right at the very end.

So this one we don't need anymore.

So here, after everything is finished

we can then set the isLoading state back to false,

and now it's very easy.

So here inside this box

we basically want to say that if isLoading,

then we want to display that indicator

and I will actually create a new component for that,

let's call it Loader, or else display that movie list.

Okay, so creating that loader that's just very simple

we just return a paragraph with the class of Loader

and then here we can say just Loading.

So many times in web applications

you will get like a rotating spinner or something like that,

So now it's still the application that's being loaded

so we get this white screen in the meantime,

but now it has started fetching the data

then it displayed that loader, so that new component here

but then as soon as isLoading was set to false

it was time to actually display our movie list.

And so with this, this whole behavior is a bit more natural

and also a bit more real-world

// Lesson 147. Handling Errors

So whenever we are doing any data fetching

in any web application

and dealing with asynchronous data,

we always need to assume that something can go wrong.

And so therefore, let's now account

for that situation by handling those errors.


So one of the things that can go wrong

is your users suddenly losing their internet connection.


Now, reacting to errors like this is actually not built

into the fetch function itself.

And so we have to kind of do that manually.

And so let's try that here in our fetch movies function.


So here on the response object

that we receive from fetch exists one, okay, property.

And so here we can check for that.

So basically if the response is not okay

then we want to throw a new error.

And again, this is pretty standard JavaScript code.

So then let's just say something went wrong


And so now if we throw an error here

we need to wrap all of our code into a try catch block. So,

try and catch

which again is just a normal JavaScript feature.

This one has nothing to do with React.

Okay, and here let's console that error. -> console.error(error)


So let's actually just log error dot message.

So this is the property of the error

where this string here will get saved into -> throw new Error("message") will be saved on the catch(error) error object

but then what we're actually interested in,

is to get this message here onto the screen.

but then what we're actually interested in,

is to get this message here onto the screen.

So basically displaying it right here instead of loading.

So that means that we need another piece of state.

So basically a piece of state indicating

whether we currently have an error or not.

So const error

and set error.

And so here, this one is actually not a bullion,

but it's truly the error message.

Okay, so here

let's then set the error

to actually that message.

And again, error dot message is basically

this string that we passed into the error

and error is the error itself

as it was passed into this catch block.

And again, that is just basic JavaScript.


So instead of doing that here

let's attach a finally block here.

So this block of code here will basically always be executed

at the very end.

Okay? And as an alternative

we could have kept the code here and also pasted it here,

but that would've created a duplication of code.

So with this, it's going to be a lot better. -> finally block -> finally {...code...}


Well, basically the length cannot be read of undefined.

And so the problem here is that the data

that comes back from the API now,

is apparently undefined.

So let's take a look at that.

So just at data here, and let's try that again.

And so indeed, we no longer have the search property here,

so we no longer have data dot search.

And so what's happening then is that data search

is being set to undefined,

and therefore we get this other error here.

So as I was saying in the very beginning

we always need to handle

all these different situations that can go wrong.

And when we are working with data fetching

there's always a lot of things that can go wrong.

So working with data is a lot of work

but it's also essential in most

if not all web applications.


So let's just quickly recap.

So what we did was to implement another state variable,

this time, specific for the error

so that whenever some error occurred

we could store the error message in there

and then display it in the UI as soon as an error occurred.

Now, as soon as an error did occur, which is

in this situation, and in this one we threw a new error,

and then we caught that error

inside the catch block of this try-catch.

And so this is a standard way

of catching errors in JavaScript.

And so in this situation, we then set the error state

to the message of the error that we specified here.

Then finally, we used of course, that state variable

in order to render something on the screen conditionally.

And so that was right here.


the reason why we dont get "Something went wrong with fetching movies." is thanks to await function - it waits until we get any response from data fetching(succes or failure.. whatever) and then goes to the next lines of code.
Examples:
1. When we change our API url to wrong, then we will get a response from API about failed data fetching, so we will go to the if (!res.ok), and we will see our declared error message.

2. While we breaking our network connection during await function, we immediatly go out of await function, then go to the catch block with default error.


And so make sure that after this video you just

analyze exactly what's happening here and that,

in fact these three conditions here are mutually exclusive.

So only one of them will ever be true.

Okay? And I think that for now this is enough

for error handling in this application.

// Lesson 148. The useEffect Dependency Array

by default in effect will run after each and every render.

However, that's almost never what we want.

But, the good news is

that we can change this default behavior

by passing a dependency array into the useEffect hook

as a second argument,

but why does use effect actually need

an array of dependencies, you might ask?

Well, the reason is that without this array,

React doesn't know when to actually run the effect.

But, if we do specify the effect dependencies

by passing in the dependency array,

the effect will be executed each time

that one of the dependencies changes.

summary: by default, effects run after every render. we can prevent that by passing a dependency array

without the dependency array, react doesn't know when to run the effect

each time one of the dependencies changes, the effect will be executed again

Now, what exactly are those dependencies?

Well, effect dependencies are state variables

and props that are used inside the effect.

And, the rule is that each

and every one of those state variables and props

must be included in the dependency array.

summary: every state variable and prop used inside the effect must be included in the dependency array


Therefore, both of them must be included

in the dependency array.

So, the effect function depends on these variables

to do its work,

and therefore we need to tell React about them.

Otherwise, if the title or the user rating changes,

React will not know about this change,

and, therefore, it won't be able to re-execute

the effect code.

And, this will then lead to a bug called stale closure.

And, we will talk about what a stale closure is

and also about some more rules for the dependency array

in a later more advanced section.


But, for now, let's actually understand

why the dependency array is so important

for the useEffect hook.

So, I like to think of the useEffect hook

as an event listener that is listening

for one or more dependencies to change.

And, when one of the dependencies does change,

use effect will simply execute the effect again.

So, a bit like a regular event listener,

but for effects.

But, let's go back to our previous example

where we had the title and user rating dependencies

in the array.

So, whenever the title or the user rating changes,

React will execute the effect again.

So, it will run the code one more time,

which will in turn update the document title.

So, the website title that we see in a browser tab.

So, essentially, effects react to updates

to state and props that are used inside the effect,

because, again, those are the effects' dependencies.

So, in a way, effects are reactive,

just like React reacts to state updates

by re-rendering the UI.

And, this is extremely useful and powerful,

as we will see throughout the rest of the course.

But, all this only works if we correctly specify

the dependency array.

summary: useEffect is like an event listener that is listening for one dependency to change. whenever a dependency changes, it will execute the effect again

effects react to updates to state and props used inside the effect(the dependencies). so effect are reactive (like (how react reacts to) state updates re-rendering the ui)


Okay, but now let's remember how I said

in the very first lecture about effects,

that effects are used to keep a component synchronized

with some external system.

So, some system that lives outside of our React based code.

And, if we think about it,

that's exactly what is happening here.

So, the state and props of our component

are now in fact synchronized with an external system,

which is, in this case, the title of the document.

Now, updating the title in some other way

will, of course, not magically update the title

or user rating.

So, the synchronization only works in one way,

but that's not really the point.

The same actually happens with state updates

and we still say that the UI is in sync with state.

So, the point is that use effect

truly is a synchronization mechanism,

so a mechanism to synchronize effects

with the state of the application.

And, you will discover this

each time that you're going to use an effect.

state/props -> sync -> external system (side effect)


So, as we just learned, whenever a dependency changes,

the effect is executed again.

But, now, let's remember that dependencies

are always state or props.

And, what happens to a component each time that its state

or props are updated?

Well, that's right.

The component will re-render.

This means that effects

and the life cycle of a component instance

are deeply interconnected.

That's why when the useEffect hook was first introduced,

many people thought that it was a life cycle hook

rather than a hook for synchronizing the component

with a side effect.

Now, the conclusion and the big takeaway from this

is that we can use the dependency array

in order to run effects

whenever the component renders or re-renders.

So, in a way, the useEffect hook

is actually about synchronization

and about the component life cycle.

Okay, and so with this knowledge,

let's look at the three different types of dependency arrays

that we can specify

and also how they affect both synchronization

and life cycle.


Okay, and so with this knowledge,

let's look at the three different types of dependency arrays

that we can specify

and also how they affect both synchronization

and life cycle.

So, when we have multiple dependencies

like in this first example, variables X, Y, and Z,

it means that the effect synchronizes with X, Y, and Z.

Now, in terms of the life cycle,

it means that the effect will run on the initial render

and also on each re-render triggered by updating

one of the dependencies X, Y, or Z.

So, again, just to make this crystal clear,

the effect will be executed each time

the component instance is being re-rendered

by an update to X, Y, or Z.

But, if some other piece of state or prop is updated,

then this particular effect will not be executed.

Now, if we have an empty dependency array,

that means that the effect synchronizes

with no state or props,

and therefore it will only run on mount.

In other words, if an effect has no dependencies,

it doesn't use any values that are relevant

for rendering the component.

And, so, therefore, it's safe to be executed only once.

Finally, if we have no array at all,

we already know that the effect will run on every render,

which is usually a really bad idea and not what we want.

Now, if the effect runs on every render,

that basically means that the effect

synchronizes with everything.

So, essentially every state and every prop in the component

will be dependencies in this case.  


And, now, to finish,

let's look at when exactly effects are executed

during the render and commit process.

Now, I mentioned in the first lecture on effects

that effects are executed after render.

And, while that's not wrong, it's also not the full story.

So, let's look at a timeline of events that happen

as components render and re-render.

And, I found this extremely useful

when I first learned about the useEffect hook myself.

And, so I think that you will benefit from this as well.

So, as we already know,

the whole process starts with mounting

the component instance,

in this case an instance of movie details.

After that, the result of rendering

is committed to the dom,

and finally the dom changes are painted onto the screen

by the browser.

So, this is just what we learned in the previous section,

but where do effects come into play here?

Well, effects are actually only executed

after the browser has painted the component instance

on the screen.

So, not immediately after render,

as you might have thought initially.

That's why we say that effects run asynchronously

after the render has already been painted to the screen.

And, the reasons why effect work this way

is that effects may contain long-running processes,

such as fetching data.

So, in a situation like that,

if React would execute the effect

before the browser paints a new screen,

it would block this entire process,

and users would see an old version of the component

for way too long.

And, of course, that would be very undesirable.

Now, one important consequence of the fact

that effects do not run during render

is that if an effect sets state,

then a second additional render

will be required to display the UI correctly.

And, so this is one of the reasons

why you shouldn't overuse effects.

Okay, but moving on now,

let's say that the title was initially set to Interstellar,

but then it changes to Interstellar Wars.

And, since this title is a prop,

it means that the component will re-render,

and the dom changes will be committed

and painted to the screen again.

Now, since title is part

of the dependency array of this effect,

the effect will be executed again at this point.

So, just as we learned in the last slide.

And, this whole process can of course be repeated

over and over again

until this movie details instance

finally unmounts and disappears from the screen.

Now, you might notice that there is actually a hole

between the commit and browser paint, right?

And, the reason is that, in React,

there's actually another type of effect

called a layout effect.

So, the only difference between a regular effect

and a layout effect is that the layout effect runs

before the browser actually paints the new screen.

But, we almost never need this.

And, so the React team actually discourages

the use of this use layout effect hook.

I simply mentioned this here

so that you know that this also exists.

And, actually, there are even two more holds

in this timeline.

But, we will talk about these mystery steps

// Lesson 149. Synchronizing Queries With Movie Data


So why did we get C first

even though it appears later here in the code?

Well, the reason is that as we just discussed before,

effects actually only run after the browser paint

while the render logic itself runs,

well, as the name says, during render.

And so then it makes sense that of course

this console.log here is executed first,

so during the render of this component.

And then we have A and B,

which comes from these two effects.

And so A is rendered first

simply because it appears first in the code.


Well, let's again analyze what just happened here.

So we updated this state here, which is the query state

and as a result, the component was re-rendered.

And then just like before, this code here was executed

and so therefore we see the letter C first

and then after that we also have a B log.

And so that is this effect here

which has no dependency array,

which, remember, basically means

that this effect is synchronized with everything

and so therefore it needs to run on every render,

while this other effect here,

this first effect is synchronized with no variables at all,

which is the meaning of this empty array.

And therefore this effect was not executed

as the component was re-rendered with the query state.


So as we change this here to something

nothing is going to happen.

And why is that?

Well, it's because this effect

is not yet synchronized with the query state.

So we are using this state variable inside the effect

but the effect doesn't know yet

that it will have to rerun each time

that a query state changes.

And so to fix that, we need to include that query

here in the dependency array.

And actually you see already that React is complaining.

So here as we hover,

we see that this hook has a missing dependency.

So this error or this warning actually is really,

really helpful so that we never forget

to correctly declare the dependencies of this effect.


So there is something there

but somehow our movies are still not being shown here.

And I think I know the reason for that

which is that we are never resetting the error state.

So at some point we had some error here

but now we no longer have an error,

but at no point in the application

we are actually resetting it.

So we need to also do that here in the finally,

or actually better yet,

we should do it right here at the very beginning.

So basically, always before we start fetching for data,

we reset the error.

So set error,

and then back to the empty string.

Give it a save, and now we get some results for test.

Okay, and then as we delete this

then we are back to "Movie not found."

The same for "inter" for some reason, and then "stellar."

And now we get some movie here, it's not the same as before.

And the reason for that is something called a race condition

but at least something is working here.

So if I write this a bit slower, then it works just fine.

And of course this works with any other movie

as long as for now you type slow enough.

Now I want to fix this problem

that when we have no search query here

then it tells us "Movie not found,"

which is not really true.

I mean, it is true because the API actually searched

for a movie with an empty string.

But in a situation where we have no query

we actually don't even want to search, right?

And so let's do that here in our effect.

And actually let's do it

before we even call this function here.

So we can say if there is no query.length,

so it's going to be zero in this situation,

then simply set to Movies back to an empty array.

So basically then removing all the movies

from the user interface,

then let's also reset the error

back to nothing and then return.

And so in this situation then the fetchMovies function

will not even be caught.

And here we can actually go even further.

So we can say, like if the query length is less than three,

then it's not even worth searching as well.

So it doesn't even make sense to have

a query just like this, right?

So there's no movies really called like that.

be sure to clear any error state when making new fetch requests


So let's recap what we just did here

and what is going to happen

whenever we type a new query here.

So the query is of course a piece of state, right?

So that is pretty obvious.

And so we are referencing that query variable

a couple of times inside our effect here, right?

And so therefore, we then included this query variable

also in the dependency array of this effect.

And so now our use effect hook

is basically like an event handler

that is listening for the query to change.

And so then when it changes

the entire effect is executed again, which in our case means

that a new request is gonna be made to our movies API.

So again, this effect that we just wrote here

basically reacts to an update to this state variable,

which makes the entire effect basically reactive,

so reactive to that state.

But at the same time, our effect will also be still executed

during the initial render.

Just right now, that is the empty string,

which we just basically told our effect to ignore.

So let's write another amazing movie here.

And so as we save this now, and so as our application

first loads, it will immediately fetch the data right here.

And so indeed, as we just learned in the previous lecture,

this effect basically now runs on the initial render

and whenever the state variable here updates.

So it is synchronized with this variable here.

And as you see, this is really, really powerful

and can be used in all kinds of situations.

So make sure that you really understand

everything that we just did here,

as this was a really, really important lecture.

// Lesson 150. Selecting a Movie

And now you might be wondering why here we are only going

to store the ID and not the entire movie object itself.

Well, the reason for that is that the movies

that we get here from the search are very limited.

So we only get the data really about the title, the year,

and the poster here.

While here on the right side,

we will want all kinds of details

that are not included in this first search.

So there will have to be another API call.

And we can see that here when we click,

it loads the movie again.

And so only then all of these details here are fetched.

And this fetch here,

so this movie will be fetched based on the ID

that we got here in this array.

and now let's create a new component.

And so that component will then be displayed

if there is a selected ID.

So basically that's like a selected movie.


And now going back up here into our JSX,

here on the right side, we now want to display not this,

but instead that component that we just created

in case that there is a selected ID.

So let's wrap all of this into a JavaScript mode block,

and then let's do a ternary operator.

So all we have to do is to say

if there is a selectedId, then display MovieDetail.

I'm not sure why that's not appearing here.

Maybe I gave it some other name.

Ah, SelectedMovie.

Well, actually I wanted to call it MovieDetail

or MovieDetails even.

So that makes a bit more sense, I think.

Yeah, so MovieDetails.

And then we pass in the selectedId.

Okay.

And if not, then that's where we want to display these two.

However, this is not going to work, so let's see.

And indeed, once again,

it's because here we have a piece of JSX,

so all this, which has basically two root elements.

So it doesn't have just one single parent element,

which, remember, is always necessary in a piece of JSX.

And so this is yet another great use case of a fragment

because, of course, we don't want

to create like a new div element

or something like that around these two.

So, just like this.

And again the reason for that is here

as the third part of the ternary operator,

we needed a new piece of JSX,

which cannot have two elements as the root element.

And so we just created one root element with the fragment.

And so the final step, as always, is to update the state.

So where are we going to do that?

Well, basically as the user clicks one

of these movie objects

or actually movie components.

So let's go to the movie component then,

and let's do that here with the trick

where we hover and then command or control + click.

So, movie list, and then right here on the movie on the li,

we can attach the onClick handler.

However, we don't have access to any function here yet,

so let's first go back and create that function.

So let's do that, well, maybe before the effect.

Okay, so let's do that here.

So this is just what we have done many times before,

which is in the component that owns the state,

we write some event handler functions that we then pass down

to some child component to update the state in the parent.

So here I will call it handleSelectMovie.

And so then this will pass in a movie ID.

Set selected ID to that ID.

And so we could also have simply

passed down the setSelectedId,

but I think like this,

it is a little bit cleaner in some situations.

All right.

So it's cleaner in my view

because like this, we give it a really clear name,

and so then we know exactly what's happening.

Ah, of course, we didn't pass it yet into the movie.

So that movie is inside MovieList.

And so we need to pass it there first.

So here we are going to need a little bit of prop drilling,

but if it's just one level,

then that's not a big deal at all.

So let's call this here onSelectMovie,

will be handleSelectMovie.

And then let's just grab this, move to our movie list.

Then we accept that prop here

and pass it right into the movie,

so just like we have have been doing so many times

except that here and then here,

we need to create a brand-new function,

remember, not just calling a function.

Okay, and then we pass in the movie.imdbID.

So we can see that right from here.

So in each of the movie objects,

the ID has this name right here.

Okay, give it a save, and now let's see what happens.

So we click here.

Then we get this ID.


So this means that we will now set the new state

based on the current one.

So let's just use the callback,

so selectedId,

and then we just say id equal to the already selectedId.

And if so, set the new one to null

and, otherwise, to the passed in ID.

// Lesson 151. Loading Movie Details

So since we want to do that each time

that this component mounts,

that means that we will want a use effect.

So our effect function.

And then as I just said

we want this to happen each time the component renders.

And so that's simply the empty dependency array.


Well, as always, we need a new piece of state.

So movie and set movie,

and here the default will now be an empty object

because an object is exactly

what we got back here from this API call.

So actually let's destructure the state object

because I really don't like these variable names here

all uppercase.

I have no idea why they did it this way.

So we will basically now the structure data

out of this movie.


And then you see that first we get undefined,

undefined and then after a second

we get the indeed the title and the year.

So why is that?

Well, here in the very beginning

of course when the component is initially mounted

then the movie is still this empty object here.

And so then title and year read

from that empty object are simply undefined.

So then this effect here starts and it gets the movie

and will then store it into our movie state.

And so then the component is rerendered.

And then of course this object is no longer empty.

And so then the rendering logic here will read all

of this data out of the object.

And so then we successfully log that

to the console over here all but anyway



Well, the answer lies again

right here in the dependency array.

So here, if we now pass in the selected ID

which is the prop that changes,

then let's see what happens.

So you saw that now it did actually work.

And so the reason is that now as the selected ID

prop changes, then the effect will indeed be executed again

because remember, this dependency array is a little bit like

an event listener that is listening

for one of the dependencies to change.

And so now as we click on another movie

this prop here will change.


So we create a new is loading state

and then set is loading and we start with faults.

And then immediately before we start fetching

we set is loading to true.

And as soon as it is done,

we set it back to faults.

// Lesson 152. Adding a Watched Movie

And here we actually need to convert that to a number.

And the reason for that is that the rating needs

to be a number so that we can then do the statistics here,

so calculating the averages.



const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId); returns a boolean

And let's first transform this simply into array of IDs.

So we grab all the movies,

and then we simply take out the movie.imdbDB.

So let's just lock that to the console here,

just to make sure.

All right.

Let's check that.

Somehow it's taking a lot of time here.

So right now we have nothing on the watched list.

So let's add a couple of movies there.

All right, and for some reason,

we are getting undefined here.

Ah, but I see that's because here it should be imdbID.

And indeed, now it works.

So we have this array now, and so now all we need to do is

to check whether this array

includes the currently selected ID.


And so here we are now using optional chaining

because there might be

actually no movie already in the list.

So if we haven't watched a movie,

then here this find method will return nothing.

So here then we need optional chaining

so that userRating is only taken from that object

in case it actually exists.

All right, so again pretty standard JavaScript right here,


Let's do the same here for the rating, toFixed.

So the two here is the number of decimal points basically

that we are allowing.

// Lesson 153. Adding a New Effect: Changing Page Title

So we should always use different effects

for different things.

So basically, that each effect has only one purpose,

so it only does one thing.

So this will be our effect,

and then we want to run that effect on mount.

// Lesson 154. The useEffect Cleanup Function

Well, basically what we need is a way to execute some code

as the component unmounts.

And we can do exactly that

by returning a so-called cleanup function from the effect.


All right, but you see that we still have another hole here

in the timeline, and that's because the cleanup function

that we return from the effect is actually also executed

on re-renders,

so right before the next effect is executed again.



So let's recap this important new information

that we just learned.

So the cleanup function is a function

that we can return from an effect,

and I say it can because the cleanup function is optional,

so we don't have to return one from the effect.

Now the cleanup function will run on two occasions.

First, it runs before the effect is executed again,

in order to clean up the results

of the previous side effect.

It also runs right

after the component instance has unmounted,

in order to give us the opportunity to reset the side effect

that we created, if that's necessary.

So remember that we have the dependency array,

in order to run code whenever the component mounts

or re-renders.

And now with the cleanup function, we also have a way

to run some code whenever the component unmounts.

And so with this,

we have the entire component life cycle covered.

Now you might be wondering,

when do we actually need a cleanup function?

Well, basically we need a cleanup function

whenever the side effect keeps happening

after the component has been re-rendered or unmounted.

For example, you might be doing an HTTP request

in your effect.

Now if the component is re-rendered

while the first request is still running,

a new second request would be fired off, right?

And so this might then create a bug called a race condition.

And therefore it's a good idea to cancel the request

in a cleanup function whenever the component re-renders

or unmounts.

And of course, there are many other examples.

So when you subscribe to some API service,

you should cancel the subscription.

When you start a timer,

you should stop the timer in the cleanup function.

Or if you add an event listener,

you should clean up by removing it.

Okay, and now to finish,

let me give you one more important rule about effects,

which is that each effect should only do one thing.

So if you need to create multiple effects

in your components, which is completely normal,

just use multiple useEffect hooks.

This not only makes each effect much easier to understand,

but it also makes effects easier

to clean up using a cleanup function.

dependency arry executes the side effect if the data is included in the array???? component renders -> execute effect if depenednecy array includes updated data

// Lesson 155. Cleaning Up the Title

So a cleanup function,

remember is simply a function that we return from an effect.


And so let's specify a function here

and then return it from the effect function.

And here all we want to do is to basically reset

the document.title to its original form.


So let's reload, clear the console here,

then select one of the movies

and now as I go back we already know that this function here

will get executed.

And so again that's because this component here

will be unmounted and so that's when the cleanup function

of the effect will get executed.

So our title will change.

And let's see what is locked to the console.

So we get cleanup effect for movie "Inception."


Because as we learned in the previous lecture

this cleanup function here will actually run

after the component has already unmounted.

And so if that's the case then how will the function

actually remember this title here?

So again, this function here runs only after the component

has already disappeared from our componentry

and so all the state including the movie object

has been destroyed.

But still our function here remembers the title.

So how is that?

Well, it's because of a very important concept

in JavaScript called a closure.

So basically a closure in JavaScript

means that a function will always remember all the variables

that were present at the time

and the place data function was created.

So in the case of our cleanup function here,

it was created by the time this effect

first was created here.

And so by that time the title

was actually defined as "Inception."

So in this case, the movie that we were seeing before.

So it was "Inception" at the time this function was created.

And so therefore we say that dysfunction closed

over the title variable

and will therefore remember it in the future.

So in this case, even after the component

has already unmounted, okay.

So that was just a bit of a theoretical explanation

of what happens behind the scenes.

But I think it's pretty important to understand this idea

of closures because it is really a crucial part

of how effects work in React,

and therefore we will actually

also come back to this issue a bit later.

But anyway, I also want to show you

that the cleanup function runs between renderers.

So basically after each we render.

So if we click here, on some movie

and then we click on another one

let's say this one here,

then you see that the cleanup function

actually run again for this movie.

And so that happened right after the re-render, right?

Let's just clean this to watch that again.

So as I click here, there will be a re-render

and so again, then the previous effect was cleaned up

with the previous movie that we had selected before.

// Lesson 156. Cleaning Up Data Fetching

And so here we can now see all the requests

that have been made.

So basically we see

that we made one request for each keystroke.

So it started here, then in or whatever, then incept

and all the way until the final word.

Now the problem with that is,

that this created all these different requests

that were basically happening at the same time.

And that has two problems.

First of all, having so many requests at the same time

will slow each of them down.

And second, this means that we will end up downloading

way too much data.

Because we're actually not even interested

in the data for all of these other queries.

But still, they were downloaded here.

Now in this case, it's very, very little data.

So that's not going to have any impact.

But in another application,

this might actually become a problem.

And so let's now learn how we can clean up,

basically our fetch requests,

so that, as soon as a new request is fired off,

the previous one will stop.

So it will get canceled.

And actually, I forgot to mention the third big problem

with having all of these requests

happening at the same time,

which is, imagine that actually, for example,

this request here would take a little bit longer

than the other ones.

So if this request here would be the last one to arrive,

let's say this one,

well here we then get the response if we click.

But anyway, again, let's imagine that this request,

for some reason, took a lot longer than all the other ones.

And so then this one would be the last one to arrive.

And so in that case, it would be the movies or the results

from this request that would be stored in our state

and that would be rendered in our UI.

Which is of course not what we want.

We always want exactly the last request of all

to be the one that matters, right?

So all these other ones, again,

we are not interested in them.

But if one of them takes longer than the rest,

then that one will actually become

the one that we see in our UI.

And this is actually a pretty common problem,

which even has the name of a race condition.

Because all these requests here are basically racing

with one another, seeing which one arrives first.

And so let's now fix that issue back in our code.


But we are only interested in the fetches here.

And immediately you see that all these other ones

which are not the last one, got canceled, right?

And so we can also see that now we no longer have

all these different requests happening at the same time.

So this one here started basically

and then immediately as the next one started,

this one was finished, so it was canceled.

This thing keeps popping up, makes it hard to explain.

And yeah, then finally,

the last one that we were actually interested in,

was of course not canceled.

So this one then went all the way until the end.


But here we can very clearly see

that there is basically only one request happening

at a time, until it then got canceled by the next one.

So let's just see why this is actually working.


So each time that there is a new keystroke here,

the component gets re-rendered, right.

And as we already know,

between each of these re-renders, this function here,

so the cleanup function, will get called.

And so what that means, is that each time

that there is a new keystroke, so a new re-render,

our controller will abort the current fetch request.

And so that is exactly what we want, right.

So we want to cancel the current request each time

that a new one comes in.

And so that is exactly the point in time

in which our cleanup function gets called.

And so again, the cleanup function is a perfect place

for doing this kind of work between renders.

Now the problem with this is,

that as soon as a request get canceled,

JavaScript actually sees that as an error.

And so that's why we then get the error here.

So basically this fetch request, as it is canceled,

it'll throw an error, which will then immediately go

here into our catch block, where the error is set.

And so that's why we can also see the errors down here.

So saying that the user aborted a request,

which is exactly what we have here.

However, this is not really an error

here in our application.

And so we want to ignore that.

So what we can do in order to do that

is to say, if error.name

is different from

abort error, only then we actually want to set the error.

And this works because the error that is thrown here,

so this object that we then get access to,

will have the name property set to abort error.

And then here we use that to our advantage, to again,

basically ignore these errors that are of this type.

And so only if they're not,

we set the error to the one that we are interested in.

Now to make this work here,

actually, we need to also set the error

to an empty string, after the movies have been set.

So we basically set the error to an empty string,

here at the beginning and at the end as well.

Okay.

And so let's try that now.

And we are still doing that throttling,

that's why it took so much time here.

But anyway, let's just again clean this here.

And, so now we never got that error

so we still got all our requests here, canceled.

And so, no more race conditions

and no more unnecessary data being fetched.

And so, if at some point in the future,

you are going to do your own HTP requests

in an effect like this, make sure to always clean up

after your fetch requests,

in case that you have a situation

where many requests can be fired off very rapidly,

one after another.

Which is exactly the situation that we have here.

So here, when we click on one of the movies

and the data gets fetched,

then usually we will not have so many requests

one after another.

Unless we click, like really fast

between these movies right here.

But that's usually not going to happen.

And so therefore, there's no need to clean up

the fetch that we're doing here

in this movie details component.

// Lesson 157. One More Effect: Listening to a Keypress

Let's now implement a new small feature

which will require us to listen globally

to a keypress event.

So let's check out what that feature is in our demo.

And so basically it's very simple.

When we open up a movie here to see the details,

instead of clicking here on this button to go back,

we want to now implement a feature

that the user can also just click on the Escape key.

So you can't see that,

but I'm doing it now.

And so with this,

the movie detail was then closed.

And so again, for that,

we basically need to globally listen to that keypress event.

So let's get to work.

And the way in which we can react

to a keypress event in the entire app

is basically by simply attaching an event listener

to the entire document.

So let's do that here, right in the App component.

And so since this is clearly a side effect

because we will be directly touching the DOM,

we need another effect.

So just to show you that we are indeed in the App component.

And so let's create that effect right here.

So useEffect,

then our effect function,

and then as always,

we start by saying basically

that this effect should run on mount.

And so now all we need to do

is to write document.addEventListener,

which, remember, is simply a DOM function,

so we are really doing basically now some DOM manipulation.

And so we are stepping really outside of React here,

which is the reason why the React team

also calls the useEffect hook here an escape hatch.

So basically a way of escaping

having to write all the code using the React way.

Okay.

But anyway, here let's now listen for the keydown event,

and then as our callback function here,

we just pass in a function

which receives the event.

And now we can simply say if the event.code,

which is basically the code of the keypress,

so if that is equal Escape,

then we will want to call our handleCloseMovie function.

So we already have that functionality

and so all we have to do

is to call that function right here.

And let's also just, for some experiment,

log something to the console.

So just like this.

And let's reload here,

but let's first actually come back to our network

and disable any throttling.

So let's reload,

then let's open up a movie,

and then let's see what happens when I hit the Escape key.

And indeed, the movie here was closed

and we also got our closing logged to the console.

But watch what happens right now

as I hit the Escape key again.

So you see we get closing again,

and actually even twice.

But again, that's simply because in strict mode

these effects here are running twice.

So again, as I keep hitting the Escape key,

we see here by this log

that actually this callback function here,

so the event listener,

is still listening for the keydown event

and it will then execute this function

each time that the keypress happens,

which is, however, not really what we want in this situation

because we actually don't even have a movie opened here.

So basically what we want instead

is to only attach this event listener here to the document

whenever we actually have the movie details in our tree,

so whenever that component instance is actually mounted.

So that's easy enough,

we just cut the effect from here.

And so after all,

we want it in our MovieDetails component.

All right.

I just started to place it there

so that we could understand why we actually need it here.

And now here, of course,

this function is called onCloseMovie,

which, again, we had already passed

into this component right here.

Now, here you see that actually ESLint is complaining

and the reason for that

is that we must actually include this function here

also in our dependency array.

So that doesn't seem to make a lot of sense,

but we will later learn why that is.

So again, when React tells us

that we need to include something here in the array,

we actually must do that.

Otherwise, there might be some consequences

that we do not want.

And so, again, whenever you see some warning here

coming from ESLint about a missing dependency,

you must include that in the array.

So otherwise, React says that you are lying

about your dependencies

and that, of course, we don't want.

But anyway,

let's not try to hit the Escape key again

while the MovieDetails component is not mounted.

And so now we didn't get that console.log,

and so therefore, now this function is, of course,

not being executed.

But as I open up the movie and then I hit the key again,

then you see that we get the closing log,

and of course, the movie has closed.

Okay, let's do that again.

And notice how now we are getting even more

of these logs here.

And let's clean that and do that again,

and a few more times.

And so you see that we get dozens of these logs here

saying closing,

which don't really seem to make much sense.

So if we reload the page and then do that again,

then we are back to only having these two logs,

which again, come because the effect is executed twice.

But now if I close another movie,

then all of a sudden we get three logs.

And so it seems

like these are basically accumulating, right?

So the reason for that is that, actually,

each time that a new MovieDetails component mounts,

a new event listener is added to the document,

so basically always an additional one

to the ones that we already have.

So again, each time that this effect here is executed,

it'll basically add one more event listener to the document.

And so if we open up 10 movies and then close them all,

we will end up with 10 of the same event listeners

attached to the document,

which, of course, is not what we want.

And so what this means

is that here we also need to clean up our event listeners,

or in other words, we need to return a function here

which will call

or which will execute document.removeEventListener.

So basically,

as soon as the MovieDetails component unmounts,

the event listener will then, again, be removed

from the document,

and so then we will avoid having so many event listeners

in our DOM,

which might become a memory problem in a larger application

with hundreds or thousands of event listeners.

So again, in this small app, of course,

this wouldn't be a problem,

but this is just to teach you,

so to prepare you for the real life later.

Now here, the function that we pass in,

so the one that we want to remove,

must be exactly the same as here in the addEventListener.

And so we cannot simply copy and paste

this function right here.

So it must be, again, the same.

And so let's cut it from here

and create a brand-new function here.

Let's just give it a name of callback.

And then let's use that here and here.

Give it a save.

Let's reload here.

Okay.

I hit Escape.

And let's try it a couple more times.

And you see that now we only get one closing

each time that I hit the Escape key,

or in other words,

actually our event listener is only executed exactly once,

which was exactly the goal of our cleanup function here.


So this is how we handle keypress events

in a React application.

So again, we need to basically step out of the React way

and back into classical DOM stuff.

And so for that, we need an effect.

So we specify our effect,

we listen for the event,

and each time that the component unmounts,

or even each time that it re-renders,

we will then remove the old event listener

from the document.


And this is actually going to be the last lecture

of this section.

And so let's clean up the application here a little bit

before we leave this section,

even though we will actually keep working on it

in the next one,

but still, let's do some stuff here now,

which is to, for example, remove all of these redundant

and unnecessary console.logs.

We also have some other cleanup here like this.

So this one we don't need,

but maybe let's just comment this one out

because this was nice for the explanation of the closure,

remember?

And then, of course, also when we open up the app,

of course we don't want to display search results

for a predefined movie,

so in this case for the "Inception" movie.

So let's remove that from state

and simply start with no search term at all.

All right.

Then here we should probably not log these errors

here as console.error,

but as a console.log.

And also when the error is an abort error,

we don't even need to log anything

because, again, for us,

those are actually not really errors.

And finally, let's now search for a movie here.

So "Interstellar", for example.

All right.

So I selected the movie

and now let's say that I search for something else.

And so in this situation,

I think that it would be best

to close the current movie here.

So whenever there is a new search,

we simply want to close the movie.

And so that's pretty simple.

We just have to, before we fetch the movie,

simply call handleCloseMovie.

And so with this,

let's see.

So we open up this one and then let's search.

Let's see what actually turns up for Jonas.

Something about the Jonas Brothers.

Yeah, but anyway,

you saw that as I did a new search,

then the movie here actually disappeared,

and the same now again.

Okay.

Now, as we load the application right now,

so on the initial render of the entire app,

we notice that right now we are no longer fetching any data,

right?

So we are only fetching data as a result

of searching here for movies in the search bar,

so basically only as a response to this event.

And so therefore,

we could now actually transform

this useEffect that we have here

into a regular event handler function,

because remember, that is actually the preferred way

of handling events in React.

And again, this is actually now more of an event handler

than anything else, right?

So again, if you think about that,

then maybe you come to the same conclusion

that maybe this shouldn't be an effect anymore

and really an event handler function.

So if you want,

you can go ahead and convert that,

but it's also not really necessary

because the main point of this section here was to learn

about the useEffect hook.

And in many situations,

we do actually want to start fetching on mount.

And so in those situations,

this is still a perfectly valid way of doing that,

at least in small applications like this one.

// Lesson 158. CHALLENGE #1: Currency Converter


And since the effect function itself cannot be async,

let's create another one in here.

So async function

and calling it simply, convert.


And so this will, remember, return a promise.

And so let's await that promise

and store it in a variable called, response.

And then from there, let's also await the data itself.

So await by converting the response to json.

So now I update this to 100

but you see that nothing is happening.

And if you remember everything we just learned

throughout this section,

this is going to make total sense to you.

Because as we type a new number here,

we will update the state that is inside the app component.

And therefore we will re-render this component.

However, our effect right now,

only runs on the initial render.

So we don't have anything here in our dependency array.

And so React has no way of knowing

that it should also rerun this effect right now.

And so, let's change that.

So let's basically give our dependency array

all the values that our effect in fact depends on.


And again here I like to use the analogy,

that this dependency array is essentially

like listening for one of these three variables to change.

And then each time that happens,

it will just re-execute our effect again.

And so this means that really,

our effect is now synchronized to these three variables.


But in all of these input elements,

we can specify the disabled prop.

Which again, is standard HTML.

And so disabled basically takes a true or false.

So if we set it just to true here,

then you see that it gets like, grayed out

and then we cannot do anything with it.

Now of course,

we don't want it to always be true but instead,

we want it to be disabled, when is loading, is true.