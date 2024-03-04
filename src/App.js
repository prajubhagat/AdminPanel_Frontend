
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <SideBar/>
    
      <div className="SideContent" style={{width:"calc(100% - 150px)"}} >
      <Header />
      <MainContent/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
