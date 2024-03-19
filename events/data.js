const events = [
  // coding category id=0
  [["T-SHIRT PAINTING","./images_arts/6.jpg"], ["2", "./images_arts/5.jpg"], ["POSTER", "./images_arts/4.jpg"], ["FREESTYLE", "./images_arts/3.jpg"], ["FIND AND PAINT", "./images_arts/1.jpg"], ["FACE PAINTING" ,"./images_arts/2.jpg"]],

  // robotics category id=1
  [
    ["CLASSICAL / SEMI<br> CLASSICAL & FOLK", "./images_dance/2.jpg"],
    ["WESTERN / <br>FREESTYLE","./images_dance/4.jpg"],
    ["GROUP DANCE","./images_dance/1.jpg"],
    ["STREET DANCE","./images_dance/3.jpg"],
    // ["DRONE DRAG"],
  ],

  // open category id=2
  [
    ["BASKETBALL","./image_sports/6.jpg"],
    ["CRICKET", "./image_sports/1.jpg"],
    ["VOLLEYBALL","./image_sports/3.jpg"],
    ["CHESS","./image_sports/2.jpg"],
    ["BADMINTON","./image_sports/5.jpg"],
    ["TABLE TENNIS","./image_sports/4.jpg"],
    // ["HOW UNICORN"],
    // ["SOLID WORKS"],
  ],

  // machine learning category id=3
  [["INDIAN SOLO <br>& DUET","./images_music/3.jpg"], ["WESTERN SOLO <br>& DUET","./images_music/2.jpg"], ["GROUP SONG","./images_music/1.jpg"], ["BATTLE OF BANDS","./images_music/4.jpg"]],

  // game dev & cyber sec. category id=4
  [["MONOACT /<br> DUET ACT","./images_drama/2.jpg"], ["CONVENTIONAL<br>DRAMA","./images_drama/3.jpg"], ["NUKKAD NATAK","./images_drama/1.jpg"]],

  // gaming category id=5
  [["CREATIVE WRITING","./images_literary/3.jpg"], ["DEBATE","./images_literary/1.jpg"], ["CAPTION WRITING","./images_literary/2.jpg"], ["QUIZ-GENERAL","./images_literary/4.jpg"], ["QUIZ-ANIME","./images_literary/5.jpg"], ["MEME","./images_literary/6.jpg"], ["JAM","./images_literary/5.jpg"], ["OPEN MIC","./images_literary/6.jpg"], ["SHARK TANK","./images_literary/4.jpg"]],
];

const category_img = [  
  // coding category id=0
  "./images/arts.svg",

  // robotics category id=1
  "./images/dance.svg",

  // open category id=2
  "./images/sports.svg",

  // machine learning category id=3
  "./images/music.svg",

  // game dev & cyber sec. category id=4
  "./images/drama.svg",

  // gaming category id=5
  "./images/literary.svg",
];

export { events, category_img };
