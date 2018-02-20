import './main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h2> This is google font </h2>
        <p className="far"> this is npm font awesome </p>
        <h4> this is yarn font awesome <FontAwesomeIcon icon={faCoffee} /></h4>
      </div>
    );
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));
