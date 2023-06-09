import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';


export default function Nav(props){

    return (
        // <div style={{backgroundColor:'#000000',padding:'25px'}}>
          <div className={styles.container}>
          <Link to='/home'>
          <span>Home</span>
            </Link>
            <SearchBar onSearch={props.onSearch}/>
          <Link to='/about'>
          <span>About</span>
          </Link>
          <Link to='/favorites'>
            <span>Favorites</span>
          </Link>
          <button onClick={props.logOut}>LogOut</button>
        </div>
    )

}