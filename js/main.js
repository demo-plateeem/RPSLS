/**  * Created by tab on 1/15/16.  */

//$(function() {
//    var src = this.css('background-image');
//    console.log(src);
//});

//点击按钮获取css属性：背景图片,并传递给呈现结果的容器
//电脑随机选择,随机获取choices数组中的元素

var choices = ['url(img/Paper.png)', 'url(img/Rock.png', 'url(img/Spock.png', 'url(img/Scissors.png)', 'url(img/Lizard.png)'];
$('#console button').on(
    'click',
    function () {
        var result = $('#myChoice');
        var src = $(this).css('background-image');
        result.css('background-image', src);
        var resultText;

        //the result's text

        //get a random index to get the value(url) in the possible results
        var number = Math.random()*10;
        number = Math.round(number) - 5;
        number = Math.abs(number);

        //set the value to backgrond-image    
        $('#computerChoice').css('background-image', choices[number]);
        var computerSrc = $('#computerChoice').css('background-image');

        //who is the winner?
        //var index = src.search(/rock/i) + 1; //src是变动,直接赋值,不同的出拳有不同的src,index值会变动
        //var index = choices[1].search(/rock/i) + 1;   //取数组中的值,index能确定,但是因为获取html文档中url是相对地址,包含有/RPSLS/img/xx.png,所以不完全相同

        var indexNum = src.lastIndexOf('/') + 2;
        var patter = src.slice(indexNum, indexNum + 1);
        switch (patter) {
            case "o": { //rock
                if (/Scissors/.test(computerSrc) || /Lizard/.test(computerSrc)) {
                    resultText = "Win!";
                    console.log('You win');
                } else if (/Rock/.test(computerSrc)) {
                    resultText = "Tie";
                    console.log('Tie');
                }else {
                    resultText = "Lost";
                    console.log('You lost');
                }
            }
                break;
            case "c": {
                if (/Lizard/.test(computerSrc) || /Paper/.test(computerSrc)) {
                    resultText = "Win!";
                }else if (/Scissors/.test(computerSrc)) {
                    resultText = "Tie";
                } else {
                    resultText = "Lost";
                }
            }
                break;
            case "i": {
                if (/Paper/.test(computerSrc) || /Spock/.test(computerSrc)) {
                    resultText = "Win!";
                } else if (/Lizard/.test(computerSrc)) {
                    resultText = "Tie";
                } else {
                    resultText = "Lost";
                }
            }
                break;

            case "a": {
                if (/Rock/.test(computerSrc) || /Spock/.test(computerSrc)) {
                    resultText = "Win!";
                } else if (/Paper/.test(computerSrc)) {
                    resultText = "Tie";
                } else {
                    resultText = "Lost";
                }
            }
                break;
            default: {
                if (/Rock/.test(computerSrc) || /Scissors/.test(computerSrc)) {
                    resultText = "Win!";
                } else if (/Spock/.test(computerSrc)) {
                    resultText = "Tie";
                }else {
                    resultText = "Lost";
                }
            }
        }
        document.querySelector('#demo span').textContent = resultText;
        //switch (src) {
        //    case rock
        //}
    //if(/rock/.test(src)) {
    //    if(/Sorssicer/.test(computerSrc) || /lizard/.test(computerSrc)) {
    //
    //            result = "You win!";
    //            console.log(result);
    //
    //        } else if(/rock/.test(computerSrc)) {
    //
    //            result = "Tie!";
    //
    //        } else {
    //
    //            result = "lost!";
    //
    //        }
    //}

   } 
);
//获取所有button的背景图地址，存为一个数组
//换一种不是方法的方法：直接存入所有可能的地址









