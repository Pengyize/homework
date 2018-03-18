var canvas = document.getElementById('canvas');

var pen1 = document.getElementById('pen1');
var pen2 = document.getElementById('pen2');
var eraser = document.getElementById('eraser');
var clear =document.getElementById('clear');
var download = document.getElementById('download');

var black = document.getElementById('black');
var blue = document.getElementById('blue');
var orange = document.getElementById('orange');
var green = document.getElementById('green');

var backWhite = document.getElementById('backWhite');
var backWhiteTest = 0;
// var img = canvas.toDataURL("image/png");
// document.write('<img src="'+img+'"/>');

var lineWidth = 5;
var r=2;


var theColor = 'black';

var context = canvas.getContext('2d');


autoSetCanvasSize(canvas);

listenToUser(canvas);







//下面是工具函数



function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineWidth = lineWidth;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

function drawCircle(x,y,r) {
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    context.fill();
}

function autoSetCanvasSize(canvas) {
    setCanvasSize();
    window.onresize = function () {
        setCanvasSize()
    };


    function setCanvasSize() {
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width = pageWidth;
        canvas.height = pageHeight;
    }

}

// function dlCanvas() {
//     var url = canvas.toDataURL('image/png');
//     download.href = url;
//     download.target = '_blank';
//     download.download = '画';
// }


function listenToUser(canvas) {

    backWhite.onclick = function () {
        if(backWhiteTest === 0){
            context.fillStyle = '#fff';                             //使画的背景颜色变成白色
            context.fillRect(0,0,canvas.width,canvas.height);
            backWhite.classList.add('active');
            backWhiteTest=1;
            context.fillStyle = theColor;
        }else{
            backWhite.classList.remove('active');
            backWhiteTest=0;
            context.clearRect(0,0,canvas.width,canvas.height);
            context.fillStyle = theColor;
        }
    };

    black.onclick = function () {
        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        black.className = 'black active';
        blue.className = 'blue';
        orange.className = 'orange';
        green.className = 'green';
        theColor = 'black';
    };
    blue.onclick = function () {
        context.strokeStyle = '#9de7fb';
        context.fillStyle = '#9de7fb';
        black.className = 'black';
        blue.className = 'blue active';
        orange.className = 'orange';
        green.className = 'green';
        theColor = '#9de7fb';
    };
    orange.onclick = function () {
        context.strokeStyle = '#f6b451';
        context.fillStyle = '#f6b451';
        black.className = 'black';
        blue.className = 'blue';
        orange.className = 'orange active';
        green.className = 'green';
        theColor = '#f6b451';
    };
    green.onclick = function () {
        context.strokeStyle = '#85e353';
        context.fillStyle = '#85e353';
        black.className = 'black';
        blue.className = 'blue';
        orange.className = 'orange';
        green.className = 'green active';
        theColor = '#85e353';
    };


    var eraserEnabled = false;
    pen1.onclick = function () {
        eraserEnabled = false;
        lineWidth = 5;
        r=2;
        pen1.classList.add('active');
        pen2.classList.remove('active');
        eraser.classList.remove('active');
    };
    pen2.onclick = function () {
        eraserEnabled = false;
        lineWidth = 10;
        r=4;
        pen2.classList.add('active');
        pen1.classList.remove('active');
        eraser.classList.remove('active');
    };
    eraser.onclick = function () {
        eraserEnabled = true;
        eraser.classList.add('active');
        pen1.classList.remove('active');
        pen2.classList.remove('active');

    };
    clear.onclick = function () {
        if(backWhiteTest === 1){
            context.fillStyle = '#fff';                             //使画的背景颜色变成白色
            context.fillRect(0,0,canvas.width,canvas.height);
        }else{
            context.clearRect(0,0,canvas.width,canvas.height);
        }
        context.fillStyle = theColor;
    };
    download.onclick = function () {
        var MIME_TYPE = "image/png";

        var imgURL = canvas.toDataURL(MIME_TYPE);

        var dlLink = document.createElement('a');
        dlLink.download = '画';
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    };



    var using = false;

    var lastPoint = {
        x:undefined,
        y:undefined
    };

    if(document.body.ontouchstart !== undefined){
        //触屏设备
        canvas.ontouchstart = function (ev) {
            var x = ev.touches[0].clientX;
            var y = ev.touches[0].clientY;
            using = true;

            if(eraserEnabled){
                context.clearRect(x-5,y-5,20,20);
            }else{
                lastPoint = {x:x,y:y};
                drawCircle(x,y,r);
            }
        };

        canvas.ontouchmove = function (ev) {
            var x = ev.touches[0].clientX;
            var y = ev.touches[0].clientY;

            if(using){
                if(eraserEnabled){
                    context.clearRect(x-5,y-5,20,20);
                }else {
                    var newPoint = {x:x,y:y};
                    drawCircle(x,y,r);
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                    lastPoint = newPoint;
                }
            }
        };

        canvas.ontouchend = function () {
            using = false;
        };


    }else{
        //非触屏设备
        canvas.onmousedown = function (ev) {
            var x = ev.clientX;
            var y = ev.clientY;
            using = true;

            if(eraserEnabled){
                context.clearRect(x-5,y-5,20,20);
            }else{
                lastPoint = {x:x,y:y};
                drawCircle(x,y,r);
            }

        };

        canvas.onmousemove = function (ev) {
            var x = ev.clientX;
            var y = ev.clientY;

            if(using){
                if(eraserEnabled){
                    context.clearRect(x-5,y-5,20,20);
                }else {
                    var newPoint = {x:x,y:y};
                    drawCircle(x,y,r);
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                    lastPoint = newPoint;
                }
            }
        };

        canvas.onmouseup = function () {
            using = false;
        };

        canvas.onmouseout = function () {
            using = false;
        };
    }


}

