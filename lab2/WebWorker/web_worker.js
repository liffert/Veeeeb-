
onmessage = function (e) {
    var result = null;
    if(e.data[1] == "Digit - binary"){
        result = parseInt(e.data[0]).toString(2);
    }
    else{
        result = parseInt(e.data[0], 2).toString(10);
    }
    if(isNaN(result)){
        result = "ERROR";
    }
    this.postMessage([result, (e.data[0] + " " + e.data[1] + " " + result + "\n")]);
}