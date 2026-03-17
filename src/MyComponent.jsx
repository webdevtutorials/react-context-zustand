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
