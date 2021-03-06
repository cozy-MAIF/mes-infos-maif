/**
* Contracts Foyer component
* display foyer
* @author DigitalFactory
*/

import React from 'react';

const Foyer = React.createClass({

	render: function(){

		var data = this.props.data;
		var labels = this.props.labels;

		var that = this;

        var address = "";
        if(data["address"] != undefined && data["address"] != ""){
	        var residence = data["address"]["residence"];
	        var street = data["address"]["street"];
	        var cp = data["address"]["postCode"];
	        var city = data["address"]["city"];

	        if(residence != undefined && residence != "")
	       		address += residence;
	       	if(residence != undefined && residence != "" && street != undefined && street != "")
	       		address += ", ";
	        if(street != undefined && street != "")
	       		address += street;
	        if(cp != undefined && cp != "")
	        	address += ", " + cp;
	        if(city != undefined && city != "")
	        	address += ", " + city;
        }

		var members = Object.keys(data["membres"]).map(function(k) { // for each members
        	var memberData = new Object();
        	var lastname = data["membres"][k]["name"]["family"] == undefined ? "" : data["membres"][k]["name"]["family"];
        	var firstname = data["membres"][k]["name"]["given"] == undefined ? "" : data["membres"][k]["name"]["given"];
        	memberData.name = lastname + " " + firstname;
        	memberData.birth_date = data["membres"][k]["birthdate"] == undefined ? "" : data["membres"][k]["birthdate"];
        	memberData.birth_date = that.toFrenchDate(memberData.birth_date);
        	memberData.email_member = data["membres"][k]["email"] == undefined ? "" : data["membres"][k]["email"];
        	// memberData.quality = data["membres"][k]["quality"] == undefined ? "" : data["membres"][k]["quality"];
        	memberData.mobile_phone_foyer = data["membres"][k]["telMobile"] == undefined ? "" : data["membres"][k]["telMobile"];
        	memberData.home_phone_foyer = data["membres"][k]["telHome"] == undefined ? "" : data["membres"][k]["telHome"];
        	memberData.pro_phone_foyer = data["membres"][k]["telPro"] == undefined ? "" : data["membres"][k]["telPro"];
        	memberData.fax_phone_foyer = data["membres"][k]["telFax"] == undefined ? "" : data["membres"][k]["telFax"];
        	memberData.job = data["membres"][k]["profession"] == undefined ? "" : data["membres"][k]["profession"];


        	var member_table = Object.keys(memberData).map(function(i) {
        		return <div className="foyerMember"> {labels[i]} <b>{memberData[i]}</b> </div>;
        	});

        	return <div id="ancreFoyer" className="box-sin unfold short">

            	<div className="row box-foyer">
                    <div className="columns large-12 padding-bottom-10">
                        <div className="line line-bullet">
                            {data["membres"][k]["quality"] + " - " + lastname + " " + firstname}
                        </div>
                    </div>
                </div>
                <div className="accordion-content" style={{display: 'none'}}>
                <div className="section-margin">
                    <div className="row light-grey border-bottom margin-bottom section-padding-vertical">
                        <div className="columns">
        						{member_table}
                            <div className="line">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        	</div>
        });

		return(
		<div className="box-alpha">
			<div className="box-container red">
				<div className="box-h1 margin-bottom">
					{labels["foyer_data"]}
				</div>
				<div className="row">
	                <div className="columns small-5">
	                    <div className="line line-bullet">
	                        {labels["foyer_name"]}
	                    </div>
	                </div>                
	                <div className="columns small-7">
	                    <div className="line enhance-master">
	                        {data["name"]}
	                    </div>
	                </div>
	            </div>
	            <div className="row">
	                <div className="columns small-5">
	                    <div className="line line-bullet">
	                        {labels["foyer_address"]}
	                    </div>
	                </div>                
	                <div className="columns small-7">
	                    <div className="line enhance-master">
	                     	{address}
	                    </div>
	                </div>
	            </div>

	            {members}

			</div>
		</div>
		);
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

export default Foyer;