import { useDispatch, useSelector } from 'react-redux';
import pets from '../pets.json';
import {adoptPet,unadoptPet} from '../store/adoptSlice';

function PetsList() {
  const dispatch = useDispatch();
  const adoptersList = useSelector(state => state.adoptReducer.adopters);
  const address = useSelector(state => state.adoptReducer.address);
  const loading = useSelector(state => state.adoptReducer.adoptInProgress);

  console.log("PetsList = " + loading);
  return (
      <div className="petsContainer">
      {pets.map((pet,index) => {
        return(
        <div key={index} className="petContainer">
          <div >
            <h3 >{pet.name}</h3>
          </div>
          <div >
            <img src={pet.picture} alt="pet"/>
            <br/><br/>
            <strong>Breed</strong>:<span>{pet.breed}</span><br/>
            <strong>Age</strong>:<span >{pet.age}</span><br/>
            <strong>Location</strong>: <span >{pet.location}</span><br/><br/>
            <div className="buttonContainer">
            {
              adoptersList[pet.id] === "0x0000000000000000000000000000000000000000"? 
              <button type="button" onClick={async() => {
                dispatch(adoptPet(pet.id));
              }}>Adopt</button>
              : adoptersList[pet.id] === address? 
              <button type="button" onClick={async() => {
                dispatch(unadoptPet(pet.id));
              }}>UnAdopt</button>
              :
              <button type="button" disabled={true} onClick={async() => {
                dispatch(unadoptPet(pet.id));
              }}>Adopted</button>
            }  
            {
              loading? <img src="images/loading.gif" width='50px' alt="loading"/>: null
            }              
            </div>        
          </div>          
        </div>
        );
      })}
      </div>
  );
}

export default PetsList;
