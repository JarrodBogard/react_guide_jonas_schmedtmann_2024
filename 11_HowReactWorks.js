// Lesson 123. Project Setup and Walkthrough

// 1. When opening a pre-made react project for the first time on a local machine, be sure to run 'npm install' to download all the necessary packages.
//      a. All of the information on the packages that are needed for a react project are stored in the package.json file.
//          i. npm will use the package.json info to install the necessary packages/libraries for the react app. 

// Lesson 124. Components, Instances, and Elements

// 1. Components are written in order to describe a piece of the user interface (i.e. a description of a piece of ui).  
//      a. The component is just a regular js function, but it's a function that returns react elements.
//          i. A component is a function that returns a react element (element tree) usually written as jsx (using jsx syntax).
//              1. It returns an element tree.
//          ii. A component is a generic description of the ui.
//      b. Essentially think of a component as a blueprint or a template.
//          i. It's this blueprint that react uses to create/invoke one or multiple component instances.
//      c. Each time a component is used/executed/invoked somewhere in the code, component instances are created by react.
//          i. React interanally calls the component, which creates a component instance.
//      d. A component instance is the physical manifestation of a component in the component tree.
//          i. The component itself is just a function that was written to describe that component and what it should like and what it should do when called.
//      e. Each instance holds its own state and props and it also has/manages its own lifecycle.
//          i. A component instance can be born, it can live for some time, and then it will eventually die.
//      f. Many times the terms component and component instance are used interchangeably.
//          i. Example: The term component lifecycle is commonly used and not component instance lifecycle.
//          ii. Example: It is commonly said that the ui is made up of components, not of component instances.
//      g. As React executes the code in each component instance, each of them will return one or more react elements.
//          i. Behind the scenes, the jsx of a component will actually get converted to multiple React.createElement() function calls.
//          ii. Then as react calls these createElement functions the result will be a react element.
//                  1. A react element is basically the result of using/invoking a component instance in the application code. 
//          iii. React elements are the result of the underlying createElement function calls that occur based on the jsx template.
//                  1. They are simply a big immutable js object that react keeps in memory.
//      h. A react element basically contains all the information that is necessary in order to create dom elements for the current component instance.
//          i. It is the react element that will eventually be converted to actual dom elements and then painted onto the screen by the browser.
//      i. Based on these points, the dom elements are the actual, final, and visual representation of a component instance in the browser.
//      j. Importantly, it's not react elements that are rendered to the DOM.
//          i. React elements just live inside the react app and have nothing to do with the dom.
//          ii. They are simply converted to dom elements when they are painted on the screen in this final step.
//      k. Summary:
//           i. Write a component in code (i.e. write a blueprint for a component instance).
//          ii. Use/invoke/execute that component in a jsx template, multiple times if needed (i.e. create a component instance).
//          iii. The component instance is converted to a react element (i.e. it is converted into the native createElement function calls).
//          iiii. The react elements are then converted into actual dom elements.
//          iiiii. The browser then renders the dom elements (i.e. native html elements) as they were described in the original blueprint.

// Lesson 125. Instances and Elements in Practice

// 1. React components can be invoked like normal functions and also logged to the console.
//      a. This approach should NOT be used in react app development.
//          i. The component instances will not work correctly.
// 2. The '$$typeof' is a security feature that react has implemented in order to protect against cross-site scripting attacks.
//      a. This is a symbol and symbols are one of the js primitives, which cannot be transmitted via json.
//          i. This means that a symbol cannot come from an api call.
//              1. If a hacker tries to send a fake react element from an api, then react would not see the 'typeof' as a symbol.
//                  a. Remember: Symbols cannot be transmitted via json.
//              2. React would not include the fake react element into the dom thereby protecting the app against this type of attack.
// 3. Calling/invoking a component as a normal js function will still return/create a react element, but the difference is that it will just be the raw react element, which is not helpful.
//      a. When a react component instance is created, react should see the instance itself and not the raw output element (i.e. react element).
//          i. When a component is called directly using regular js function call syntax, react no longer sees it as a component instance.
//          ii. Additionally, state variables that the component instance manages will actually be seen by react as inside the parent component, which is not good for state management.
//                  1.  This essentially means that the component instance can no longer manage its own state, which means its not really functioning as a component any longer.
//          iii. For these reasons, never create component instances using regular js function call syntax.
//                  1. This will create multiple problems such as violating the rules of hooks as well as the issues mentioned above.
// 4. Always render/call/invoke/use components inside of a jsx template using jsx syntax.

// Lesson 126. How Rendering Works: Overview

// 1. Building apps in react is basically building many components and then using those components inside of other components where needed.
//      a. React will read these components in the jsx template/element and create the actual instances from the component blueprint.
//          i. These are the actual physical components that live in the application and hold the state variables and props.
//      b. As React calls each component instance, each jsx template/element will produce the React.createElement() function calls.
//          i. These will then produce a react element for each component instance.
//                  1. Each react element will ultimately be transformed to dom elements and displayed as a ui on the screen.
// 2. React elements are converted and rendered to the dom and then displayed to the ui.
//      a. This process is started by react each time that a new render is triggered.
//      b. Most of the time the new render (i.e. re-render) is triggered by updating state somewhere in the application.
//          i. State changes trigger re-renders and so it makes sense that the next phase is the render phase.
//      c. In the render phase, react calls the component functions and figures out how it should update the dom in order to reflect the latest state changes to the ui.
//      d. React does not actually update the dom in this phase.
//          i. Reacts definition of rendering is very different from what is normally considered rendering.
//      e. In React, rendering is not about updating the dom or displaying elements on the screen.
//          i. Rendering only happens internally inside of react and so it does not produce any visual changes.
//      f. Actual ui rendering includes a commit phase, following the render phase.
//          i. Once react knows how to update the dom (i.e. the render phase), it does so in the commit phase.
//          ii. In the commit phase, new elements could be placed in the dom and already existing elements might get updated or deleted in order to correctly reflect the current state of the application.
//      g. It is the commit phase that is responsible for what is traditionally called rendering.
//          i. Not the render phase, which can be confusing.
//          ii. Once the commit phase is completed, the browser will notice that the dom has been updated and then it repaints the screen.
//                  1. This last part has nothing to do with react, but it's still worth mentioning that it's this final step that actually produces the visual change that users see on their screens. 
//                      a. This is called 'browser paint'.
// 3. Steps fro triggering an actual render/re-render:
//      a. Two ways to trigger/initiate a render:
//          i. The initial render (i.e. component mount).
//          ii. A state update (i.e. re-render). 
//                  1. State is updated in one or more component instances (re-render).
//      b. It is important to note that the render process is actually triggered for the entire app, not just for one a single component.
//          i. This doesn't mean that the entire dom is updated on each re-render.
//                  1. This is because in react rendering is only concerned with the component functions and determining what needs to change in the dom (based on state updates and props???).
//      c. In practice, it looks as if only the updated component is re-rendered, but thats not how it works behind the scenes.
//      d. React actually analyzes the entire component tree whenever a render/re-render occurs.
// 4. It is important to note that a render is actually not triggered immediately after a state update happens.
//      a. Instead, it's scheduled for when the js engine has some 'free time' to do 'work'.
//          i. This difference is usually just a few milliseconds that are innoticeable.
//      b. There are situations like multiple useState setter function calls, within the same handler function, where renders will be batched.
//          i. There is also 'batching' of multiple setState calls in event handlers.

// Lesson 127. How Rendering Works: The Render Phase

