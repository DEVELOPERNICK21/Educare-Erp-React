import React, {useState} from 'react';
import './Header.css'

const Header = () =>
{

    const time = new Date().toLocaleTimeString();

    const [curTime, setCurTime] = useState(time);
  
    const Uptime = () =>
    {
      const ntime = new Date().toLocaleTimeString();
      setCurTime(ntime);
    }
    setInterval(Uptime,1000);

    return(
        <>
            <div className="main-content">
                <header>
                    <h2>
                        Dashboard
                    </h2>

                    <div className="search-wrapper" >
                        <span className="las la-search" ></span>
                        <input type="search" placeholder="Search" />
                    </div>


                    <div className="user-wrapper">
                    <div className="current-time">
                        <h3>{curTime}</h3>
                    </div>
                    <a href="#" >
                        <img src="https://instagram.fidr1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/163230860_149361843738643_6137121399511632479_n.jpg?tp=1&_nc_ht=instagram.fidr1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=djSi9lBa2t0AX-WapXv&edm=APU89FAAAAAA&ccb=7-4&oh=c04c5d8042338f50ad9fad87c933ea62&oe=608D8446&_nc_sid=86f79a" width="50px" height="50px" alt="Profile-image" />
                        </a>
                        <div>
                        {/* <h3>{curTime}</h3> */}
                            <h4>Nick Kubde</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );

}

export default Header;