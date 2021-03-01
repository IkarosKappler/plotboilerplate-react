import * as React from 'react';
// import * as ReactDOM from "react-dom";
import styles from './styles.module.css';
// import PlotBoilerplate from './components/PlotBoilerplate';

console.log('test');

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
    return <div className={styles.test}>Example Component: {text}</div>
}

export { PlotBoilerplateComponent } from './components/PlotBoilerplateComponent';

export { PlotBoilerplateProvider } from "./providers/PlotBoilerplateProvider/Provider";
// export { PlotBoilerplateReducer } from "./providers/PlotBoilerplateReducer/Reducer";

/* ReactDOM.render(
  <ExampleComponent text={"test"}></ExampleComponent>,
  document.getElementById("root")
);
*/
