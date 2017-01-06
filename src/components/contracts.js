/**
* Contracts React component
* display contracts
* @author DigitalFactory
*/

import React from 'react';

var souscriptionDateStyle = {
					float:'right',
					fontSize:16
				};

const Contracts = React.createClass({

	render: function(){
		var data = this.props.data;
		var labels = this.props.labels;

		var vam = new Array();
		var pacs = new Array();
		var raqvam = new Array();
		var praxis = new Array();
		var praxis_solutions = new Array();
		var ome = new Array();
		var pj = new Array();
		var nautis = new Array();

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
				case "NOR":
					raqvam.push(data[c]);
				break;
				case "PRAXIS":
					praxis.push(data[c]);
				break;
				case "PRAXIS Solutions":
					praxis_solutions.push(data[c]);
				break;
				case "CONTRAT PROTECTION JURIDIQUE":
					pj.push(data[c]);
				break;
				case "NAUTIS":
					nautis.push(data[c]);
				break;
				case "OME":
					ome.push(data[c]);
				break;
				default:
				break;
			}
		});

			//display all contracts
			return (
			<span>
					{this.generateAutoMoto(vam, pacs)}
					{this.generateHabitation(raqvam, nautis)}
					{this.generateSante(praxis, praxis_solutions)}
					{this.generatePJ(pj)}
					{this.generateMultirisque(ome)}
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

			var that = this;

			var data = this.props.data;
			var labels = this.props.labels;

			/*
			VAM
			*/
			if(vam.length != 0){
				var vamAmount = 0;
				var boatAmount = 0;
				var that = this;
				var contractStartDate = "";

				vamContent = Object.keys(vam).map(function(i){
					var price = vam[i]["montantTarifTtc"];
					price = price.toFixed(3);
					var formula = vam[i]["formuleBase"];
					contractStartDate = vam[i]["startDate"] != undefined ? that.toFrenchDate(vam[i]["startDate"]) : "";
					if(vam[i]["objects"] != undefined){
						var objectStartDate = vam[i]["objects"]["startDate"] != undefined ? that.toFrenchDate(vam[i]["objects"]["startDate"]) : "";
						vamAmount += vam[i]["objects"]["vehicule"] == undefined ? 0 : vam[i]["objects"]["vehicule"].length;
						boatAmount += vam[i]["objects"]["bateau"] == undefined ? 0 : vam[i]["objects"]["bateau"].length;
						//VEHICLES
							if(vam[i]["objects"]["vehicule"] != undefined){
								return (vam[i]["objects"]["vehicule"]).map(function(k){
									var myVehicle = that.getVehicleByPlate(k["immatriculationVehicule"]);
									var linkedDriver = "";
									var coeff = "";
									var coeffLine = "";
									var date_circulation = "";
									var circulationLine = "";
									var vehicleName = "";
									var usage = "";
									if(myVehicle != undefined){
										coeff = myVehicle["coeffVehicule"];
										date_circulation = that.toFrenchDate(myVehicle["dateMiseEnCirculation"]);
										if(myVehicle["conducteur"] != undefined){
											linkedDriver = myVehicle["conducteur"]["identite"];
										}
										usage = myVehicle["usageVehicule"];
										var vehicleBrand = myVehicle["marque"] == undefined ? "" : myVehicle["marque"];
										var vehicleModel = myVehicle["famille"] == undefined ? "" : myVehicle["famille"];
										vehicleName = vehicleBrand + " " + vehicleModel;
									}
									if(coeff != "" && coeff != undefined){
										coeff = coeff/100;
										coeffLine = <div className="row">
				                                    <div className="columns large-5 medium-8">
				                                        <div className="line dotted">
				                                            <span className="dot-grey">
				                                                {labels["bonus"]}
				                                            </span>
				                                        </div>
				                                    </div>
				                                    <div className="columns large-3 medium-4 small-3">
				                                    	<div className="line enhance-master">
				                                            <div className="line enhance-master">
				                                                {coeff}
				                                            </div>
				                                        </div>
				                                    </div>
				                                </div>;
									}
									if(date_circulation != "" && date_circulation != undefined){
										circulationLine = <div className="row">
				                                    <div className="columns large-5 medium-8">
				                                        <div className="line dotted">
				                                            <span className="dot-grey">
				                                                {labels["circulation_date"]}
				                                            </span>
				                                        </div>
				                                    </div>
				                                    <div className="columns large-3 medium-4 small-3">
				                                    	<div className="line enhance-master">
				                                            <div className="line enhance-master">
				                                                {date_circulation}
				                                            </div>
				                                        </div>
				                                    </div>
				                                </div>;
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
                                    			<div className="large-3 medium-4 columns">
                                        			<div className="line">
                                            			{formula != undefined ? labels["formula"] : ""}
                                        			</div>
                                        			<div className="line enhance large-font">
                                                		{formula}
                                        			</div>
                                    			</div>
                                    			<div className="large-3 medium-4 columns">
                                        			<div className="line">
                                        				{objectStartDate != "" ? labels["effect_date"] : ""}
                                        			</div>
                                        			<div className="line enhance large-font">
                                            			{objectStartDate}
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
				                            	{circulationLine}
				                                {coeffLine}
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
						//BOATS
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
							{contractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {contractStartDate}</span> : "" }
						</div>
					</div>
				</div>
			}

			//PACS
			if(pacs.length != 0){
				var pacsContractStartDate = "";
				pacsContent = Object.keys(pacs).map(function(i){
					pacsContractStartDate = pacs[i]["startDate"] != undefined ? that.toFrenchDate(pacs[i]["startDate"]) : "";
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
								{pacsContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {pacsContractStartDate}</span> : "" }
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

			//separator between VAM and PACS in webpage
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
	        //display all VAM/PACS contracts together
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
						            	{vam.length != 0 && pacs.length != 0 ? autoMotoSeparator : ""}
						            	{pacsPendant}
						            	{pacsContent}
			            			</div>
								</div>
							</div>;
		}
		else{ //if there is no VAM/PACS contracts, return empty var
			autoMoto = "";
		}

		return autoMoto;
	},

	/*
	*generate habitation part
	*/
	generateHabitation: function(raqvam, nautis){
		if(raqvam.length != 0 || nautis.length != 0){
			var data = this.props.data;
			var labels = this.props.labels;

			var that = this;

			var raqvamPendant = "";
			var raqvamContent = "";
			var raqvamAmount = 0;

			var nautisPendant = "";
			var nautisContent = "";
			var nautisAmount = 0;

			//RAQVAM
			if(raqvam.length != 0){
				var raqvamContractStartDate = "";
				raqvamContent = Object.keys(raqvam).map(function(i){
					raqvamContractStartDate = raqvam[i]["startDate"] != undefined ? that.toFrenchDate(raqvam[i]["startDate"]) : "";
					var price = raqvam[i]["montantTarifTtc"];
					var formuleBase = raqvam[i]["formuleBase"] != undefined ? raqvam[i]["formuleBase"] : "";
					if(raqvam[i]["objects"]["lieu"] != undefined){
							var startDate = "";
							if(raqvam[i]["objects"]["startDate"] != undefined && raqvam[i]["objects"]["startDate"] != "")
								startDate = that.toFrenchDate(raqvam[i]["objects"]["startDate"]);
							raqvamAmount += raqvam[i]["objects"]["lieu"] == undefined ? 0 : raqvam[i]["objects"]["lieu"].length;
							return (raqvam[i]["objects"]["lieu"]).map(function(i){
								var address = i["address"]["street"] != undefined ? i["address"]["street"] : "";
								var cp = i["address"]["postCode"] != undefined ? i["address"]["postCode"] : "";
								var city = i["address"]["city"] != undefined ? i["address"]["city"] : "";

								var globalAddress = "";

								if(address != "")
									globalAddress += address;
								if(cp != "")
									globalAddress += ", " + cp;
								if(city != "")
									globalAddress += ", " + city;

								var natureLieu = "";
								var piecesLieu = "";
								var situationLieu = "";

								var globalLieu = "";

								var patrimoineMobilier = "";

								var monLieu = that.getHomeByAddress(address, cp);

								if(monLieu != undefined){
									if(monLieu["natureLieu"] != undefined)
										natureLieu = " - votre " + monLieu["natureLieu"];
									if(monLieu["nombrePieces"] != undefined)
										piecesLieu = " - " + monLieu["nombrePieces"];
									if(monLieu["situationJuridiqueLieu"] != undefined)
										situationLieu = " - " + monLieu["situationJuridiqueLieu"];
									if(monLieu["patrimoineMobilier"] != undefined)
										patrimoineMobilier = monLieu["patrimoineMobilier"];

									globalLieu = natureLieu + piecesLieu + situationLieu;
								}

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
			                                            {/*<div className="line enhance-master">
			                                                {labels["insurance_from_date"]} {startDate} {labels["for_your_risks"]}
			                                            </div>*/}

			                                        <div className="line large-font">
			                                            {globalAddress} {globalLieu}
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>;

			                    var placeDetails =<div className="section-margin hide-for-small">
			                                <div className="row light-grey border-bottom margin-bottom-10 section-padding-vertical">
			                                    <div className="medium-3 small-9 columns">
			                                        <div className="line">
			                                            {formuleBase != "" ? labels["formula"] : ""}
			                                        </div>
			                                        <div className="line enhance-master large-font">
			                                            {formuleBase}
			                                        </div>
			                                    </div>
			                                    <div className="medium-3 small-9 columns">
			                                        <div className="line">
			                                            {startDate != "" ? labels["effect_date"] : ""}
			                                        </div>
			                                        <div className="line enhance-master large-font">
			                                            {startDate}
			                                        </div>
			                                    </div>
			                                    <div className="medium-5 small-3 columns no-padding">
			                                        <div className="line">
			                                        	{patrimoineMobilier != "" ? labels["guaranteed_testimony"] : ""}
			                                        </div>
			                                            <div className="line enhance-master large-font">
			                                                {patrimoineMobilier}
			                                            </div>

			                                    </div>
			                                </div>
			                            </div>;

								var cotisation = "";

								if(price != undefined && price != ""){
									cotisation = <div className="row large-font">
				                        <div className="large-4 medium-5 small-8 columns">
				                            <div className="line dotted">
				                                <span className="dot-white">{labels["price"]}</span>
				                            </div>
				                        </div>
				                        <div className="large-8 medium-4 small-4 columns">
				                            <div className="line enhance-master to-right">
				                                {price} €
				                            </div>
				                        </div>
				                    </div>;
								}

						        return <span>{placeHeader}{place}{placeDetails}{cotisation}</span>;

							});
					}
				});

				raqvamPendant = <div className="row">
									<div className="colomns large-12">
										<div className="box-h2">
											{labels["raqvam_insurance"]}
											<span className="vecAmount"> {raqvamAmount} {(raqvamAmount) > 1 ? labels["places"] : labels["place"]}</span>
											{raqvamContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {raqvamContractStartDate}</span> : "" }
										</div>
									</div>
								</div>;

			}
			//NAUTIS
			if(nautis.length != 0){
				var nautisContractStartDate = "";
				nautisContent = Object.keys(nautis).map(function(i){
					nautisContractStartDate = nautis[i]["startDate"] != undefined ? that.toFrenchDate(nautis[i]["startDate"]) : "";
					var price_nautis = nautis[i]["montantTarifTtc"];
					if(nautis[i]["objects"]["bateau"] != undefined){
						var startDate = that.toFrenchDate(nautis[i]["objects"]["startDate"]);
							nautisAmount += nautis[i]["objects"]["bateau"] == undefined ? 0 : nautis[i]["objects"]["bateau"].length;
							return (nautis[i]["objects"]["bateau"]).map(function(i){
									var boat_nautis = <div className="section-margin">
					                        <table>
					                            <thead>
					                                <tr>
					                                    <th>Bateau assuré</th>
					                                    <th>Immatriculation</th>
					                                    <th>Franchise dommage générale</th>
					                                </tr>
					                            </thead>
					                            <tbody>
			                                        <tr>
			                                            <td></td>
			                                            <td>{i["immatriculationBateau"]}</td>
			                                            <td> {price_nautis} €</td>
			                                        </tr>
					                            </tbody>
					                        </table>
					                    </div>;
						        return <span>{boat_nautis}</span>;
							});
					}
				});

				nautisPendant = <div className="row">
									<div className="colomns large-12">
										<div className="box-h2">
											{labels["nautis_insurance"]}
											<span className="vecAmount"> {labels["navigation_de_plaisance"]}</span>
											{nautisContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {nautisContractStartDate}</span> : "" }
										</div>
									</div>
								</div>;
			}


			var habitation = <div id="ancreContratHabitation" className="box-alpha unfold short">
				<div className="box-container green">
					<div className="box-h1">
		                {labels["habitation"]}
		                <div className="inline-right">
		                    {(raqvam.length + nautis.length)} {(raqvam.length + nautis.length) > 1 ? labels["contracts"] : labels["contract"]}
		                </div>
		            </div>
		            <div className="accordion-content" style={{display: 'none'}}>
		                {raqvamPendant}
		                {raqvamContent}
		                {raqvam.length != 0 && nautis.length != 0 ? <hr/> : ""}
		                {nautisPendant}
		                {nautisContent}
		            </div>
	            </div>
			</div>;
		}
		else{ //return empty var if there is no RAQVAM/NAUTIS
			var habitation = "";
		}

		return habitation
	},

	/*
	*generate santé part
	*/
	generateSante: function(praxis, praxis_solutions){
		if(praxis.length != 0 || praxis_solutions.length != 0){
			var data = this.props.data;
			var labels = this.props.labels;

			var praxisPendant = "";
			var praxisContent = "";
			var praxisPrice = "";

			var praxisSPendant = "";
			var praxisSContent = "";
			var praxisSPrice = "";

			//PRAXIS
			if(praxis.length != 0){
				var praxisContractStartDate = praxis[0]["startDate"] != undefined ? this.toFrenchDate(praxis[0]["startDate"]) : "";
				var price = praxis[0]["montantTarifTtc"] != undefined ? praxis[0]["montantTarifTtc"] : "";

				praxisPendant = <div className="row">
									<div className="colomns large-12">
										<div className="box-h2">
											{labels["praxis_insurance"]}
											{praxisContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {praxisContractStartDate}</span> : "" }
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

				}

				//PRAXIS SOLUTIONS
				if(praxis_solutions.length != 0){
					var praxisSContractStartDate = praxis_solutions[0]["startDate"] != undefined ? this.toFrenchDate(praxis_solutions[0]["startDate"]) : "";
					var solutions_price = praxis_solutions[0]["montantTarifTtc"] != undefined ? praxis_solutions[0]["montantTarifTtc"] : "";

					praxisSPendant = <div className="row">
										<div className="colomns large-12">
											<div className="box-h2">
												{labels["praxis_solutions_insurance"]}
												{praxisSContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {praxisSContractStartDate}</span> : "" }
											</div>
										</div>
									</div>;

					praxisSContent = <div className="row">
				                        <div className="large-12 columns margin-bottom-10">
				                            <div className="box-h3 colorize">
				                                {labels["praxis_solutions_label"]}
				                            </div>
				                        </div>
				                    </div>;

		            praxisSPrice =
		            		<div className="section-margin">
		            			<div className="row light-grey border-bottom margin-bottom section-padding-vertical large-font">
		                            <div className="large-6 medium-6 small-6 columns">
		                                {labels["price"]}
		                            </div>
		                            <div className="large-6 medium-6 small-6 columns enhance to-right">
		                                {solutions_price} €
		                            </div>
		                        </div>
		                    </div>;
				}
				var sante = <div id="ancreContratSante" className="box-alpha unfold short">
								<div className="box-container violet">
									<div className="box-h1">
						                {labels["health"]}
						                <div className="inline-right">
						                    {(praxis.length + praxis_solutions.length)} {(praxis.length + praxis_solutions.length) > 1 ? labels["contracts"] : labels["contract"]}
						                </div>
						            </div>
						            <div className="accordion-content" style={{display: 'none'}}>
						            	{praxisPendant}
						            	{praxisContent}
						            	{praxisPrice}

						            	{praxisSPendant}
						            	{praxisSContent}
						            	{praxisSPrice}
						            </div>
								</div>
							</div>;
		}
		else{ //return empty var if there is no PRAXIS contracts
			var sante = "";
		}

		return sante;
	},

	/**
	* generate protection juridique
	*/
	generatePJ: function(pj){
		if(pj.length != 0){
			var data = this.props.data;
			var labels = this.props.labels;

			var pjPendant = "";
			var pjContent = "";
			var pjFormula = "";
			var pjAmount = 0;
			var pjPrice = "";
			var protection = "";

			var price = pj[0]["montantTarifTtc"] != undefined ? pj[0]["montantTarifTtc"] : "";
			var pjContractStartDate = pj[0]["startDate"] != undefined ? this.toFrenchDate(pj[0]["startDate"]) : "";

			pjPendant = <div className="row">
								<div className="colomns large-12">
									<div className="box-h2">
										{labels["protection_juridique_insurance"]}
		                                {pjContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {pjContractStartDate}</span> : "" }
									</div>
								</div>
							</div>;

			pjContent = <div className="row">
		                        <div className="large-12 columns margin-bottom-10">
		                            <div className="box-h3 colorize">
		                                {labels["protection_juridique_label"]}
		                            </div>
		                        </div>
		                    </div>;

		    pjFormula = <div className="row white-for-small section-padding-vertical">
                    <div className="columns large-6 medium-6 small-6">
                        <div className="line">
                            {pj[0]["formuleBase"] != undefined ? labels["formula"] : ""}
                        </div>
                        <div className="line enhance-master large-font">
                        	{pj[0]["formuleBase"]}
                        </div>
                        <div className="line show-for-small">&nbsp;</div>
                    </div>
                </div>;

            pjPrice =
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

            var protection = <div id="ancreContratQuotidien" className="box-alpha unfold short">
						<div className="box-container pink">
							<div className="box-h1">
				                {labels["everyday_service"]}
				                <div className="inline-right">
				                    {pj.length} {pj.length > 1 ? labels["contracts"] : labels["contract"]}
				                </div>
				            </div>
				            <div className="accordion-content" style={{display: 'none'}}>
				            	{pjPendant}
				            	{pjContent}
				            	{pjFormula}
				            	{pjPrice}
				            </div>
						</div>
					</div>;
		}
		else{ //return empty var if there is no pj contract
			var protection = "";
		}
		return protection;
	},

	/*
	*generate multirisque part
	*/
	generateMultirisque: function(ome){
		if(ome.length != 0){
			var data = this.props.data;
			var labels = this.props.labels;

			var omePendant = "";
			var omeContent = "";
			var omeFormula = "";
			var omeAmount = 0;
			var omePrice = "";
			var startDate = "";

			var price = ome[0]["montantTarifTtc"] != undefined ? ome[0]["montantTarifTtc"] : "";
			var omeContractStartDate = ome[0]["startDate"] != undefined ? this.toFrenchDate(ome[0]["startDate"]) : "";
			if(ome[0]["objects"] != undefined){
				if(ome[0]["objects"]["startDate"] != undefined){
					startDate = this.toFrenchDate(ome[0]["objects"]["startDate"]);
				}
				else{
					startDate = this.toFrenchDate(ome[0]["startDate"]);
				}
			}

			var beneficiaires = "";

			if(ome[0]["objects"] != undefined){
				if(ome[0]["objects"]["beneficiaire"] != undefined){
					Object.keys(ome[0]["objects"]["beneficiaire"]).map(function(i){
						var benef = ome[0]["objects"]["beneficiaire"][i];
						if(benef["nom"] != undefined && benef["prenom"] != undefined){
							if(i > 0){
								beneficiaires += ", ";
							}
							beneficiaires += benef["nom"] + " " + benef["prenom"];
						}
					});
				}
			}

			omePendant = <div className="row">
								<div className="colomns large-12">
									<div className="box-h2">
										{labels["protection_multirisque"]}
										{omeContractStartDate != "" ? <span style={souscriptionDateStyle}>{labels["souscription_date"]} {omeContractStartDate}</span> : "" }
									</div>
								</div>
							</div>;

			omeContent = <div className="section-margin">
		                        <div className="row light-grey white-for-small border-bottom margin-bottom-10 section-padding-vertical">
		                            <div className="columns large-5 medium-5 small-6">
			                            <div className="line">
			                                {labels["ome_beneficiaires"]}
			                            </div>
			                                <div className="line enhance-master large-font">
			                                {beneficiaires}
			                                </div>
			                            <div className="line show-for-small">&nbsp;</div>
			                        </div>
			                        <div className="columns large-3 medium-3 small-6">
			                            <div className="line">
			                                {labels["effect_date"]}
			                            </div>
			                            <div className="line enhance-master large-font">
			                                {labels["from_date"]} {startDate}
			                            </div>
			                        </div>
			                        <div className="columns large-4 medium-4 small-12">
			                            <div className="line">
			                                {labels["price"]}
			                            </div>
			                            <div className="line enhance-master large-font">
			                                {price}
			                                &nbsp;€
			                            </div>
			                        </div>
		                        </div>
		                    </div>;

            var multirisque = <div id="ancreContratMultiRisque" className="box-alpha unfold short">
						<div className="box-container grey">
							<div className="box-h1">
				                {labels["multirisque"]}
				                <div className="inline-right">
				                    {ome.length} {ome.length > 1 ? labels["contracts"] : labels["contract"]}
				                </div>
				            </div>
				            <div className="accordion-content" style={{display: 'none'}}>
				            	{omePendant}
				            	{omeContent}
				            </div>
						</div>
					</div>;
		}
		else{ //return empty var if there is no OME contract
			var multirisque = "";
		}
		return multirisque;
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

	getHomeByAddress: function(street, cp){
		var myHome = undefined;
		if(this.props.home != undefined && street != undefined && street != "" && cp != undefined && cp != ""){
			for (var i = this.props.home.length - 1; i >= 0; i--) {
				if(this.props.home[i]["address"] != undefined && this.props.home[i]["address"] != ""){
					if(this.props.home[i]["address"]["street"] == street && this.props.home[i]["address"]["postCode"] == cp){
						myHome = this.props.home[i];
					}
				}
			}
		}
		return myHome;
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
	}
});

export default Contracts;
