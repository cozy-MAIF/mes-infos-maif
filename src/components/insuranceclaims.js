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
		var data = this.sortByDate(data);
		var sinistre = Object.keys(data).map(function(s) { //for each insuranceClaims
			var content = "";
			if (data[s]["immatriculationVehicule"] != undefined && data[s]["immatriculationVehicule"] != ""){ //sinistre véhicule
				var myVehicle = that.getVehicleByPlate(data[s]["immatriculationVehicule"]);
				if(myVehicle != undefined){
					var vehicleBrand = myVehicle["marque"] == undefined ? "" : myVehicle["marque"];
					var vehicleModel = myVehicle["famille"] == undefined ? "" : myVehicle["famille"];
					vehicleName = vehicleBrand + " " + vehicleModel;
					//libelleSituationEvenement
					var libelleSituationEvenement = "";
					if(data[s]["libelleSituationEvenement"] != undefined && data[s]["libelleSituationEvenement"] != ""){
						libelleSituationEvenement = labels["libelleSituationEvenement"] + data[s]["libelleSituationEvenement"]
					}
					//circonstances
					var circonstances = "";
					if(data[s]["circonstances"][0]["libelleCirconstanceReference"] != undefined && data[s]["circonstances"][0]["libelleCirconstanceReference"] != ""){
						circonstances = labels["circonstances"] + data[s]["circonstances"][0]["libelleCirconstanceReference"];
					}
				}
				content = <div>
					{labels["vehicle_concerns"]}  <br />
					<b>{vehicleName} <br />
					{labels["plate"]} {data[s]["immatriculationVehicule"]}
					</b><br />
					<b>{labels["lieuSurvenance"]} {data[s]["lieuSurvenance"]}</b><br />
					<b>{labels["driver"]} {data[s]["driver"]["family"] + " " + data[s]["driver"]["given"]}</b><br />
					<b>{libelleSituationEvenement}</b><br />
					<b>{circonstances}</b><br />
					</div>;
			}
			else if(data[s]["address"] != undefined && data[s]["address"] != ""){ // sinistre habitation
				//libelleSituationEvenement
				var libelleSituationEvenement = "";
				if(data[s]["libelleSituationEvenement"] != undefined && data[s]["libelleSituationEvenement"] != ""){
					libelleSituationEvenement = labels["libelleSituationEvenement"] + data[s]["libelleSituationEvenement"]
				}
				//circonstances
				var circonstances = "";
				if(data[s]["circonstances"][0]["libelleCirconstanceReference"] != undefined && data[s]["circonstances"][0]["libelleCirconstanceReference"] != ""){
					circonstances = labels["circonstances"] + data[s]["circonstances"][0]["libelleCirconstanceReference"];
				}
				content = <div>
					{labels["home_concerns"]} <br />
					<b>{labels["sinistre_address"]} {data[s]["address"]["street"]} {data[s]["address"]["postCode"]} {data[s]["address"]["city"]}
					</b><br />
					<b>{labels["lieuSurvenance"]} {data[s]["lieuSurvenance"]}</b><br />
					<b>{libelleSituationEvenement}</b><br />
					<b>{circonstances}</b><br />
					</div>;
			}
			else if(data[s]["lieuSurvenance"] != "" && data[s]["lieuSurvenance"] != undefined){
					//libelleSituationEvenement
					var libelleSituationEvenement = "";
					if(data[s]["libelleSituationEvenement"] != undefined && data[s]["libelleSituationEvenement"] != ""){
						libelleSituationEvenement = labels["libelleSituationEvenement"] + data[s]["libelleSituationEvenement"]
					}
					//circonstances
					var circonstances = "";
					if(data[s]["circonstances"][0]["libelleCirconstanceReference"] != undefined && data[s]["circonstances"][0]["libelleCirconstanceReference"] != ""){
						circonstances = labels["circonstances"] + data[s]["circonstances"][0]["libelleCirconstanceReference"];
					}
					content = <div>
						<b>{labels["lieuSurvenance"]} {data[s]["lieuSurvenance"]}</b><br />
						<b>{libelleSituationEvenement}</b><br />
						<b>{circonstances}</b><br />
						</div>;
			} else {
					content = <div>
						Etat : {labels["pending_filling"]}
						</div>;
			}

			return 	(
						<div id="ancreSinistre" className={'box-sin unfold' + (s == 0 ? '' : ' short')}>
							<div className="row box-sinistre">
								<div className="columns large-12 padding-bottom-10">
									<div className="line line-bullet">
										{labels["sinistre_number"]}{data[s]["referenceSinistre"]} <br/>
										du {that.toFrenchDate(data[s]["horodatage"])}
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
		return (<div className="box-alpha">{sinistre}</div>);
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
	},

	toFrenchDate: function(enDate){
		var frenchDate = "";
		if(enDate != "" && enDate != undefined){
			var date = new Date(enDate);
			var month = (date.getMonth() + 1);
			if(month <= 9){
				month = "0" + month;
			}
			var day = date.getDate();
			if(day <= 9){
				day = "0" + day;
			}
			frenchDate = day + '/' + month + '/' + date.getFullYear();
		}
		return frenchDate;
	},

	sortByDate: function(data){
		data.sort(function(a, b) {
			a = new Date(a.horodatage).getTime();
			b = new Date(b.horodatage).getTime();
	      return a>b ? -1 : a<b ? 1 : 0;
	  });
		return data;
	}
});

export default Insuranceclaims;
