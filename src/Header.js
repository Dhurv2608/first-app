import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div>
    <header class="site-header">
    <div class="site-identity">
        <h1><a href="#">HOSPITAL</a></h1>
    </div>
    <nav class="site-navigation">
        <ul class="nav">
            <li><a href="#"><b>Home</b></a></li>
            <li><a href="#"><b>About</b></a></li>
            <li><a href="#"><b>Blog</b> </a></li>
            <li><a href="#"><b>Contact</b></a></li>
        </ul>
    </nav>
</header>
    </div>
  )
}

export default Header;
