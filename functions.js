// <!-- /**************************************
//  TITLE: conversions
//  AUTHOR: Kiren Kaur
//  CREATE DATE: 25 Jan 2018
//  PURPOSE: To learn about JS
//  LAST MODIFIED ON: 30 Jan 2018
//  LAST MODIFIED BY: Kiren Kaur
//  MODIFICATION HISTORY:
//  1/25/17 - Original build

// ***************************************/



$(document).ready(function(){

	//battle function that takes pirate name from user and
	//outputs using textContent

	// identity: javascript function made to accept 4 parameters,
	// including a div, a number and 2 strings
  //
	// Parameters, I used divID to specify which div I would be using,
	// strOutput is the first string, strOuput2 is the second string, and
	// for the number parameter, I used intNum, so there are 4 parameters total
  //
	// Return Value: none.



	function battleFunction(divID, strOutput, intNum, strOuput2) {
			var strMessage = intNum.toString();
			var strPirateName = strOutput + strMessage + strOuput2;
			document.getElementById(divID).textContent = strPirateName;
	}

	//call the function 5 times
	var battle1 = new battleFunction("battleShip1", "Oy lass! ", 35, " pirates have walked the plank already!");
	var battle2 = battleFunction("battleShip2", "But alas ", 100, " chests were obtained from ye enemy ships!");
	var battle3 = battleFunction("battleShip3", "O lister ere, ", 60, " cap'ns were hollered from our loot snagging!");
  var battle4 = battleFunction("battleShip4", "Across the wild sea ", 4, " ships came hither, lookin for a real fight!");
	var battle5 = battleFunction("battleShip5", "Me sailors threw ", 2000, " pirates right into the sea without a moments notice!");


}());
