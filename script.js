let plyr, bot;
let score = [0,0];

function penentu(){
    bot = Math.random();
    
    if(bot < 0.34){
        bot = 'batu';
    } else if(bot > 0.65){
        bot = 'kertas';
    } else{
        bot = 'gunting';
    }
    
    if(bot == plyr){
        alert('Hasilnya SERI');
    } else if(bot == 'batu'){
        alert((plyr == 'kertas') ? 'Anda MENANG' : 'Anda KALAH');
        (plyr == 'kertas') ? score[0]++ : score[1]++;
    } else if(bot == 'kertas'){
        alert((plyr == 'gunting') ? 'Anda MENANG' : 'Anda KALAH');
        (plyr == 'gunting') ? score[0]++ : score[1]++;
    } else if(bot == 'gunting'){
        alert((plyr == 'batu') ? 'Anda MENANG' : 'Anda KALAH');
        (plyr == 'batu') ? score[0]++ : score[1]++;
    }
    
    document.querySelector('.skor').textContent = score[0] + ' : ' + score[1];
}


function batu(){
    plyr = 'batu';
    penentu();
}
function kertas(){
    plyr = 'kertas';
    penentu();
}
function gunting(){
    plyr = 'gunting';
    penentu();
}
