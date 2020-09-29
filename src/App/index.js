import styles from "./styles";
import Counter from "../Counter";

function App() {
  return (
    <div class={styles}>
      <Counter count={0} />
    </div>
  );
}

export default App;
