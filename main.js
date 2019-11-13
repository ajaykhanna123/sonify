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
    },
    {
        'name': 'Jimmy_Choo_Choo_Ft_Ikka-Guri ',
        'artist': 'Ikka-Guri',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song7.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Main Tan Vi Pyar Kardan ',
        'artist': 'HappyRaiKoti',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song8.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Main Tera Boyfriend ',
        'artist': 'Arjit Singh',
        'album': 'Raabta',
        'duration': '4:02',
        'fileName': 'song9.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Majhe Di Jatti - Kanwar Chahal ',
        'artist': 'Kanwar Chahal',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song10.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Rabb Jane - Garry Sandhu',
        'artist': 'Garry Sandhu',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song11.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Qismat ',
        'artist': 'Ammy Virk',
        'album': 'Qismat',
        'duration': '4:02',
        'fileName': 'song12.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Mann Bharrya',
        'artist': 'B Praak',
        'album': 'Jaani',
        'duration': '4:02',
        'fileName': 'song13.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Munda iPhone Warga ',
        'artist': 'A-kay',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song14.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'One Dream ',
        'artist': 'Babbal Rai',
        'album': 'Dream',
        'duration': '4:02',
        'fileName': 'song15.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'One_Touch ',
        'artist': '-Garry_Sandhu-Roach_Killa-',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song16.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Peshi (Full Video) ',
        'artist': ' Zora Randhawa  Latest Punjabi Song 2016  Speed Records',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song17.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Na_Ja ',
        'artist': 'Pav_Dharia',
        'album': 'single-track',
        'duration': '4:02',
        'fileName': 'song18.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Yaara ',
        'artist': 'Sharry Mann',
        'album': 'Rocky Mental',
        'duration': '4:02',
        'fileName': 'song19.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'So_High ',
        'artist': 'Sidhu_Moose_Wala',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song20.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Dil Kafiraa -   ',
        'artist': 'Mickey Singh',
        'album': 'Kafiraa',
        'duration': '4:02',
        'fileName': 'song21.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Love Drive ',
        'artist': 'Jimmy Kaler',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song22.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Badnam -  ',
        'artist': 'Mankirt Aulakh',
        'album': 'Gangland',
        'duration': '4:02',
        'fileName': 'song23.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'LET ME LOVE YOU -  ',
        'artist': 'Justin Bieber - ATC  Alex Goot    KHS Cover',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song24.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Gangster Scene  ',
        'artist': 'gursevek dhillon',
        'album': 'Single Track',
        'duration': '4:02',
        'fileName': 'song25.mp3',
        'image':'6.jpg'
    },
    {
        'name': 'Gangland-',
        'artist': 'Mankirt Aulakh',
        'album': 'Gangland',
        'duration': '4:02',
        'fileName': 'song26.mp3',
        'image':'6.jpg'
    }
    
    
    ,
    {
        'name': 'Cant Forget You - Arjun (DjPunjab.Com).mp3',
        'artist': 'Arjun singh',
        'album': 'Single track',
        'duration': '4:50',
        'fileName': 'Cant Forget You - Arjun (DjPunjab.Com).mp3',
        'image':'27.jpg'
    }
               

  ]


  changeCurrentSongDetails(songs[0]);
  function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-artist').text(songObj.artist)
    $('.current-song-album').text(songObj.album)
    $('.current-song-duration').text(songObj.duration)
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
$('#songs').dataTable({
       'paging'=true
  });
}
