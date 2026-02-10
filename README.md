# React MyContext for Stateless Data.
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and using **React Context API**.

---

## To run the app:
```bash
cd react-context-refactored
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:
```bash
cd tutorials

yarn create vite react-context-refactored --template react
cd react-context-refactored
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
```

## Open in editor (optional):
```bash
code
```

## Create static context consuming React component:
```bash
cd src
code MyComponent.jsx
```

### Static (stateless) data:
- Static data is located in src/myData/staticData.js

### Helper function for replicating context declaration and custom hook logic:
```js
// src / utils / createSafeContext.js
    import { createContext, useContext }  from 'react';

    export const createSafeContext = ( providerName, hookName ) => {
        const Context = createContext(undefined);

        const useSafeHook = () => {
            const context = useContext(Context);
            if (context === undefined) {
                throw new Error(`${hookName} must be used withing ${providerName}`);
            }

            return context;
        };

        return [Context, useSafeHook];
    };
```

### Context Declarations, Custom Hooks, and Providers:
- Two context files StatefulContext.jsx and StatelessContext.jsx contain 
all 3 context components each and are located in src/features/myFeature/context/

```js 
    // src / features / myFeature / context / StatelessContext.jsx

    import { createSafeContext } from '../../../utils/createSafeContext';
    import { staticData } from '../../../myData/staticData';

    const [StatelessContext, useStatelessContext] = createSafeContext(
        "StatelessProvider",
        "useStatelessContext"
    );

    const StatelessProvider = ({ children }) => {
        return (
            <StatelessContext.Provider value={ staticData }>
                {children}
            </StatelessContext.Provider>
        );
    };

    export { StatelessProvider, useStatelessContext };
```

```js
    // src / features / myFeature / context / StatefulContext.jsx

    import { useState, useMemo } from 'react';
    import { createSafeContext } from '../../../utils/createSafeContext';

    const [StatefulContext, useStatefulContext] = createSafeContext(
        "StatefulProvider",
        "useStatefulContext"
    );

    const StatefulProvider = ({ children }) => {
        const [dynamicData, setDynamicData] = useState("No data");
        
        // memoizing the object prevents consumers from re-rendering
        // unless the data actually changes
        const contextValue = useMemo(() => ({
                dynamicData,
                setDynamicData
        }), [dynamicData]);

        return (
            <StatefulContext.Provider value={contextValue}>
                { children }
            </StatefulContext.Provider>
        );
    };

    export { StatefulProvider, useStatefulContext };
```

### Utility to gracefully include nesting providers:

```js
// src / utils / composeProviders.jsx

export const Compose = ({ providers, children }) => {
    return providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>
    }, children);
};
```

### Agreegating Providers:
- AppProviders.jsx no longer needs to have long chain of nested providers.

```js
// src / providers / AppProviders.jsx

import { Compose } from '../utils/composeProviders';
import { StatelessProvider } from '../features/myFeature/context/StatelessContext';
import { StatefulProvider } from '../features/myFeature/context/StatefulContext';

const AppProviders = ({ children }) => (
    <Compose providers={[StatelessProvider, StatefulProvider]}>
        {children}
    </Compose>
);

export default AppProviders;
```

### Wrapping consumers:
- The wrapping takes place in main.jsx (index.jsx)

```js
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
```

### Consuming:
- Consuming is streamlined using custom hook inside MyComponent.
- useEffect prevents infinite loop.

```js
import { useEffect } from 'react';
import { useStatelessContext } from '../features/myFeature/context/StatelessContext';
import { useStatefulContext } from '../features/myFeature/context/StatefulContext';

function MyComponent() {
    const { staticData } = useStatelessContext();
    const { dynamicData, setDynamicData } = useStatefulContext();

    useEffect(() => {
        setDynamicData("Stateful");
    }, [setDynamicData]);

    return (
        <div style={{ width: 400, height: 250, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p> { staticData }</p>
            <p>{ dynamicData }</p>
        </div>
    );
};

export default MyComponent;
```