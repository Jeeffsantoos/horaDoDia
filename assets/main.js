function load() {

    const section = document.querySelector('#section');
    const msg = document.querySelector('#msg');
    const img = document.querySelector('#imagem');
    const p = document.createElement('p');


    const date = new Date();
    const hour = date.getHours();

    msg.innerHTML = `Agora são ${hour} horas.`

    if (hour >= 0 && hour < 12) {
        img.src = './assets/img/manha.jpg'
        document.body.style.background = 'rgb(249, 216, 86)'
        section.appendChild(p)
        p.innerHTML = 'Bom dia!'
    } else if (hour >= 12 && hour < 18) {
        img.src = './assets/img/tarde.jpg'
        document.body.style.background = 'rgb(249, 176, 86)'
        section.appendChild(p)
        p.innerHTML = 'Boa tarde!'
    } else {
        img.src = './assets/img/noite.jpg'
        document.body.style.background = 'rgb(40, 0, 200)'
        section.appendChild(p)
        p.innerHTML = 'Boa noite!'
    }
}