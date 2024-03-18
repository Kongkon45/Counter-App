import { useReducer } from "react";
const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const INCREMENTBYFIVE = "INCREMENTBYFIVE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

type incrementActionType = {
  type: typeof INCREMENT;
};
type INCREMENTBYFIVE = {
    type : typeof INCREMENTBYFIVE, playload : number
}
type decrementActionType = {
  type: typeof DECREMENT;
};
type resetActionType = {
  type: typeof RESET;
};
type counterActionType =
  | incrementActionType
  | INCREMENTBYFIVE
  | decrementActionType
  | resetActionType;
type counterStateType = {
  count: number;
};
const reducer = (state: counterStateType, action: counterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
      case INCREMENTBYFIVE :
        return{
            count : state.count + action.playload
        }
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center">
      <h2 className="mt-4 text-5xl font-bold">Counter App</h2>
      <div className="border-2 w-1/2 mx-auto p-5 rounded-xl mt-10">
        <h1 className="mt-3 mb-6 text-3xl font-bold">Count : {state.count}</h1>
        <button onClick={()=>dispatch({type:INCREMENT})} className="bg-green-400 text-white py-1 px-4 rounded-lg text-md font-bold mx-2 ">
          Increment
        </button>
        <button onClick={()=>dispatch({type : INCREMENTBYFIVE, playload:5})} className="bg-blue-400 text-white py-1 px-4 rounded-lg text-md font-bold mx-2 ">
          IncrementByFive
        </button>
        <button onClick={()=>dispatch({type:RESET})} className="bg-red-400 text-white py-1 px-4 rounded-lg text-md font-bold mx-2 ">
          Reset
        </button>
        <button onClick={()=>dispatch({type:DECREMENT})} className="bg-orange-400 text-white py-1 px-4 rounded-lg text-md font-bold mx-2 ">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
