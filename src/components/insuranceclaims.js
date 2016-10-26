/**
* Insuranceclaims React component
* display insuranceClaims
* @author DigitalFactory
*/

import React from 'react';


const Insuranceclaims = React.createClass({

	render: function(){

			var that = this;
			var data = this.props.data;
			var labels = this.props.labels;
			var vehicleName = "";
			var test = Object.keys(data).map(function(s) {
			var content = "";
			if (data[s]["immatriculationVehicule"] != undefined && data[s]["immatriculationVehicule"] != ""){ //sinistre véhicule
				var myVehicle = that.getVehicleByPlate(data[s]["immatriculationVehicule"]);
				if(myVehicle != undefined){
					var vehicleBrand = myVehicle["marque"] == undefined ? "" : myVehicle["marque"];
					var vehicleModel = myVehicle["famille"] == undefined ? "" : myVehicle["famille"];
					vehicleName = vehicleBrand + " " + vehicleModel;
				}
				content = <div>
				{labels["vehicle_concerns"]}  <br />
				<b>{vehicleName} <br />
				{labels["plate"]} {data[s]["immatriculationVehicule"]}
				</b><br />
				<b>{labels["lieuSurvenance"]} {data[s]["lieuSurvenance"]}</b><br />
				<b>{labels["libelleTypeLieuSurvenance"]} {data[s]["libelleTypeLieuSurvenance"]}</b><br />
				<b>{labels["driver"]} {data[s]["driver"]["family"] + " " + data[s]["driver"]["given"]}</b><br />
				</div>;
			}
			else if(data[s]["address"] != undefined && data[s]["address"] != ""){ // sinistre habitation
				content = <div>
				{labels["home_concerns"]} <br />
				<b>{labels["sinistre_address"]} {data[s]["address"]["street"]} {data[s]["address"]["postCode"]} {data[s]["address"]["city"]}
				</b><br />
				<b>{labels["lieuSurvenance"]} {data[s]["lieuSurvenance"]}</b><br />
				<b>{labels["libelleTypeLieuSurvenance"]} {data[s]["libelleTypeLieuSurvenance"]}</b><br />
				</div>;
			}
			else{ //sinistre bateau ???
				
			}
			return 	(
						<div id="ancreSinistre" className={'box-sin unfold' + (s == 0 ? '' : ' short')}>
							<div className="row box-sinistre">
								<div className="columns large-12 padding-bottom-10">
									<div className="line line-bullet">
										{labels["sinistre_number"]}{data[s]["referenceSinistre"]} <br/>
										du {data[s]["horodatage"]}
									</div>
								</div>
							</div>
							<div className="accordion-content" style={{display: (s == 0 ? 'block' : 'none')}}> {/*style="display: none;"*/}
								<div className="row">
									<div className="columns large-12">
										<div className="columns large-font">
										{content}
											<div className="section-margin">
		                        			</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						)
		});
		return (<div className="box-alpha">{test}</div>);
	},

	/**
	* get vehicle by plate number
	*/
	getVehicleByPlate: function(plate){
		if(this.props.vehicles != undefined){
			for (var i = this.props.vehicles.length - 1; i >= 0; i--) {
				if(this.props.vehicles[i].immatriculationVehicule == plate){
					return this.props.vehicles[i];
				}
			}
		}
		else{
			return undefined;
		}
	}
});

export default Insuranceclaims;