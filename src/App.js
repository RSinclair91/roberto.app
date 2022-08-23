import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//'import './components/Navbar/navbar';
//'import { Nav, Navbar } from 'reactstrap';

function App() {
  
  const persona = { nombre: "roberto", altura: "184"  };

  return (
    
    <div className="App" style={{fontSize:'20px'}}>
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola {persona.nombre} de la altura {persona.altura}cm
        </p>
        <ButtonComponent />
      </header>
    </div>
  );
}

const ButtonComponent = () => {
  return <button onClick={()=> {(Hola!)}}>Gracias!</button>
}

export default App;
