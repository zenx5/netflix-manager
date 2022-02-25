chrome.runtime.onInstalled.addListener( () => {
    console.log( "Installed" );
    
});

chrome.runtime.onConnect.addListener( function(port) {
    console.log( "Connected!!" );
    port.onMessage.addListener( function(msg,port){
        switch(msg.action){
            case 'save':
                chrome.storage.local.set(msg.data);
                break;
            case 'load':
                chrome.storage.local.get(msg.target, function(data){
                    port.postMessage(data)
                })
                break;
        }
    })
});