// 1. In react, rendering is not about the screen, the dom, or the view.
//      a. It's just about calling component functions which will ultimately create react elements.
// 2. When a re-render occurs, the dom will actually not be updated for the entire component instance.
// 3. Render phase steps:
//      a. At the beginning of the render phase, react will analyze the entire component tree.
//      b. It will take the component instances that triggered a re-render and actually render them.
//          i. This simply means to call the corresponding component functions that were written in the code (i.e. the component blueprint).
//      c. This will create updated react elements which altogether make up the so-called virtual dom.
// 4. Description of the virtual dom:
//      a. On initial render, react will take the entire component tree and transform it into one big react element.
//          i. Basically, a react element tree.
//              1. This is what is referred to as the virtual dom.
//      b. The virtual dom is just a tree of all react elements created from all instances in the component tree.
//      c. The virtual dom is relatively cheap and fast to create even if many iterations of it are needed.
//          i. This is because it's just a js object.
//      d. The virtual DOM is probably the most hyped and most used term when people describe what react is and how it works.
//          i. However, if the virtual dom is just a simple js object, it's actually not such a big deal.
//                  1. That's why the react team has really downplayed the meaning of this name.
//                      a. The official documentation no longer mentions the term virtual dom anywhere.
//          ii. Technically, it is simply a react element tree.
//      e. Shadow dom and virtual dom are two completely different things.
//          i. The shadow dom is actually just a browser technology that is used in things like web components.
//      f. When state updates in a component instance a re-render is triggered.
//          i. This means react will call the function component again for the associated component instance that was updated.
//          ii. React will then place the newly created react element into a new react element tree (i.e. in a new virtual dom).
//      g. Whenever react renders a component, that render will cause all of its child components to be rendered as well.
//          i. That happens no matter if the props that were passed down have changed or not.
//          ii. If the updated component returns one or more other components, those nested components will be re-rendered as well.
//                  1. This occurs all the way down the component tree.
//                      a. This means that if the highest component in a component tree is updated (e.g. the App component), then the entire application will actually be re-rendered.
//          iii. React uses this strategy because it doesn't know beforehand whether an update in a component will affect the child components or not.
//                  1. By default, react prefers to play it safe and just render everything.
//                  2. Keep in mind that this does not mean that the entire dom is updated.
//                      a. It's just a virtual dom that will be recreated, which is not a big problem in small or medium-sized apps.
//      h. Once the new virtual dom is created after the state update and subsequent re-render, it will be reconciled with the current fiber tree (ref. reconciliation + diffing).
//          i. The fiber tree stores the current dom's component tree as it previously existed before the most recent state update and re-render.
//                  1. Essentially, the old virtual dom is compared with the new virtual dom via the fiber tree.
//          ii. The reconciliation is performed with a react reconciler called fiber, which is why it is called a fiber tree.
//          iii. The results of this reconciliation process will be an updated fiber tree.
//                  1. An updated fiber tree that will eventually be used to write to the dom (i.e. browser paint).
// 5. Summary of notes up to point 4:
//      a. The react element tree for the entire app is cheap and fast because it's just a js object.
//          i. However, writing to the dom is not cheap and fast.
//          ii. It would be extremely inefficient and wasteful to always write the entire virtual dom to the actual dom each time that a render is triggered.
//          iii. Additionally, when the state changes somewhere in the app, only a small portion of the dom needs to be updated and the rest of the dom that is already present can be reused.
//                  1. The initial render is the exception because there is no way around creating the entire dom from scratch.
//                  2. Example: Imagine a complex app and when a button is clicked a piece of state is updated which will trigger a modal component to be shown to the ui. In this scenario, only the dom elements for that modal need to be inserted into the dom and the rest of the dom should just stay the same. 
//                      a. This is how react tries to handle dom updates.
//                          i. Whenever a render is triggered, react will try to be as efficient as possible by reusing as much of the existing dom tree as possible.
//          iiii. Reconciliation is the process where react decides exactly which dom elements need to be inserted/deleted/updated in order to reflect the latest state changes.
//          iiiii. The result of the reconciliation process is a list of dom operations that are necessary to update the current dom with a newest state updates.
//          iiiiii. Reconciliation is processed by a reconciler.
//                      1. The reconciler is like the engine/heart of react.
//          iiiiiii. The reconciler allows for never touching the dom directly.
//          iiiiiiii. Instead, it simply provides react with the next snapshot of what the ui should look like based on the updated state.
//                      1. Remember: The current reconciler in react is called fiber.
// 6. Fiber tree summary:
//      a. On the initial render of the app, fiber takes the entire react element tree (i.e. the virtual dom), and based on that tree, it builds another tree which is called the fiber tree.
//      b. The fiber tree is a special internal tree where for each component instance and dom element in the app, there is one so-called fiber (i.e. an internal tree that has a "fiber" for each component instance and dom element)
//      c. What is special about this tree is that unlike react elements in the virtual dom, fibers are not recreated on every render.
//          i. The fiber tree is never destroyed.
//          ii. Instead, it's a mutable data structure.
//          iii. Once it has been created during the initial render, it's simply mutated over and over again in future reconciliation steps.
//                  1. This makes fibers the perfect place for keeping track of things like the current component state, props, side effects, list of used hooks and more.
//          iiii. The actual state and props of any component instance that are seen on the screen are internally stored inside the corresponding fiber in the fiber tree.
//          iiiii. Each fiber also contains a queue of work to do like updating state, updating refs, running registered side effects, performing dom updates and so on.
//                  1. This is why a fiber is also defined as a unit of work.
//          iiiiii. Fibers are arranged in a different way than the elements in the react element tree.
//                  1. Instead of a normal parent-child relationship, each first child has a link to its parent and all the other children have a link to their previous sibling.
//                      a. This kind of structure is called a linked list and it makes it easier for react to process the work that is associated with each fiber.
//          iiiiiii. Both trees (i.e. the react element tree and fiber tree) include not only react elements or components, but native dom elements.
//          iiiiiiii. Both trees are a complete representation of the entire dom structure, not just of react components.
//          iiiiiiiii. One extremely important characteristic of the fiber reconciler is that work can be performed asynchronously.
//                          1. This means that the rendering process which is what the reconciler does, can be split into chunks, with some tasks being prioritized over others.
//                              a. Additionally, work can be paused, reused, or thrown away if not valid anymore.
//                          2. All of this 'work' happens automatically behind the scenes.
//                              a. It's completely invisible to developers.
//          iiiiiiiiii. Some of the practical uses of this asynchronous rendering are modern so-called concurrent features like Suspense or transitions starting in react 18.
//                              b. It also allows the rendering process to pause and resume later so that it won't block the browser's js engine with renders that take too long, which can be problematic for performance in large applications.
//                                  i. Long renders will not block the js engine in the browser from running in the browser. 
//                                  ii. This is only possible because the render phase does not produce any visible output to the dom.
//      d. The fiber tree facilitates the reconciliation process.
//          i. How it does this in a practical example:
//              1. A state update triggers a re-render, which will create a new virtual dom.
//                  a. Some components may have been removed, added, or updated as a result of the state update.
//                      i. Remember that all children of a re-rendered element are re-rendered as well.
//              2. This new virtual dom needs to be reconciled with the current fiber tree, which will then result in an updated tree.
//                  a. Internally, this updated fiber tree is called the 'work-in-progress' tree.
//                      i. Whenever reconciliation needs to occur, the fiber reconciler walks through the entire tree step by step and analyzes exactly what needs to change between the current fiber tree and the updated fiber tree based on the new virtual dom.
//                              1. This process of comparing elements step-by-step based on their position in the tree is called diffing.
//              3. Based on the analyses of the fiber reconciler, the necessary dom mutations will be placed into a list called the 'list of effects', which will be used in the next phase (i.e. the commit phase).
//                  a. This list will be used to make the necessary dom mutations displayed to the ui.
//              4. The results of the reconciliation process is a new and updated fiber tree (i.e. a second tree not the current tree that was used during the reconciliation process), plus a list of dom updates that need to be performed in the commit phase.
//                  a. React still hasn't written anything to the dom, but it has figured out the 'list of effects' that will be used to make the necessary updates.
//                      i. This is the final result of the render phase as it includes the dom operations that will finally be made in the commit phase. 

