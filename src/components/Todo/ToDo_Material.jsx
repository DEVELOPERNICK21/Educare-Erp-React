import React, { useState } from 'react';
import './material_todo.css'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ListTodo from './list_component';

const TodoMaterial = () => {
    const [list, setList] = useState();
    const [item, setItem] = useState([]);

    const inValue = (events) => {
        return (
            setList(events.target.value)
        );
    }

    const butnPress = () => {
        setItem((arra) => {
            return [...arra, list]
        }
        );
        setList("")
    }

    const DeItem = (id) => {
        setItem((itemDel) => {
            return itemDel.filter((arrDel, index) => {
                return index !== id;
            }
            )
        }
        );
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1 className="hone">TODO LIST</h1>
                    <br />
                    <input className="todo_input" type="text" value={list} onChange={inValue} placeholder="Enter The Task" />
                    <AddIcon className="newBtn" onClick={butnPress} />
                    <br />
                    <ol>
                        {item.map((val, index) => {
                            return (
                                <ListTodo texert={val} key={index} id={index} deleteList={DeItem} />
                            );
                        })
                        }
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default TodoMaterial;