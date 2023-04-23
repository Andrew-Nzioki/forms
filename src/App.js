import './App.css';
import React, { useState } from "react";
// import SignUp from './components/SignUp';
import TodoList from "./components/TodoList"
import PetCard from "./components/PetCard";
import Header from "./components/Header"
import PetForm from "./components/PetForm"
import { pets as petsArray } from "./data"
function App() {
  const [user, setUser] = useState(null)
  const [pets, setPets] = useState(petsArray)
  
  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        key={petObj.id}
        name={petObj.name}
        image={petObj.image}
        favSnacks={petObj.favSnacks}
        isAdopted={petObj.isAdopted}
      />
    );
  });
  function addPet(petObj){
    console.log('in App',petObj)
    setPets([...pets,petObj])
  }
  return (
    <div className="App">
    <Header user={user} setUser={setUser}/>
    <p>Welcome, username</p>
    {petCards}
    <PetForm addPet={addPet}/>
    </div>
  );
}

export default App;
