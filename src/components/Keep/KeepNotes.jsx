import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import AddIcon from "@material-ui/icons/Add";

const KeepNote = (props) => {
    const [note, setNote] = useState(
        {
            title: "",
            content: "",
        }
    );

    const InputData = (event) => {
        const { value, name } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
        console.log(note);
    }

    const addEvent = () => {
        props.noteHere(note);
        setNote({
            title: "",
            content: "",
        })
    }


    return (
        <>
                <div className='KeepContainer' >
                    <form >
                        {props.third ? (
                    <div className="addNoteTitle">
                            <input className="addNotesKeepInputTitle"
                                type='text'
                                name="title"
                                maxLength="40"
                                value={note.title}
                                onChange={InputData}
                                placeholder='Title'
                                autoComplete='off'
                            /> </div>) : null}
                            <div className="addNoteContent">
                        <textarea
                            className="addNotesKeepTextConyent"
                            column=''
                            row=''
                            maxLength="150"
                            name="content"
                            value={note.content}
                            onChange={InputData}
                            placeholder='Enter the notes here!!!'
                            onClick={props.first}
                        />
                        <div className="addNoteBut">
                        {props.third ?
                            (<Button onClick={addEvent} variant='contained' color='disabled'>
                                <AddIcon />
                            </Button>
                            ) : null}
                            </div>
                            </div>

                    </form>
                </div>
        </>
    );
};

export default KeepNote;
