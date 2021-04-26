import React, { useState } from 'react';
import FooterKeep from './FooterKeeps';
import HeaderKeep from './Header';
import KeepNote from './KeepNotes';
import './Keepstyle.css'
import ShowNotes from './ShowNotes';


const Keep = (props) => {
    const [addedNote, setAddedNote] = useState([]);
    const [show, setShow] = useState(false);

    const addNote = (note) => {
        setAddedNote((prevData) => {
            return [
                ...prevData, note,
            ];
        })
        console.log(note);
    }

    const deleteNote = (id) =>
    {
        setAddedNote((oldData) => {
        return oldData.filter((currData, index)=> {
            return index !== id;
        })
        })
    }

    const Expand = () => {
        setShow(true)
    }

    const CloseExpand = () => {
        setShow(false)
    }

    return (
        <>
            <div className='main_div' onDoubleClick={CloseExpand} >
                {/* <HeaderKeep /> */}

                <KeepNote noteHere={addNote} first={Expand} second={CloseExpand} third={show} />

               
                <div className="notesstyle">
                    {addedNote.map((val, index) => {
                        return (<ShowNotes key={index}
                            id={index}
                            title={val.title}
                            content={val.content}   
                            deleteItem={deleteNote}
                        />);
                    })}
                </div>
                {/* <FooterKeep /> */}
            </div>
        </>
    );
}

export default Keep;