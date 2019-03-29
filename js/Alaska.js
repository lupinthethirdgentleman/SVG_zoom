var flag = false;

function alaska() {
    if(!flag) {
        document.body.style.transform = "scale(2,2)";
        document.getElementById("icon_pb").className ="div_pb1";
        document.getElementById("icon_nome").className ="div_nome1";
        document.getElementById("icon_fb").className ="div_fairbanks1";
        document.getElementById("icon_bethel").className ="div_bethel1";
        document.getElementById("icon_ah").className ="div_anchorage1";
        document.getElementById("icon_juneau").className ="div_juneau1";
        document.getElementById("network").textContent = "Back to Map";
        flag = true;
    }

    else {
        document.body.style.transform = "scale(1,1)";
        document.getElementById("icon_pb").className ="div_pb alaska_icon";
        document.getElementById("icon_nome").className ="div_nome alaska_icon";
        document.getElementById("icon_fb").className ="div_fairbanks alaska_icon";
        document.getElementById("icon_bethel").className ="div_bethel alaska_icon";
        document.getElementById("icon_ah").className ="div_anchorage";
        document.getElementById("icon_juneau").className ="div_juneau alaska_icon";
        document.getElementById("network").textContent = "View Network";
        flag = false;
    }
}