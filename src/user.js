import { useState } from 'react';
import ClassComponent from './component/ClassComponent';
import FunctionComponent from './component/FunctionComponent';
function User() {
    const [show, setshow]=useState(false);
    const [classshow, setclassshow]=useState(false);
    const click1=()=>{
    setshow(!show)
    }
    const click2=()=>{
      // alert("hello")
    setclassshow(!classshow)
    }
    return (
      <div className="user">
        <h1 className="heading">Styling using Functional and Class Component</h1>
    <center>
        <button className='btn' id="btn1" onClick={click1}>To see styling in functional component</button>
        <button className='btn' onClick={click2}>To see styling in class component</button>
    </center>

    <div id="flexBox">
            <div id="fun">
            {show?<FunctionComponent/>:''}
            </div>
            <div id="cla">
           {classshow? <ClassComponent/>:'   '}
           </div>
      </div>
      </div>
    );
  }
  export default User