var mCont = document.getElementById("mCont");
var close = document.getElementById("close");
var vt = {
    openModal : function (ele) {
        var imgId = ele.id.split("btn")[0];
        mCont.style.display = "block";
        setTimeout( function () {
            mCont.style.background = vt.colors[parseInt(imgId)-1];
            mCont.style.opacity = "1";
        }, 200)
    },
    colors : ["#ee1624","#d4a10f","#1e9c44","#c51c2f","#f23e1f","#00addb","#ffb800","#901537","#f56c0e","#e40084","#fb9e00","#d18e18","#46783b","#007bbe","#37b243","#00538d","#163568"]
}

close.onclick = function () {
    mCont.satyle.opacity = "0";
    setTimeout( function () {
        mCont.style.display = "none";
    },200)
}
