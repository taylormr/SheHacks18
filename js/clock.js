function clock(dayID, monthID, yearsID, hoursID, minutesID) {

    var today = new Date();

    // Date
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    
    // Time
    var hours = today.getHours();
    var minutes = today.getMinutes();

	$("#" + dayID).text(("0" + day).slice(-2));
	$("#" + monthID).text(("0" + (month+1)).slice(-2));
	$("#" + yearsID).text(("0" + year).slice(-2));
	$("#" + hoursID).text(("0" + hours).slice(-2));
	$("#" + minutesID).text(("0" + minutes).slice(-2));

    var t = setTimeout(clock, 500);
}


