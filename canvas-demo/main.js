var canvas = document.getElementById('canvas');
var actions = document.getElementById('actions');
var brush = document.getElementById('brush');
var eraser = document.getElementById('eraser');

var context = canvas.getContext('2d');

autoSetCanvasSize(canvas);

listenToMouse(canvas);










//下面是工具函数
function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineWidth = 5;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
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


function listenToMouse(canvas) {
    var eraserEnabled = false;
    eraser.onclick = function () {
        eraserEnabled = true;
        actions.className = 'actions x';
    };
    brush.onclick = function (ev) {
        eraserEnabled = false;
        actions.className = 'actions';
    };

    var using = false;

    var lastPoint = {
        x:undefined,
        y:undefined
    };

    canvas.onmousedown = function (ev) {
        var x = ev.clientX;
        var y = ev.clientY;
        using = true;

        if(eraserEnabled){
            context.clearRect(x-5,y-5,20,20);
        }else{
            lastPoint = {x:x,y:y};
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

