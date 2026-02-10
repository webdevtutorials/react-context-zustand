// src / components / MyComponent.jsx

import { useMyStore } from '../features/myFeature/store/useMyStore';
import { useStatelessContext } from '../features/myFeature/context/StatelessContext';

function MyComponent() {
    const staticData = useStatelessContext();

    const dynamicData = useMyStore((state) => state.dynamicData);
    const setDynamicData = useMyStore((state) => state.setDynamicData);

    return (
        <div style={{ width: 400, height: 300, backgroundColor: 'skyblue', padding: '20px' }}>
            <h1>React Component</h1>
            <p><strong>{staticData}</strong></p>
            <p><strong>Data: {dynamicData}</strong></p>
            <button onClick = {() => setDynamicData("Stateful")}>
                Update
            </button>
        </div>
    );
};

export default MyComponent;