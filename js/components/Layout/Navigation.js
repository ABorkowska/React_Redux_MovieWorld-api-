import React from "react";
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/"> Search movies </Link></li>
                <li><Link to="/watched"> Already watched </Link></li>
                <li><Link to="/wishlist"> Still to watch </Link></li>
            </ul>
        </nav>
    )
}