import './App.css';

/* -------------------- Section 01 -------------------- */
// import Greet from './react-fundamentals/section 01/E5_Greet'
// import { Greet } from './react-fundamentals/section 01/E5_Greet'
// import Welcome from './react-fundamentals/section 01/E6_Welcome';
// import Hello from './react-fundamentals/section 01/E7_E8_Hello';
import GreetProps from './react-fundamentals/section 01/E9_GreetProps';
import WelcomeProps from './react-fundamentals/section 01/E9_WelcomeProps';

function App() {
  return (
    <div className="App">
      <h1>React.JS - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <Greet /> */}

        {/* <Welcome /> */}

        {/* <Hello /> */}

        {/* Passing props to functional component */}
        <GreetProps name={"Bruce"} heroName={"Batman"}>
          <p>I believe what doesn't kill you simply makes you, stranger.</p>
        </GreetProps>
        <GreetProps name={"Clark"} heroName={"Superman"}>
          <button>Laser Eyes !</button>
        </GreetProps>
        <GreetProps name={"Diana"} heroName={"Wonder woman"} />

        {/* Passing props to class component */}
        <WelcomeProps name={"Bruce"} heroName={"Batman"} />
        <WelcomeProps name={"Clark"} heroName={"Superman"} />
        <WelcomeProps name={"Diana"} heroName={"Wonder woman"} />
      </>
    </div>
  );
}

export default App;
