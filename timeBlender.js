/**
 * Created by salih.sagdilek on 25.12.2014.
 */
(function refreshData(){
    var x = 1,
        d = new Date(),
        h = d.getHours() <= 9 ? '0' + d.getHours() : d.getHours(),
        m = d.getMinutes() <= 9 ? '0' + d.getMinutes() : d.getMinutes(),
        s = d.getSeconds() <= 9 ? '0' + d.getSeconds() : d.getSeconds(),
        alpha = '.7',
        rgba = 'rgba(' + parseInt((parseInt(m,16)*1.2) + 25) + ',' + (parseInt(h,16)) + ',' + parseInt((parseInt(s,16)*1.7) + 100).toString() + ',' + alpha + ')',
        content = document.getElementById('full'),
        second  = document.getElementById('second'),
        hour    = document.getElementById('hour'),
        minute  = document.getElementById('minute');
    content.style.backgroundImage = 'url(https://vanillatours.com/Content/pictures/search/full-width-' + (parseInt(d.getMinutes() / 2) == 0 ? 1 : parseInt(d.getMinutes() / 2))+ '.jpg)';
    content.style.backgroundSize = 'cover';
    content.style.backgroundPosition = 'center';
    content.style.backgroundColor = rgba;
    content.style.backgroundBlendMode = 'screen';
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    second.className = 'in';
    if(s == 0){
        minute.className = 'in';
        if(m == 0){
            hour.className = 'in';
        }
    }
    setTimeout(function(){
        second.className = '';
        if(s == 0){
            minute.className = '';
            if(m == 0){
                hour.className = '';
            }
        }
    },250);
     setTimeout(function(){
        second.className = 'out';
            if(s == 59){
                minute.className = 'out';
                if(m == 59){
                    hour.className = 'out';
                }
            }
    },750);
    setTimeout(refreshData, x*1000);
//
///** For node webkit screen saver **/
//
//var gui = require('nw.gui');
//document.addEventListener('click',function(){
//    gui.App.quit();
//});
//document.addEventListener('keydown',function(e){
//    gui.App.quit();
//},false);
})();