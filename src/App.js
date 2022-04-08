import logo from './logo.svg';
import './App.css';

function App() {

const operatingSystems=["Android","Blackberry","iPhone","Window Phone"];
const manufactures=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating Syatem</h1>
      {operatingSystems.map((e)=>{
        return <li>{e}</li>;

      })}
       <h1>Mobile Menufectures</h1>
      {manufactures.map((e)=>{
        return <li>{e}</li>;

      })}

    </div>
  );
}

export default App;
