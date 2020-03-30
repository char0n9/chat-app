import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



class Contact extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            online : props.online
        };
    }
 

    render() {return( 
    
    
    <div className="Contact">
      
       <img className="avatar" src={this.props.avatar} alt="something"></img>
       <div>
       <h4 className="name">{this.props.name}</h4>
        <div className="status">
        
        <div className={this.state.online ? "status-online" : "status-offline"}></div>
         <h5
         onClick = {event=>{
             const newOnline = !this.state.online;
             this.setState({online: newOnline})
         }}
         className="status-text">{this.state.online ? "Online" : "Offline"}</h5>
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