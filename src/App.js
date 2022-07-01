// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
      <NavBar title="Compony Name" aboutText="About Us"/>
      <TextArea heading="Please Enter the text"/>
    </div>
  );
}

export default App;
