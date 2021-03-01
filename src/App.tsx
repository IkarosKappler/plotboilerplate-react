import React from 'react'

// import { PlotBoilerplateComponent } from 'plotboilerplate-react';
import { PlotBoilerplateComponent } from './components/PlotBoilerplateComponent';
import 'plotboilerplate-react/dist/index.css';
import ErrorBoundary from "./components/ErrorBoundary";


const App = () => {
    // return <ExampleComponent text="Create React Library Example 😄" />

    return (
	<ErrorBoundary>
	    <PlotBoilerplateProvider>
		<PlotBoilerplateComponent fullSize={true} />
	    </PlotBoilerplateProvider>
	</ErrorBoundary>
    );
}

export default App;
