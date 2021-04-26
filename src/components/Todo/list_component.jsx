import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';


const ListTodo = (props) => {

    const [line, setLine] = useState(false);
    // const click ;
    const cutLine = () =>
    {
        return(
            setLine(true)
        );
    }

    const secondClick = () =>
    {
        var click = 1;
        click++
        console.log("click+")
        
            if(click % 2 === 0 )
            {
                setLine(false);
            }
            else if( click % 3 === 0)
            {
                setLine(true);
            }
            }

    const unCutLine = () =>
    {
        return(
            setLine(false)
        );
    }
          return(
              <>
                <div className="todo_style">
                    <span  
                    onDoubleClick={unCutLine}
                        // onClick={secondClick}
                     onClick={cutLine}
                      style={{display:"flex", marginLeft:"22px"}} >
                        <DoneAllIcon 
                        style={{marginRight:"-20px"}} 
                        className="deleteIcon" />
                    </span>
                    <span> 
                        <DeleteIcon 
                        onClick={() => props.deleteList(props.id)}
                        className="deleteIcon" />
                    </span>
                    <li style={{textDecoration : line ? "line-through" : "none"}}>
                        {props.texert} {props.key}
                    </li> 
                </div>
              </>
            );
}
 export default ListTodo;