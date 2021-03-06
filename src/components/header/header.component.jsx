import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link classNam='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                <Link to='/signin' className='option'>SIGN IN</Link>
            </div>
        </div>
    )
}

export default Header