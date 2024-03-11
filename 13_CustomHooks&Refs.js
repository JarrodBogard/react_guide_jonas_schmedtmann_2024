// Lesson 160. React Hooks and Their Rules

So React hooks are essentially special functions

that are built into React and which allow us

to basically hook into some of React's internal mechanisms,

or in other words, hooks are basically APIs

that expose some internal React functionality,

such as creating and accessing state from the fiber tree,

or registering side effects in the fiber tree, as well.

So again, the fiber tree is somewhere deep inside React,

and usually not accessible to us at all.

But using the useState or the useEffect hook,

we can essentially hook into that internal mechanism.

Now, hooks also allow us to manually select

in-store dom notes access context,

and many, many other things.

Now, what all hooks have in common is that they all start

with the word "use," in order to make it easy for us,

and for React to distinguish hooks

from other regular functions.

And in fact, we can even create our own so-called

custom hooks, which will also start with the word "use."

And this is actually one of the greatest things

about hooks in general, because custom hooks

give us developers an easy way of reusing non-visual logic.

So logic that is not about the UI.

Now, you might be aware of this or not,

but there was a time when we had to use components based

on JavaScript classes if we wanted to give components state

and access to the component life cycle.

However, this came with a few problems,

which led the React team to introduce hooks.

And so now with hooks, our components based

on functions can have their own state,

and also run side effects.

And so this was a huge step forward for React,

and made it even more popular than it already was.

Now we only used two hooks so far,

but React actually comes with almost 20 built-in hooks.

// summary: 

// special built-in functions that allow us to hook into react internals 
//      creating and accessing state from fiber tree
//      registering side effects in fiber tree
//      manual dom selections and many more
// always start with the keyword "use" (useState, useEffect, etc).
// enable easy reusing of non-visual logic: we can compose multiple hooks into our own custom hooks
// give function components the ability to own state and run side effects at different lifecycle points (before v16.8 only available in class based components)

So useState and useEffect are, of course,

some of the most important hooks,

and therefore the most used ones,

along with useReducer and useContext,

that we will actually study pretty soon.

Then we have this huge list of some less used hooks,

but where some of them are actually still quite important,

like useRef, useCallback and useMemo.


Now, in order for hooks to actually work as intended,

there are two very simple rules of hooks

that we must follow.

The first rule is that hooks can only be called

at the top level in practice.

This means that we cannot call hooks inside conditionals,

like if statements, and also not inside loops

or functions nested inside the component.

We can also not call hooks after an early return,

because that's also similar to a condition.

But why?

Why is this such an important rule?

Well, it's because hooks only work if they are always called

in the exact same order, which can only be insured

if we only call them at the top level.

And we will look at this in more detail in the next slide.

And now the second rule is actually a bit simpler.

All it says is that hooks can only be called

from React functions.

In practice, this means that hooks can only be called

from function components or from custom hooks,

but not from regular functions or even class components.

Now, the great news is that you actually won't have to worry

about these rules at all if you're using a linter,

because these two rules are automatically enforced

by React's ESLint rules.

summary:

1. only call hooks at the top level
//      do not call hoooks inside conditionals, loops, nested function, or after an early return
//      this is necessary to ensure that hooks are always called in the same order (hooks rely on this)

2. only call hooks from react functions
//  only call hooks inside a function component or a custom hook

these rules are automatically enforced by reacts eslint rules

why do hooks need to be called in the same order

on every render?

And let's actually start from the very beginning,

based on all the knowledge that we already have

at this point.

So remember that whenever an application is rendered,

React creates a tree of React elements,

also called the virtual dom.

On the initial render, React also builds a fiber tree

out of the virtual dom, where each element is a fiber.

Now, each of these fibers contains a lot of stuff,

like the received props, a list of work,

and crucially for us, a linked list of all the hooks

that were used in the component instance.

But by breaking this rule, we will understand why hooks rely

on the order in which they were called.

And speaking of this order, our list will be built based

on the call order of the used hooks.

So first this useState call, then another useState call.

And then finally this useEffect call.

So this is our list of hooks

but it's not a linked list yet.

But what does linked actually mean?

Well, it means that the first list element

contains a reference to the second element,

which in turn, has a link to the third list element.

So all the list elements are linked together,

which is actually a common data structure

in computer science.


And so state B would then no longer exist

in this linked list of hooks after the render.

But what the problem with that, you might ask?

Well, the problem is that the first hook is still pointing

to the original second hook, so to state B,

but that link is now broken.

So state A is now linking to a hook that no longer exists,

and nothing is pointing to the effect of Z,

meaning that a linked list has been destroyed.

It works this way because fibers

are not recreated on every render.

And so this list is also not recreated.

So if one of the hooks just disappears from the list,

then the order of the list will get completely broken.

So in conclusion, if we conditionally use the hook,

like we did here, that will completely mess up the list

of hooks between renders, which will leave React confused

and unable to correctly track all the hooks that were used.

And so this is the reason why hooks need to be called

in the same order on every single render.

And the only way in which we can assure that

is by only calling hooks at the top level,

which is exactly what the first rule of hooks says.

So following this rule, the code and the list of hooks

would look just like this,

so without any conditionals in the code,

and with the list of hooks always in the same order.

Now of course, this opens up the question

of why even bother having this linked list,

if it requires this strange rule to exist.

Well, the big reason is that a linked list,

which relies on the hook call order,

is the simplest way to associate each hook with its value.

So basically, the order in which the hook is called

uniquely identifies the hook.

For example, React knows that hook number one

has a state of 23, and that hook number two

has a state of empty string.

So the value is associated with the call order.

And this is very convenient because by using the call order,

we developers don't have to manually assign names

to each hook, which would create multiple problems

that we don't need to get into at this point.

// Lesson 161. The Rules of Hooks in Practice

Now if we did call a hook outside of the top level,

so basically if we called a hook conditionally,

that would mess up this entire order here

and so that's where we would then run into problems

and that's exactly what we want to do now.

using an early return above a react hook will cause a fewer hooks than expected error,
while rendering hooks conditional will cause the order of the hooks to be changed, thus breaking the linked list that is used to store the hooks.

// Lesson 162. More Details of useState