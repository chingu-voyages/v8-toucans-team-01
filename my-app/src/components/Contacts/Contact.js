import React from 'react'
import './Contact.css'


class Contact extends React.Component {
    render () {
        return (
            <div className ="form">
            <p className="contact1">NEED FORWARD-THINKING SOFTWARE?</p>
            <p className="contact2">GET IN TOUCH WITH US.</p>
                <form>
                    <label for="name">First Name</label>
                    <input type="text" name="name" required></input>
                    <p></p>

                    <label for="name">Last Name</label>
                    <input type="text" name="name" required></input>
                    <p></p>

                    <label for="name">Email</label>
                    <input type="email" required></input>
                    <p></p>

                    <label for="name">Work Phone</label>
                    <input type="phone"></input>
                    <p></p>
                    
                    <label for="name">Company Name</label>
                    <input type="text" name="name" required></input>
                    <p></p>

                    <label for="name">Description</label>
                    <input type="textarea" name="name" required></input>

                    {/* <label for="name">First Name</label>

                    <label for="name">First Name</label> */}
                    
                </form>
            
            </div>

        )
    }
}

export default Contact