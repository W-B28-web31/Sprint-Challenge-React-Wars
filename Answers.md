# Answers

1. What is React JS? What problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React Js is an open-source Javascript library that is used for building UI's. It is the "View" in the "Model-View-Controller". React is declarative, (reusable) component-based, which uses simple encapsulated components, that can manage their own state, to build more complex Ui's. React allows us to create large web applications that can change data, without reloading the page. JSX is a simple JavaScript that allows HTML quoting and uses these HTML tag syntax to render subcomponents. HTML syntax is processed into JavaScript calls of React Framework. We can also write in pure old JavaScript.


2. Describe component state.

State is a special built-in object which allows components to create, manage, and change their own data. A change in the state happens based on user-input, triggering an event, and so on. Also, React components (with state) are rendered based on the data in the state. State holds the initial information.

So when state changes, React gets informed and immediately re-renders the DOM – not the whole DOM, but only the component with the updated state.


3. Describe props.

Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).



4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

In programming a side effect is when a procedure changes a variable from outside its scope. Side effects are not language dependent. 

Another explanation of side effects : A function that returns always the same result for the same input is called a pure function. A pure function, therefore, is a function with no observable side effects, if there are any side effects on a function the evaluation could return different results even if we invoke it with the same arguments. 

So what about React? It’s a library that pretty much only updates the DOM. A view library, if you will. 

A Side Effect in React is anything outside of updating the page. If you’re not using React to update state or render HTML, that’s a side effect. It’s any non-React thing.

This means anytime you call an API, use setInterval/setTimeout, add a keyboard listener, or really anytime you mess with the window object you’re introducing side effects.

You pass useEffect a callback function to run that contains your side effects, and then an array of things to watch. If the watched things change, useEffect will re-run our callback function.
