day = true;

function animationStart(){

    programLang = document.getElementById("bush_1").getBoundingClientRect().left;
    devTool = document.getElementById("bush_2").getBoundingClientRect().left;
    dekuTree = document.getElementById("bush_3").getBoundingClientRect().left;
    design = document.getElementById("bush_4").getBoundingClientRect().left;
    finalStage = document.getElementById("end_point").getBoundingClientRect().left;

    if (programLang < 0 )
    {
        
        setTimeout(function(){document.getElementById("skullt_1").classList.add("skullta_p1");},100);
        setTimeout(function(){document.getElementById("skullt_2").classList.add("skullta_p2");},250);
        setTimeout(function(){document.getElementById("skullt_3").classList.add("skullta_p3");},350);

        setTimeout(function(){document.getElementById("skullt_1").style.visibility="visible";},110);
        setTimeout(function(){document.getElementById("skullt_2").style.visibility="visible";},260);
        setTimeout(function(){document.getElementById("skullt_3").style.visibility="visible";},360);  

    }

    if (devTool < 0 ){
        setTimeout(function(){document.getElementById("react_icon").classList.add("intro");},100);
        setTimeout(function(){document.getElementById("wordpress").classList.add("intro");},250);
        setTimeout(function(){document.getElementById("react_icon_2").classList.add("intro");},350);

        setTimeout(function(){document.getElementById("react_icon").style.visibility="visible";},100);
        setTimeout(function(){document.getElementById("wordpress").style.visibility="visible";},250);
        setTimeout(function(){document.getElementById("react_icon_2").style.visibility="visible";},350);

        setTimeout(function(){document.getElementById("react_icon").classList.remove("intro");},1100);
        setTimeout(function(){document.getElementById("wordpress").classList.remove("intro");},1250);
        setTimeout(function(){document.getElementById("react_icon_2").classList.remove("intro");},1350);

        setTimeout(function(){document.getElementById("react_icon").classList.add("intro_rotation");},1100);
        setTimeout(function(){document.getElementById("wordpress").classList.add("intro_rotation");},1250);
        setTimeout(function(){document.getElementById("react_icon_2").classList.add("intro_rotation");},1350);

    }

    if(dekuTree < 0){
        setTimeout(function(){document.getElementById("door").classList.add("deku");},100);
        setTimeout(function(){document.getElementById("deku_scrub1").classList.add("dekuScrub");},700);
        setTimeout(function(){document.getElementById("deku_scrub2").classList.add("dekuScrub");},1000);
    }

    if(design < 0){
        setTimeout(function(){document.getElementById("photoshop").style.visibility="visible";},100);
        setTimeout(function(){document.getElementById("illustrator").style.visibility="visible";},100);
        setTimeout(function(){document.getElementById("afterEffects").style.visibility="visible";},100);

        setTimeout(function(){document.getElementById("photoshop").classList.add("intro");},100);
        setTimeout(function(){document.getElementById("illustrator").classList.add("intro");},100);
        setTimeout(function(){document.getElementById("afterEffects").classList.add("intro");},100);

        setTimeout(function(){document.getElementById("photoshop").classList.remove("intro");},1000);
        setTimeout(function(){document.getElementById("illustrator").classList.remove("intro");},1000);
        setTimeout(function(){document.getElementById("afterEffects").classList.remove("intro");},1000);

        setTimeout(function(){document.getElementById("photoshop").classList.add("design");},1100);
        setTimeout(function(){document.getElementById("illustrator").classList.add("design");},1100);
        setTimeout(function(){document.getElementById("afterEffects").classList.add("design");},1100);
    }

    if(finalStage < 0 ){
        setTimeout(function(){document.getElementById("wolf").style.visibility="visible";},110);
        setTimeout(function(){document.getElementById("wolf").classList.add("wolf_intro");},100);  
        setTimeout(function(){document.getElementById("moon").style.visibility="visible";},110);
        setTimeout(function(){document.getElementById("moon").classList.add("moon");},100);
        setTimeout(function(){document.getElementById("moon").classList.remove("moon");},5100);
        setTimeout(function(){document.getElementById("moon").classList.add("moon_glow");},5200);

        setTimeout(function(){document.getElementById("stars").style.visibility="visible";},100);
        setTimeout(function(){document.getElementById("container").classList.remove("day");},100);
        setTimeout(function(){document.getElementById("container").classList.add("night");},100);

        setTimeout(function(){document.getElementById("social_media").style.visibility="visible";},5100);
        setTimeout(function(){document.getElementById("social_media").classList.add("moon");},5000);

        setTimeout(function(){document.getElementById("contact").style.visibility="visible";},5100);
        setTimeout(function(){document.getElementById("contact").classList.add("moon");},5000);
        day = false;
    }
    if(finalStage > 0 && day == false ){
        setTimeout(function(){document.getElementById("container").classList.remove("night");},100);
        setTimeout(function(){document.getElementById("container").classList.add("day");},100);

    }
}