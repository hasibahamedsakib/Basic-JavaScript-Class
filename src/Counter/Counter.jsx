// import CountUp from "react-countup";

import { useEffect, useState } from "react";

// const Counter = () => {
//   return (
//     <div className="bg-slate-300 text-center">
//       <CountUp start={100} end={1000} duration={5}>
//         {({ countUpRef }) => (
//           <div>
//             <span
//               ref={countUpRef}
//               className="text-3xl font-semibold text-red-400 text-center"
//             />
//           </div>
//         )}
//       </CountUp>
//     </div>
//   );
// };

// export default Counter;

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <div className="bg-slate-300 text-center">
      <h1 className="text-5xl text-center text-teal-500 relative z-10 before:absolute before:left-0 before:right-0 before:bg-gray-400 p-2 before:-z-10 before:w-full before:h-full"> {count}</h1>
    </div>
  );
};

export default Counter;
