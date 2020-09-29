import { createSignal } from "solid-js";
import styles from "./styles";

function Counter(props) {
  const [count, setCount] = createSignal(props.count);

  const inc = () => setCount(count() + 1);

  const dec = () => {
    if (count() !== 0) setCount(count() - 1);
  };

  return (
    <div class={styles}>
      <button onClick={dec} class="dec">
        -
      </button>
      <span class="count">{count()}</span>
      <button onClick={inc} class="inc">
        +
      </button>
    </div>
  );
}

export default Counter;
