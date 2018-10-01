import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-yet',
  templateUrl: './not-yet.component.html',
  styleUrls: ['./not-yet.component.css']
})
export class NotYetComponent implements OnInit {
  title = 'app';
  imgSrc = '../assets/images/2_skill_1.png';
  audioSrc = '../assets/sounds/2_sound_1.mp3';

  audio = new Audio();
  doPlay = true;
  α = 0;
  //https://github.com/joshuaduffy/dota2api/blob/master/dota2api/ref/heroes.json
  //https://github.com/kronusme/dota2-api/blob/master/data/heroes.json
  heroes = [{
    'localized_name': 'Anti-Mage',
    'url_full_portrait': 'http://cdn.dota2.com/apps/dota2/images/heroes/antimage_full.png',
    'name': 'antimage',
    'id': 1,
    'skillsNo': 3

  }, {
    'localized_name': 'Axe',
    'url_full_portrait': 'http://cdn.dota2.com/apps/dota2/images/heroes/axe_full.png',
    'name': 'axe',
    'id': 2,
    'skillsNo': 4
  }
    //,
    //{
    //  "localized_name": "Bane",
    //  "url_full_portrait": "http://cdn.dota2.com/apps/dota2/images/heroes/bane_full.png",
    //  "name": "bane",
    //  "id": 3,
    //  'skillIcons': [1, 2, 3, 4]
    //}
  ];

  ngOnInit() {
    // document.getElementById('image-container').
    this.runCooldownTimer();

  }
  notReady() {

    this.audio.src = this.audioSrc;
    if (this.audio !== undefined) {
      this.audio.pause();
    }
    this.audio.load();
    this.audio.play();

    const hero = this.heroes[Math.floor(Math.random() * this.heroes.length)];

    const heroId = hero.id;
    const skillId = Math.floor(Math.random() * (hero.skillsNo - 1 + 1)) + 1;

    const soundId = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

    this.α = 0;
    this.sleep(100);

    this.imgSrc = '../assets/images/' + heroId + '_skill_' + skillId + '.png';
    this.audioSrc = '../assets/sounds/' + heroId + '_sound_' + soundId + '.mp3';

    // this.imgSrc = '../assets/images/1_skill_1.png';
    // this.audioSrc = '../assets/sounds/1_sound_1.mp3';

  }

  sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  runCooldownTimer() {
  
    var seconds = 10;
    var doPlay = true;
    var loader = document.getElementById('loader')
     
      , π = Math.PI
      , t = (seconds / 360 * 1000);

    var self = this;
    (function draw() {
      self.α++;
      self.α %= 360;
      var r = (self.α * π / 180)
        , x = Math.sin(r) * 150
        , y = Math.cos(r) * - 150
        , mid = (self.α > 180) ? 1 : 0
        , anim = 'M 0 0 v -150 A 150 150 1 '
          + mid + ' 1 '
          + x + ' '
          + y + ' z';

      loader.setAttribute('d', anim);

      if (doPlay) {
        setTimeout(draw, t); // Redraw
      }
    })();
  }
}
