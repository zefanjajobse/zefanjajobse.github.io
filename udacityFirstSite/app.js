const banner = document.querySelector('.text-center');
banner.addEventListener('click', function () {
    const h1 = document.querySelector('h1');
    h1.style.backgroundColor = 'red';
    setTimeout(() => h1.style.backgroundColor = '', 200);
})