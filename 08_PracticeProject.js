// Lesson 96. Building the Static App: List of Friends

// Lesson 97. Building the Static App: Forms

// Lesson 98. Displaying the New Friend Form

Now of course, this button component here doesn't have the

onclick property, right?

Only the native HTML elements, so for example this div here,

or the actual button, does have the onclick property.

// Lesson 99. Adding a New Friend

And let's create the ID using the built-in browser

crypto.randomUUID.

And so this is a very good way of generating

random IDs right in the browser.

So this is not an external packages,

but it won't work in older browsers.


And of course this function here then needs to receive

a friend object, so that's the new friend

that we created down there in that component.

And then here, all we do is to take the current friends,

which again could be called anything here

in this new function, and then we create a brand new array,

spread the current friends in there,

and at the new one at the end.

So again, we do it like this,

basically creating a brand new array

instead of using like the push function

because that would mutate the original array.

So it wouldn't create a new one,

and so React in that case would not re-render.

I mean sometimes it might actually work,

but it's not supposed to, because in many situations,

it will actually not work.

So don't do that, don't mutate original arrays

because React is all about immutability.

That's also the reason why we are not allowed

to mutate props, remember that?

So always creating new arrays here.

And the way we do that for adding a new element

to an array is by creating a brand new one like this,

spreading all the current elements

and then adding the new one to the end like this,


So onAddFriend like this,

we pass in handleAddFriend.

So again, we are using this on prefix here

just like React does it for the events

like onClick, onChange onMouseOver.

And so here we create our owns basically like onAddFriend,

so as if this was also an event.

// Lesson 100. Selecting a Friend

So that's the same logic as before with some lifted upstate.

Then we create a handler function which updates that state

and then we pass that handler function down via props.

And so now when we click here

that should actually immediately open up the form

and indeed it does.


so whenever we have a component

that doesn't actually need a prop

but all it does with the prop is to pass it down

into one of its children, we say that we are prop drilling.


And so on null, we do not have the ID property.

And so therefore then this breaks.

But fortunately for us in modern JavaScript

we have optional chaining.

when setting a definite toggle response to false the current val is not required

// Lesson 101. Creating Controlled Elements

And we use state with an empty string

and we are using an empty string because these are

input text elements.

And so this is how it needs to work.


But actually we should be careful with this

because in the beginning the bill is just a string.

So this doesn't really work.

So, let's first ask if there is a bill,

well then the results of the operation should be this,

and if not, then let's also make it an empty string.


then of course each time that the state is updated,

so each time that we write something new,

the state is updated and then the component re-renders.

So this function will get executed again

and then this derived state,

so this variable here will be reset as well.

So it will take these values here, again

calculate its thing,

and then store the value in this variable.

So then that gets displayed here.



So we have the number here.

So the paid value, basically,

let's copy this cause we will need it again, but for now

let's test if this value is greater than the bill.

So if it is,

then we basically don't want to change the state.

So we can just use then the current "paidByUser" again.

But otherwise then we actually want the new state to

become, well, what we have written there.

So that's "e.target.value", okay?

So again, we check in the new value that has been written

into the field and we compare it with the bill.

And if it's larger than the bill,

then we will just basically reset the value here

to "paidByUser", which is already to value

that was in there before.

But if not, so if it's a valid value,

then we just use it here.

So this will then become the new state.

And so now to just quickly reload here, let's say 200.

And so now as I type some other number here,

you cannot see it, but I'm typing it,

then this value here is not updated.


So the state that we had here

before is exactly the same when we click on other friends.

Now with the knowledge we have at this point,

we are not yet ready to fix this

and also not really ready to understand it.

All I can say for now is

that this happens because this component is rendered

in exactly the same place in the componentry as before.

I mean, when I click here again,

then the same component is rendered again

in exactly the same position.

So the component doesn't disappear in the meantime

and so therefore it is not really re-rendered.

And so that means that the state then stays the same.

Of course, if I close this and select the same friend again,

then since the component has disappeared

and then appeared again, then the state is reset.

But again, if I do this and select another one,

then the component doesn't really completely re-render,

at least not the state in it.

So the state is not reset in this case.

// Lesson 102. Splitting a Bill

So remember that the bill can basically be paid either

by you, so the user,

or by the friend,

and so based on that, we now need to set a value.

So we will use the ternary operator here for that.

And so we say who is paying is equal to the user,

which is basically you.

So remember that negative numbers

in the balance are owed by you, so by the user,

and positive numbers means that your friend is owing you.

Therefore, if this here is the situation,

so if you are paying,

then they will be owing you their part.

And so therefore, this is a positive number.

So the value here will be paidByFriend.

And in the opposite case, so if your friend is paying,

then you will actually owe your part,

so the paid by user part,

and it's going to be a negative value,

again because the negative values are the ones owed by you.

So minus

paidByUser.

And so then, inside this function here later,

we will add that value that we just returned here

onto the balance.


So our function here is now receiving that value.

And so now let's update our friend's state.

So setFriends.

And once again, the new array

that we will return here will be based

on the current friends array.

And so here we need that callback.

And then what we're going to do is friends.map

because we want to return a new array

with the exact same length as the current one.

So that's how we always do it when we update an object

in an array.

So we have done that many, many times before.

And so if the code I'm gonna write next

is a bit strange to you,

then just feel free to go back to one of those lectures.

But anyway, let's now loop actually over this array

in which each of the objects is, of course, a friend.

And so let's then update the friend whenever

the current friend.id is equal

to the selectedFriend.id.

And so here's what I mentioned earlier,

which is that we already know which of the friends

is getting updated, right?

Because we already hold that in the state.

So if this is the case,

so if the current friend is the one that we want to update,

then, well, here we are going to return an object,

which will contain all the elements,

so all the properties of the current friend,

but we want to override the balance property,

and we will override it with

friend.balance.

So the current value plus the value that we received,

and that's it.

So I just saved here by accident

and so immediately we get an error

because we are missing the second part

of the ternary operator.

So here in the second branch of the ternary operator,

in case that the current friend is not the one

that we want to update,

we simply return that friend unchanged.

// Links

👉 Writing Resilient Components (By Dan Abramov from the React team)

👉 Things I think about when I write React code (GitHub repository)

👉 A (Mostly) Complete Guide to React Rendering Behavior (By Mark Erikson from the redux team)

👉 A Visual Guide to React Rendering (A multi-part series, check out the other ones)

👉 Inside Fiber: in-depth overview of the new reconciliation algorithm in React

👉 A Cartoon Intro to Fiber (YouTube video)

👉 What Is React Fiber? React.js Deep Dive (YouTube video)

👉 The React and React Native Event System Explained

👉 Under the hood of event listeners in React

👉 A DIY guide to build your own React

👉 useSyncExternalStore First Look

👉 Under the hood of React's hooks system

👉 Why Do React Hooks Rely on Call Order? (By Dan Abramov

👉 So you think you know everything about React refs

👉 react-use: Reusable React Hook Library (GitHub repository)

👉 react-hookz: React hooks done right (GitHub repository)

