# Global State Management with Zustand.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-004b6f?style=for-the-badge&logo=react&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and managing global state with **Zustand**.

---

## To run the app:

```bash
cd react-context-zustand
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:

```bash
cd tutorials

yarn create vite react-context-zustand --template react
cd react-context-zustand
```

## Install Zustand:

```bash
yarn add zustand
```

## Initiate version control:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -m master main
```

## Upload to GitHub:

```bash
gh auth status
gh repo create react-context-refactored --public --source=. --remote=origin --push
git remote -v
```

### Create and export a Zustand global store with data:

```bash
cd src
code appStore.js
```

```js
// src / appStore.js

import { create } from "zustand";

export const useMyStore = create((set) => ({
  data1: "No data",
  data2: "No data",
  data3: "No data",

  setData: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
```

### Import the global store:

```js
// src / App.jsx

import { useAppStore } from "./appStore";
```

### Import the updater:

```js
// src / App.jsx

const setData = useAppStore((state) => state.setData);
```

### Define new values:

```js
// src / App.jsx

const items = [
  { key: "data1", value: "Data-1" },
  { key: "data2", value: "Data-2" },
  { key: "data3", value: "Data-3" },
];
```

### Render the elements using .map():

```js
// src / App.jsx

return <section id="center">{items.map((item) => {})}</section>;
```

### For every element obtain the initial state:

```js
// src / App.jsx

const value = useAppStore((state) => state[item.key]);
```

### Return each element (button) displaying the initial value, which updates if clicked on:

```js
// src / App.jsx

return (
  <div key={item.key}>
    <button className="counter" onClick={() => setData(item.key, item.value)}>
      {value}
    </button>
  </div>
);
```

### The complete file:

```js
// src / App.jsx

import "./App.css";
import { useAppStore } from "./appStore";

function App() {
  const setData = useAppStore((state) => state.setData);

  const items = [
    { key: "data1", value: "Data-1" },
    { key: "data2", value: "Data-2" },
    { key: "data3", value: "Data-3" },
  ];

  return (
    <section id="center">
      {items.map((item) => {
        const value = useAppStore((state) => state[item.key]);

        return (
          <div key={item.key}>
            <button
              className="counter"
              onClick={() => setData(item.key, item.value)}
            >
              {value}
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default App;
```
