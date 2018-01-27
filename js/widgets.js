function questionOfTheDay() {
    $.get('http://mcatquestionoftheday.com/', function(data) {

        var question = $(data).find(".entry");
    
        $('#questOTD').append(question); // TODO Change id?
        $('#polls-523-loading').remove();
        $('#mailchimp').remove();
        $('.twitter-share-button').parent().remove();
        $("#ans523 div").remove();
    });

}

function wordOfTheDay() {
    /*http://www.dictionary.com/wordoftheday/2018/01/27/flakelet */

    var urlbase = "http://www.dictionary.com/wordoftheday/";
    var today = new Date();

    var day = ("0" + today.getDate()).slice(-2);
    var month = today.getMonth() + 1;
    month = ("0" + month).slice(-2);

    var url = urlbase + today.getFullYear() + "/" + month + "/" + day + "/flakelet";

    $.get(url, function(data) {
        
        var quotedata = $(data).find(".definition-box");
        var dailyWord = $(quotedata).find("strong");
        var dailyDefinition = $(quotedata).find("ol");
        $('#wotd').append(dailyWord);
        $('#wotd').append(dailyDefinition);

    });
}

function quoteOfTheDay() {
    $.get('http://www.eduro.com/', function(data) {
        
        /*First instance of the daily quote*/
        var quotedata = $(data).find("dailyquote").first();
        $('#quoteOTD').prepend(quotedata);

    });

}

function setUpCalendar(elementID, calendarID) {

    $(elementID).fullCalendar({
        googleCalendarApiKey: 'AIzaSyDbyT1SHJ9bZtwIbNSj1-MJPoRBAouaeSA',
        events: {
            googleCalendarId: calendarID
        },
        defaultView: 'listMonth',
        validRange: function(nowDate) {
            return {
                start: nowDate
            };
        },
        eventClick: function(event) {
            // opens events in a popup window
            window.open(event.url, 'gcalevent');
            return false;
        },
    });
}

/**
 * Scholar search:
 * https://scholar.google.com/scholar?hl=en&as_sdt=0%2C47&q=elephant+seal&btnG
 */
function scholarSearch() {
    $("#scholar-search").submit(function(event) {

        var queryBase = "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C47&q=";

        // Get user input
        var userInput = $("#search-input").val();

        // Create search
        var query = queryBase + userInput.replace(' ', '+') + "&btnG=";
        window.open(query, '_blank');

        event.preventDefault();
    });
}