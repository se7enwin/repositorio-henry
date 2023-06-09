import './App.css';
import {useState,useEffect} from 'react';
//import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
//import SearchBar from './components/Nav/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites';
import DemoForms from './components/Forms/DemoForm'
import Forms from './components/Forms/Form'
import { Routes, Route } from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom';



function App () {
 
 const [characters,setCharacters]=useState([]);
 const navigate = useNavigate();
 const location = useLocation(); 
//  function onSearch(text) {
//  console.log (text);
// const example = {
//    name: 'Morty Smith',
//    species: 'Human',
//    gender: 'Male',
//    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };
const [access, setAccess]=useState(false);
const username = 'ariel@mail.com';
const password= 'ariel1234';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(()=>{
   !access && navigate('/');
},[access]);


function onSearch(text) {
  fetch(`https://rickandmortyapi.com/api/character/${text}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

function onClose(id){

setCharacters(characters.filter((personaje)=>personaje.id !==id));

}

   const logOut=() => {
   setAccess(false);
   navigate('/')
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      
       {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut} />}
        {/* <Nav onSearch={onSearch}/> */}
        <hr/>
        <Routes>
        <Route path='/home' 
               element={<Cards characters={characters} onClose={onClose} />} 
        />
        <Route path='/about' element={<About />} />
        <Route path='/demoform' element={<DemoForms />} />
        <Route path='/' element={<Forms login={login} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        </Routes>        

      </div>
        
  );
}

export default App
