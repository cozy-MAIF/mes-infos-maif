/**
* Contracts React component
* display contracts
* @author DigitalFactory
*/

import React from 'react';


const Infosperso = React.createClass({
	render: function(){
		var data = this.props.data;
		var labels = this.props.labels;

				return (
			<div className='box-alpha'>
				<div id='divinfoPerso'>
					<div className='box-container red'>
						<div className='box-h1 margin-bottom'>
							{labels["soc_data"]}
						</div>
						{/* birthdate */}
						<div className='row'>
							<div className='columns small-5'>
								<div className='line line-bullet'>
									{labels["birth_date"]}
								</div>
							</div>
							<div className='columns small-7'>
								<div className='line enhance-master'>
									{this.toFrenchDate(data["birthdate"])}
								</div>
							</div>
						</div>
						{/* job */}
						<div className='row'>
							<div className='columns small-5'>
								<div className='line line-bullet'>
									{labels["job"]}
								</div>
							</div>
							<div className='columns small-7'>
								<div className='line enhance-master'>
									{data["profession"]}
								</div>
							</div>
						</div>
						{/* address */}
						<div className='row'>
							<div className='columns small-5'>
								<div className='line line-bullet'>
									{labels["address"]}
								</div>
							</div>
							<div className='columns small-7'>
								<div className='line enhance-master'>
									{this.props.address}
								</div>
							</div>
						</div>
					{/* situation familiale */}
						<div className='row'>
							<div className='columns small-5'>
								<div className='line line-bullet'>
									{labels["familySituation"]}
								</div>
							</div>
							<div className='columns small-7'>
								<div className='line enhance-master'>
									{data["familySituation"]}
								</div>
							</div>
						</div>
						{/* phone numbers */}
						<div className='section-margin'>
							<div className='box-message-with-pic'>
								<div className='row show-for-large'>
									<div className='columns large-12 no-padding'>
										<div className='line enhance-master'>
											{labels["phone"]}
										</div>
									</div>

									<div className='columns large-4 no-padding'>
										<div className='line'>
											{labels["mobile_phone"]}
											<span className='bold'>
												{data["telMobile"]}
											</span>
										</div>
									</div>

									<div className='columns large-4 no-padding'>
										<div className='line'>
											{labels["home_phone"]}
											<span className='bold'>
												{data["telHome"]}
											</span>
										</div>
									</div>

									<div className='columns large-4 no-padding'>
										<div className='line'>
											{labels["pro_phone"]}
											<span className='bold'>
												{data["telPro"]}
											</span>
										</div>
									</div>

								</div>
							</div>
						</div>
						{/* email */}
						<div className='section-margin'>
							<div className='box-message-with-pic pic-book'>
								<div className='row'>
									<div className='columns large-12 medium-4 small-4 no-padding'>
										<div className='line enhance-master'>
											{labels["email"]}
										</div>
									</div>

									<div className='columns large-12 bold no-padding'>
										<div className='line'>
											{data["email"]}
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
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

export default Infosperso;