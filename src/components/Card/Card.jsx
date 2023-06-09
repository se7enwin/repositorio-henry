import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styles from './Card.module.css'
import {addFavorite, removeFavorite} from '../../redux/actions/index';
import {connect} from 'react-redux';
import { useEffect } from 'react';

//export default function Card({name,species,gender,image,onClose,id,addFavorite,removeFavorite}) { Comentamos luego de connect
function Card({name,species,gender,image,onClose,id,addFavorite,removeFavorite,myFavorites,}) {

const [isFav, setFav]=useState(false);

function handleFavorite() {

   if (isFav) {

      setFav(false);
      removeFavorite(id);
   }else{

      setFav(true);
      addFavorite({ name, species, gender, image, id});

   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setFav(true);
      }
   });
}, [myFavorites]);

console.log (myFavorites);
   return (
      <div className={styles.container}>

{isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>♡</button>
   )}
         <button onClick={onClose} className={styles.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
         <img src={image} alt={name} className={styles.image}/>
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
   };
}
 
export default connect(mapStateToProps, { addFavorite, removeFavorite })(Card);