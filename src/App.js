import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FocusInput from "./components/FocusInput";
import Form from "./components/Form";
import FRParentInput from "./components/FRParentInput";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import LifecycleA from "./components/LifecycleA";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponet from "./components/ParentComponet";
import RefsDemo from "./components/RefsDemo";
import UserGreetings from "./components/UserGreetings";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <FRParentInput/>
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <NameList/> */}
      {/* <UserGreetings/> */}
      {/* <ParentComponet/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet name="Diana" heroName="Wonder Women"/>
      <Welcome name="Bruce" heroName="Batman"/> */}
    </div>
  );
}

export default App;
