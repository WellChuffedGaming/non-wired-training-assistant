import { useState } from 'react';

export default function TrainingDashboard() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div>
      <h2>Welcome to the Training Dashboard</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
