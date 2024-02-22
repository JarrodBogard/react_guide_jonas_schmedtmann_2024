// Lesson 18. Destructuring Objects and Arrays

// 1. Object destructuring relies on the property names to extract property values from the object.
//      a. Only existing prop names can be extracted.
//      b. Once extracted, they can be renamed by placing a colon after the existing name and providing a new name after the colon.
//          i. The renaming is done inline when the properties are being extracted from the object.
// 2. Array destructuring relies on the order (i.e. index order) of the values when extracting them from the array.
//      a. The destructured values can be given any name as it is only the order in which they are extracted that is the determining factor.

// Lesson 19. Rest/Spread Operator

// 1. The rest operator is used on the left side of an assignment (i.e. the equal sign) and the spread operator is used on the right side of an assignment.
// 2. Array destructuring allows values to be pulled from an array, and the rest operator allows the remaining group of array values to be left in place in their array.
// 3. The spread operator allows the values of an array to be spread into a new array, along with other (i.e additional/new) values.
// 4. The same functionality applies to objects for the spread operator.
// 5. When spreading an object into a new object, all the object props and values are copied into the new object.
//      a. Not only can new values be added, but existing values can be updated by extracting the prop name, inside the new object, and assigning it a new value.
//              i. Placement of the new value is important. For the new value to update the old one, the new value should come after the "spread" object inside the new object curly braces.
//              ii. The reason is that there is already an existing copy of the old prop and its value on the "spread" object, within the new object.
//                      1. For it to be overridden, the new value must be placed after the "spread" object.
//                              a. If it is placed before the "spread" object the new value will not be updated for the given prop.
// 6. Spreading the properties of an object or an array into a new one vs. "resting" or leaving the remaining values of an array in place (i.e. leave the remaining values in their original array after having extracted values with array destructuring).
//      a. These are the functionality differences of the spread (i.e. right-side of equal sign) vs. rest (i.e. left-side of equal sign) operators.
//      a. The rest operator can also be passed as an argument to a function.
//              i. The "rested" argument will be interpreted as an array of values by the function, which can then be iterated through and values can be accessed by using index positions.

// Lesson 20. Template Literals

// Template literals are an ES6 JavaScript feature which allows for easily creating strings that contain JavaScript expressions inside of the string.
//      a. Anything that immediately produces a value can be included in a template literal (e.g. variables, function calls (i.e. functions that return a value), ternary operators, short-circuits, calculations, etc).
//              i. Any type of JS expression can be included inside a template literal (as long as it returns a value???).

// Lesson 21. Ternaries Instead of if/else Statements

// 1. Ternary operators have 3 operands that must be included:
//      a. The condition
//      b. The value if the condition evaluates true, which follows a question mark.
//      c. The value if the condition evaluates false, which follows a colon.
// 2. An operator is similar to a function that returns a value.
// 3. Ternary operators are commonly used to define variables, conditionally.
// 4. If/else statements cannot be used in this way because they do not return values.
// 5. Operators return values, which can be used in template literals and JSX syntax. Statements do not return values and therefore cannot be used in the same way.

// Lesson 22. Arrow Functions

// 1. Arrow functions are most useful as one line functions.
// 2. Arrow functions are simply the argument(s) followed by the arrow followed by the return value.
//      a. Arrow functions are stored in variables as function expressions.
//      b. Any number of arguments can be passed between the param parens of the function.
//      c. The return value is implicit without having to use the return keyword.
//          i. Whatever is on the right side of the arrow will be returned.
//      d. The benefit of this syntax is that it is shorter than the standard function declaration syntax.
//      e. Single-line arrow functions can only be implemented if a single line of code is being returned.
//      f.  If multiple lines of code need to be included, then a function block would need to be added via curly braces, and the return keyword must also be implemented because the return is no longer implicit.
//  3. REMEMBER: Functions that return values can be used inside template literals and JSX syntax.

// Lesson 23. Short-Circuiting And Logical Operators: &&, ||, ??

// 1. Short-circuiting in logical operators means that, in certain conditions, the operator will immediately return the first value and not even consider the second value.
// 2. The && (i.e. AND) operator short-circuits when the first operand/value is false and then will immediately return that first value.
//      a. The short-circuiting works in the && operator on the first value to evalute false.
//          i. The short-circuiting occurs on the first value to evaluate false.
//      b. These can be used as if conditionals for rendering certain components in JS/React (e.g. if a value is present then render something).
// 3. Short-circuiting works with truthy and falsy values.
//      a. A truthy value is any value that is not a falsey value.
//      b. Falsey values are zero, an empty string, null and undefined.
// 4. The || (i.e. OR) operator works in the exact opposite way as the && operator.
//      a. It short-circuits whenever the first operand/value is true and then will immediately return that value.
//          i. The short-circuiting occurs on the first value to evaluate true.
//      b. This can be useful for setting default values.
// 5. The ?? (i.e. nullish coalescing) operator short-circuits on truthy values and will also short-circuit on zero and empty strings, but not null and undefined.
//      a. Alternative thought: The ?? operator will evaluate zero and empty strings as truthy and only null and undefined as falsey.
//      a. This is similar to the || operator except that the || operator would evaluate zero and empty strings as falsey, which would not result in short-circuiting on those values.
//          i. This can create bugs/errors for actual values that are zero or empty strings, which is why the ?? operator should be used in these scenarios.

