import React, {useState} from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
    console.log(event.target);
  }
  return { value, onChange};
};

function App() {

  const [item, setItem] =useState(1);
  const incrementItem = () =>setItem(item + 1);
  const decrementItem = () =>setItem(item - 1);

  const maxLen = value => value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1> hello {item} </h1>
      <h2>start!!</h2>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
      <input placeholder="Name" {...name}/>
    </div>

  );
}
/*
class AppUgly extends React.Component{
  state ={
    item: 1
  }
  render() {
    const {item} = this.state;
    return(
      <div>
      <h1> hello {item} </h1>
      <h2>start!!</h2>
      <button onClick={this.incrementItem}>incrementItem</button>
      <button onClick={this.decrementItem}>decrementItem</button>
    </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };

}
*/
export default App;
