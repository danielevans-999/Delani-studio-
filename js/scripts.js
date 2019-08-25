$("#des").click(function() {
  $("#designs").toggle();
  $("#des").toggle();
});

$("#designs").click(function() {
  $("#des").toggle();
  $("#designs").toggle();
});

$("#dev").click(function() {
  $("#develop").toggle();
  $("#dev").toggle();
});

$("#develop").click(function() {
  $("#dev").toggle();
  $("#develop").toggle();
});

$("#pro").click(function() {
  $("#product").toggle();
  $("#pro").toggle();
});

$("#product").click(function() {
  $("#pro").toggle();
  $("#product").toggle();
});

$(".first").hover(function() {
  $(".first").mouseenter(function() {
    $("#once").show();
  });
  $(".first").mouseleave(function() {
    $("#once").hide();
  });
});

$(".second").hover(function() {
  $(".second").mouseenter(function() {
    $("#twice").show();
  });
  $(".second").mouseleave(function() {
    $("#twice").hide();
  });
});
$(".third").hover(function() {
  $(".third").mouseenter(function() {
    $("#thrice").show();
  });
  $(".third").mouseleave(function() {
    $("#thrice").hide();
  });
});
$(".fourth").hover(function() {
  $(".fourth").mouseenter(function() {
    $("#pourth").show();
  });
  $(".fourth").mouseleave(function() {
    $("#pourth").hide();
  });
});
$(".fifth").hover(function() {
  $(".fifth").mouseenter(function() {
    $("#pifth").show();
  });
  $(".fifth").mouseleave(function() {
    $("#pifth").hide();
  });
});
$(".sixth").hover(function() {
  $(".sixth").mouseenter(function() {
    $("#pisth").show();
  });
  $(".sixth").mouseleave(function() {
    $("#pisth").hide();
  });
});
$(".seventh").hover(function() {
  $(".seventh").mouseenter(function() {
    $("#peventh").show();
  });
  $(".seventh").mouseleave(function() {
    $("#peventh").hide();
  });
});
$(".eigth").hover(function() {
  $(".eigth").mouseenter(function() {
    $("#peigth").show();
  });
  $(".eigth").mouseleave(function() {
    $("#peigth").hide();
  });
});
//collect user data  use  interface logic

$("#end").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var comment=$("#message").val();
    
    if ($('#name').val() && $('#email').val() && $("#message").val() == '') {
      alert('please fill the form');
      return false;
    }
    else{
  
  alert("Hi" +name +";"+" your mesage has been recived.Thank you for your feedback.");
    }
  });