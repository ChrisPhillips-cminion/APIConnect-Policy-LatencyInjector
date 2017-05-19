/*
      Licensed Materials - Property of IBM

      © IBM Corp. 2016
*/
// Declare Variables
var apic = require('local://isp/policy/apim.custom.js');
//tom.van.oppens@be.ibm.com
var hm = require('header-metadata');
var sm = require('service-metadata');
var props = apic.getPolicyProperty()

//
// var min = 50;
// var max = 10000;
// var sleepTime = Math.floor(Math.random()*(max-min+1)+min);
var sleepTime = props.latencytoadd
function timeout_trigger() {
        // sm.mpgw.skipBackside = true;
        // hm.current.set('Content-Type','text/json');
        // var resp = '{"message":"Hello, Me potato"}';
        // session.output.write(resp);
        console.critical("sleep complete");
 }
setTimeout(timeout_trigger, sleepTime);
console.critical("start sleep for " + sleepTime/1000 + " seconds");
