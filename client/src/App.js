import {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import './App.css';
import { initWeb3 } from './store/adoptSlice';
import {loadAdopters} from './store/adoptSlice';
import PetsList from './components/PetsList';
import Menu from './components/Menu';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {  
    setInterval( () => {
      console.log("interval timer");
      dispatch(loadAdopters);
    },2000)  
    dispatch(initWeb3());    
  }, []);

  return (
    <div className="App">
      <Menu></Menu>
      <PetsList></PetsList>
    </div>
  );
}

export default App;
