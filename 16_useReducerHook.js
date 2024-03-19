// Lesson 185. Useful Resources for Part 3

// 👉 Tao of React - Software Design, Architecture & Best Practices

// 👉 The new wave of React state management (Excellent read!)

// 👉 A Visual Guide to React Rendering - useMemo

// 👉 React as a UI Runtime (By Dan Abramov from the React team)

// 👉 You Might Not Need an Effect (Official React docs)

// 👉 A Complete Guide to useEffect (By Dan Abramov)

// 👉 useEffect sometimes fires before paint

// 👉 Making setInterval Declarative with React Hooks (By Dan Abramov)

// 👉 Redux - Not Dead Yet! (By Mark Erikson from the Redux team)

// 👉 Why React Context is Not a "State Management" Tool (By Mark Erikson)

// Library documentation:

// 👉 Vite (Why Vite is so fast)

// 👉 CSS Modules

// 👉 React Router

// 👉 React Leaflet: Installation

// 👉 Redux: Style Guide (A must-read for Redux users!)

// 👉 Redux Toolkit

// 👉 React Redux

// Lesson 187. Yet Another Hook: useReducer

/*
<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#ffffff;}  </style> <g> <path class="st0" d="M490.462,316.323c-0.5-0.5-1.328-1.203-2.469-2.141c4.297-17.672,6.563-36.141,6.563-55.109 c0-128.75-104.375-233.141-233.125-233.141c-123.625,0-224.797,96.266-232.609,217.938c-0.141,1.969-0.234,3.938-0.297,5.891 c-1.813,3.781-3.672,7.719-4.313,7.938c-28.875,10.594-36.516,38.172,2.734,38.172h4.25H261.43 c21.672,0,46.031,38.563,84.516,57.266c30.672,14.891,63.703,22.5,113.86,22.5c22.469,0,41.906-2.047,51.109-15.344 C515.915,353.057,502.728,328.588,490.462,316.323z"></path> <path class="st0" d="M273.258,379.588c-11.578,23.734-28.938,53.704-51.656,79.235c-6.016,6.766-5.406,17.109,1.344,23.109 c6.766,6,17.109,5.406,23.109-1.359c25.984-29.266,44.734-62.156,57.203-87.844c5.844-12.063,10.266-22.531,13.359-30.313 c-9.969-6.578-19.969-14.25-27.313-20.172C286.852,348.948,281.524,362.667,273.258,379.588z"></path> </g> </g></svg>

<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#000000;}  </style> <g> <path class="st0" d="M490.462,316.323c-0.5-0.5-1.328-1.203-2.469-2.141c4.297-17.672,6.563-36.141,6.563-55.109 c0-128.75-104.375-233.141-233.125-233.141c-123.625,0-224.797,96.266-232.609,217.938c-0.141,1.969-0.234,3.938-0.297,5.891 c-1.813,3.781-3.672,7.719-4.313,7.938c-28.875,10.594-36.516,38.172,2.734,38.172h4.25H261.43 c21.672,0,46.031,38.563,84.516,57.266c30.672,14.891,63.703,22.5,113.86,22.5c22.469,0,41.906-2.047,51.109-15.344 C515.915,353.057,502.728,328.588,490.462,316.323z"></path> <path class="st0" d="M273.258,379.588c-11.578,23.734-28.938,53.704-51.656,79.235c-6.016,6.766-5.406,17.109,1.344,23.109 c6.766,6,17.109,5.406,23.109-1.359c25.984-29.266,44.734-62.156,57.203-87.844c5.844-12.063,10.266-22.531,13.359-30.313 c-9.969-6.578-19.969-14.25-27.313-20.172C286.852,348.948,281.524,362.667,273.258,379.588z"></path> </g> </g></svg>

<svg viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:#0d0d0d;}</style></defs><title>gun</title><path class="cls-1" d="M12.31,45.37a1.63,1.63,0,0,1,.39-2.31l10.28-8c-.85-1.23.15-1.65.15-1.65l-.83-2.2c-.74-1.53.7-3,.7-3l8.83-6.51a2.66,2.66,0,0,1,3.76.72l1.78-1a1.45,1.45,0,0,1,.52-2l9.44-7.48V8.5c.11-1.88,1.1-1.1,1.1-1.1l3.15,3.1s6.83-5.79,7.31-6.22.91.31.91.31.4.47.15.75-6.56,6-6.56,6l.18,1.53-.57.63-1-1-1.71,1.63a2.53,2.53,0,0,1-.61,2.38l-7.4,7.77c-1.35,1.13-2,.31-2,.31L38.78,26.2c-.63.94,2.15,3.31,2.15,3.31l-.25.68A27.55,27.55,0,0,0,48.2,35.6l-3.32,5.07A20.41,20.41,0,0,1,38,35.92L35.17,37.5c-2.52,1.87-2.06,3.09-2.06,3.09L33.58,44c1.7.79.31,1.53.31,1.53l-2.63,1.2c-1.74,1.1-1.7-.29-1.7-.29l-.22-6.7c-1.06-2.41-2.64-1.22-2.64-1.22a31.25,31.25,0,0,0-5,5.61L21.17,50c-1,2.87-2.74,1.52-2.74,1.52l-4.32-4.34Z"></path></g></svg>

<svg viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:#ffffff;}</style></defs><title>gun</title><path class="cls-1" d="M12.31,45.37a1.63,1.63,0,0,1,.39-2.31l10.28-8c-.85-1.23.15-1.65.15-1.65l-.83-2.2c-.74-1.53.7-3,.7-3l8.83-6.51a2.66,2.66,0,0,1,3.76.72l1.78-1a1.45,1.45,0,0,1,.52-2l9.44-7.48V8.5c.11-1.88,1.1-1.1,1.1-1.1l3.15,3.1s6.83-5.79,7.31-6.22.91.31.91.31.4.47.15.75-6.56,6-6.56,6l.18,1.53-.57.63-1-1-1.71,1.63a2.53,2.53,0,0,1-.61,2.38l-7.4,7.77c-1.35,1.13-2,.31-2,.31L38.78,26.2c-.63.94,2.15,3.31,2.15,3.31l-.25.68A27.55,27.55,0,0,0,48.2,35.6l-3.32,5.07A20.41,20.41,0,0,1,38,35.92L35.17,37.5c-2.52,1.87-2.06,3.09-2.06,3.09L33.58,44c1.7.79.31,1.53.31,1.53l-2.63,1.2c-1.74,1.1-1.7-.29-1.7-.29l-.22-6.7c-1.06-2.41-2.64-1.22-2.64-1.22a31.25,31.25,0,0,0-5,5.61L21.17,50c-1,2.87-2.74,1.52-2.74,1.52l-4.32-4.34Z"></path></g></svg>
*/
