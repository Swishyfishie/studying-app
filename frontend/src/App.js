import Navbar from './components/Navbar'
import Form from './components/Form'
function App() {

  const fetchStuff = () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Navbar />
      <button onClick={fetchStuff}>Fetch stuff</button>
      <Form />
    </div>
  );
}

export default App;