// Lesson 24. Optional Chaining

// 1. With optional chaining, JavaScript will only attempt to access properties if the prop or object they are attached to (i.e. stored in) exists.
//      a. If a prop is being accessed via dot notation, JS will only attempt to access it if the previous prop/object it is attached to is not null or undefined.
//      b. This prevents undefined errors from occurring because JS will not attempt to read/access the value if the previous props do not even exist.
//          i. Without this, JS would attempt to access a prop on undefined, which returns an error.
// 2. Optional chaining is implemented by placing a question mark before the dot notation, on the prop in question.
//      a. Place a question mark after any props that may have an uncertain existence.
//      b. If this returns a NaN value instead, implement a default value by using the nullish coalescing operator with the default value following it.

// Lesson 25. The Array map Method

// 1. The map, filter, reduce methods are "functional" array methods. "Functional" implies that these methods do not mutate the original array, but instead return a new array based on the original one (i.e. they create a copy of the original and make mutations on that copy, which is then returned).
// 2. The map method will loop over an array and return a new array, with the same length, with some operation applied to each of the elements of the original array.
//      a. Map expects a callback function, which is a function that will be called for each of the elements of the array.
// 3. To return a new object in a one-line arrow function, wrap the new object's curly braces in parens.
//      a. If the parens are not implemented, the arrow function will consider the curly braces a function block, instead of a new object that is being returned as the value.
//          i. REMEMBER: Computations/Calculations/Expressions can be used in JS objects, including function calls.

// Lesson 26. The Array filter Method

// 1. The filter method filters out some elements of an array based on a condition, and returns the filtered elements in a new array.
//      a. Filter expects a callback function, which is a function that will be called for each of the elements of the array.
//      b. The callback function compares each element to a given condition.
//          i. If the condition evaluates true for an element, that element is included in the new filtered array returned by the filter method.
//      c. Additional array methods can be chained on to the filter/map/reduce methods since they return arrays.
//          i. Multiple conditions can also be chained via short-circuiting within the same filter method, instead of chaining additional filter methods.
//          ii. The includes method is useful in the filter method, because the includes method returns a boolean value.

// Lesson 27. The Array reduce Method

// 1. The purpose of the reduce method is to "reduce" the entire original array down to one value.
// 2. The reduce method takes a callback function which will be executed for each element of the array.
//    a. As a second argument, it also takes a starter value (i.e. accumulator).
//        i. The accumulator is the starting point for the final value that is being reduced from the original array.
//        ii. The accumulator is commonly zero.
// 3. The callback function takes the current element and the current value of the accumulator as arguments.
//    a. The accumulator is the second argument that the reduce method takes, as mentioned above.
//        i. Again, when instantiated, it commonly starts at zero.
//        ii. It acts as an intermediary value that is used to add/reduce the array values into a final singular value.

// Lesson 28. The Array sort Method

// 1. When implementing the sort method on an array, JS loops through an array and evaluates each current element against the next element.
//      a. The 'a' and 'b' arguments of the sort method represent the current and next elements.
//      b. the 'a' minus 'b' return value of the sort method represents sorting the array in ascending order.
//          i. When 'a' minus 'b' returns a negative value, the numbers will be sorted in an ascending order.
//          i. Ascending means smaller values come before larger values.
//      c. Descending order can be applied by switching the 'a' and 'b' arguments in the return statement (i.e. 'b' minus 'a').
// 2. The sort method mutates the original array, which is why the return value (i.e. a sorted array) of the sort method does not need to be stored in a new variable.
//      a. The common solution to avoid mutating the original array is to add the slice method before the sort method on the array that requires sorting, which will create a copy of the original array that can be stored in a new variable.

// Lesson 29. Working With Immutable Arrays

