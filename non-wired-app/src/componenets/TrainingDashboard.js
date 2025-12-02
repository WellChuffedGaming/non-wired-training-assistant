export default function TrainingDashboard() {
  return <div>Welcome to the Training Dashboard</div>;
}
import { useState } from 'react';

export default function TrainingDashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Welcome to the Training Dashboard</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}