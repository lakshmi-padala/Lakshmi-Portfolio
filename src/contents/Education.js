import React, { Component } from 'react'
import Widecard from '../components/Widecard'
 class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="MCA" where="BharathiDasan Univerdity(BDU)" from="June 2006" to="2009"/>
                <Widecard title="B.Sc" where="AcharyaNagarjunaUniversity(ANU)" from="June 2003" to="2006"/>
                
            </div>
        )
    }
}

export default Education
