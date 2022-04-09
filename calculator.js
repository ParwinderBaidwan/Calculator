//get number
function number(num){
    var result = document.getElementById('screen');
    result.value += num
}
//get result

function result(){
    var result = document.getElementById('screen');
    result.value = eval(result.value);
}

//clear result
function clearResult(){
    var result = document.getElementById('screen');
    result.value = ""
}

function deleteChar(){
    var number = document.getElementById('screen');
    var remove = number.value;
    remove = remove.slice(0,-1);//remove last character from the string
    number.value = remove;
}