///This page is jQuery primarly for dom manipulation with styling///

$(() => {
  var today = new Date().toDateString();


  $('.topNav').prepend(today + '</p "class=`date`">' + " Welcome Animal Lover!! ").css({ "font-size": "1rem", color: "white", "font-family": "noteworthy" });



  /////homepage////

  $(function () {
    var header = $('.header');
    var backgrounds = ['url(images/new/az-amur-leopard-copyright-protected-small-1.jpg)no-repeat center',
      'url(images/new/az-sumatran-elephant-small.jpg)no-repeat center',
      'url(images/new/az-sumatran-orangutan-small.jpg)no-repeat center',
      'url(images/new/az-sumatran-tiger-copyright-protected-small.jpg)no-repeat center',
      'url(images/new/Cross_river_gorilla.jpg)no-repeat center',
      'url(images/new/Hawksbill_HH.jpg)no-repeat center',
      'url(images/new/javan-rhinoceros-340x200.jpg)no-repeat center',
      'url(images/new/saola.jpg)no-repeat center',
      'url(images/new/vaquita.jpg)no-repeat center',
      'url(images/new/Western-Gorilla.png)no-repeat center',

    ];
    var currentPicture = 0;

    function nextBackground() {
      header.css({
        'background': backgrounds[currentPicture = ++currentPicture % backgrounds.length],
        "background-size": "300px "
      });

      setTimeout(nextBackground, 3000);
    }
    setTimeout(nextBackground, 3000);
    header.css('background', backgrounds[1]);




    $('#homepageHeading').css({
      "font-size": "72px",
    });


  }); //$function//

  //Leopard //

  $("#leopardLink").click(() => {
    $("#leopardPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#leopardPageButton").click(() => {
    $("#leopardPage").hide();
    $('.animal,.topNav,.topH').show();

  });


  //CrossRiver Gorilla//


  $("#crossRiverLink").click(() => {
    $("#crossRiverPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#crossRiverPageButton").click(() => {
    $("#crossRiverPage").hide();
    $('.animal,.topNav,.topH').show();

  });


  //HawksBill Turtle//
  $("#hawksBillLink").click(() => {
    $("#hawksBillPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#hawksBillPageButton").click(() => {
    $("#hawksBillPage").hide();
    $('.animal,.topNav,.topH').show();

  });




  //Orangutan//
  $("#orangutanLink").click(() => {
    $("#orangutanPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#orangutanPageButton").click(() => {
    $("#orangutanPage").hide();
    $('.animal,.topNav,.topH').show();

  });


  //Elephant//
  $("#elephantLink").click(() => {
    $("#elephantPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#elephantPageButton").click(() => {
    $("#elephantPage").hide();
    $('.animal,.topNav,.topH').show();

  });




  //Saola//
  $('#saolaLink').click(() => {
    $("#saolaPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#saolaPageButton").click(() => {
    $("#saolaPage").hide();
    $('.animal,.topNav,.topH').show();

  });



  //VaQuita//
  $('#vaquitaLink').click(() => {
    $("#vaquitaPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#vaquitaPageButton").click(() => {
    $("#vaquitaPage").hide();
    $('.animal,.topNav,.topH').show();

  });


  //rinoceros//
  $('#rinocerosLink').click(() => {
    $("#rinocerosPage").show();
    $('.animal,.topNav,.topH').hide();

  });

  $("#rinocerosPageButton").click(() => {
    $("#rinocerosPage").hide();
    $('.animal,.topNav,.topH').show();

  });


  //Tiger
  $('#tigerLink').click(() => {
    $("#tigerPage").show();
    $('.animal,.topNav,.topH').hide();


  });

  $("#tigerPageButton").click(() => {
    $("#tigerPage").hide();
    $('.animal,.topNav,.topH').show();

  });


  //donation page
  $(".donateStyle").css("font-family", "noteworthy");


  $('.donationLink').click((e) => {
    e.preventDefault();
    $(".animalInfo").hide(2000);
    $('.donationpage').show(2000);

  });


  $('#donationpage').prepend('<p id="para">' + " Thank you for your support!!! " + '</p>').css({ "font-size": "30px", 'font-family': 'noteworthy', 'background-color': 'lightgrey' });



  $('#donate').css({ "font-size": "72px", 'font-family': 'noteworthy', "font-weight": "bold" });




  /// donation buttons click amount turn blue///
  $('#donatebtn1').click((e) => {
    e.preventDefault();
    $('#donatebtn1').css('background-color', 'lightblue');
  });

  $('#donatebtn2').click((e) => {
    e.preventDefault();
    $('#donatebtn2').css('background-color', 'lightblue');
  });

  $('#donatebtn3').click((e) => {
    e.preventDefault();
    $('#donatebtn3').css('background-color', 'lightblue');
  });

  $('#donatebtn4').click((e) => {
    e.preventDefault();
    $('#donatebtn4').css('background-color', 'lightblue');
  });

  $('#donatebtn5').click((e) => {
    e.preventDefault();
    $('#donatebtn5').css('background-color', 'lightblue');
  });

  $('#donatebtn6').click((e) => {
    e.preventDefault();
    $('#donatebtn6').css('background-color', 'lightblue');
  });


  ///if checked ////



  $("#processCost").click(() => {
    $('#donationCost').text(' Please charge me an additional $3.00').css("color", "green");

  });


  $("#auto").click(() => {
    $('#donationCost1').text(" Thank you for your monthly gift").css("color", 'purple');
  });


  //decoration///
  $("#underline").css({ "text-decoration": "underline" });

  $("#underline").hover(() => {
    $("#underline").css({
      "color": "blue"
    });
  });




  ////upon submit////
  $('#creditcardSubmit').click((e) => {
    e.preventDefault();
    $('#form,#returnButton').hide();
    $('#donate').prepend('<p>Thank you for your donation !!!</p>');
    $('#donationPageButton').show();


  });


  $('#donationPageButton, #returnButton').click(() => {
    location.replace("index.html")
  });


  $(document).ready(autosave);

  function autosave() {
    window.setTimeout(autosave, 5000);
    var inputValues = $('.input_form').serialize();
    $.post("_autosave.php", inputValues, function (data) {
      alert(data);
    });
  }
 

  ////Guess Who////

  $(".guesswhonav").click((e) => {
    e.preventDefault;
    $(".topNav, .topH, #homePageContainer, .donationpage ").hide()
    $(".guessWho").show();

  });

  $(".guessWhoClick").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal").fadeIn(1000)
    $('.guessWhoPara').fadeIn(1000);
    $(".fullAnimal,.guessWhoPara").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });

  $(".guessWhoClick1").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal1").fadeIn(1000)
    $('.guessWhoPara1').fadeIn(1000);
    $(".fullAnimal1,.guessWhoPara1").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });

  $(".guessWhoClick2").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal2").fadeIn(1000)
    $('.guessWhoPara2').fadeIn(1000);
    $(".fullAnimal2,.guessWhoPara2").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });

  $(".guessWhoClick3").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal3").fadeIn(1000)
    $('.guessWhoPara3').fadeIn(1000);
    $(".fullAnimal3,.guessWhoPara3").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });


  $(".guessWhoClick4").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal4").fadeIn(1000)
    $('.guessWhoPara4').fadeIn(1000);
    $(".fullAnimal4,.guessWhoPara4").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });

  $(".guessWhoClick5").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal5").fadeIn(1000)
    $('.guessWhoPara5').fadeIn(1000);
    $(".fullAnimal5,.guessWhoPara5").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });


  $(".guessWhoClick7").click(() => {
    $(".eye").fadeOut(1000);
    $(".fullAnimal7").fadeIn(1000)
    $('.guessWhoPara7').fadeIn(1000);
    $(".fullAnimal7,.guessWhoPara7").fadeOut(2000);
    $(".eye").fadeIn(1000)
  });






});//close on load function



