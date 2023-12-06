const h1 = document.querySelector('h1');
const btn = document.querySelector('#colorBtn');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
})