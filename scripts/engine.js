$(function() {

  // [id: [url, state]] (id have to be without '#')
  var content = {
    "24h-solaris-item": {url: "24h_solaris.html", state: "off"},
    "posluszny-piksel-item": {url: "posluszny_piksel.html", state: "off"},
    "nama-item": {url: "nama.html", state: "off"},
    "zona-opus-posth-item": {url: "zona_opus_posth.html", state: "off"}
  };

  // Menu switch (on/off) button behavior
  $("#menu-switch-button-text").click(function() {
    $("#top").toggleClass("menu-is-open menu-is-close");

    $("#menu-switch-button-text").text(function(i, text) {
      return text == "-" ? "+" : "-";
    });

    $("#menu-container").toggle();
  });

  // Collapse list on loading
  $(".menu-item").parent("li").addClass("has-list");

  // Expand/collapse on click
  $(".menu-item").click(function() {
    $(this).siblings("li").toggle();
    $(this).parent().toggleClass("has-list has-no-list");
  });

  // Switching content

  $(".menu-item").click(function() {
    var id = $(this).attr("id");

    if (typeof id != "undefined") {
      if (content[id].state == "off") {
        $("#content-container").fadeOut(1000, function() {
          $("#content-container").load(content[id].url, function(){
            $("#content-container").fadeIn(1000);
          });
        });
        content[id].state = "on";
      } else {
        content[id].state = "off";
      }
    }
  });

});