// Lesson 128. How Rendering Works: The Commit Phase

// 1. The completion of the render phase results in a list of dom updates
//      a. This list will now get used in the commit phase.
//      b. Technically, the current 'work-in-progress' fiber tree also goes into the commit phase.
// 2. The commit phase is where react finally  writes to the dom,
//      a. This is the phase where it inserts, deletes and updates dom elements.
//          i. React 'flushes' updates to the dom in this phase.
//      b. React goes through the 'effects' list that was created during render phase
//          i. It applies each 'effect', one by one, to the actual dom elements that were in the already existing dom tree.
// 3. Writing to the dom happens in one synchronous step.
//      a. Therefore, the commit phase is synchronous unlike the rendering phase, which can be paused.
//      b. Committing cannot be interrupted.
//          i. This is necessary so that the dom never shows partial results, which ensures that the ui always stays consistent.
//                  1. This is the reason for dividing the entire process into the render phase and the commit phase.
//                      a. It's so that rendering can be paused, resumed, and discarded.
//                          i. Then the results of all that rendering can be 'flushed' to the dom in one synchronous step.
// 4. Once the commit phase is completed, the 'work-in-progress' fiber tree becomes the current tree for the next render cycle.
//      a. Remember, fiber trees are never discarded and never recreated from scratch. 
//          i. Instead, they are reused in order to save rendering time.
//                  1. They are only mutated/upated.
// 5. The browser will then notice that the dom has been changed, and as a result, it will repaint the screen whenever it has some idle time.
//      a. This is where the dom updates are finally made visible to the user in the form of an updated ui.
// 6. The browser paint phase is performed by whichever browser the user is using.
//      a. The render phase is performed by the react library.
//      b. The commit phase is handled by a separate library that writes to the dom, and it's called react dom.
// 7. React itself never touches the actual browser dom. 
//      a. It does not touch the dom, it only goes as far as handling the render phase as previously mentioned. 
//      b. It doesnt know where the render result will go.
//          i. It has no idea where the result of the render phase will actually be committed and painted.
// 8. The reason for this is that react itself was designed to be used independently from the platform where elements will actually be shown. 
//      a. React can be used on different platforms (i.e. hosts).
//      b. Other hosts include react native, remotion, as well as others that handle pdf and word docs, etc.
// 9. These hosts such as react dom are called renderers.
//      a. However, they do not handle the render phase.
//          i. They only commit the results of the render phase.
//                  1. They handle the commit phase.
//                      a. Renderers do not render, they commit the result(s) of the render phase.
//          ii. The term renderer fits with the common sense definition of rendering.
//                  1. It was also chosen at a time when the render and commit phase were not separated.
//      b. Therefore, the result of the render phase is not really a list of dom updates
//          i. It is actually a  list of updates for whatever elements that are used in the selected host.
//          ii. Therefore, the term virtual dom doesn't make much sense when viewed from this angle.
//                  1. This is why the term react element tree is preferred.
// 10. The react library is not responsible for writing to the dom, because the dom is just one of many hosts to which react apps can be committed.
//      a. There are different packages that can be used for different hosts.
//          i. This is why react and react dom are both imported in the index.js file of react apps.
// 11. The whole process of rendering and displaying a react application on the screen starts with a trigger.
//      a. The trigger can either be the initial render of the app or, a state update in one of the component instances.
//          i. This then triggers the render phase which does not produce any visual output.
//          ii. This phase starts by rendering all component instances that need a re-render.
//                  1. Rendering in react simply means to call the components functions.
//          iii. This will create one or more updated react elements which will be placed in a new virtual dom (i.e. a react element tree)
//      b. It is important to remember that rendering a component will cause all of its child components to be re-rendered as well.
//          i. Rendering a component also renders all of its child components no matter if their props changed or not.
//          ii. This is because react doesn't know whether children have been affected by the parent re-rendering or not.
//      c. Next, the new virtual dom needs to be reconciled with the current fiber tree.
//          i. That is, with the representation of the react element tree before the state update.
//          ii. This is necessary because it would be slow and inefficient to destroy and rebuild the entire dom tree each time that something on the screen needs to be updated.
//          iii. Instead, reconciliation tries to reuse as much of the dom as possible by finding the smallest number of dom updates that reflect the latest state update on the screen.
//          iiii. The reconciliation process is done using a reconciler called fiber, which works with a mutable data structure called the fiber tree.
//          iiiii. In this tree, for each react element and dom element, there is a fiber.
//                      1. This fiber holds the actual component state, props, and a queue of work.
//          iiiiii. After reconciliation, the queue of work will contain the dom updates that are needed for that element.
//          iiiiiii. The computation of these dom updates is performed by a diffing algorithm, which step by step compares the elements in the new virtual dom with the elements in the current fiber tree to see what has changed.
//          iiiiiiii. The final result of the render phase (i.e. the reconciliation and diffing process), is an updated (second???) fiber tree as well as a list of all necessary dom updates.
//          iiiiiiiii. It's important to note that the render phase is asynchronous.
//                          1. This is so fiber can prioritize and split work into chunks.
//                              a. Work can be split, prioritized, paused, and resumed later.
//                          2. This is necessary for concurrent features and also to prevent the js engine from being blocked by complex render processes.
//          iiiiiiiiii. The output of the render phases (i.e. the list of dom updates) will be written to the dom in the commit phase.
//          iiiiiiiiiii. In this phase, a so-called renderer like react dom will insert, delete, and update dom elements so that the dom is updated to reflect the new state of the application.

And unlike the render phase,

the commit phase is actually synchronous.

So all the dom updates are performed in one go

in order to ensure a consistent ui over time.

Now finally, once the browser realizes

that the dom has been updated, it starts a new browser paint

in order to visually update

the user interface on the screen.

Okay, and there you have it.

This is how, in a nutshell,

we go from updated react elements all the way

to an updated dom and user interface on the screen.

// Lesson 129. How Diffing Works

which was the diffing algorithm that is part

of the reconciliation process.

So we mentioned diffing back then

but we didn't really go into how diffing works.

And since that's really important, let's do that now.

So diffing is first

of all based on two fundamental assumptions.

The first one is that two elements

of different types will produce different trees.

The second assumption is that elements with a stable key,

so a key that is consistent over time,

will stay the same across renders. 2 rules -> two elements of different types will produce different trees and elements with a stable key prop stay the same across renders this allows reac tot go from 1 billion operations per 1000 elements to just 1000 operations per 1000 elements

Now these assumptions may seem pretty obvious

especially the first assumption

but they allow the algorithm to be orders

of magnitude faster going, for example,

from a billion operations per a thousand processed elements

to just a thousand operations.

Now remember that diffing is comparing elements step-by-step

between two renders based on their position in the tree.

And there are basically two different situations

that need to be considered.

First, having two different elements at the same position

in the tree between two renders

and second having the same element

at the same position in the tree.

So those are the only two situations that matter.

And so let's now start with the first situation.

So let's say that

at some point an application is re-rendered,

and in the diffing process,

we find that an element has changed

in a certain position of the tree.

Now here we're actually not looking at a tree

but at the JSX code, which leads to that tree because I find

that it's a bit easier to understand this way.

But anyway, in the case

of a dom element changing like this, changing simply means

that the type of the element has changed

like in this example from a div to a header.

So in a situation like this, react will assume

that the element itself plus all its children

