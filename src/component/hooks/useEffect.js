import React, {useState, useEffect} from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

 useEffect(() => {
   document.title = 'Chats( ${myNum} )'
 },);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1) } >
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

export default UseEffect