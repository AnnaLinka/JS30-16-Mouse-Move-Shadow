const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const distance = 300; //100px


function shadow(e) {
    //traditional declaring
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    //ES6 declaring
    const { offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xDistance = Math.round((x / width * distance) - (distance / 2));
    const yDistance = Math.round((y / height * distance) - (distance / 2));

    text.style.textShadow = `
    ${xDistance}px ${yDistance}px 0 rgba(40,20,112,0.78),
    ${xDistance * -1}px ${yDistance}px 0 rgba(34, 148, 40, 0.88),
    ${xDistance}px ${yDistance * -1}px 0 rgba(148,34,143,0.89),
    ${xDistance * -1}px ${yDistance * -1}px 0 rgba(194,224,0,0.8)
    `;

}
hero.addEventListener('mousemove', shadow);