import {Fragment} from "react";

function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <link className="navbar-brand" to={"/"}>Redux</link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><link to={"/"}>Home</link></li>
                    <li><link to={"/recipe/recipe_list"}>Recipe</link></li>
                    <li><a href="#">Goods</a></li>
                    <li><a href="#">Food Find</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header