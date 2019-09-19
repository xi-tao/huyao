(function () {
    /*点击弹出弹窗视频并播放按钮*/
    var luckVideoPlay = document.getElementById("videoPlay");
    var closeVideo = document.querySelector(".video-close");
    /*找到视频框*/
    var videoMask = document.querySelector(".video-mask");
    /*找到视频标签*/
    var luckVideo =document.querySelector(".video-mask>video");
    /*点击播放*/
    luckVideoPlay.onclick=function () {
        videoMask.style.display="block";
        luckVideo.play();
    };
    /*点击关闭弹窗*/
    closeVideo.onclick=function () {
        videoMask.style.display="none";
        luckVideo.pause();
        luckVideo.currentTime=0;
    };
}());
(function () {
    var items=document.getElementsByClassName("item");
    var points=document.getElementsByClassName("point");
    var index=0;
    var time=0;
    var clearActive=function () {
        for (var i=0;i<items.length;i++) {
            items[i].className="item";
        }
        for (var i=0;i<points.length;i++) {
            points[i].className="point";
        }
    };
    var goIndex=function () {
        clearActive();
        points[index].className="point active";
        items[index].className="item active";
    };
    var goNext=function () {
        if (index<3){
            index++;
        } else {
            index=0;
        }
        goIndex();
        time=0;
    };
    for (var i=0;i<points.length;i++) {
        points[i].addEventListener("click",function() {
            var pointindex=this.getAttribute("data-index");
            index=pointindex;
            goIndex();
        })
    }
    setInterval(function () {
        time++;
        if(time==1){
            goNext();
        }
    },3500)
}());
(function () {
    var tab_panels=document.getElementsByClassName("tab_panel");
    var xuangzs=document.getElementsByClassName("xuangz");
    var index=0;
    var clearActive=function () {
        for (var i=0;i<tab_panels.length;i++) {
            tab_panels[i].className="tab_panel";
        }
        for (var i=0;i<xuangzs.length;i++) {
            xuangzs[i].className="xuangz";
        }
    }
    var goIndex=function () {
        clearActive();
        xuangzs[index].className="xuangz active";
        tab_panels[index].className="tab_panel active";
    }
    for (var i=0;i<xuangzs.length;i++) {
        xuangzs[i].addEventListener("mouseover",function() {
            var pointindex=this.getAttribute("data-index");
            index=pointindex;
            goIndex();
        })
    }
}());
(function(){
    var box2_tabs=document.getElementsByClassName("box2_tab");
    var li_1s=document.getElementsByClassName("li_1");
    var index=0;
    var clearActive=function () {
        for (var i=0;i<box2_tabs.length;i++) {
            box2_tabs[i].className="box2_tab";
        }
        for (var i=0;i<li_1s.length;i++) {
            li_1s[i].className="li_1";
        }
    }
    var goIndex=function () {
        li_1s[index].className="li_1 on";
        box2_tabs[index].className="box2_tab active";
    }
    for (var i=0;i<li_1s.length;i++) {
        li_1s[i].addEventListener("click",function() {
            var pointindex=this.getAttribute("data-index");
            index=pointindex;
            clearActive();
            goIndex();
        })
    }
}());
(function () {
    var box3_tabs=document.getElementsByClassName("box3_tab");
    var sprs=document.getElementsByClassName("spr");
    var index=0;
    var clearActive=function () {
        for (var i=0;i<box3_tabs.length;i++) {
            box3_tabs[i].className="box3_tab";
        }
        for (var i=0;i<sprs.length;i++) {
            sprs[i].className="spr";
        }
    }
    var goIndex=function () {
        clearActive();
        sprs[index].className="spr on";
        box3_tabs[index].className="box3_tab active";
    }
    for (var i=0;i<sprs.length;i++) {
        sprs[i].addEventListener("click",function() {
            var pointindex=this.getAttribute("data-index");
            index=pointindex;
            goIndex();
        })
    }
}());
    (function () {
        var box5_tabs=document.getElementsByClassName("box5_tab");
        var spr2s=document.getElementsByClassName("spr2");
        var index=0;
        var clearActive=function () {
            for (var i=0;i<box5_tabs.length;i++) {
                box5_tabs[i].className="box5_tab";
            }
            for (var i=0;i<spr2s.length;i++) {
                spr2s[i].className="spr2";
            }
        }
        var goIndex=function () {
            clearActive();
            spr2s[index].className="spr2 on";
            box5_tabs[index].className="box5_tab on";
        }
        for (var i=0;i<spr2s.length;i++) {
            spr2s[i].addEventListener("click",function() {
                var pointindex=this.getAttribute("data-index");
                index=pointindex;
                goIndex();
            })
        }
    }());
(function(){
    var tab_img_mains=document.getElementsByClassName("tab_img_main");
    var sprbg3s=document.getElementsByClassName("sprbg3");
    var index=0;
    var clearActive=function () {
        for (var i=0;i<tab_img_mains.length;i++) {
            tab_img_mains[i].className="tab_img_main";
        }
        for (var i=0;i<sprbg3s.length;i++) {
            sprbg3s[i].className="sprbg3";
        }
    }
    var goIndex=function () {
        clearActive();
        sprbg3s[index].className="sprbg3 on";
        tab_img_mains[index].className="tab_img_main on";
    }
    for (var i=0;i<sprbg3s.length;i++) {
        sprbg3s[i].addEventListener("click",function() {
            var pointindex=this.getAttribute("data-index");
            index=pointindex;
            goIndex();
        })
    }
}());



