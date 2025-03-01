import { useContext } from "react";
import { CountContext } from "./Wrapper";

const ChildComp = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default ChildComp;
