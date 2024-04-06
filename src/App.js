import React, {useEffect, useState} from "react";

/*
const useTitle = initialTitle =>{
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  */

const useConfirm =(message, callback) => {
  if( typeof callback !== "function"){
    return;
  }
  const confirmAction = () => {
    if(confirm(message)){
      callback();
    }
  };
  return confirmAction();

}



function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout( ()=> )
  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}></button>
      <button onClick={() => setAnumber(aNumber + 1)}></button>
    </div>
  );
}

export default App;
