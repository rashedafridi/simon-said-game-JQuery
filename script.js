
$(document).keypress(function(event){
    console.log(event);
    console.log(event.key);
    if(str == null){
     str = event.key;
    console.log("str  == "+str);
   
    startGame(); 
    }

    
});
$(".btn" ).click(function(event) {
    console.log()
    // $("#green").css("background-color","grey")

    playSound(event);

  });
function playSound(event)
{
    let audio;
    console.log(event.target.id);
    switch (event.target.id) {
        case "green":
             audio = new Audio("sounds/green.mp3");
            audio.play();
            $("#"+event.target.id).toggleClass("pressed ") ;
            setTimeout(function(){$("#"+event.target.id).toggleClass("pressed ") }, 100);
            chackPattern(1);
            break;
        case "red":
             audio = new Audio("sounds/red.mp3");
            audio.play();
            $("#"+event.target.id).toggleClass("pressed ") 
            setTimeout(function(){$("#"+event.target.id).toggleClass("pressed ") }, 100);
            chackPattern(2);
            break;
        case "yellow":
             audio = new Audio("sounds/yellow.mp3");
            audio.play();
            $("#"+event.target.id).toggleClass("pressed ") 
            setTimeout(function(){$("#"+event.target.id).toggleClass("pressed ") }, 100);
            chackPattern(3);
            break;
        case "blue":
             audio = new Audio("sounds/blue.mp3");
            audio.play();
            $("#"+event.target.id).toggleClass("pressed ") 
            setTimeout(function(){$("#"+event.target.id).toggleClass("pressed ") }, 100);
            chackPattern(4);
            break;
    
        default:
            break;
    }
}
let str = null;
console.log(str);

console.log(str);
let choiseArray =[];
let index = 0;
let level = 0;
function ran()
{
    return Math.floor(Math.random()*4+1) ;
}
async function  startGame()
{   
        console.log("start level"+level);
    
        level++;
        tempAlert("Level up",300);
        await sleepv2(200);
        $("#level-title").text("level "+level);
        let random_color =ran();
        console.log("do "+random_color);
        choiseArray.push(random_color);
        console.log(" level "+level);
        console.log(" choiseArray "+choiseArray);
        for(var i=0;i<choiseArray.length;i++)
        {

        
            switch (choiseArray[i]) {
                
                case 1:
                    audio = new Audio("sounds/green.mp3");
                    audio.play();
                    console.log("1");
                    $("#green").toggleClass("pressed ") 
                    setTimeout(function(){$("#green").toggleClass("pressed ") }, 100); 
                    console.log("s start");
                    await sleepv2(300);
                    console.log("end start");
                    break;
                case 2:
                    audio = new Audio("sounds/red.mp3");
                    audio.play();
                    console.log("2");
                    $("#red").toggleClass("pressed ") 
                    setTimeout(function(){$("#red").toggleClass("pressed ") }, 100);
                    console.log("s start");
                    await sleepv2(300);
                    console.log("end start"); 
                    break;
                case 3:
                    audio = new Audio("sounds/yellow.mp3");
                    audio.play();
                    console.log("3");
                    $("#yellow").toggleClass("pressed ") 
                    setTimeout(function(){$("#yellow").toggleClass("pressed ") }, 100);
                    console.log("s start");                    
                    await sleepv2(300);
                    console.log("end start");                   
                    break;
                case 4:
                    audio = new Audio("sounds/blue.mp3");
                    audio.play();
                    console.log("4");
                    $("#blue").toggleClass("pressed ") 
                    setTimeout(function(){$("#blue").toggleClass("pressed ") }, 100);
                    console.log("s start");
                    await sleepv2(300);
                    console.log("end start");
                    break;
                default:
                    break;
            }
        }

    
   


}
function chackPattern(data)
{
    if(data == choiseArray[index]){
        index++;
        if(index == choiseArray.length){
            setTimeout(startGame, 400);
            index=0;
            
        }
    }
    else{
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        console.log("wrong");
        $("body").toggleClass("game-over") 
        setTimeout(function(){$("body").toggleClass("game-over ") }, 100);
        $("#level-title").text("game over! \nPress A Key to Start ");
        choiseArray =[];
        index = 0;
        level = 0;
        str = null;
    }
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  function sleepv2(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function tempAlert(msg,duration)
  {
   var el = document.createElement("div");
   el.setAttribute("style","position:absolute;top:28%;left:45%;background-color:#f5fab4; border-radius: 20%; font-size: 300%;");
   el.innerHTML = msg;
   setTimeout(function(){
    el.parentNode.removeChild(el);
   },duration);
   document.body.appendChild(el);
  }