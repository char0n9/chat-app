import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component { 
    
    render() {return( <div className="Contact">
       <img className="avatar" src={this.props.avatar} alt="something"></img>
       <div>
       <h4 className="name">{this.props.name}</h4>
        <div className="status">
        
        <div className={this.props.online ? "status-online" : "status-offline"}></div>
         <h5 className="status-text">{this.props.online ? "Online" : "Offline"}</h5>
        </div>
        </div>
        
        
        </div>)
        }
    }

Contact.propTypes = {
    name: PropTypes.string,
    online: PropTypes.bool,
    avatar: PropTypes.string
}
export default Contact