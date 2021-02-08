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

// export PlotBoilerplate;
export * from './components/PlotBoilerplate';


/* ReactDOM.render(
  <ExampleComponent text={"test"}></ExampleComponent>,
  document.getElementById("root")
);
*/
