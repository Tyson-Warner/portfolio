// index_script.js

(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  function swapMainColors(){
    const styles = getComputedStyle(root);
    const c1 = styles.getPropertyValue('--color-main1').trim();
    const c2 = styles.getPropertyValue('--color-main2').trim();
    root.style.setProperty('--color-main1', c2);
    root.style.setProperty('--color-main2', c1);
  }

  const pref = localStorage.getItem('lightModeSwap') === '1';
  if (pref) swapMainColors();

  btn.addEventListener('click', () => {
    swapMainColors();
    const toggled = localStorage.getItem('lightModeSwap') === '1';
    localStorage.setItem('lightModeSwap', toggled ? '0' : '1');
  });
})();
