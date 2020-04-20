let count = +document.getElementById('count').innerHTML;
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener('click', () => {
    count--;
    document.getElementById('count').innerHTML=count;
});

plus.addEventListener('click', () => {
    count++;
    document.getElementById('count').innerHTML=count;
});