are no longer valid.

Therefore, all these elements will actually be destroyed

and removed from the dom.

And that also includes their state, which is really

important to remember.

So as we see in this example, both the diff element

and the search bar component will be removed from the dom

and will then be rebuilt as a header with a brand

new search bar component instance as the child.

So if the child elements stays the same across renders,

the tree will actually get rebuilt,

but it gets rebuilt with brand new elements.

And so if there were any components with state

that state will not be recovered.

So this effectively resets state

and this has huge implications

for the way that react applications work in practice.

And that's why we will see some examples

of this behavior in the next lecture.

Now, everything we just learned works the exact same way

for react elements, so basically for component instances

as we can see in this second example.

So here the search bar component changed

to a profile menu component

and therefore the search bar is again completely destroyed

including its date and removed from the dom.

Okay, so this is the first situation. -> react assumes entire sub tree is no longer valid, old components are destroyed and removed from dom including state and the tree might be rebuilt if the children stayed the same and the state is reset

The second situation is when between two renders

we have the exact same element

at the same position in the tree.

And this one is actually way more straightforward.

So if after a render, an element

at a certain position in the tree is the same as before,

like in these examples right here,

the element will simply be kept in the dom.

And that includes all child elements

and more importantly, the components state.

Now this may sound pretty obvious

but it actually has some important implications in practice.

So again, the same element at the same position

in the tree stays the same and preserves state, and it works

like this for dom elements and for react elements as well.

Now, looking at these examples

we actually see that something has changed.

However, it was not the element type that has changed

but simply the class name attribute in the diff

and the weight prop in the search power component.

And so what react is gonna do is to simply

mutate the dom element attributes.

And in the case of react elements

it'll pass in the new props, but that's it.

So react tries to be as efficient as possible

and so the dom elements themselves will stay the same.

They're not removed from the dom, and even more importantly

the state will not be destroyed. -> element will be kept along with its child elements including their state, new props/attributes are passed if they changed between renders if this is not the desired result the key prop can be used to affect/change this 

Now sometimes we actually don't want this standard behavior

but instead to create a brand new component instance

with new state.

And so that's where the key prop comes into play

// Lesson 130. Diffing Rules in Practice

Well, basically each time that we click

on one of these tabs,

the tab component down here is re-rendered.

However, as we can see down here in this component tree

as we keep clicking around,

we see that the tabContent component instance

always stays in the exact same position in the tree.

And so with this, we are now in the situation

that we learned in the previous lecture,

where we have the same element.

So in this case, the same component in the same position.

And so because of that,

the state is preserved across renders.


So just like we learned before.

So again, as we keep clicking around these tabs here,

this component instance here is actually not destroyed.

So it stays in the dom

and the only thing that changes

is the props that it receives.

So of course, the props will change.

So where is that?

Right here?

So you see that now as I click here,

then of course, down here the prop will have changed.

But that's the only thing that changes.

So the state, again, remains completely unchanged.

But what if we now click on this tab number four?

So as we can see in our code, in this case,

so when the tab num is three,

actually this DifferentContent component

will be rendered, right?

And so let's see what's going to happen.

So we have number four here and we have the text closed.

So now we click here.

And immediately we see that we get

a completely different component instance right here.

So it's still in the same position of the tree

but it's no longer tab content, but different content.

And so now when I go back, watch what happens.

So now the state has actually been reset.

And so that's because the tab content

that we had here before has been completely destroyed

and removed from the dom in the meantime.

So while we were at the different content,

and so that's why I placed this string here

which says that this is a different tab

and so it resets state.

And so indeed, if we keep going here, maybe we hide this.

Then again, when we go here, and we go back,

then the state has been reset.

Because again, in the meantime,

this component here has disappeared and with it it's state.

So this is a direct consequence of the diffing rules

that we just learned about.

And so this means that these rules are very important

actually in practice.


// Lesson 131. The Key Prop

So, the key prop is a special prop

that we can use to tell the differing algorithm

that a certain element is unique.

And this works for both dom elements and react elements.

So in practice, this means that we can give

each component instance a unique identification,

which will allow react to distinguish

between multiple instances of the same component type.

Now that's all great, but why do we actually need this?

Well, remember that the second assumption

of the diffing algorithm

is that whenever an element has a stable key,

so a key that stays the same across renders,

the element will be kept in the dom,

even if the position in the tree has changed.

And this is the whole reason why we should use the key prop

in lists as we have already done

so many times throughout the course.

And so, in the next slide,

you will finally learn why we need to do that.

On the other hand, when the key

of a certain element changes between renders,

the element will be destroyed and a new one will be created

in its place, even if the elements positioned

in the tree is exactly the same as before.

And so this is great to reset state,

which is the second big use case of the key prop.

But let's go back to the first big use case of the key prop,

which is to use keys in lists.

And let's start by considering this example without keys.

So here, we have a list with two question items,

which clearly have no key prop

but let's see what happens when we add a new item

to the top of the list.

Well, the two list items that we already had are clearly

still the same, but they will now appear

at different positions in the react Elementary.

They're no longer the first and second children

but now they are the second and the third children.

So, we basically have the same elements

but at different positions in the tree.

And so according to the differing rules

that we learned earlier, these two dom elements

will be removed from the dom and then immediately recreated

at their new positions.

And this is obviously bet for performance because removing

and rebuilding the same dom element is just wasted work,

right? But the thing is that react

doesn't know that this is wasted work.

Of course, we developers intuitively know

that these two elements are actually the same as before

but react has no way of knowing that.

But what if we could actually change that?

Well, that's where keys come into play because remember,

a key allows us developers to uniquely identify an element

so we can give react that information

that it doesn't have on its own.

And so now when we add a new item to the top of the list,

the two original elements are of course,

still in different positions of the tree

but they do have a stable key.

So, a key that stays the same across renders.

So that's q1 and q2 in this case.

And so according to the differing rules,

these two elements will now be kept in the dump

even though their position in the tree is different.

So, they will not be destroyed.

Entry result will be a bit more of a performant ui.

Now of course, you won't really notice this difference

on small lists, but it will make a huge difference

when you have a really big list with thousands of elements,

which can actually happen in some applications.

So in summary, always use the key prop

when you have multiple child elements of the same type.

without keys -> same element, but different position in the tree, so they are removed and recreated in the dom which is bad performance

with keys -> different position in the tree but the key stays the same so the elements will be kept in the dom, always use keys (for lists)

Alright, so we looked at the use case for a stable key. above

And so now let's look at the use case for a changing key, next

So, what do you think will happen to the state in this case?

Well, let's remember one of the diffing rules, which says

that if we have the same element at the same position

in the tree, the dom element and its state will be kept.

Therefore, what's gonna happen is that the state of question

will be preserved.

So, it will still show the answer

that was in the component state before.

But that answer is

of course completely irrelevant to this new question, right?

So, it doesn't make any sense to keep this state

around here.

So basically, what we need is a way to reset this state.

And as you can guess,

this is where the key prop comes into play once again.

So now, we have a key of q23

in this first question, which allows react

to uniquely identify this component instance.

Then when a new question appears,

we can give it a different key.

And so by doing this, we tell react

that this should be a different component instance

and therefore, it should create a brand new dom element.

And the result of doing this

is that the state will be reset,

which is exactly what we need in the situation

in order to make this small app work in a logical way.

So, whenever you find yourself

in a position where you need to reset state,

just make sure that you give the element a key

and that the key changes across renderers.

Now, this actually is necessary very often

but you will sometimes find yourself in this situation.

And so when this happens,

it's very important to know that this is the solution.

// Lesson 132. Resetting State With the Key Prop

And so, let's now use the key prop to change this.

And actually, it is extremely easy.

All we have to do is to give this tab content here

