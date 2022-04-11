import React, {useState, useEffect, useReducer} from "react";
import "./style.css";

const UseReducer = () => {
  const [myNum, setMyNum] = useState(0);


   return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1) } >
          <spam></spam>
          <spam></spam>
          <spam></spam>
          <spam></spam>
          +
        </div>
        <div class="button2" onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)) } >
          <spam></spam>
          <spam></spam>
          <spam></spam>
          <spam></spam>
          -
        </div>
      </div>
    </>
  );
};

export default UseReducer