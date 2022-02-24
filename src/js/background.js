chrome.runtime.onInstalled.addListener( () => {
    console.log( "Installed" );
    
});

chrome.runtime.onConnect.addListener( function(port) {
    console.log( "Connected!!" );

});