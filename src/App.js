import logo from './logo.svg';
import './App.css';
import Esalink from './components/Esalink/Esalink';
import Trello from './components/Trello/Trello'
import Monkey from './components/Monkey/Monkey'
import Footer from './components/Footer/Footer'
// import Form from './components/Esalink/Form'
function App() {
  return (
    <div className="App">
      <Esalink></Esalink>
      {/* <Trello></Trello> */}
      <Monkey></Monkey>
      {/* <Form></Form> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
