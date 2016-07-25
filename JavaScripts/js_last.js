/**
 * Created by TOPLemon on 2016. 7. 22..
 */

var date = new Date();

var aaa = function () {
    var hours = date.getHours();

    if(hours < 12){
        console.log('A.M.');
    }else {
        console.log('P.M.');
    }

}

var bbb =function () {
    var month = date.getMonth() +1;
    var day = date.getDay() +1;

    console.log(month + '월 '+ day + '일 입니다');
}

var arr = function () {
    var arrayy = ['a','b','c'];

    for (var i=0;i<arrayy.length; i++){
        console.log(arrayy[i]);
    }
}

function adad() {
    console.log('callback');
}
adad();

var abcd = function () {
    var str = '';
    for(var i = 1; i < 10; i++){
        for(var j=0; j<i; j++){
            str += '*';
        }
        str+='\n';
    }
    alert(str);
}

var abcde = function () {
    
}
abcd();