/*
 https://code.jquery.com/jquery-3.7.1.slim.min.js
https://smlog.github.io/test/youtube.js
 */
function clean() {
  $("ytd-guide-section-renderer").each(function () {
    let html = $(this).html();
    (html.indexOf("Gaming") > -1 || html.indexOf("More from YouTube") > -1) &&
      $(this).css("display", "none");
  });

  if (!sessionStorage.mysubscription) {
    $(
      $("ytd-guide-section-renderer")
        .toArray()
        .filter((e) => {
          let h = $(e).html();
          return (h.indexOf("Subscriptions") > -1) & (h.indexOf("Kid") > -1);
        })[0]
    )
      .find("a:contains(Show):contains(more)")
      .parent()
      .click();
    let Subscriptions = $(
      $("ytd-guide-section-renderer")
        .toArray()
        .filter((e) => {
          let h = $(e).html();
          return (h.indexOf("Subscriptions") > -1) & (h.indexOf("Kid") > -1);
        })[0]
    )
      .find('a[href^="/@"] yt-formatted-string')
      .toArray()
      .map((e) => e.innerText.trim());

    localStorage.setItem("mysubscription", JSON.stringify(Subscriptions));
    console.log(localStorage.mysubscription);
    if (Subscriptions.length) sessionStorage.mysubscription = 1;
  }

  $(
    "ytd-rich-item-renderer,ytd-compact-video-renderer,ytd-rich-grid-renderer"
  ).each(function () {
    $(this).html().toLowerCase().indexOf("kid") == -1 &&
      $(this).css("display", "none");
  });
  $("ytd-metadata-row-container-renderer").remove();
  if (
    location.href.toLowerCase().indexOf("gaming") > -1 ||
    (location.href.indexOf("/watch?v=") > -1 &&
      $(".ytd-watch-metadata").html() &&
      $(".ytd-watch-metadata").html().toLowerCase().indexOf("kid") == -1)
  ){
     let pass = 0 ;
    if(localStorage.mysubscription){
      let subscriptions = JSON.parse(localStorage.mysubscription);
     
      for(let i=0;i<subscriptions.length;i++){
         pass = $('#upload-info').text().indexOf(subscriptions[i])>-1
         if(pass)break;
      }
     
     //subscriptions
    }
    if(!pass){
          console.error($(".ytd-watch-metadata").html(),'redirect');
          location.href = "https://www.youtube.com/";
    }


  }

  $("ytd-reel-shelf-renderer,ytd-rich-shelf-renderer").each(function () {
    $(this).html().indexOf("Short") > -1 && $(this).remove();
  });
  $('#above-the-fold').css('color','green');
  setTimeout(clean, 3000);
}

clean();

