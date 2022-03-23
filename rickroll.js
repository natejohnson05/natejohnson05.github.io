//var mp3_url = 'https://s3-us-west-2.amazonaws.com/true-commitment/01-NeverGonnaGiveYouUp.mp3';

document.body.append("<script src='https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js'></script><script>var sound = new Howl({src: ['https://s3-us-west-2.amazonaws.com/true-commitment/01-NeverGonnaGiveYouUp.mp3'],volume: 1.0,onend: function () {alert('lol get rickrolled');}});sound.play()</script>");

/*if(document.getElementById('xss_audio') == null ) {
  var a = document.createElement('div');
  a.id='xss_audio';
  
  ('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"></script>
  <script>
      var sound = new Howl({
        src: ['https://s3-us-west-2.amazonaws.com/true-commitment/01-NeverGonnaGiveYouUp.mp3'],
        volume: 1.0,
        onend: function () {
          alert('lol get rickrolled');
        }
      });
      sound.play()
  </script>');
  document.body.appendChild(a);
}*/

alert('never gonna give you up');
alert('never gonna let you down');
alert('never gonna run around and desert you');
alert('never gonna make you cry');
alert('never gonna say goodbye');
alert('never gonna tell a lie and hurt you');
