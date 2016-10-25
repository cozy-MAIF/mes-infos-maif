/**
* app.js
* entry point
* handle app
* @author DigitalFactory - MAIF
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Handler from './components/handler';

$(document).ready(function() {
    /**
    * Get user data from couchdb
    */
    var lastImport = "";
    cozysdk.defineRequest('MaifUser', 'all', 'function(doc) { emit(doc.id, doc); }', function(){
        cozysdk.run('MaifUser', 'all', {}, function(err, maifusers) { //get all maifuser, undefined if not in database
            if (err != null) { //an error will be shown in the IHM, even if not setted here
            } else {
                if(maifusers != undefined && Object.keys(maifusers).length !== 0){
                    lastImport = maifusers[0].value.date == undefined ? "" : maifusers[0].value.date;
                    maifusers = maifusers[0].value.profile;
                }
                else{
                    maifusers = undefined;
                }
            }
            ReactDOM.render(<Handler serverData={maifusers} lastImport={lastImport}/>, document.getElementById('main'));
        });
    });
});