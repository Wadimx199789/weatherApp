const span = document.querySelectorAll(".counter");

// Взять элемент, анимировать до 2000 за 2 секунды
animate({elem: span[0], to: 360, sec: 5});
animate({elem: span[1], to: 83, sec: 5});
animate({elem: span[2], to: 100, sec: 5});

function animate({elem, from = 0, to, sec}) {
  let tick = (to - from) / (60 * sec);
  loop();
  function loop() {
    elem.textContent = Math.round( from += tick );
    
    if( from >= to ) {
      // Прервать, как только дойдет до конца.
      elem.textContent = to;
      return;
    }
    
    requestAnimationFrame(loop);
  }
}