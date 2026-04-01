# Global State Management with Zustand.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-004b6f?style=for-the-badge&logo=react&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and managing global state with **Zustand**.

---

### To run the app:

```bash
cd react-context-zustand
yarn install
yarn dev
```

### To build from scratch start a new Vite-React project:

```bash
cd tutorials

yarn create vite react-context-zustand --template react
cd react-context-zustand
```

### Install Zustand:

```bash
yarn add zustand
```

### Initiate version control:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -m master main
```

### Upload to GitHub:

```bash
gh auth status
gh repo create react-context-refactored --public --source=. --remote=origin --push
git remote -v
```

### Create and export a Zustand global store with data:

```bash
cd src
code labelStore.js
```

```js
// src / labelStore.js

import { create } from "zustand";

export const useLabelStore = create((set) => ({
  label1: "Label Me",
  label2: "Label Me",
  label3: "Label Me",

  updateLabel: (key, value) => set(() => ({ [key]: value })),
}));
```

### Import the global store:

```js
// src / App.jsx

import { useLabelStore } from "./labelStore";
```

### Create Button component:

```js
// src / App.jsx

function Button({ id, newValue }) {
  const value = useLabelStore((state) => state[id]);
  const updateLabel = useLabelStore((state) => state.updateLabel);

  return (
    <button className="counter" onClick={() => updateLabel(id, newValue)}>
      {value}
    </button>
  );
}
```

### Create the main App component:

```js
// src / App.jsx

export default function App() {
  const labels = [
    { key: "label1", value: "LABEL-1" },
    { key: "label2", value: "LABEL-2" },
    { key: "label3", value: "LABEL-3" },
  ];

  return (
    <section id="center">
      {labels.map((label) => (
        <Button key={label.key} id={label.key} newValue={label.value} />
      ))}
    </section>
  );
}
```
