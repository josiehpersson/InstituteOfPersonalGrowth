const classes = document.querySelectorAll('.classes');

[].forEach.call(classes, function (classes) {
    classes.onmouseover = (e) => {
      if (e.target.classList.contains('classes-hover-out')) {
        e.target.classList.remove('classes-hover-out');
        e.target.classList.add('classes-hover-in');
      }
      e.target.classList.add('classes-hover-in');
    };
    classes.onmouseout = (e) => {
      if (e.target.classList.contains('classes-hover-in')) {
        e.target.classList.remove('classes-hover-in');
        e.target.classList.add('classes-hover-out');
      }
    };
  });


const socialBtn = document.querySelectorAll('.social-btn');


[].forEach.call(socialBtn, function (socialBtns) {
    socialBtns.onmouseover = (e) => {
      if (e.target.classList.contains('social-btn-hover-out')) {
        socialBtn.classList.remove('social-btn-hover-out');
        socialBtn.classList.add('social-btn-hover-in');
      }
      socialBtn.classList.add('social-btn-hover-in');
    };
    socialBtns.onmouseout = (e) => {
      if (e.target.classList.contains('social-btn-hover-in')) {
        socialBtn.classList.remove('social-btn-hover-in');
        socialBtn.classList.add('social-btn-hover-out');
      }
    };
  });