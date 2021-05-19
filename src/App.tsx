import { PlotBoilerplateComponent } from './components';
import { PlotBoilerplateProvider } from './providers/index';
import 'plotboilerplate-react/dist/index.css';
import ErrorBoundary from "./components/ErrorBoundary";


const App = () => {
	// Example
    return (
	<ErrorBoundary>
	    <PlotBoilerplateProvider>
			<PlotBoilerplateComponent fullSize={true} />
	    </PlotBoilerplateProvider>
	</ErrorBoundary>
    );
}

export default App;
