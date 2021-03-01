/**
 * @date 2021-03-01
 */

import React from "react";
// const { Provider, Consumer } = React.createContext();

import { reducer } from "./Reducer";

export interface PlotBoilerplateState {
    vertices : Array<any>;
    drawables : Array<any>;
}

const initialState : PlotBoilerplateState = {
    vertices : [],
    drawables : []
};

export const PlotBoilerplateContext = React.createContext( // <PlotBoilerplateState>(
							   initialState
							   
);


export const PlotBoilerplateProvider : React.FC = ({children}) => {

    // const [ state, dispatch ] = React.useContext( PlotBoilerplateContext );
    // const context = React.useContext( PlotBoilerplateContext );
    /* if( !state ) {
	console.warn('Using PlotBoilerplateProvider without a PlotBoilerplateContext');
	return (<PlotBoilerplateContext.Provider value={{ primaryColor: green }}>
	    {props.children}
	</PlotBoileplateContext.Provider>);
    } */

    const [state] = React.useReducer(reducer, initialState); // initialArg, init);
    
    /* return (
	<PlotBoilerplateContext.Provider value={React.useReducer(reducer, initialState)}>
	    {children}
	</PlotBoilerplateContext.Provider>); */
    
    return (
	<PlotBoilerplateContext.Provider value={state}>
	{children}
	</PlotBoilerplateContext.Provider>
    ); 
    /* return (
	<PlotBoilerplateContext.Provider value={initialState}>
	{children}
	</PlotBoilerplateContext.Provider>
    );*/
};

export const useProvider = () => {
    // const state = React.useContext( PlotBoilerplateContext ); //  PlotBoilerplateContext );
    // const const [state, dispatch] = useReducer(reducer, initialArg, init);

    // const state =  //  PlotBoilerplateContext );
    const [state, dispatch] = React.useReducer(reducer, React.useContext( PlotBoilerplateContext ) );

    var test = () => {
	dispatch( { ...state, actionType: 'test', value : 'x' } );
    };
    
    return { test };
}

// export { ThemeContextProvider, Consumer as ThemeContextConsumer };


