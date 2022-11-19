import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [currentValue, setValue] = useState("");

  const data=["Make the bed", "Wash my hands", "Eat", "Walk the Dog"];
  

  return (
    <div className="text-center">
      <h1>My Tasks</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={currentValue}
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default Home;
