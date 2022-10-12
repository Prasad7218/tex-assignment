import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import rectangle2 from "./assets/group80.svg";
import group80 from "./assets/rectangle2.svg";
import layer12 from "./assets/layer12.svg";

function App() {
  const [state1, setState1] = useState(layer12);

  const clickHandler = () => {
    setState1(rectangle2);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="container-1">
          <img className="image" src={state1} />
          <div className="container-2">
            <img className="image-1" src={group80} />
            {/* <h1>{state1}</h1> */}
            <div className="container-3">
              <span className="text">
                How well do you think you understand the position now that
                you&#39;ve been hired?
              </span>
              <div className="container-4">
                <div className="container-5">
                  <span className="text-1">
                    had no trouble comprehending the position.
                  </span>
                </div>
                <div>
                  <button onClick={clickHandler} className="container-6">
                    Most of the job was clear to me.
                  </button>
                </div>
                <div className="container-7">
                  <span className="text-3">
                    I recognized the essentials of the position.
                  </span>
                </div>
              </div>
              <div className="container-8">
                <div className="container-9">
                  <span className="text-4">
                    Most of the aspects of the function eluded me.
                  </span>
                </div>
                <div className="container-10">
                  <span className="text-5">
                    I had no idea what the role entailed.
                  </span>
                </div>
              </div>
              <div className="container-11">
                <span className="text-6">
                  CLICK TO SELECT THE DESIRED ANSWER{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
