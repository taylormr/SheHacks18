function hideElement(elementID, togglerID) {

        if ($(elementID).hasClass("hiddenElement")) {
            $(elementID).removeClass("hiddenElement");
            $(togglerID).addClass("iconToggled");

        } else {
            $(elementID).addClass("hiddenElement");
            $(togglerID).removeClass("iconToggled");
        }
    }

    function addTogglerHandlers() {

        $("#toggle-calendar").click(function() {
            hideElement("#calendar", "#toggle-calendar");
        });

        $("#toggle-wotd").click(function() {
            hideElement("#wotd", "#toggle-wotd");
        });

        $("#toggle-quote").click(function() {
            hideElement("#quoteOTD", "#toggle-quote");
        });

        $("#toggle-qotd").click(function() {
            hideElement("#questOTD", "#toggle-qotd");
        });

        $("#toggle-links").click(function() {
            hideElement("#fav-links", "#toggle-links");
        });

        $("#toggle-scholar").click(function() {
            hideElement("#scholar-widget", "#toggle-scholar");
        });
        
    }

        /* Open */
    function openSettingsMenu() {
        $("#settings-menu").height('100%');
    }

    /* Close */
    function closeSettingsMenu() {
        $("#settings-menu").height('0%');
    }

    function openSettingsHandler() {
        $("#settings-link").click(function() {
            openSettingsMenu();
        });
    }

    function closeSettingsHandler() {
        $("#close-settings").click(function() {
            closeSettingsMenu() 
        });
    }