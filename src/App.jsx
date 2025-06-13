import logo from './img/logo.svg';
import './App.css';
import { Aside } from './components/aside/Aside';
import { Header} from './components/header/Header';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Aside/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
