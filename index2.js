var currtime = 0;
function loadDoc(){
    return;
    console.log('currtime', Date.now() - currtime);
    if((Date.now() - currtime) < 60000){
        setTimeout(loadDoc, 500);
        return;
    }
    currtime = Date.now();
    const xhttp = new XMLHttpRequest();
    xhttp.onload = loadDocInit;
    xhttp.open("GET", "https://bellemarket.it/db/pwasfi", true);
    xhttp.send();
}
function loadDocInit(){
    /*if(typeof(this.responseText)!=='undefined'){
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(this.responseText);
        newDiv.appendChild(newContent);
        document.body.append(newDiv);        
    }*/
    setTimeout(loadDoc, 500);
}
window.onload = loadDoc;
