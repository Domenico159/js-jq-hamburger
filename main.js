

// Focalizzare le referenze 

var hamburger = $('a i.fas.fa-bars') ;

var sidebar = $('.hamburger-menu');

var closeSidebar = $('.close');


// Logica

// Apertura al click dell'hamburger

hamburger.click( function() {

   sidebar.fadeIn();

} );

// Chiusura al click dell'hamburger

closeSidebar.click( function() {

    sidebar.fadeOut();
    
 
 } );
