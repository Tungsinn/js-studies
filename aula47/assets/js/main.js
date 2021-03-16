function meuTimer() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    let pisca;
    
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const elemento = e.target;
        if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            relogio.classList.remove('zerado');
            clearInterval(pisca);
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if(elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            relogio.classList.add('zerado');
            relogio.style.visibility = 'visible';
            clearInterval(pisca);
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
    
        if(elemento.classList.contains('pausar')) {
            relogio.classList.remove('zerado');
            relogio.classList.add('pausado');
            pisca = setInterval(function() {
                relogio.style.visibility = (relogio.style.visibility == 'hidden' ? 'visible' : 'hidden');
            }, 800);
            clearInterval(timer);
        }
    })
}

meuTimer();
