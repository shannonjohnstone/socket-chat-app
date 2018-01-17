import React from 'react';
import { Header } from './components';

const LayoutMain = props => [
  <main className="l-main">
    <Header
      title={props.title}
    />
    <section className="l-container">
      {props.children}
    </section>
  </main>,
  <footer className="l-footer">
    <div className="l-container">
      <p>chatty ©2017</p>
    </div>
  </footer>
];

export default LayoutMain;
