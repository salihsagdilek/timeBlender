/**
 * Created by salih.sagdilek on 25.12.2014.
 */
(function refreshData(){
    var x = 1,
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
    h <= 9 ? h = '0' + h : '';
    m <= 9 ? m = '0' + m : '';
    s <= 9 ? s = '0' + s : '';

    document.getElementsByTagName('body')[0].style.backgroundColor = '#'+h+m+s;
    setTimeout(refreshData, x*1000);
})();