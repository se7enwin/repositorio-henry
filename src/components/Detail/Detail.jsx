//import styles from './Detail.module.css'
import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react';


export default function Detail(props){
    const [infoDetail, setInfo]=useState({});
    const {id} = useParams();
    const navigate=useNavigate();
    function backToHome(){

       navigate('/home')
    }
    console.log('id>',useParams());

        useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            // nos llega la respuesta
            if (char.name) {
                setInfo(char);
                console.log(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
          
           //desmontaje
          return()=> setInfo({});
      }, [id]);    


    return ( <div> 
        <div>
            <button onClick={backToHome}>Volver</button>
        </div>
        {
            infoDetail.id ? (<div> 
                <h1>{infoDetail.name}</h1>
                <h5>{infoDetail.status}</h5>
                <h5>{infoDetail.species}</h5>
                <h5>{infoDetail.gender}</h5>
                <h5>{infoDetail.origin?.name}</h5>
                <div>
                    <img src={infoDetail.image} alt={infoDetail.name} />
                    </div>
            </div>) : <h1>Loading...</h1>
        } </div>
    )
}