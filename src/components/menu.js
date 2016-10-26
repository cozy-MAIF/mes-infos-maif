/**
* menu.js
* Menu React component, display left menu
* @author DigitalFactory
*/

import React from 'react';

const Menu = React.createClass({

	render: function() {
    var header = "";
    
    if(this.props.data != undefined){
		  header = this.generateHeader();
    }
  	var menu = this.generateMenu();
      return (
        <div className={menuParams[0].class} id={menuParams[0].id}>
          <h2 className={menuHeader[0].titleClass}> {menuHeader[0].title} </h2>
          <div className='menu-container'>
            <div className='inner'>
              {header}
              		<ul>{menu}</ul>
              	</div>
          	</div>
        </div>
      );
  },

  /**
  * generateHeader
  * generate upper part of the menu block
  */
    generateHeader: function(){
    	var socName = "";
      var socFirstname = "";
      if(this.props.data["MesInfos"] != undefined){
        if(this.props.data["MesInfos"]["client"] != undefined){
          socName = this.props.data["MesInfos"]["client"]["name"]["family"];
        	socFirstname = this.props.data["MesInfos"]["client"]["name"]["given"];
        }
      }
      
    	return <div className='container'>
          <div>{appLabels[0]["last_import"]} {this.props.lastImport}</div>
					<div className='infos-perso'>
          				<div className='name'>
					    	<br /> {socName}
					    	<br /> {socFirstname}
		    			</div>
	    			</div>
	    		</div>
    	;
    },

    /**
    * generateHeader
    * generate lower part of the menu block with links
    */
    generateMenu: function(){
    	var elementsObject = elements[0]; //elements from subsets.js file
      	var scope = this;
    	return Object.keys(elementsObject).map(function(k) {
          return <li onClick={scope.handleMenuClick.bind(this, k, elementsObject[k].id)} className={elementsObject[k].class} id={elementsObject[k].id} key={elementsObject[k].id}>
                  <a href='javascript:void(0);'>{elementsObject[k].title}</a>
                </li>;
        });
    },

    /**
    * Handle click on menu items, show or hide elements
    */
    handleMenuClick: function(scope, k, element){
      $('.menu_item').removeClass("active");
      $('#'+k).addClass("active");

    	$('.element-part').removeClass('element-displayed').addClass('element-hidden');
    	$('.part-'+scope).addClass('element-displayed');
    }

});

export default Menu;