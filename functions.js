function load(url, callback){
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', url, true);
    req.onreadystatechange = function(){
        if (req.readyState == 4 && callback != undefined){
            callback(JSON.parse(req.responseText));
        }
    }
    req.send(null);
}