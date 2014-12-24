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
        rgba = 'rgba(' + parseInt((parseInt(m,16)*1.2) + 25) + ',' + (parseInt(h,16)) + ',' + parseInt((parseInt(s,16)*1.7) + 100).toString() + ',' + alpha + ')';

    var content = document.getElementById('full');
    content.style.backgroundImage = 'url(https://vanillatours.com/Content/pictures/search/full-width-' + (parseInt(d.getMinutes() / 2) == 0 ? 1 : parseInt(d.getMinutes() / 2))+ '.jpg)';
    content.style.backgroundSize = 'cover';
    content.style.backgroundPosition = 'center';
    content.style.backgroundColor = rgba;
    content.style.backgroundBlendMode = 'screen';
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
    setTimeout(refreshData, x*1000);
})();


setInterval(
    function(){
        document.getElementById('second').className = 'out';
    }
,1000);


setTimeout(function(){
    setInterval(
        function(){
            document.getElementById('second').className = 'in';
            setTimeout(function () {
                document.getElementById('second').className = '';
            },250)
        }
        ,1000)
},500)