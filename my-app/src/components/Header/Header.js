import React from "react"
import './Header.css'

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
                    <img src="./images/carousel1.jpg" alt="image of boy working on his laptop" />
                
                </div>
            </div>
        )
}
}

export default Header