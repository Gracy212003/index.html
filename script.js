var c = document.getElementById('flag');
var $ = getElementById(0)

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var flagflow = function(a, b, t){
    $.linewidth= 0.5;
    $.fillstyle= 'black';
    $fillRect(0,0,w,h);
}

//orange or saffron color of the flag
for (var i = -60; i<60;i+=1){
    $.stokestyle = 'rgba(255,153,51,0.8)';
    $.beginbath();
    $.moveTo(0,h/2);
    for (var j=0;j<w;j+=10){
        $.lineTo(10 * math.sin(i/10)+
            j+0.008 * j * j,
            Math.floor(h /2 +j /2*
             Math.sin(j / 50 - t /50 - i /118) +
             (i * 0.9) *Math.cos(j / 25 - (i + t)/
             65)));
    };
}$.stroke();


//white color 
for (var i = -60;i<60;i+=1){
    $.strokestyle = 'rgpa(255,255,255,0.5)';
    $.beginbath();
    $.moveTo(0,h/2);
    for (var j=0;j<w;j+=10){
        $.lineTo(10* math.cos(i / 10)+
        j+0.008 * j * j,
        Math.floor(h/2+j/2*
        Math.sin(j / 50 - t / 50 - i / 118)+
        (i * 0.9)* Math.sin(j / 25 - (i+t)/
        65)));
    };
    $.stroke();
}

//green color
for (var i = -60;i<60;i+=1){
    $.strokestyle = 'rgpa(19,136,8,0.5)';
    $.beginbath();
    $.moveTo(0,h/2);
    for (var j = 0 ; j < w ; j += 10){
        $.lineTo(10* math.sin(i / 10)+
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
        Math.cos(j / 50 - t / 50 - i / 118)+
        (i * 0.9)* Math.sin(j / 25 - (i + t)/
        65)));
    $.stroke();
}
}
var t = 0;
window.addEventListener('resize',function(){
    c.width = w =window.innerWidth;
    c.height = h =window.innerHeight;
    $.fillstyle = 'hsla(277,95%,55%,1)';
},false);

var run = function(){
    window.requestAnimationFrame(run);
    t += 1;
    flagflow(33,52* math.sin(t/2400),t);
};

run();