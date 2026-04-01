import "./App.css";
import { useLabelStore } from "./labelStore";

function Button({ id, newValue }) {
  const value = useLabelStore((state) => state[id]);
  const updateLabel = useLabelStore((state) => state.updateLabel);

  return (
    <button className="counter" onClick={() => updateLabel(id, newValue)}>
      {value}
    </button>
  );
}

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
