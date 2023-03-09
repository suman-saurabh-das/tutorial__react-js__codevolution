import './App.css';

/* -------------------- Section 1 -------------------- */
// import Greet from './react-fundamentals/section 01/E5_Greet'
import { Greet } from './react-fundamentals/section 01/E5_Greet'
import Welcome from './react-fundamentals/section 01/E6_Welcome';

function App() {
  return (
    <div className="App">
      <h1>React.JS - Codevolution</h1>
      <>
        <Greet />
        <Welcome />
      </>
    </div>
  );
}

export default App;
