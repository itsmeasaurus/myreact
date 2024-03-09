# React Concepts

## Component
A component in React is a reusable building block for UI elements. It encapsulates the logic and UI of a particular piece of the user interface.

```jsx
import React from 'react';

// Define a functional component
const MyComponent = () => {
  return (
    <div>
      This is a simple component.
    </div>
  );
}

export default MyComponent;
```

## Fragment
Fragments let you group multiple children elements without adding extra nodes to the DOM. They are useful when returning multiple elements from a component.

```jsx
import React from 'react';

const MyFragment = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>World!</p>
    </>
  );
}

export default MyFragment;
```

## Conditional rendering
Conditional rendering allows you to render different components or elements based on certain conditions.

```jsx
import React from 'react';

const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
    </>
  );
}

export default ConditionalRendering;
```

## Handling events
In React, you can handle events like onClick, onChange, etc., using event handlers.

```jsx
import React, { useState } from 'react';

const EventHandler = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default EventHandler;
```

## Managing state
State in React represents the data that can change over time. It's managed within a component using hooks or methods.

```jsx
import React, { useState } from 'react';

const StateManager = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default StateManager;
```

## Passing data via props
Props (short for properties) allow you to pass data from a parent component to a child component.

```jsx
import React from 'react';

const ChildComponent = ({ name }) => {
  return (
    <p>Hello, {name}!</p>
  );
}

const ParentComponent = () => {
  return (
    <>
      <ChildComponent name="Alice" />
      <ChildComponent name="Bob" />
    </>
  );
}

export default ParentComponent;
```

## Passing functions via props
In React, you can pass functions as props from parent components to child components, allowing child components to communicate with parent components.

```jsx
import React from 'react';

const ChildComponent = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

const ParentComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  }

  return (
    <ChildComponent handleClick={handleClick} />
  );
}

export default ParentComponent;
```

## Passing children
You can pass child elements or components within a parent component using children props.

```jsx
import React from 'react';

const ParentComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

const App = () => {
  return (
    <ParentComponent>
      <h1>Hello</h1>
      <p>World!</p>
    </ParentComponent>
  );
}

export default App;
```
