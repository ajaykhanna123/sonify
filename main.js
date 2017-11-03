$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});
function fancyTimeFormat(time)
{
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
//All functions     end here............................

$(".play-icon").on('click',function(){
  togglesong();
});
$("body").on('keypress',function(event){
  if(event.keyCode==32){
    togglesong();
  }
});
function togglesong()
{
  var song=document.querySelector("audio");
  if(song.paused==true)
  {
    song.play();
    $(".play-icon").removeClass("fa-play-circle").addClass("fa-pause-circle");
  }
  else
   {
     song.pause();
     $(".play-icon").removeClass("fa-pause-circle").addClass("fa-play-circle");
   }
}
function updateCurrentTime()
{
  var song=document.querySelector('audio');
  var currentTime=Math.floor(song.currentTime);
  currentTime=fancyTimeFormat(currentTime);
  var duration=Math.floor(song.duration);
  duration=fancyTimeFormat(duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
}







window.onload=function(){

  var songs = [{
        'name': 'Ik supna hai mera',
        'artist': 'Amber Vashisht',
        'album': 'Ik supna',
        'duration': '4:00',
       'fileName': 'song1.mp3',
       'image':'1.jpg'
    },
    {
        'name': 'Excuses',
        'artist': 'Garry Sandhu',
        'album': 'Excuses',
        'duration': '4:36',
        'fileName': 'song2.mp3',
        'image':'2.jpg'
    },
    {
        'name': 'Putt Jatt da',
        'artist': 'Pavie Ghuman',
        'album': 'Jatt',
        'duration': '4:36',
        'fileName': 'song3.mp3',
        'image':'3.jpg'
    },
    {
        'name': 'Big Dreams',
        'artist': 'HappyRaiKoti',
        'album': 'Dreams',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'4.png'
    },
    {
        'name': 'Bom Diggy ',
        'artist': 'Zack Knight',
        'album': 'Dreams',
        'duration': '3:27',
        'fileName': 'song5.mp3',
        'image':'5.jpg'
    },
    {
        'name': 'Ik vaari hor soch le ',
        'artist': 'Harish Verma',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song6.mp3',
        'image':'6.jpg'
    }

  ]
  changeCurrentSongDetails(songs[0]);
  function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}


  setInterval(function()
  {
    updateCurrentTime();
  },1000);
  var songNumber=1;
  var isPlaying=false;
  function addSongNameClickEvent(songObj,position){
    var songName=songObj.fileName;
   var id='#song'+ position;
 $(id).click(function(){
   var audio=document.querySelector('audio');
   var currentsong=audio.src;
   if(songNumber !==position){
     audio.src=songName;
     songNumber=position;
     changeCurrentSongDetails(songObj);
   }
   togglesong();
 });
 }
 for(var i =0; i < songs.length;i++) {
    var obj = songs[i];
    var name = '#song' + (i+1);
    var song = $(name);
    song.find('.song-name').text(obj.name);
    song.find('.song-artist').text(obj.artist);
    song.find('.song-album').text(obj.album);
    song.find('.song-length').text(obj.duration);
    addSongNameClickEvent(obj,i+1);
}
}
