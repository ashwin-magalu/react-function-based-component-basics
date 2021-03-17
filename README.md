# React-Redux Interview Guide

## React

1. what do you like and dislike about React?
   a. Love unidirectional flow from parent to child and the fact that React is pretty much javascript.
   b. Disliked JSX.

2. Conditional rendering and list rendering?
   a. What is the significance of having the key prop when rendering a list of elements.
   b. What is a potential bug that you can introduce when using index as key

3. Class component's lifecycle methods.
   a. There will always be legacy code that you need to maintain
   b. Learn the mounting phase, the updation phase and the unmounting phase methods
   c. Order of invocation and a brief description of when you'd use each of them

4. Context API
   a. What is prop drilling, how can you overcome that using the context API

5. Hooks
   a. What was the need for Hooks?
   b. useState, useEffect and useContext

6. Optimization
   a. Pure components
   b. memo
   c. useMemo and useCallback

7. How to share logic across components?
   a. Higher Order Components
   b. Render props pattern
   c. Custom hooks

8. What are some of the packages that you use along with React?
   a. Styling
   b. Routing
   c. Form Handling
   d. State management
   e. CRA vs Custom webpack config

## Redux

1. What is Redux?

2. How do you decide whether to choose Context API or Redux?

3. What is the Redux store?

4. What are actions?

5. What are action creators?

6. What are reducers?

7. How the control flows between these different parts?

8. What exactly does the connect function do from the react-redux library?

9. What do mapStateToProps and mapDispatchToProps actually do?

10. Why should you dispatch an action to update the state and not update store directly?

11. In a reducer, why should you return a new object as state and not modify the existing state object?
