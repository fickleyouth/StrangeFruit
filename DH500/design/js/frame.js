/**
 * frame.js - default js for 402 framework using jquery library
 */
 
//JQuery UI tooltip for document
$(document).ready(function() { 
  $(document).tooltip();
});

//site-wide autocomplete functionality for search form - provide better search for 19th century abbreviations
/**
 * frame.js - default js for 402 framework using jquery library
 */
 

//site-wide auto-complete functionality for search form 
$(function() {
    var availableTags = [
      "Attempted Rape",
      "Race Prejudice",
      "Introducing Small Pox",
      "Kidnapping",
      "Conspiracy",
      "Horse Stealing",
      "Writing Letter to White Woman",
      "Giving Information",
      "Stealing",
      "Larceny",
      "Political Causes",
      "Conjuring",
      "Attempted Murder",
      "Alleged Murder",
      "Without Cause",
      "Barn Burning",
      "Asking White Woman to Marry Him",
      "Arson",
      "Assault ",
      "Incendiarism",
      "Wife Beating",
      "Unknown Offense",
      "Turning States Evidence",
      "Suspicion of Rape",
      "Suspected Robbery",
      "Suspicion of Rape",
      "Suspected Robbery",
      "Suspected Murder",
      "Suspected Incendiarism",
      "Suspected Arson",
      "Rape",
      "No Offense",
      "Murderous Assault",
      "Insulting Whites",
      "Horse Stealing",
      "Without Cause",
      "Enticing Servant Away",
      "Desperado",
      "Burglary",
      "Alleged Stock Poisoning",
      "Alleged Complicity in Murder",
      "Alleged Barn Burning",
      "Burglary"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });