let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoPlayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.pauseVideo();
    event.target.unMute();
}

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

// Track CTA clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        // Here you would typically send this event to your analytics
        console.log('CTA clicked:', this.textContent.trim());
    });
});