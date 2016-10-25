/**
* Contracts React component
* display contracts
* @author DigitalFactory
*/

import React from 'react';


const Contracts = React.createClass({

	render: function(){

		var data = this.props.data;
		var labels = this.props.labels;

		var vam = new Array();
		var pacs = new Array();
		var raqvam = new Array();
		var praxis = new Array();

		//sort different contracts into arrays
		Object.keys(data).map(function(c) {
			switch(data[c]["name"]){
				case "VAM":
					vam.push(data[c]);
				break;
				case "PACS":
					pacs.push(data[c]);
				break;
				case "RAQVAM":
					raqvam.push(data[c]);
				break;
				case "PRAXIS":
					praxis.push(data[c]);
				break;
				default:
					// vam.push(data[c]);
				break;
			}
		});

			return (
			<span>
					{this.generateAutoMoto(vam, pacs)}
					{this.generateHabitation(raqvam)}
					{this.generateSante(praxis)}
			</span>);
	},

	/*
	*generate automoto part
	*/
	generateAutoMoto: function(vam, pacs){
					
		if(vam.length != 0 || pacs.length != 0){
			var vamContent = "";
			var pacsContent = "";
			var vamPendant = "";
			var pacsPendant = "";

			var data = this.props.data;
			var labels = this.props.labels;

			/*
			VAM
			*/
			if(vam.length != 0){
				var vamAmount = 0;
				var boatAmount = 0;
				var that = this;

				vamContent = Object.keys(vam).map(function(i){
					var price = vam[i]["montantTarifTtc"];
					var formula = vam[i]["formuleBase"];
					if(vam[i]["objects"] != undefined){
						vamAmount += vam[i]["objects"]["vehicule"] == undefined ? 0 : vam[i]["objects"]["vehicule"].length;
						boatAmount += vam[i]["objects"]["bateau"] == undefined ? 0 : vam[i]["objects"]["bateau"].length;
						//VEHICULES
							if(vam[i]["objects"]["vehicule"] != undefined){
								return (vam[i]["objects"]["vehicule"]).map(function(k){
									var myVehicle = that.getVehicleByPlate(k["immatriculationVehicule"]);
									var linkedDriver = "";
									var vehicleName = "";
									var usage = "";
									if(myVehicle != undefined){
										if(myVehicle["conducteur"] != undefined){
											linkedDriver = myVehicle["conducteur"]["identite"];
										}
										usage = myVehicle["usageVehicule"];
										var vehicleBrand = myVehicle["marque"] == undefined ? "" : myVehicle["marque"];
										var vehicleModel = myVehicle["famille"] == undefined ? "" : myVehicle["famille"];
										vehicleName = vehicleBrand + " " + vehicleModel;
									}
									var immat = <div className="row">
										<div className="large-5 medium-4 columns">
											<div id="ancrecontratAutoMoto0" className="box-h3 colorize">
												{vehicleName}										
											</div>
										</div>
									</div>;
									var details = <div className="hide-for-small">
                            			<div className="row">
                                			<div className="columns large-12">
		                                        <div className="columns large-font">
        		                                    {k["immatriculationVehicule"]}
                		                        </div>                  
                        			        </div>
                            			</div>
                            			<div className="section-margin">
                                			<div className="row">
                                    			<div className="large-5 medium-4 columns">
                                        			<div className="line">
                                            			{formula != undefined ? labels["formula"] : ""}
                                        			</div>
                                        			<div className="line enhance large-font">          
                                                		{formula}        
                                        			</div>
                                    			</div>
                                    			<div className="large-3 medium-4 columns">
                                        			<div className="line">
                                        				{linkedDriver != "" ? labels["linked_driver"] : ""}
                                        			</div>
                                        			<div className="line enhance large-font">
                                            			{linkedDriver}
                                        			</div>
                                    			</div>
		                                       <div className="large-3 medium-4 columns">
		                                            <div className="line">
		                                                    <div className="line enhance large-font">
		                                                    {usage}
		                                                        </div>
		                                                    </div>
		                                            </div>                                     
                                			</div>
                            			</div>
                        			</div>;
									var cotisation = <div className="section-margin">
				                    	<div className="row light-grey border-bottom margin-bottom section-padding-vertical large-font">
				                            <div className="hide-for-small">
				                                <div className="row">
				                                    <div className="columns large-5 medium-8">
				                                        <div className="line dotted">
				                                            <span className="dot-grey">
				                                                {labels["price"]}
				                                            </span>
				                                        </div>
				                                    </div>
				                                    <div className="columns large-3 medium-4 small-3">
				                                    	<div className="line enhance-master">
				                                            <div className="line enhance-master">
				                                                {price} €
				                                            </div>
				                                        </div>
				                                    </div>
				                                </div>
				                           	</div>
				                        </div>
				                    </div>;
								return <span>{immat}{details}{cotisation}</span>;
							});
						}
						if(vam[i]["objects"]["bateau"] != undefined){
								return (vam[i]["objects"]["bateau"]).map(function(k){
									var immat = <div className="row">
										<div className="large-5 medium-4 columns">
											<div id="ancrecontratAutoMoto0" className="box-h3 colorize">
												{k["immatriculationVehicule"]}
											</div>
										</div>
									</div>;
									var details = <div className="hide-for-small">
                            			{/*<div className="row">
                                			<div className="columns large-12">
		                                        <div className="columns large-font">
        		                                    {k["immatriculationVehicule"]}
                		                        </div>                  
                        			        </div>
                            			</div>*/}
                            			<div className="section-margin">
                                			<div className="row">
                                    			<div className="large-5 medium-4 columns">
                                        			<div className="line">
                                            			{formula != undefined ? labels["formula"] : ""}
                                        			</div>
                                        			<div className="line enhance large-font">          
                                                		{formula}        
                                        			</div>
                                    			</div>
                                    			{/*<div className="large-3 medium-4 columns">
                                        			<div className="line">
                                            			{labels["linked_driver"]}
                                        			</div>
                                        			<div className="line enhance large-font">
                                        			</div>
                                    			</div>
		                                       <div className="large-3 medium-4 columns">
		                                            <div className="line">
		                                                    <div className="line enhance large-font">
		                                                    {usage}
		                                                        </div>
		                                                    </div>
		                                            </div> */}                      
                                			</div>
                            			</div>
                        			</div>;
									var cotisation = <div className="section-margin">
				                    	<div className="row light-grey border-bottom margin-bottom section-padding-vertical large-font">
				                            <div className="hide-for-small">
				                                <div className="row">
				                                    <div className="columns large-5 medium-8">
				                                        <div className="line dotted">
				                                            <span className="dot-grey">
				                                                {labels["price"]}
				                                            </span>
				                                        </div>
				                                    </div>
				                                    <div className="columns large-3 medium-4 small-3">
				                                    	<div className="line enhance-master">
				                                            <div className="line enhance-master">
				                                                {price} €
				                                            </div>
				                                        </div>
				                                    </div>
				                                </div>
				                           	</div>
				                        </div>
				                    </div>;
								return <span>{immat}{details}{cotisation}</span>;
							});
						}
					}
				});

				var boatPendant = "";

				if(boatAmount > 0){
					if(boatAmount > 1){
						boatPendant = "- " + boatAmount + " " + labels["boats"];
					}
					else{
						boatPendant = "- " + boatAmount + " " + labels["boat"];
					}
				}

				//amount of vehicles per contract
				vamPendant = <div className="row">
					<div className="colomns large-12">
						<div className="box-h2">
							{labels["vam_insurance"]}
							<span className="vecAmount"> {vamAmount} {(vamAmount) > 1 ? labels["vehicles"] : labels["vehicle"]} {boatPendant} </span>
						</div>
					</div>
				</div>
			}

			/*
			PACS
			*/
			if(pacs.length != 0){
				pacsContent = Object.keys(pacs).map(function(i){
				var pacsPrice = pacs[i]["montantTarifTtc"];
				var cotisation = <div className="section-margin">
		                            <div className="row light-grey border-bottom margin-bottom section-padding-vertical large-font">
		                                <div className="hide-for-small">
		                                    <div className="row">
		                                        <div className="columns large-5 medium-8">
		                                            <div className="line dotted">
		                                                <span className="dot-grey">
		                                                    {labels["price"]}
		                                                </span>
		                                            </div>
		                                        </div>
		                                        <div className="columns large-3 medium-4 small-3">
		                                            <div className="line enhance-master">
	                                                    <div className="line enhance-master">
	                                                        {pacsPrice} €
	                                                     </div>
		                                           </div>
		                                        </div>
		                                    </div>
		                              	</div>
		                            </div>
		                        </div>;
					return <span>{cotisation}</span>;

				});

				var pacsPendant = <span>
					<div className="row">
						<div className="colomns large-12">
							<div className="box-h2">
								{labels["pacs_insurance"]}
							</div>
						</div>
					</div>
					<div className="row">
	                        <div className="columns large-12">
	                            <div className="box-h3 colorize">
	                                {labels["pacs_label"]}
	                            </div>
	                        </div>
	                    </div>
	                </span>
			}

			var autoMotoSeparator = <span>
										<div className="row">
	                        				<div className="large-5 medium-8 small-6 columns">
	                            				<div className="box-h3 colorize">
	                            				</div>
	                        				</div>
	                        				<div className="large-3 medium-4 small-6 columns to-right">
	                            				<div className="line enhance-master columns large-font">
	                            				</div>
	                        				</div>
	                        				<div className="large-3 columns">
	                        				</div>
	                    				</div>
	                    				<hr className="no-margin" />
	                    			</span>;

			var autoMoto = <div id="ancreContratAutoMoto" className="box-alpha unfold">
							<div className="box-container blue">
									<div className="box-h1">
			                			{labels["auto-moto"]}
			                			<div className="inline-right">
											{(vam.length + pacs.length)} {(vam.length + pacs.length) > 1 ? labels["contracts"] : labels["contract"]}
			                			</div>
			            			</div>
			            			<div className="accordion-content" style={{display: 'block'}}>
						            	{vamPendant}
						            	{vamContent}
						            	{(vam.length != 0) ? autoMotoSeparator : ""}
						            	{pacsPendant}
						            	{pacsContent}
			            			</div>
								</div>
							</div>;
		}
		else{
			autoMoto = "";
		}

		return autoMoto;
	},

	/*
	*generate habitation part
	*/
	generateHabitation: function(raqvam){
		if(raqvam.length != 0){
			var data = this.props.data;
			var labels = this.props.labels;
			var raqvamPendant = "";
			var raqvamContent = "";
			var raqvamAmount = 0;

			raqvamContent = Object.keys(raqvam).map(function(i){
				var price = raqvam[i]["montantTarifTtc"];
				if(raqvam[i]["objects"]["lieu"] != undefined){
					var startDate = raqvam[i]["objects"]["startDate"];
						raqvamAmount += raqvam[i]["objects"]["lieu"] == undefined ? 0 : raqvam[i]["objects"]["lieu"].length;
						return (raqvam[i]["objects"]["lieu"]).map(function(i){
							var address = i["address"]["street"];
							var cp = i["address"]["postCode"];
							var city = i["address"]["city"];
							var placeHeader = <div className="row">
									<div className="columns large-12 medium-6 small-12 padding-bottom-10">
	                                    <div className="box-h3 colorize">                                      
	                                        {city}
	                                    </div>
	                                </div>
								</div>;
								var place = <div className="row">
		                                <div className="columns large-12 margin-bottom">
		                                    <div className="columns">                                     
		                                            <div className="line enhance-master">                                               
		                                                {labels["insurance_from_date"]} {startDate} {labels["for_your_risks"]}
		                                            </div>
		                                        
		                                        <div className="line large-font">                                            
		                                            {address}, {cp}, {city}            
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>;
							var cotisation = <div className="section-margin">
					                            <div className="row light-grey border-bottom margin-bottom section-padding-vertical large-font">
					                                <div className="hide-for-small">
					                                    <div className="row">
					                                        <div className="columns large-5 medium-8">
					                                            <div className="line dotted">
					                                                <span className="dot-grey">
					                                                    {labels["price"]}
					                                                </span>
					                                            </div>
					                                        </div>
					                                        <div className="columns large-3 medium-4 small-3">
					                                            <div className="line enhance-master">
					                                                    <div className="line enhance-master">
					                                                        {price} €
					                                                     </div>
					                                           </div>
					                                        </div>
					                                    </div>
					                              	</div>
					                            </div>
					                        </div>;
					        return <span>{placeHeader}{place}{cotisation}</span>;

						});
				}
			});
			
			raqvamPendant = <div className="row">
								<div className="colomns large-12">
									<div className="box-h2">
										{labels["raqvam_insurance"]}
										<span className="vecAmount"> {raqvamAmount} {(raqvamAmount) > 1 ? labels["places"] : labels["place"]}</span>
									</div>
								</div>
							</div>;

			var habitation = <div id="ancreContratHabitation" className="box-alpha unfold short">
				<div className="box-container green">
					<div className="box-h1">
		                {labels["habitation"]}
		                <div className="inline-right">
		                    {raqvam.length} {raqvam.length > 1 ? labels["contracts"] : labels["contract"]}
		                </div>
		            </div>
		            <div className="accordion-content" style={{display: 'none'}}>
		                {raqvamPendant}
		                {raqvamContent}
		                <hr/>
		            </div>
	            </div>
			</div>;
		}
		else{
			var habitation = "";
		}

		return habitation
	},

	/*
	*generate santé part
	*/
	generateSante: function(praxis){
		if(praxis.length != 0){

			var data = this.props.data;
			var labels = this.props.labels;

			var praxisPendant = "";
			var praxisContent = "";
			var praxisPrice = "";

			var price = praxis[0]["montantTarifTtc"] != undefined ? praxis[0]["montantTarifTtc"] : "";

			praxisPendant = <div className="row">
								<div className="colomns large-12">
									<div className="box-h2">
										{labels["praxis_insurance"]}
									</div>
								</div>
							</div>;

			praxisContent = <div className="row">
		                        <div className="large-12 columns margin-bottom-10">
		                            <div className="box-h3 colorize">
		                                {labels["praxis_label"]}
		                            </div>
		                        </div>
		                    </div>;

            praxisPrice =
            		<div className="section-margin"> 
            			<div className="row light-grey border-bottom margin-bottom section-padding-vertical large-font">
                            <div className="large-6 medium-6 small-6 columns">
                                {labels["price"]}
                            </div>
                            <div className="large-6 medium-6 small-6 columns enhance to-right">
                                {price} €
                            </div>
                        </div>
                    </div>;

			var sante = <div id="ancreContratSante" className="box-alpha unfold short">
							<div className="box-container violet">
								<div className="box-h1">
					                {labels["health"]}
					                <div className="inline-right">
					                    {praxis.length} {praxis.length > 1 ? labels["contracts"] : labels["contract"]}
					                </div>
					            </div>
					            <div className="accordion-content" style={{display: 'none'}}>
					            	{praxisPendant}
					            	{praxisContent}
					            	{praxisPrice}
					            </div>
							</div>
						</div>;
		}
		else{
			var sante = "";
		}

		return sante;
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

export default Contracts;