a different key for each of the tabs, basically.

So then each time that this tab content component here

is re-rendered, it'll get a different key.

And so then react will see it

as a unique component instance.

And therefore, then the old one will be destroyed,

and the state will be reset.

And so, as soon as the tab content component

will be re-rendered,

then not only this item here will change

but also the key.

And so we are then in that situation

where the key changes across renders.

And again, that will then reset our state.

So you see that our component state has indeed been reset.

And again, that's just because

react now views this as a completely different instance

of tab content.

And we can see that here

because now our dev tools display this key.

And when we move here, then we get another one.

And so, yeah, this is exactly how react

now makes each of these tab contents here unique

and distinguishes between them.

// Lesson 133. Using the Key Prop to Fix Our Eat-'N-Split App

And so, now we basically need to make

each component instance here unique

so that each time that it is rendered

with a new friend, react will see this

as a completely new component instance.

And as you already know, the way we do that

is by providing a key

that will actually change across the re-renders.

// Lesson 134. Rules for Render Logic: Pure Components

let's actually take a look at the two types

of logic that we can write in react components.

So, that's render logic and event handler functions.


So, render logic is basically all the code that lifts

at the top level of your component functions

and that participates in describing how the view

of a certain component instance should look like.

So in this code example, there is a lot of render logic.

So we have these two lines of code at a top level

and then also the return block where our component returns

it's JSX.

So these describe exactly how the component

will be displayed on the screen.

However, if we look closely, we can identify

yet another piece of render logic here, even though

this code is actually inside a function.

So as you can see in the return block, the code there

is actually calling this createList function.

And therefore, that logic also participates

in describing the component view.

And so, it's also render logic.

So basically, render logic is all the code

that is executed as soon as the component is rendered.

So each time that the function is called.

Now moving on to event handler functions,

those are very easy to identify.

So, they're basically pieces of code that are executed

as a consequence of the event that the handler

is listening to/for (onclick, onChange etc)

So in our example, we have this line of code

that essentially registered handle new answer

for the change event and therefore handle new answer

is our event handle function.


So while render logic is code that renders the component,

event handlers contain code that actually does things.

So basically code that makes things happen

in the application.

So, event handlers contain things like state updates,

HTTP requests, reading input fields, page navigation,

and many more. -> update state, perform http requests, read input fields, navigate to other pages, etc.


Well, it's important because react requires

that components are pure when it comes to render logic

in order for everything to work as expected.

But what does pure actually mean?


So, a side effect happens whenever a function depends

on any data that is

outside the function scope, or even more importantly

whenever a function modifies data that is outside its scope.

And I like to think as a side effect

as a functions interaction with the outside world.

For example, this function is mutating an outside object.

And so this is clearly a side effect.

Other examples of side effects are HTTP requests,

riding to the dom, setting timers and more.

The other important functional concept is pure functions,

which are basically functions without side effects.

So basically, these are functions that do not change

any variable outside their scope.

Also, when we give a pure function the same input,

it'll always return the same output.

For example, this function is clearly a pure function

because if we give it the same argument r,

it'll always give us the area

of the circle based on that r value.

So the output only depends on the inputs,

which makes this function predictable.

This other function right here on the other hand

is completely unpredictable

because it returns a string that contains a date

and that date changes every second.

So in this case, even

if we give the function the same input,

the output will always be different

because the date will always be different

and therefore, this is an impure function.

And the same is true for the second function.

So notice how this function mutates an outside variable,

which of course makes this function impure as well.

Now, calling functions impure makes it sound

as if side effects are somehow bad

but that's actually not true.

So, side effects are not bad in themselves.

In fact, if we think about it,

any program can only be useful if it has some interaction

with the outside world at some point, right?

Like a web application that never affects any data

or never writes to the dom is just completely useless.

However, in order to make useful and bug-free applications,

we need to know when and how to create side effects,

which brings us back to react

and its rules for render logic.

summary: side effect -> dependency on or modification of any data outside the function scope. interaction with the outside world. exmaples: mutating external variables, http requests, writing to the dom

side effect are not bad, a program can only be useful if it has some interaction with external data

pure function -> a function that has no side effects. does not change any variables outside its scope. given the same input, a pure function always returns the same output.

And essentially, there's just one big rule,

which is that components must be pure functions

when it comes to render logic.

This means that if we give a certain component instance

the same props, so the same input,

then the component should always return

the exact same output in the form of JSX.

In practice, this means that render logic

is not allowed to produce any side effects.

So in other words, the logic that runs

at the top level and is responsible

for rendering the component should have no interaction

with the outside world.

This means that render logic is not allowed

to perform network requests to create timers

or to directly work with the dom API.

For example, listening to events using at event listener.

Now, according to what we learned previously,

render logic must also not mutate objects

or variables that are outside the scope

of the component function.

And this is actually the reason why we cannot mutate props,

which remember is one of the hard rules of react.

And so now you know why that rule exists.

It's because doing so would be a side effect

and side effects are not allowed.

Finally, we really cannot update state

or refs in render logic.

And updating state in render logic would actually create

an infinite loop, which is why we can never do that.

State updates are technically not side effects

but it's still important for them to be on this list.

Now, there are other side effects that are technically

not allowed as well, but that we create all the time

like using console.log or creating random numbers.

So these are clearly interactions with the outside world

but they don't seem to do any harm.

And so we can safely keep doing them.

Alright, but now you might be wondering if all this stuff

is not allowed, then how will I ever be able

to make an API call to fetch some data?

Well, keep in mind that these side effects

are only forbidden inside render logic.

This means that you have other options

for running your side effects.

First of all, we saw earlier that event handler functions

are not render logic and therefore, side effects

are allowed and actually encouraged

to be used inside these functions.

And second, if we need to create a side effect as soon

as the component function is first executed,

we can register that side effect

using a special hook called useEffect.

summary: components must be pure when it comes to render logic: given the same props (inputs), a compoent instance should always return the same JSX (output)

render logic must produce no sid effects: no interaction with the outside world is allowed. so in render logic: 

do not perfrom network requests (api calls)
do not start timers
do not directly use the dom api
do not mutate objects or variables outside of the function scope
do not update state (or refs): this will create an infinte loop

side effect are allowed and encouraged in event handler functions
there is also a special hook to register side effect, useEffect

// Lesson 135. State Update Batching

But now let's take one step back,

and go back to one very important aspect

of the first triggering phase,

which is the fact that state updates are batched.

So in that first lecture about how rendering works,

we had this sentence, which says

that renders are not triggered immediately.

And so in this lecture I want to focus on this part

which says that there is also batching

of multiple setState calls. - renders are not triggered immediately, but scheduled for when the js engine has some free time. there is also batching of multiple setState calls in event handlers


And so let's now focus only on the event handler function.

Now what I want to do here is to analyze

how these three pieces of state

are actually updated behind the scenes.

So we might think that, as react sees

the set answer function call,

it would update the state to the empty string as requested,

and then trigger a re-render, and the commit phase,

then it would move on to the next line,

and to the same thing again,

and finally do the entire thing

one more time for the third state update.

So intuitively, we would think that,

if there are three state variables

being updated in this event handler,

then react would re-render three times, right?

However, this is actually not how it works.

So this is not how react updates multiple pieces of state

in the same event handler function.

Instead, these state updates will actually get batched

into just one state update for the entire event handler.

So updating multiple pieces of state

won't immediately cause a re-render for each update.

Instead, all pieces of state inside the event handler

are updated in one go.

So they are batched, and only then

will react trigger one single render and commit.

And conceptually, it makes sense that react works this way,

because if we're updating these pieces of state together,

it probably means that they should just represent

one new view, and therefore,

react only updates the screen once.

