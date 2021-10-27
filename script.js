let sec = 60;
let min;
let intervalID;
let timeID;
let imgArrTrue;
let m;
let s;
let newImgArr;
$(".check").attr("disabled", "disabled");


// function timer()
function timer() {
  let lengthC = [min, sec];
  sec = sec - 1;
  if (sec == 0) {
    sec = 59;
    min = min - 1;
  }
  if (lengthC[0] < 10) {
    lengthC[0] = "0" + lengthC[0];
  }
  if (lengthC[1] < 10) {
    lengthC[1] = "0" + lengthC[1];
  }
  m = lengthC[0];
  s = lengthC[1];

  $(".timer").text(`${m}:${s}`);

  if($(".timer").text()=='00:01'){
    $(".modal-container").css({
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 3,
    });
    $(".confirm").css("display", "flex");
    $(".confirm").animate(
      {
        top: "25px",
        zIndex: "99",
      },
      500,
      "easeOutCubic"
    );
    $(".check").attr("disabled", "disabled");
    $(".message").text("It`s a pity, but you lost!");
    $(".butt-check").css("display", "none");
    $(".buttons").css("justify-content", "center");
    $(".timer").text("01:00");
    clearInterval(timeID);
    clearInterval(intervalID);
  }
}


function startInterval(){
  intervalID = setInterval(timer, 1000);
  timeID = setInterval(checkMess = function(){
    $(".message").text(`You still have time, you sure ${$(".timer").text()}`);
  }, 1000); 
}

function stopInterval(){
  clearInterval(intervalID)
  clearInterval(timeID)
}


//function dragAndDrop()
dragAndDrop = function () {
  $(".child").draggable();
  $(".child-2").droppable({
    accept: ".child",
    drop: function (e, ui) {
      let newItem = ui.draggable.clone();
      ui.draggable.remove();
      let newItem1 = newItem.removeAttr("style");
       $(this).append(newItem1);
    },
  });
};


//function startGame()
function startGame() {
  dragAndDrop();
  $(".child").removeClass("ui-draggable-dragging");
  min = parseInt(1) - 1;
  $(".timer").text("01:00");
  clearInterval(intervalID);
  sec = 60;
  startInterval()
  
  $(".check").removeAttr("disabled");
  $(".check").removeClass("disabled");
  $(".start").addClass("disabled");
  $(".start").attr("disabled", "disabled");
}


//function checkResult()
function checkResult() {
   checkMess();
  $(".modal-container").css({
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 3,
  });
  $(".confirm").css("display", "flex");
  $(".butt-check").css("display", "flex");
  
  $(".confirm").animate(
    {top: "25px",
      zIndex: "99",},500,"easeOutCubic");
}


//function newGame()
function newGame() {
  stopInterval()
  $(".timer").text("01:00");
  $(".start").removeAttr("disabled");
  $(".start").removeClass("disabled");
  $(".check").addClass("disabled");
  $(".check").attr("disabled", "disabled");

  $(".parend-1").append($(".child"),
  $(".child").removeClass("ui-draggable","ui-draggable-handle","ui-draggable-dragging")
  );

  let m1 = $(".paz-1")[0];
  let m2 = $(".paz-2")[0];
  let m3 = $(".paz-3")[0];
  let m4 = $(".paz-4")[0];
  let m5 = $(".paz-5")[0];
  let m6 = $(".paz-6")[0];
  let m7 = $(".paz-7")[0];
  let m8 = $(".paz-8")[0];
  let m9 = $(".paz-9")[0];
  let m10 = $(".paz-10")[0];
  let m11 = $(".paz-11")[0];
  let m12 = $(".paz-12")[0];
  let m13 = $(".paz-13")[0];
  let m14 = $(".paz-14")[0];
  let m15 = $(".paz-15")[0];
  let m16 = $(".paz-16")[0];

  mixElem = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,];

  newMixElem = mixElem.map((i) => [Math.random(), i]).sort().map((i) => i[1]);
  $(".parend-1").children().remove();
  $(".parend-1").html(newMixElem);
}


//event "button-close"
$(".butt-close").on("click", function () {
  $(this).animate(
    {
      top: "0px",},500,function () {
      $(".modal-container").css({ backgroundColor: "#fff", zIndex: -1 });
      $(".confirm").css("display", "none");
    }
  );
});


//event  check result game
$(".butt-check").on("click", function () {
  clearInterval(timeID);
    clearInterval(intervalID);
  let elem1 = $('.paz-1').parent().index();
  let elem2 = $(".paz-2").parent().index();
  let elem3 = $('.paz-3').parent().index();
  let elem4 = $('.paz-4').parent().index();
  let elem5 = $(".paz-5").parent().index();
  let elem6 = $(".paz-6").parent().index();
  let elem7 = $(".paz-7").parent().index();
  let elem8 = $(".paz-8").parent().index();
  let elem9 = $(".paz-9").parent().index();
  let elem10 = $(".paz-10").parent().index();
  let elem11 = $(".paz-11").parent().index();
  let elem12 = $(".paz-12").parent().index();
  let elem13 = $(".paz-13").parent().index();
  let elem14 = $(".paz-14").parent().index();
  let elem15 = $(".paz-15").parent().index();
  let elem16 = $(".paz-16").parent().index();
  let massElem = [ 
    elem1, elem2, elem3, elem4,
    elem5, elem6, elem7, elem8,
    elem9,elem10,elem11,elem12,
    elem13, elem14, elem15, elem16
  ]
  
  let winComb = [0, 15, 6, 2, 13, 8, 9, 3, 14, 10, 4, 12, 5, 1, 11, 7]
  let check = true;
  for(let i = 0; i < massElem.length; i++){
  if (massElem[i]  != winComb[i]){
    check = false;
    clearInterval(timeID);
    clearInterval(intervalID);
    $(".message").text("It`s a pity, but you lost!");
    $(".butt-check").css("display", "none");
    $(".buttons").css("justify-content", "center");
    $(".check").attr("disabled", "disabled");
    break;
  }  
  if(check)  {
    clearInterval(timeID);
    clearInterval(intervalID);
    $(".message").text("Woohoo, well done, you did it!");
    $(".butt-check").css("display", "none");
    $(".buttons").css("justify-content", "center");
    
  } 
  check = true;
  }
});
