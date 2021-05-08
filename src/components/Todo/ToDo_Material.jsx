import React, { useState } from "react";
import "./material_todo.css";
import Button from "@material-ui/core/Button";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import ListTodo from "./list_component";

const TodoMaterial = () => {
  const [list, setList] = useState();
  const [item, setItem] = useState([]);

  const inValue = (events) => {
    return setList(events.target.value);
  };

  const butnPress = () => {
    setItem((arra) => {
      return [...arra, list];
    });
    setList("");
  };

  const DeItem = (id) => {
    setItem((itemDel) => {
      return itemDel.filter((arrDel, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className='TodoMain'>
        <div className='upperTodo'>
          <h1 >TODO</h1>
          <h3 >Add Your Task Here</h3>
          <div className="addTask">
          <input
            className='addNotesTodoInputTitle'
            type='text'
            value={list}
            onChange={inValue}
            placeholder='Enter The Task'
          />
          <div className="addTodo">
          <Button onClick={butnPress} variant='contained' color='disabled'>
             <AddIcon className='newBtn'  />
          </Button>
          </div>
          </div>

        </div>
        <div className='DownTodo'>
          <ol className="todo_ol">
            {item.map((val, index) => {
              return (
                <ListTodo
                  texert={val}
                  key={index}
                  id={index}
                  deleteList={DeItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoMaterial;
