//var mp3_url = 'https://s3-us-west-2.amazonaws.com/true-commitment/01-NeverGonnaGiveYouUp.mp3';

if(document.getElementById('xss_audio') == null ) {
  var a = document.createElement('audio');
  a.src = 'https://s3-us-west-2.amazonaws.com/true-commitment/01-NeverGonnaGiveYouUp.mp3';
  a.autoplay='true';
  a.id='xss_audio';
  a.style.display='none';
  document.body.appendChild(a);
}

alert('never gonna give you up');
alert('never gonna let you down');
alert('never gonna run around and desert you');
alert('never gonna make you cry');
alert('never gonna say goodbye');
alert('never gonna tell a lie and hurt you');
alert('lol get rickrolled');
