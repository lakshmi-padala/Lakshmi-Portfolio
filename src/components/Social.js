import React, { Component } from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
 class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/lakshmi-padala" target="_blank" rel="noopener noreferrer ">
                <FaGithub color="white" size="2rem" />
                </a>
                <a href="https://www.facebook.com/lakshmi.npb" target="_blank" rel="noopener noreferrer">
                <FaFacebook color="white" size="2rem" />
                </a>
                <a href="https://twitter.com/@lakshmi94102753" target="_blank" rel="noopener noreferrer">
                <FaTwitter color="white" size="2rem"/></a>
            
        
            </div>
        )
    }
}

export default Social
