
import React,{memo} from "react";




const Login = ({todos,AddTodo}) => {
  console.log("runs,chalyo");
   
   
   
    
  return (
    <>
    <div>
      <h2>Add to Do</h2>
      {todos.map((curValue,index) => {
        return <p key={index}>{curValue + index}</p>
      })}
       
      </div>

      <button onClick={AddTodo}>Add Todo</button>
    </>
  );
};

export default memo(Login);
