

let whack = document.querySelector('.tikus');

document.addEventListener('scroll', function () {
    let value = window.scrollY;
    // console.log(value)

    whack.style.marginBottom = -value + 'px';
})