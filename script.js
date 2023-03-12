let protagonista = document.querySelector('#persona__prota');
let alegria = document.querySelector('#persona__happy');
let tristeza = document.querySelector('#persona__sad');
let nojo = document.querySelector('#persona__disgust');
let raiva = document.querySelector('#persona__anger');
let medo = document.querySelector('#persona__fear');

let btnDisney = document.querySelector('.btnWatch');
let imgDisney = document.getElementById('imgDisney');

btnDisney.addEventListener('mouseover', function (){
    imgDisney.src = '/imgs/iconDisneyWhite.png'
    
    btnDisney.addEventListener('mouseleave', function (){
        imgDisney.src = '/imgs/iconDisney.png'
    })
})




protagonista.addEventListener('mouseover', function(){
    protagonista.src = '/imgs/protaOn.jpg';

    protagonista.addEventListener('mouseleave', function(){
        protagonista.src = '/imgs/protaOff.jpg'
    })
})

alegria.addEventListener('mouseover', function(){
    alegria.src = '/imgs/alegriaOn.jpg';

    alegria.addEventListener('mouseleave', function(){
        alegria.src = '/imgs/alegriaOff.jpg'
    })
})

tristeza.addEventListener('mouseover', function(){
    tristeza.src = '/imgs/tristezaOn.jpg';

    tristeza.addEventListener('mouseleave', function(){
        tristeza.src = '/imgs/tristezaOff.jpg'
    })
})

raiva.addEventListener('mouseover', function(){
    raiva.src = '/imgs/raivaOn.jpg';

    raiva.addEventListener('mouseleave', function(){
        raiva.src = '/imgs/raivaOff.jpg'
    })
})

nojo.addEventListener('mouseover', function(){
    nojo.src = '/imgs/nojinhoOn.jpg';

    nojo.addEventListener('mouseleave', function(){
        nojo.src = '/imgs/nojinhoOff.jpg'
    })
})

medo.addEventListener('mouseover', function(){
    medo.src = '/imgs/medoOn.jpg';

    medo.addEventListener('mouseleave', function(){
        medo.src = '/imgs/medoOff.jpg'
    })
})




let imgTrailer = document.getElementById('imgTrailer');

imgTrailer.addEventListener('mouseover', function(){
    imgTrailer.src = '/imgs/trailerOn.jpg'

    imgTrailer.addEventListener('mouseleave', function(){
        imgTrailer.src = '/imgs/TrailerOff.jpg'
    })
})