import React from 'react';
import 'DarkTheme.module.css';

export default DarkTheme(props) {
  // const classes = props.className;
  return <div className={props.className}>{props.children}</div>;
}

