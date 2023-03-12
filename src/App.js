import './App.css';

/* ---------------- REACT FUNDAMENTALS ---------------- */
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
// import EventBind from './react-fundamentals/section 02/E14_EventBind';
// import ParentComponent from './react-fundamentals/section 02/E15_ParentComponent';
// import UserGreeting from './react-fundamentals/section 02/E16_UserGreeting';
// import NameList from './react-fundamentals/section 02/E17_E18_E19_NameList';
// import Stylesheet from './react-fundamentals/section 02/E20_Stylesheet';
// import InlineStyles from './react-fundamentals/section 02/E20_InlineStyles';
// import './react-fundamentals/section 02/E20_appStyles.css'
// import styles from './react-fundamentals/section 02/E20__appStyles.module.css'

/* -------------------- Section 03 -------------------- */
// import Form from './react-fundamentals/section 03/E21_Form';
// import LifecycleA from './react-fundamentals/section 03/E23_LifecycleA';
// import LifecycleC from './react-fundamentals/section 03/E24_LifecycleC';
// import Fragments from './react-fundamentals/section 03/E25_Fragments';
// import Table from './react-fundamentals/section 03/E25_Table';
// import ParentComp from './react-fundamentals/section 03/E26_ParentComp';
// import RefDemo1 from './react-fundamentals/section 03/E28_RefDemo1';
// import RefDemo2 from './react-fundamentals/section 03/E28_RefDemo2';
// import FocusInput from './react-fundamentals/section 03/E29_FocusInput';
// import ForwardRefInputParent from './react-fundamentals/section 03/E30_ForwardRefInputParent';

/* -------------------- Section 04 -------------------- */
// import PortalDemo from './react-fundamentals/section 04/E31_PortalDemo';
// import Hero from './react-fundamentals/section 04/E32_Hero';
// import ErrorBoundary from './react-fundamentals/section 04/E32_ErrorBoundary';
// import ClickCounter from './react-fundamentals/section 04/E33_E34_E35_ClickCounter';
// import HoverCounter from './react-fundamentals/section 04/E33_E34_E35_HoverCounter';
// import User from './react-fundamentals/section 04/E36_E37_User';
// import Counter from './react-fundamentals/section 04/E36_E37_Counter';
// import ClickCounter2 from './react-fundamentals/section 04/E36_E37_ClickCounter2';
// import HoverCounter2 from './react-fundamentals/section 04/E36_E37_HoverCounter2';
// import ComponentC from './react-fundamentals/section 04/pages/E38_E39_E40_ComponentC';
// import { UserProvider } from './react-fundamentals/section 04/E38_E39_E40_UserContext';

/* -------------------- Section 05 -------------------- */
// import PostList from './react-fundamentals/section 05/E42_PostList';
// import PostForm from './react-fundamentals/section 05/E43_PostForm';

/* -------------------- REACT HOOKS ------------------- */
/* -------------------- Section 01 -------------------- */
// import ClassCounter from './react-hooks/section 01/E2_ClassCounter';
// import HookCounter from './react-hooks/section 01/E2_HookCounter';
import ClassCounter2 from './react-hooks/section 01/E3_ClassCounter2';
import HookCounter2 from './react-hooks/section 01/E3_HookCounter2';

function App() {
  return (
    <div className="App">
      <h1>React.JS - Codevolution</h1>

      {/* ---------------- REACT FUNDAMENTALS ---------------- */}
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

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}

        {/* <Stylesheet primary={true}/> */}
        {/* <InlineStyles /> */}
        {/* <h2 className='error'>Error Message</h2> */}
        {/* <h2 className={styles.success}>Yay ! Success</h2> */}
      </>
      {/* -------------------- Section 03 -------------------- */}
      <>
        {/* <Form /> */}

        {/* <LifecycleA /> */}

        {/* <LifecycleC /> */}

        {/* <Fragments /> */}
        {/* <Table /> */}

        {/* <ParentComp /> */}

        {/* <RefDemo1 /> */}
        {/* <RefDemo2 /> */}

        {/* <FocusInput /> */}

        {/* <ForwardRefInputParent /> */}
      </>
      {/* -------------------- Section 04 -------------------- */}
      <>
        {/* <PortalDemo /> */}

        {/* <ErrorBoundary>
          <Hero heroName={"Batman"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"Superman"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"Joker"} />
        </ErrorBoundary> */}

        {/* <ClickCounter name="Saurabh" /> */}
        {/* <HoverCounter name="Saurabh" /> */}

        {/* <User render={(isLoggedIn) => isLoggedIn ? "Saurabh" : "Guest"} /> */}

        {/* Using Render Props */}
        {/* <Counter render={
          (count, incrementCount) => <ClickCounter2
            count={count}
            incrementCount={incrementCount} />
        }>
        </Counter>
        <Counter render={
          (count, incrementCount) => <HoverCounter2
            count={count}
            incrementCount={incrementCount} />
        }>
        </Counter> */}

        {/* Using Children Props */}
        {/* <Counter>
          {
            (count, incrementCount) => <ClickCounter2
              count={count}
              incrementCount={incrementCount} />
          }
        </Counter>
        <Counter>
          {
            (count, incrementCount) => <HoverCounter2
              count={count}
              incrementCount={incrementCount} />
          }
        </Counter> */}

        {/* <UserProvider value="Saurabh">
          <ComponentC />
        </UserProvider> */}
      </>
      {/* -------------------- Section 05 -------------------- */}
      <>
        {/* <PostList /> */}
        
        {/* <PostForm /> */}
      </>

      {/* -------------------- REACT HOOKS ------------------- */}
      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}

        <ClassCounter2 />
        <HookCounter2 />
      </>
    </div>
  );
}

export default App;
