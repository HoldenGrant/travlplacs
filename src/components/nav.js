import React from 'react'
import Link from 'gatsby-link'

class Nav extends React.Component{
    constructor(){
        super()
        this.state= {
            collapse: true,
        };
    }

    toggleCollapse(){
        const collapse = !this.state.collapse;
        this.setState({collapse});
    }
    render(){
        const {collapse } = this.state;
        const navClass = collapse ? "collapse" : "";
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <button className='navbar-toggler ml-auto' type='button' onClick={this.toggleCollapse.bind(this)}>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className={'navbar-collapse ' + navClass} id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' activeClassName="active" exact to="/">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' activeClassName="active" exact to="/about">About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' activeClassName="active" exact to="/service">Services</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' activeClassName="active" exact to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav