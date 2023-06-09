import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
  //characters > [{},{},{}]
  return (
  <div className={styles.container}>
      {characters?(
        characters.map((element) => (//si no hay arreglo evita se rompa'?'
       <Card 
       name={element.name}
       species={element.species}
       gender={element.gender}
       image={element.image}
       onClose={() => onClose(element.id)}
       key={element.id}
       id={element.id}
       />
       ))
       ): (

         <h3>No hay personajes</h3>
       )}

   </div>
   );
}
