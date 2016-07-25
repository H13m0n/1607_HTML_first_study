/**
 * Created by TOPLemon on 2016. 7. 19..
 */
var cardCount =0;

var onClickTopMenu = function () {
    window.alert('Home is Clicked');
};

var makeCardNews = function (count) {

    for(i=0; i<count; i++){
        cardCount++;
        var inputCode = " \<div class= \" w3-third w3-card-4 card-margin w3-animate-top \" \> " +
        " \<h2\>이거는 " + cardCount + "번째 카드임 \</h2\> \<p\> 여기는 내용이들어가아아아아 \</p\>\</div\> ";
        var element = document.getElementById("cardArticles");
        element.innerHTML += inputCode;

    }

}

var onFormChanged = function () {

}

