
function load(url, callback){

    // Replace url with path to sample data if we're not in production
    // if (!window.location.href.includes('kos-widgets.netlify.com')){
    //     if (url.includes('matches'))
    //         url = '/data/matches.json';
    //     else if (url.includes('tickers'))
    //         url = '/data/tickers.json';
    // }

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
