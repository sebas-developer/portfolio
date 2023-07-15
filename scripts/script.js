addEventListener("load", (event) => { 
  setTimeout(() => {
    element = document.getElementById('website-loader');
    element.style.opacity = 0;
  }, 800);
});

function popup(name) {
  let element = document.getElementById(name);
  element.classList.remove('inactive');
  element.classList.add('active');

  let non_scroll_bg = document.getElementById('body');
  non_scroll_bg.classList.add('non-scroll')
}

function close_popup(name) {
    let element = document.getElementById(name);

    element.classList.remove('active');
    element.classList.add('inactive');
  
    let non_scroll_bg = document.getElementById('body');
    non_scroll_bg.classList.remove('non-scroll');
  }

function copy_to_clipboard() {
  navigator.clipboard.writeText('sbampe@gmail.com');

  let element = document.getElementById('copied-popup');

  element.classList.add('active');
  setTimeout(() => {
    element.classList.remove('active');
    element.classList.add('inactive');
  }, 5000);

}
