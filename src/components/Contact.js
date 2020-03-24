import React from 'react';
import './Contact.css';

class Contact extends React.Component { 
    isOnline = false;
    name = 'random_name';
    render() {return( <div className="Contact">
       <img className="avatar" src="https://randomuser.me/api/portraits/women/47.jpg" alt="something"></img>
       <div>
       <h4 className="name">{this.name}</h4>
        <div className="status">
        
        <div className={this.isOnline ? "status-online" : "status-offline"}></div>
         <h5 className="status-text">{this.isOnline ? "Online" : "Offline"}</h5>
        </div>
        </div>
        
        
        </div>)
        }
    }


export default Contact