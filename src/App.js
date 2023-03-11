import './App.css';

/* -------------------- Section 01 -------------------- */
// import Greet from './react-fundamentals/section 01/E5_Greet'
// import { Greet } from './react-fundamentals/section 01/E5_Greet'
// import Welcome from './react-fundamentals/section 01/E6_Welcome';
// import Hello from './react-fundamentals/section 01/E7_E8_Hello';
// import GreetProps from './react-fundamentals/section 01/E9_GreetProps';
// import WelcomeProps from './react-fundamentals/section 01/E9_WelcomeProps';
// import Message from './react-fundamentals/section 01/E10_Message';

/* -------------------- Section 02 -------------------- */
// import Counter from './react-fundamentals/section 02/E11_Counter';
// import GreetPropsDestructuring from './react-fundamentals/section 02/E12_GreetPropsDestructuring';
// import WelcomePropsDestructuring from './react-fundamentals/section 02/E12_WelcomePropsDestructuring';
// import FunctionClick from './react-fundamentals/section 02/E13_FunctionClick';
// import ClassClick from './react-fundamentals/section 02/E13_ClassClick';
import EventBind from './react-fundamentals/section 02/E14_EventBind';

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
        {/* <GreetProps name={"Bruce"} heroName={"Batman"}>
          <p>I believe what doesn't kill you simply makes you, stranger.</p>
        </GreetProps>
        <GreetProps name={"Clark"} heroName={"Superman"}>
          <button>Laser Eyes !</button>
        </GreetProps>
        <GreetProps name={"Diana"} heroName={"Wonder woman"} /> */}

        {/* Passing props to class component */}
        {/* <WelcomeProps name={"Bruce"} heroName={"Batman"} />
        <WelcomeProps name={"Clark"} heroName={"Superman"} />
        <WelcomeProps name={"Diana"} heroName={"Wonder woman"} /> */}

        {/* <Message /> */}
      </>
      {/* -------------------- Section 02 -------------------- */}
      <>
        {/* <Counter /> */}

        {/* <GreetPropsDestructuring name={"Bruce"} heroName={"Batman"} /> */}
        {/* <WelcomePropsDestructuring name={"Clark"} heroName={"Superman"} /> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        <EventBind />
      </>
    </div>
  );
}

export default App;
