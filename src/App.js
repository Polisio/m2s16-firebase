// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="container">
      <h1 className='text-primary'>Formulario con Firebase</h1>
      <Formulario/>
    </div>
  );
}

export default App;
