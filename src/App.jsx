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
