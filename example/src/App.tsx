import React from 'react'

// import { ExampleComponent } from 'plotboilerplate-react';
import { PlotBoilerplateComponent } from 'plotboilerplate-react';
// import { PlotBoilerplateProvider } from 'plotboilerplate-react/src/providers/PlotBoilerplateProvider/Provider';
import { PlotBoilerplateProvider } from 'plotboilerplate-react';

import 'plotboilerplate-react/dist/index.css';
import ErrorBoundary from "./ErrorBoundary";

// console.log('Pre-init:', PlotBoilerplate );




const App = () => {
    // return <ExampleComponent text="Create React Library Example 😄" />

    return (
	<PlotBoilerplateProvider>
	    <ErrorBoundary>   
		<PlotBoilerplateComponent fullSize={true} />
	    </ErrorBoundary>
	</PlotBoilerplateProvider>
    );
}

export default App;
