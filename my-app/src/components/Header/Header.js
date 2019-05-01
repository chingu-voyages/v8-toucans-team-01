import React from "react"
import './Header.css'
import '../ImageSlider/redwoods_state_park.jpg'

class Header extends React.Component{
    render(){

        function displayMenu() {
            let menu = (
                <ul className="mobile">
                            <li><a href= "#">Home</a></li>
                            <li><a href= "#">Services</a></li>
                            <li><a href= "#">Price</a></li>
                            <li><a href= "#">Clients</a></li>
                            <li><a href= "#">Locations</a></li>
                            <li><a href= "#">Contact</a></li>
                 </ul>
            )

            let responsiveMenu = document.getElementById('mobile').innerHTML(menu)
            return 
            
        }
        return (
            <div>
                <header>
                    <nav>
                        <ul className="navlist flex">
                            <li><a href= "#">Home</a></li>
                            <li><a href= "#">Services</a></li>
                            <li><a href= "#">Price</a></li>
                            <li className="teamName">Toucans</li>
                            <li><a href= "#">Clients</a></li>
                            <li><a href= "#">Locations</a></li>
                            <li><a href= "#">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                {/* <header>
                    <nav className="mobile"  id="mobile" onClick= {displayMenu}>
                    
                        <div></div>
                        <div></div>
                        <div></div>
                    </nav>
                </header> */}

                <div className="carousel images">
                    <img className="city" src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg" alt="image of boy working on his laptop" />
                
                </div>
            </div>
        )
}
}

export default Header