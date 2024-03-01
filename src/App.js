
import './App.css';
import SideBar from './components/sidebar/SideBar';
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <div className='SideContent' style={{ width: "calc(100%-150px)" }}>
      <Header></Header>
      <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
