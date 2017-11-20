var app={
  init: function(){
    this.initButtons();
    this.initFastClick();
    this.initHammer();
  },

  initFastClick: function () {
    FastClick.attach(document.body);
  },
  
  initButtons: function(){
    var buttonLight = document.querySelector('#light');
    var buttonDark = document.querySelector('#dark');
    
    buttonLight.addEventListener('click',this.makeItLight,false);
    buttonDark.addEventListener('click',app.makeItDark,false);
  },

  initHammer: function() {
    var zone = document.getElementById('zone-gestures');
    var hammertime = new Hammer(zone);
    
    hammertime.get('pinch').set({ enable: true });
    hammertime.get('rotate').set({ enable: true });

    zone.addEventListener('webkitAnimationEnd',function(e){
      zone.className='';
    });
    
     hammertime.on('doubletap', function(ev) {
      zone.className='doubletap';
    });

    hammertime.on('press', function(ev) {
      zone.className='press';
    });

    hammertime.on('swipe', function(ev) {
      var clase=undefined;
      direction=ev.direction;
      
      if (direction==4) clase='swipe-right';
      if (direction==2) clase='swipe-left';
      
      zone.className=clase;
    });


    hammertime.on('rotate', function(ev) {
      var umbral=25;
      if (ev.distance > umbral) zone.className='rotate';
    });
  },

  makeItLight: function(){
    document.body.className = 'light';
  },

  makeItDark: function(){
    document.body.className = 'darl';
  },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.init();
    }, false);
}

