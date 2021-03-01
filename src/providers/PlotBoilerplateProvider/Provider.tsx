/**
 * @date 2021-03-01
 */

import React from "react";
import { reducer } from "./Reducer";

export interface PlotBoilerplateState {
    vertices : Array<any>;
    drawables : Array<any>;
}

const initialState : PlotBoilerplateState = {
    vertices : [],
    drawables : []
};

export const PlotBoilerplateContext = React.createContext( initialState );

export const PlotBoilerplateProvider : React.FC = ({children}) => {
    
    const [state] = React.useReducer(reducer, initialState);
    
    return (
	<PlotBoilerplateContext.Provider value={state}>
	{children}
	</PlotBoilerplateContext.Provider>
    ); 
};

export const useProvider = () => {
    
    const [state, dispatch] = React.useReducer(reducer, React.useContext( PlotBoilerplateContext ) );

     if( !state ) {
	 console.warn('Using PlotBoilerplateProvider without a PlotBoilerplateContext');
	 throw 'Using PlotBoilerplateProvider without a PlotBoilerplateContext';
	 /* return (
	     <PlotBoilerplateContext.Provider value={initialValue}>
	     {props.children}
	    </PlotBoileplateContext.Provider>
	 ); */
     }

    var test = () => {
	dispatch( { ...state, actionType: 'test', value : 'x' } );
    };
    
    return { test };
}


