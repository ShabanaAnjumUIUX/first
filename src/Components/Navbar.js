import React,{Component} from "react";
import Section1 from "./Section1";
import Banner from "./Banner";
import img1 from "../assets/images/img1.jpg";
// import img2 from "../assets/images/img2.jpg";
import "../CSS/Navbar.css";

class Navbar extends Component{
    render(){
        let x=100;
        let y=150;
        return(
            <>
            <h1>Welcome to the Navbar</h1>
            <p>{x*15-15/25*165874}</p>
            <img src={require("../assets/images/img3.jpg")} width={150}/>
            <h5>sgdftygseyfh erhjgrfy</h5>
            <img src={img1} width={x}/><br />
            <br /><br /><br />
            <img width={y} src="https://images.pexels.com/photos/29992554/pexels-photo-29992554.jpeg"/>
            <table border>
                <tr>
                    <td>
                    <Section1 />

                    </td>
                    <td>
                        <Banner />
                    </td>
                </tr>
            </table>
        </>
        )
    }
}


export default Navbar;