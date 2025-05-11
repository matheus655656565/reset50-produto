// Inicializa o player do YouTube
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoPlayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.pauseVideo();
    event.target.unMute();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        fbq('track', 'ViewContent');
    }
}

// Controle do vídeo
document.getElementById('videoCover').addEventListener('click', function() {
    const clickText = document.getElementById('clickText');
    clickText.classList.add('disintegrate');
    
    setTimeout(() => {
        this.style.display = 'none';
        document.getElementById('videoPlayer').style.display = 'block';
        if (player) {
            player.playVideo();
        }
    }, 500);
});

// Rastreamento de eventos nos botões
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id || 'cta_generic';
        fbq('trackCustom', buttonId + '_Click');
    });
});
