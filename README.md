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
code useMyStore.js
```

```js
// src / useMyStore.js

import { create } from "zustand";

export const useMyStore = create((set) => ({
  data1: "No data",
  data2: "No data",
  data3: "No data",

  setData: (key, value) => set({ [key]: value }),
}));
```

### Import, destructure, and use the data in a component:

```js
// src / MyComponent.jsx

import { useMyStore } from "./useMyStore";
import "./MyComponent.css";

function MyComponent() {
  const data1 = useMyStore((state) => state.data1);
  const data2 = useMyStore((state) => state.data2);
  const data3 = useMyStore((state) => state.data3);

  const setData = useMyStore((state) => state.setData);

  const items = [
    { key: "data1", value: data1, label: "Data-1" },
    { key: "data2", value: data2, label: "Data-2" },
    { key: "data3", value: data3, label: "Data-3" },
  ];

  return (
    <div className="my-component">
      <h2>My Component</h2>

      {items.map((item) => (
        <div className="my-component__row" key={item.key}>
          <button onClick={() => setData(item.key, item.label)}>Update</button>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
```
