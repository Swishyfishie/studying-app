function App() {

  const fetchStuff = () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <button onClick={fetchStuff}>Fetch stuff</button>
    </div>
  );
}

export default App;
