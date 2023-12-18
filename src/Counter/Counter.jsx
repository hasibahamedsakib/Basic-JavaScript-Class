import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //   setInterval(() => {

  //   }, 1000);

  return (
    <div className="h-screen grid items-center justify-center">
      <div>
        <h1 className="text-3xl font-normal underline text-center text-purple font-Rubik">
          Count : {counter}
        </h1>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            disabled={counter >= 10 ? true : false}
            to={"#"}
            className="btn-primary bg-red-400  before:bg-orange-800 "
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increase
          </button>
          <button
            disabled={counter <= 0 ? true : false}
            to={"#"}
            className="btn-primary bg-amber-400 before:hover:bg-amber-600"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
