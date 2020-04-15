import React, { Component } from 'react'
import profilepic from '../img/LakshmiP_photo.jpg'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" alt=""></img>
            <h2>Hi! I'm Lakshmi.I like to learn about new technologies, and play games with kids in my free time.</h2>
            
            </div>
        )
    }
}

export default Home