So if these date updates belong together,

it really wouldn't make much sense

to update the screen three times.

Doing so would also create two wasted renders,

because we're not interested in the first two renders,

only the final one, which already contains

all the three state updates.

Therefore, the fact that react

automatically batches state updates in this way

is yet another performance optimization

that react gives us out of the box.

Now, batching state updates is extremely useful,

but it can also have surprising results.


So let's turn our attention to this line of code now,

where we reference the answer state variable

right after updating it.

So what do you think will be the value

of this variable at this point?

Well, let's try to think about this.

So remember, that component state is stored

in the fiber tree during the render phase.

Now, at this point in the code,

the render phase has not happened yet.

So react is still reading the function line by line

to figure out what state needs to be updated,

but it hasn't actually updated the state yet,

and it also hasn't re-rendered yet.

That's the whole point of batching state updates

in the first place, right?

So what this means is that, at this point of the code,

the answer variable will still hold the current state.

So the state before the update,

even though we already told react to update it.

So at this point we say that our state is stale,

meaning that the state is no longer fresh and updated,

because in fact, a state update will only be reflected

in the state variable after the re-render.

And so for this reason, we say that updating state in react

is asynchronous, and again, it is asynchronous

because react does not give us the updated state variable

immediately after the set answer call,

but only after the re-render has happened.

Now, the same thing is also true

whenever there is only one piece of state being updated.

So no matter how many state variables are being updated,

the updated state is only available

after the re-render, not immediately.

Now, sometimes we actually do need the new value

immediately after updating it, and in the case,

that we need the new value

in order to update the same state again.

Or in other words, if we need to update state based

on a previous state update in the same event handler,

we can pass a callback function into the set state function

instead of a single value.

And we have actually done this in practice

summary: state is stored in the fiber tree during the render phase, at this point the re -render has not happened yet, therefore the state variable still contains current state not the updated state -> updating state in react is asynchronous.A

updated state variables are not immediately available after setState call, but only after the re-render

this also applies when only one state variable is updated

if we need to update state based on previous update, we use setState with callback (e.g. setState(current => current + 1))


Now, so far, we have only talked about batching

in event handler functions, like our reset function.

That's because before react 18,

react only did automatic batching in event handlers,

but not in situations that happen

after a browser event has already happened.

However, there are certain very important situations

in which we do need to update state,

long after a browser event, like a click, has happened.

Examples of that are timeouts and promises,

for instance, we might want to run our reset function

only a second after a click event,

or we might want to run it after some data has been fetched.

So it would be nice to also have automatic batching

in those situations to improve performance, right?

Well, that's actually one of the important features

that react 18 gave us.

So before react 18, if this reset function

was called by a timeout, or by a promise,

state updates inside the function would not be batched.

Instead, in these situations, react would actually

update the state variables one by one, and therefore,

in this case, render three times.

Now another case is handling native events using dom methods

such as addEventListener, where state updates

also used to not be batched, but now they are.

So again, if you're using the latest react version,

you will now get automatic batching all the time,

everywhere in your code.

And if, for some reason, you are working

with an older version of react, maybe at your work,

it's important that you know that batching used to work

in a different way before version 18.

Now, there are also some extremely rare situations

in which automatic batching can be problematic.

So if you ever find yourself in a situation like that,

you can just wrap the problematic state update

in a reactdom.flushSync function,

and react will then exclude that update from batching.

But you will most likely never need this.

I'm just mentioning this here,

so that you know that it exists. -> we can opt out of automatic batching by wrapping a state update in reactdom.flushSync()

// Lesson 136. State Update Batching in Practice

So as we just learned in the previous lecture,

inside of this event handler function here,

these two state updates are batched.

So they will only cause one component re-render.


And so this is actually a really nice way of proving

that rendering is calling the component function.


we should only see one render here,

which would then mean that these two state updates

were batched.


So the reason that here we get five is that the state

is in fact actually only updated after the re-rendering,

or basically during the re-rendering,

but not immediately after we call dysfunction.

So that's impossible.

And therefore, here we still get that old likes state,

which again is still at five.


So I click this now, and you see that no render

was logged to the console.

So why do you think that is?

Why was the component instance not re-rendered this time?

Well, it's because both of the state values

were already at their default basically.

So details was already true and likes was already zero.

And so then as we attempted to update the state,

both of them were actually not updated.

And again, that's because the new state

was equal to the current state.

And so in that situation,

react will not even try to attempt to update the state,

and then of course, it will also not re-render

the component instance.

And so that's why, well, nothing happens.


When you update a component's state with the same value as the current state, react still runs the component once before blocking subsequent renders. This is due to how react works and its reconciliation process.

In case the values ​​are identical, react still performs a reconciliation process to ensure that no side effects have been introduced by this update.

It is important to note that react tries to optimize these cases by avoiding updating the dom if no difference is detected during reconciliation. This means that although the component rendering has been performed, there will be no actual dom update.



And well, it only increased once,

so not three times as we might expect.

But were we actually really expecting

that it would increase three times?

I mean with what we already know,

we should know that this here could never work.

So let's see why that is.

So right here at the beginning of dysfunction

likes was zero, right?

And so then here, setLikes would be zero

plus 1 equals 1, right?

So this one is pretty clear, but then what in the next line?

So what is the value of likes here in this line?

Well, it is actually still zero.

And so that's because the state update

is once again, asynchronous.

So we do not get access to the new state value

after this line of code right here.

And so this is exactly what happens down here.

So here, the state is now stale,

so as we learned in the previous lecture as well.

So we can very easily see that here again

with this console.log.

So if I click again, and actually I want the other one.

So this one here, well then you see that it became two,

which is exactly the value that we had before.

And so here it was 2 plus 1 made this new 3.

But here, it was still 2, and here as well,

and here as well.

So how could we make this work

if we really wanted to update the state

three times like here?

I mean, of course, we could just do this,

but this is not the point here.

So we are trying to learn how we could do this right here

in another way.

So actually, we have been doing that all along.

So all the time, whenever we were updating state

based on the current state,

we would use a callback function instead of just a value.

So we also talked about that in the previous lecture.

And so now the time came where we really learn

why we have been doing it with the callback function

all the time.

So let's remove this here or comment it out.

And then let's do it the right way.

So setLikes, and now we pass in the callback function.

And then as you already know,

the first argument here is the current value of the state,

and then we just return the new one.

And again here, likes could be called anything.

Okay, let's do this three times, and then let's reload.

And now, yeah, now it works.

So this is the trick that changes the way

this state is updated.

So here in the callback function,

we do actually get access to the latest updated state.

So initially likes was zero, and then it returned 1.

And so then in the next call here,

this likes in this callback function will be 1.

And so then we can update it

to another one, and to another one.

Beautiful.

And so this is the reason why I've been telling you

that each time that we set state based on the previous state

or based on the current state,

we should always, always use a callback function

like this here.


Now you might be wondering like why should we do that here?

I mean, it works perfectly fine, right?

And you're right about that.

It works perfectly fine,

but we never know what other developers

might do with our functions,

or even what we might do later ourselves.

So let's say that at some point,

we want to change how this function works,

and then without thinking about it, we just do this.

And so then we go back to this not working as expected.

So now we want to increase the likes by 2,

but it will still only increase by 1, right?

Or another situation, maybe, let's comment this one out.

So maybe, here we could think

that we could just call this function here three times.

Or maybe some other developer might think that.

And so then they would get surprised when they see

that this is actually not working, right?

And so again, you should always,

always use the callback function,

because then you are always safe for whatever change

your code goes through in the future.


And so what this will do is to schedule

this handleUndo function to be executed two seconds

after this function here was called.

And so then, handleUndo is no longer really

an event handler function.

