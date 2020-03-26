export default class view{
    out(id, str){
        document.getElementById(id).value = str;
    }
    outHistory(str){
        document.getElementById("his").value = document.getElementById("his").value + str;
    }
}