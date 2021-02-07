import * as React from 'react'
import styles from './styles.module.css'

console.log('test');

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


ReactDOM.render(
  <ExampleComponent text={"test"}></ExampleComponent>,
  document.getElementById("root")
);
