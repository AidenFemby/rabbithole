import test from './test.jpg';
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>RabbitHole</h1>
        <div className="home-container"></div>
          <div className="side-bar"></div>
          <div className="side-bar2"></div>
            <div className="icon-container"></div>
            <img
            srs={test}
            alt="yes"
            className="task.icon"
            onClick={()=> console.log("clicked")}
            />
    </div>
  );
}

export default App;