// 1. In react, many operations need to be immutable operations where the underlying data structure is not mutated.
// 2. Arrays are the most common data structure when working with data on the frontend.
// 3. Never mutate original data (i.e. arrays, objects, etc) in react.
//      a. Only mutate copies of the original data.
// 4. The filter method is an effective way of deleting/removing items from an array.
//      a. Whenever the condition stated in the filter method callback function returns a falsey value for a particular item, that item will not be included in the new array returned by the filter method.
//      b. Only the items which evaluate true for the condition set in the callback will be included in the new array.
//      c. The easiest way of thinking about this is to write a condition which does place the items into the new array.
// 5. For updating arrays, the map method is the preferred choice, because it will produce an array which has the same length as before, only with updated/mutated values.
//      a. To implement this approach, 1) write a condition inside the map method which will isolate the item to be updated (i.e. typically using a ternary operator), 2) and then apply the updates to the truthy value and leave the falsey values unchanged.
//          i. For updating objects, 1) use the spread operator on the old object inside the new object return value, 2) 'extract' the props that are to be updated, 3) and then apply the new/updated values to those props to override the previous value.
//                  1. It's important to place the extracted props below the spread object in order for them to be applied.
// 6. To add items to a data array, use the [] and ... operators.
//      a. Create a new array and spread in the old data before adding the new item, then store the newly created array in a variable.
// 7. To delete items from a data array, use the filter method and an appropriate condition for isolating the item that is to be deleted.
// 8. To update an item in a data array, use the map method, the {}, the spread operator, and an appropriate condition for isolating the item that is to be updated.
//      a. For objects stored in an array, the curly braces should be used to create a new object, the spread operator should copy the old object into the new object, and then 'extract' the necessary props from that old object and apply the updated values to them.
//              i. IMPORTANT: Be sure that the extracted props come after the spread object so that the updated values will be applied to the new object.

// Lesson 30. Asynchronous JavaScript: Promises

// 1. A fetch request immediately returns a Promise so that the JS engine can continue on to the next line of code, in the JS file, and continue executing the code that follows after the fetch request.
// 2. The 3 different states of promises included:
//      a. Pending, which occurs while the request is still being processed.
//          i. Data is still being fetched.
//      b. Rejected, which occurs when the request returns an error.
//          i. Data retrieval was unsuccessful.
//      c. Fulfilled, which occurs when the request has completed successfully.
//          i. Data was successfully retreived.
// 3. The then method is called on the fetch request to handle the Promise that is returned by the fetch request.
//      a. The then method is called once the Promise has been fulfilled.
//          i. Once data has been retreived, the then method is executed.
// 4. The then method receives a callback function which is executed once the data has arrived from the fetch request.
//      a. The argument passed to the then method callback function is the data response (i.e. response object) from the fetch request.
//      b. The response is in JSON format by default and must be converted via the json() method in to a regular JS object.
// 5. The json() method, which converts the JSON data into a JS object, is also async.
//      a. This requires a second then method to handle the Promise returned by the json() method, which is the final data object in JS format.
// 6. Promises are a way for JS to handle async code.
//      a. JS processes the fetch request, which immediately returns a Promise.
//      b. The Promise is then stored in the then method to be called later, via the callback function, once the Promise is fulfilled.
//          i. The callback function is called once the Promise has been fulfilled.
//          ii. The data response is passed to the callback function as an argument, and executed automatically, once the Promise is fulfilled.
// 7. This allows JS to continuing operating as normal while handling async code at the same time.

// Lesson 31. Asynchronous JavaScript: Async/Await

// 1. Async/await replaces the use of the then method for fetch requests.
//      a. It also offers a much cleaner looking syntax.
//      b. (Additionally, it actually pauses/delays JS from running, within the function block where it is implemented, until the Promise is fulfilled???).
//          i. It is only pausing the code that runs within the function block where it is located.
//                  1. This is what makes it possible to store the returned data response in a variable, within the function block, thus providing a cleaner syntax.
//          ii. While being executed, the async function waits for the Promise to resolve (i.e. waits for the data response), but only inside the async function itself and only in the lines that use the await keyword.
// 2. Async/await should be ran within/by a function.
//      a. The function should be made asynchronous by adding the async keyword in front of the function.
//      b. The await keyword is then added in front of anything that will run asynchronously (i.e. anything that returns a Promise).
//          i. Await is basically replacing the then method which handles/stores a callback function that receives the data response.
//      c. The await keyword should be used in front of the json() method call as well.
//      d. Finally, the response data should be returned in some way and the async function should be invoked where/when it is needed.
//          i. To return and manage the data, specifically in react, a side effect and a piece of state must be implemented.
//          ii. Alternatively, the asyn function should return the data and the async function call should be stored in a variable and include the await keyword in front of the function call/invocation.
//          iii. Note that this will now cause JS to pause outside of the function block as well and wait for the additional awaited Promise to resolve before executing code below it.
// 3. The return value of any async function call is always just a promise.
//      a. This is true when the await keyword is not implemented on the async function call.
//      b. When the await keyword is implemented - if the async function is returning data - the returned data from the function call can be stored in a variable.
