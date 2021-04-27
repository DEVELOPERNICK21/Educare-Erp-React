import React, {useState} from 'react';
import './Assignment.css'


const Acedmics = () =>
{
const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return(
        <>
   <div className='tab_container_profile'>
        <div className='bloc-tabs_profile'>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Basic Info
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Personal Info
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Acedmic Info
          </button>

         
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >

          <h1>Content 1</h1>


          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >

          <h1>Content 2</h1>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >

          <h1>Content 3</h1>
          </div>
          
        </div>
      </div>
</>
    )
}

export default Acedmics;