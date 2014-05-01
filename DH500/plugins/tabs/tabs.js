/**
 * tabs.js - js for tabs plugin using jquery library
 */
 
$(document).ready(function() { 
 $("span#tabs").hide();
   });
   
//Jquery UI tabs altered to display text tab on default  
 $(document).ready(function() {   
 $( "div#tabs").tabs({
  active: 0
  });
 });