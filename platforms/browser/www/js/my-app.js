// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('*', function (page) {
    // Do something here for "about" page
    console.log(page.name + ' initialized');
});

$$(document).on('click', '.panel-left a', function(e){
    //Close Panels
    myApp.closePanel();
});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    $$('#mainNavBar').css('display', 'none');
    //$$('#mainNavBar').animate({'opacity': 0},{duration: 1000, easing: 'swing'});

    var page = e.detail.page;
    console.log("Navigatting to page: ");
    console.log(page);

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.navbar.hide(mainnavbar, true);
        //myApp.alert('Here comes About page');
    }
});

myApp.onPageAfterBack('*', function(page){
    $$('#mainNavBar').css('display', '');
    //$$('#mainNavBar').animate({'opacity': 1},{duration: 1000, easing: 'swing'});
});