It's just any function that simply gets called

at a later time.


And then I just clicked, and let's wait.

And indeed, two seconds later, our state was updated.

And indeed, our component was only rendered once,

which is proved here by this single render string.

Great.

So again, this proves that in react 18

batching happens not only inside event handlers,

but also inside a set timeout.

And the same is true for promises and other situations.


And now we got two re-renders.

And so this does actually prove that before react 18,

automatic batching was not happening inside a setTimeout.

// Lesson 137. How Events Work in react

So let's consider this tree of dom elements,

and note that this really is a dom tree,

so not a fiber tree or a react element tree.

And now, let's say that some event happens,

like a click on one of the three buttons,

and so here is what's gonna happen in the browser.

As soon as the event fires,

a new event object will be created,

but it will not be created where the click

actually happened.

Instead, the object will be created

at the root of the document,

so at the very top of the tree.

From there, the event will then travel down the entire tree

during the so-called capturing phase,

all the way, until it reaches the target element,

and the target element is simply the element

on which the event was actually first triggered.

So at the target, we can choose to handle the event

by placing an event handler function on that element,

which usually is exactly what we do.

Then immediately after the target element has been reached,

the event object travels all the way back up the entire tree

during the so-called bubbling phase.

Now, there are two very important things

to understand about this process.

The first is that during the capturing and bubbling phase,

the event really goes through every single child

and parent element one by one.

In fact, it's if the event originated

or happened in each of these dom elements.

The second important thing is that by default,

event handlers listen to events

not only on the target element,

but also during the bubbling phase,

so if we put these two things together,

it means that every single event handler in a parent element

will also be executed during the bubbling phase

as long as it's also listening for the same type of event.

For example, if we edit another click event handler

to the header element,

then during this whole process,

both the handlers at the target and the header element

would be executed when the click happens.

Now, sometimes we actually don't want this behavior,

and so in that case, we can prevent the event

from bubbling up any further simply by calling

the stopPropagation method on the event object,

and this works in vanilla js, and also in react,

but it's actually very rarely necessary,

so only use this if there really is no other solution.

Okay, so this is essentially how events work in the browser.



Now, the fact that events bubble like this

allows developers to implement a very common

and very useful technique called event delegation.

So with event delegation, we can handle events

for multiple elements in one central place,

which is one of the parent elements.

So imagine that instead of three buttons,

there would be like, 1,000 buttons.

Now, if we wanted to handle events on all of them,

each button would have to have its own copy

of the event handler function,

which could become problematic

for the app's performance and memory usage.

So instead, by using event delegation,

we can simply add just one handler function

to the first parent element of these buttons.

Then when a click happens on one of the buttons,

the event will bubble up to the options div in this example

where we can then use the events target property

in order to check whether the event originated

from one of the buttons or not,

and if it did, we can then handle the event

in this central event handler function.

Now, if you took my js course,

then you will already know how to do this in practice,

because in fact, we do this all the time

in vanilla js applications.

However, in react apps, it's actually not so common

for us to use this technique,

but that might leave you wondering,

if this is actually not important in react,

then why are we even talking about this?

Well, for two reasons.

First, because sometimes you find some strange behaviors

related to events in your applications,

which might actually have to do with event bubbling,

and so as a good react developer,

you always want to understand exactly what's going on

in order to fix these problems,

and the second reason is that this is actually

what react does behind the scenes with our events,

summary: by default, event handlers listen to events on the target and during the bubbling phase

prevent bubbling with e.stopPropagation()

benefits of event delegation:

handling events for multiple elements centrally in one single parent element 
better for performance and memory, as it needs only one handler function
1. add handler to parent
2. check for target element
3. if target is one of the elements/buttons that was handling the event, handle the event

very common in vanilla js apps, but not as much in react apps


So let's consider this same dom tree,

and let's say again that we want to attach

an event handler to one of the buttons,

or even to some other dom element,

and this is what that would look like in react code.

So we would simply use the onClick prop

to listen for click events, and then pass it a function.

So that's really easy, right?

Now, if we think about how react

actually registers these event handlers behind the scenes,

we might believe that it would look something like this.

So react might select a button,

and then add the event handler to that element,

so that sounds pretty logical, right?

However, this is actually not what react does internally.

Instead, what react actually does is to register this

and all other event handler functions

to the root dom container,

and that root container is simply the dom element

in which the react app is displayed.

So if we use the default of Create react App,

that's usually the div element with an ID set to route.

So again, instead of selecting the button

where we actually placed our event handler,

we can imagine that react selects the route element,

and then adds all our event handlers to that element,

and I say imagine, because the way react

does all this behind the scenes is actually

a lot more complex than this,

but that's not really worth diving into here.

The only thing that's worth knowing

is that react physically registers

one event handler function per event type,

and it does so at the root note of the fiber tree

during the render phase.

So if we have multiple onClick handlers in our code,

react we'll actually somehow bundle them all together

and just add one big onClick handler

to the root node of the fiber tree,

and so this is yet another important function

of the fiber tree,

but anyway, what this means is that behind the scenes,

react actually performs event delegation

for all events in our applications.

So we can say that react delegates all events

to the root dom container,

because that's where they will actually get handled,

not in the place where we thought we registered them,

and so this works exactly how we just learned

in the previous slide.

So again, whenever a click happens on the button,

a new event object is fired off,

which will then travel down the dom tree

until it reaches the target element.

From there, the event will bubble back up.

Then as soon as the event reaches the root container

where react registered all our handlers,

the event will actually finally get handled

according to whatever handlers match the event

and the target element.

And finally, once that's all done,

the event, of course, continues bubbling up

until it disappears into nowhere,

and the beauty of this is that it all happens automatically

and invisibly just to make our react apps

yet a little bit more performant.

// summary: react registers all event handlers on the root dom container. this is where all events are handled


Now, just one small detail that I want you to notice

is that it's really the dom tree that matters here,

not the component tree.

So just because one component is a child

of another component,

that doesn't mean that the same is true

in the displayed dom tree.

So just keep that in mind when thinking

about bubbling in react applications.


So whenever we declare an event handler like this one,

react gives us access to the event object

that was created, just like in vanilla js.

However, in react, this event object is actually different.

So in vanilla js, we simply get access

to the native dom event object, for example,

pointer event, mouse event, keyboard event, and many others.

react, on the other hand, will give us something

called a synthetic event,

which is basically a thin wrapper

around the dom'S native event object,

and by wrapper we simply mean that synthetic events

are pretty similar to native event objects,

but they just add or change some functionalities

on top of them.

So these synthetic events have the same interface

as native event objects,

and that includes the important methods,

stopPropagation, and preventDefault.

What's special about synthetic events though,

and one of the reasons why the react team

decided to implement them is the fact

that they fix some browser inconsistencies,

making it so that events work in the exact same way

in all browsers.

The react team also decided that all

of the most important synthetic events actually bubble,

including the focus, blur, and change events,

which usually do not bubble.

The only exception here is the scroll event,

which does also not bubble in react.

Okay, and now to finish, I want to quickly mention

some differences between how event handlers work

in react and vanilla js.

The first one is that in react, the prop name

to attach an event handler are named using camelCase,

so something like onClick with an upper case C.

In HTML, on the other hand,

it would be onclick, all lower case,

and if we used an addEventListener in vanilla js,

the event would simply be called click,

so without the on prefix.

Now, in vanilla js,

whenever we want to stop the default behavior

of the browser in response to an event,

we can return faults from the event handler function,

and the big example of that is the browser

automatically reloading the page when we submit a form.

However, if we would attempt to return faults

in a react event handler, that would simply not work.

So in react, the only way to prevent the browser's default

behavior is to call preventDefault

on the synthetic event object.

