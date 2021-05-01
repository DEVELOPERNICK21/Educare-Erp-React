import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';

const ShowNotes = (props) => {
    const delNote = () => {
         props.deleteItem(props.id)
        
    }
    return (
        <>
            <div className="show_main">
                <h1 className="show_title">{props.title}</h1>
                <p className="show_notes">{props.content}</p>
                <div className="noteDel">
                    <Button onClick={delNote} classes={{ label: 'my-class-name' }} variant="contained" color="disabled    ">
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ShowNotes;