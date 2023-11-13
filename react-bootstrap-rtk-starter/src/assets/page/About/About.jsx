import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>About {count}</button>;
    </div>
  );
};

export default About;
