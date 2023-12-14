/*
 https://code.jquery.com/jquery-3.7.1.slim.min.js
https://smlog.github.io/test/youtube.js
 */
function clean() {
  let firsturl = 'https://www.youtube.com/watch?v=BOJ4Po4ejpU';
  $("ytd-guide-section-renderer").each(function () {
    let html = $(this).html();
    (html.indexOf("Gaming") > -1 || html.indexOf("More from YouTube") > -1) &&
      $(this).css("display", "none");
  });

console.error('load');

  if (!sessionStorage.mysubscription) {
    try{
      
     $('video')[0].play();
    }catch(eee){
      
    }

    
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
      .map((e) => e.innerText.trim()).filter(e=>e.trim());
   if(Subscriptions.length){
         localStorage.mysubscription=JSON.stringify(Subscriptions);
      console.log(localStorage.mysubscription);
   }

    if (Subscriptions.length) sessionStorage.mysubscription = 1;
  }
  
   if(location.href==firsturl && localStorage.lasturl &&  localStorage.lasturl!=firsturl){
      location.href= localStorage.lasturl;
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
    (location.href.indexOf("/watch?v=") > -1 )
  ){
     let pass = localStorage.mysubscription.length<3?1:0 ;
    if(localStorage.mysubscription && localStorage.mysubscription.length>2){
      let subscriptions = JSON.parse(localStorage.mysubscription);
     
 
      let text = $('#upload-info').text();
      if(!text.trim())pass=1;
      else
      for(let i=0;i<subscriptions.length;i++){
         pass = $('#upload-info').text().indexOf(subscriptions[i])>-1
       console.log($('#upload-info').text(),"\n",subscriptions[i],"\n")
         if(pass){
           localStorage.lasturl=location.href;
           break;
           
         }
      }
     
     //subscriptions
    }
    if(!pass){
          console.error($(".ytd-watch-metadata").html(),'redirect');
         $('ytd-app').css('background-color','black');
          setTimeout(()=>{
            //location.href = "https://www.youtube.com/";
            location.href=firsturl;
          },5000);
          
    }


  }

  $("ytd-reel-shelf-renderer,ytd-rich-shelf-renderer").each(function () {
    $(this).html().indexOf("Short") > -1 && $(this).remove();
  });
  $('#above-the-fold').css('color','green');
  setTimeout(clean, 3000);
}

clean();

setTimeout(()=>{
  try{
    console.log('fullscreen');
    $('.ytp-fullscreen-button.ytp-button').click();
    $("video")[0].requestFullscreen();
  }catch(ee){
    console.log(ee)
  }
},10000)


