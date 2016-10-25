/**
* handler.js
* React component, parent of the other componentes
* @author DigitalFactory
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Element from './element';

const showMetadata = true;

/**
* Handler : parent react class
*/
const Handler = React.createClass({
	render: function() {

    var data = this.props.data;
    var labels = this.props.labels;

    if(this.props.serverData == undefined || this.props.serverData["MesInfos"] == undefined){ // no or wrong data, show message and ask user to connect
      var noData = <div>
        <b>{this.errorHandler("hasToConnect")}</b>
      </div>;
    }
    return (
      <div id="content" className="clearfix">
        <div id="headerHolder-resp">
          <div id="header-resp" className="hide-for-small">
            <p id="logoMaif">
              <img src="img/logo-maif.png"/>
            </p>
        </div>
      </div>
            <Menu data={this.props.serverData} lastImport={this.props.lastImport}/>
            {(this.props.serverData == undefined || this.props.serverData["MesInfos"] == undefined) ? noData : <Element errorHandler={this.errorHandler} serverData={this.props.serverData}/>}
      </div>
    )
  },

  /** /
  * errorHandler
  * return a message text
  */
  errorHandler: function(error){
    return errorLabels[error] ? errorLabels[error] : errorLabels["otherError"];
  },
});


export default Handler