And finally, in the rare event that you need

to handle an event in the capturing phase

rather than in the bubbling phase,

you can simply attach Capture to the event handler name,

for example, onClickCapture instead of just onClick,

but most likely, you will never use this,

// Lesson 138. Libraries vs. Frameworks & The react Ecosystem

Okay, but actually, let's now replace these terms

with their actual definitions

and actually learn what's the difference

between a framework and a library.

So, in the world of js

a framework is basically a complete structure

that includes everything that you need

in order to build a complete large scale application.

We can say that frameworks

like Angular are batteries included

because they include stuff like routing, styling,

HTTP requests for management,

and more all out of the box.

Now, the downside of this is that you're stuck

with the framework's tools and conventions

even if you don't like or agree with them.

However, that's actually not always bad.

And so this is not a real downside for some developers.

Now, on the other hand,

we have js libraries,

which are basically pieces of code

that developers share for other developers to use.

And the prime example here is of course, react,

which is what we call a view library,

view because all react does is to draw components

onto a user interface,

so onto a so-called view.

Now, if you want to build

a large scale single page application,

you will need to include many external third party libraries

for things like routing, styling, HTTP requests, and so on.

So all these functionalities are not part of react itself

unlike what happens with Angular and other frameworks.

And so this is how this notion

that react is a library ties into the analogy

of buying separate ingredients to make sushi.

Because to build a react app,

we have to choose all these separate libraries.

Now, don't get me wrong here.

We can actually build react apps with just react itself.

So, without using any libraries,

but that only makes sense for small apps

or while we are still learning react.

Now, being able to choose multiple libraries

in order to build your application

offers you incredible freedom

because you can choose exactly

the ones that you like the most.

And also every app will have different requirements.

And so each app will require a different combination

of libraries.

And so including all of them

in a framework might not even be necessary.

However, on the other hand,

the implication of this is that as a react developer,

you need to be able to find

and download all the right libraries

for your specific application.

And of course, on top of that

you then need to learn how to use these libraries

and even stay up to date with them over time.

But don't worry, it's actually not as bad as it may sound.

So, if you follow this course until the end

you will have a very good understanding

of the most important libraries that we usually include

into most react projects,

which leads me actually to the next point,

which is react's huge third party library ecosystem.

So, react's huge popularity has led to a really,

really large ecosystem of libraries that we can include

in our react projects for different needs like routing

for single page applications, making http requests,

managing remote server state,

managing global application state,

styling, managing forms, animations and transitions,

and even entire ui component libraries.

Now, I will not go over all of them here one by one

because that just takes too much time

and you can also just research them if you need.

So instead, I will show you which ones I consider

the most important libraries

and so these are the ones that we will use later

in the course.

So things like react Router, react Query,

Redux, styled components, or Tailwind.

Now, many react developers actually do feel overwhelmed

by having to take so many decisions and choosing

between so many third party libraries.

And so this fact, among some other reasons,

has led to the development

of multiple opinionated react frameworks

such as Nextjs, Remix or Gatsby.

So, Nextjs or Remix are react frameworks

because they are actually built on top of react.

So they basically extend react's functionality

and they are opinionated because other developers basically

included their own opinions into how to handle stuff

like routing, state management,

or styling into these frameworks.

So, where in a traditional react app,

we have to make decisions about what libraries to include

in an app built with a react framework.

Some of these important decisions

have already been taken away from you, the developer.

And so this makes project development much easier

and much faster,

and it can also lead

to a better overall developer experience.

Now, different frameworks specialize in different aspects,

but all of them offload much of the setup work from you.

Also, all of them offer many other advantages

besides just being opinionated,

such as server side rendering

or static site generation.

In fact, we can even describe many of these frameworks

as full stack react frameworks

because they include so many features

that we can actually build full stack apps with them,

all while using react as the base layer.

// Lesson 139. Section Summary: Practical Takeaways

// 1. A component is basically like a blueprint for a piece of ui that will eventually exist on the screen.
// 2. When a component is used/called, react creates a component instance, which is likened to a physical occurrence of a component that contains props, state, effects, and more, for that specific instance.
// 3. Following the analogy of the blueprint, the component is like a blueprint for a house, and the component instances are like the actual houses that have been built from that blueprint.
// 4. A react component instance when rendered, will return a react element.
// 5. In react, rendering only means calling component functions and computing which dom elements need to be inserted, deleted, or updated later.
// 6. Rendering has nothing to do with actually writing to and updating the dom.
// 7. Writing to the dom is actually called committing in the react language.
// 8. Each time a component instance is rendered and re-rendered, the function is simply called again.
// 9. Only the initial render, and state updates, can cause a render, which will happen for the entire application.
// 10. Even though it might look as if only one single component is rendered, the process is actually executed for all components.
// 11. When a component instance gets re-rendered, all its children will get re-rendered as well.
// 12. This doesn't mean that all children will get updated in the dom.
// 13. With reconciliation, react will check which elements have actually changed between the two renders.

// What is diffing?

// 1. Diffing is how react decides which dom elements need to be added or modified later.
//      a. If between two renders, a certain react element stays at the same position in the react element tree, the corresponding dom element and component instance state will remain the same.
//          i. The dom will not be modified in this case, which is a bonus for performance.
//      b. If the element did change to a different position in the tree, or if it changed to a different element type altogether, then the dom element and the corresponding state will be destroyed.
//          i. They will be reset.
// 2. The diffing algorithm can be influenced by providing elements a key prop, which then allows react to distinguish between multiple component instances of the same component type.
//      a. When the key on a certain element stays the same across renders, the element is kept in the dom even if it appears at a different position in the tree.
//          i. This is the reason why keys should be used when rendering lists of elements.
//              1. Each element should be provided a unique key (i.e. identifier)
//          ii. This will prevent unnecessary recreations of elements in the dom.
//      b. Alternatively, when the key is changed between renders, the dom element will be destroyed and rebuilt.
//          i. This is an effective way to reset the state of a component instance.
// 3. Never declare a new component inside another component.
//      a. Doing so will recreate that nested component every time the parent component re-renders
//          i.Therefore, that nested component would always be a new variable on every render/re-render.
//          ii.This means that react would always see the nested component as a brand new component, and reset its state each time that the parent's state is updated.
// 4. Always declare/write new components at the top level of a file and never inside of another component.
// 5. The logic that is responsible for creating dom elements (i.e. the logic that produces jsx) is called render logic.
//      a. Render logic is not allowed to produce any side effects.
//          i. Render logic cannot have API calls, timers, object or variable mutations, and no state updates.
//      b. The only place where side effects are allowed is inside event handlers and inside useEffect hooks.
// 6. When there are multiple state updates inside an event handler function, all these state updates will be batched.
//      a. They will happen all at once
//          i. This is important to understand, because it means that multiple related state updates will only create one re-render 
//                  ii. This is positive for performance.
// 7. Since react 18, automatic batching even happens inside timeouts, promises, and native event handlers.
//      a. One important practical implication of this is that state variables cannot be immediately accessed after an update.
//          i. This is why state updates are considered asynchronous.
// 8. When using events inside event handler functions access is given to a so-called synthetic event object, not the browser's native object.
//      a. The react team created synthetic events so that events work the exact same way across all browsers
//           i. The main difference between synthetic and native events is that most synthetic events do actually bubble and that includes the focus, blur, and change events, which usually do not bubble as native browser events.
//                  1. The only exception is the scroll event.
//  9. React is a library and not a framework.
//      a. This means react apps can be assembled using third-party libraries, which is great for flexibility and creative freedom.
//          i. The downside of this freedom is that there is an almost infinite amount of libraries to choose from.
//                  1. This is why its important to first find and learn all the additional libraries that will be needed for apps.
