var level = 1;
var randomAns = [];
var generated = [];


$("html").keypress(function (evt){
    changelevel();
})

function rand(){
    var ra = Math.ceil((Math.random()*4));
    randomAns.push(ra);
    if(ra==2){
        redplay();
        redclick();
    }else if(ra==3){
        yellowplay();
        yellowclick();
    }else if(ra==4){
        blueplay();
        blueclick();
    }else{
        greenplay();
        greenclick();
    }
}

function check(){
    var l = generated.length;
    for(var i = 0 ; i < l ; i++){
        if(randomAns[i]!=generated[i])return -1;
    }
    if(generated.length==randomAns.length)return 1; 
    else return 0;  
}

function changelevel(){

    var v = check();    
    if(v==0){
        console.log(v);
    }
    else if(v==-1){
        var a = new Audio("./wrong.mp3");
        a.play();
        $("body").css("background-color" , "red");
        setTimeout(function (){
            $("body").css("background-color" , "#011F3F");
        },100);
        $("h1").text("wrong answer Press A Key to Start");
        generated=[];
        level=1;
        randomAns=[];
    }else{
        $("h1").text("level "+level);
        level++;
        generated = [];
        setTimeout(rand,400);
    }
}

function redplay(){
    var audio = new Audio("./red.mp3");
    audio.play();    
}

function yellowplay(){
    var audio = new Audio("./yellow.mp3");
    audio.play();
}

function blueplay(){
    var audio = new Audio("./blue.mp3");
    audio.play();
}

function greenplay(){
    var audio = new Audio("./green.mp3");
    audio.play();
}


function redclick(){
    $(".red").addClass("pressed");
    setTimeout(function(){
        $(".red").removeClass("pressed");
    },100);
}

function yellowclick(){
    $(".yellow").addClass("pressed");
    setTimeout(function(){
        $(".yellow").removeClass("pressed");
    },100);
}

function blueclick(){
    $(".blue").addClass("pressed");
    setTimeout(function(){
        $(".blue").removeClass("pressed");
    },100);
}

function greenclick(){
    $(".green").addClass("pressed");
    setTimeout(function(){
        $(".green").removeClass("pressed");
    },100);
}



$(".red").click(function(){
    redclick();
    redplay();
    generated.push(2);
    changelevel();
})

$(".green").click(function(){
    greenclick();
    greenplay();
    generated.push(1);
    changelevel();
})

$(".blue").click(function(){
    blueclick();
    blueplay();
    generated.push(4);
    changelevel();
})

$(".yellow").click(function(){
    yellowclick();
    yellowplay();
    generated.push(3);
    changelevel();
})