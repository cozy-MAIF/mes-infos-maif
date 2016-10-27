/**
* Element React component
* display content for each menu link
* @author DigitalFactory
*/

import React from 'react';
import Contracts from './contracts';
import Foyer from './foyer';
import Infosperso from './infosperso';
import Insuranceclaims from './insuranceclaims';

const Element = React.createClass({

	render: function(){
		var tables = this.generateTables();
		return (
				<div> {tables}</div>
			)
	},

	/**
	* generataTable
	* initialize all elements display
	*/
	generateTables: function(){
		var elementsObject = elements[0];
		var that = this;
		return Object.keys(elementsObject).map(function(k) {
			var element = that.generateContent(k);
			return <div id='contentInner' className={(k == 'contracts' ? 'element-displayed' : 'element-hidden') + " element-part part-"+k}>
						<div id='fullPart'>
							<div>{/*<div className='no-arrow'>*/}
								<div className='box-alpha-title'>
									{elementsObject[k].title}
								</div>
									{element}
							</div>
						</div>
					</div>
		});
	},

	/**
	* generateContent
	* call appropriate function to generate DOM
	*/
	generateContent: function(elementId){
		var content;
		var labels = appLabels[0];
		var data = "";
		var address = "";

		if(this.props.serverData["MesInfos"] != undefined){
			if(this.props.serverData["MesInfos"]["foyer"] != undefined){
				if(this.props.serverData["MesInfos"]["foyer"]["address"] != undefined && this.props.serverData["MesInfos"]["foyer"]["address"] != ""){
					address = this.props.serverData["MesInfos"]["foyer"]["address"]["street"] + ", " + this.props.serverData["MesInfos"]["foyer"]["address"]["postCode"] + ", "  + this.props.serverData["MesInfos"]["foyer"]["address"]["city"];
				}
			}
			//define data in different cases and pass in parameter
			switch(elementId){
				case "contracts":
					data = this.props.serverData["MesInfos"]["contract"];
					content = <Contracts data={data} labels={labels} vehicles={this.props.serverData["MesInfos"]["vehicle"]}/>;
				break;
				case "claims":
					data = this.props.serverData["MesInfos"]["insuranceClaim"];
					content = <Insuranceclaims data={data} labels={labels} vehicles={this.props.serverData["MesInfos"]["vehicle"]}/>;
				break;
				case "infos":
					data = this.props.serverData["MesInfos"]["client"];
					content = <Infosperso data={data} labels={labels} address={address}/>;
				break;
				case "foyer":
					data = this.props.serverData["MesInfos"]["foyer"];
					content = <Foyer data={data} labels={labels}/>;
				break;
				default:
				break;
			}
			if(data == undefined){
				content = <span><br /><br /><br /><br /><div className="box-message bottom"><span className="inline-title">{this.props.errorHandler("noData")}</span></div></span>;
			}
		}
		else{
			content = <span><br /><br /><br /><br /><div className="box-message bottom"><span className="inline-title">{this.props.errorHandler("noData")}</span></div></span>;
		}
		return content;
	},

});

export default Element;