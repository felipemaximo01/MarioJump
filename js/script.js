const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const botao = document.querySelector('.botao');

var points = document.getElementById('pontuacao');

var pontuacao = 0;

const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop= setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    pontuacao++;

    points.textContent = pontuacao;

    if(pipePosition <= 120 && pipePosition >  0 && marioPosition<80){
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition+'px';

        mario.style.animation = 'none';
        mario.style.bottom = marioPosition+'px';

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
        
        botao.style.display = 'block';

        clearInterval(loop);
    }

},10)

function reniciar(){
    location.reload();
}

document.addEventListener('keydown', jump)