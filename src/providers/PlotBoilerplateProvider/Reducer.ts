/**
 * @date 2021-03-01
 */

// import React, { useReducer } from 'React';

import { PlotBoilerplateState } from "./Provider";

export interface Action {
    actionType : any;
    value : any;
};

export const reducer = (state:PlotBoilerplateState, action:Action) => {
    switch (action.actionType) {
	case 'increment':
	    //return { count: state.count + 1 };
	    return state;
	default:
	    return state;
    }
};

/* function Increment({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, { count: 0 });  return (
	<button onClick={() => dispatch({ type: 'increment'})}>
	    Increment: {state.count}
	</button>
    );
} 
*/