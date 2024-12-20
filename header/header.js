
window.addEventListener('scroll', (e) => {
    const scrollHeight = window.scrollY;
    const thresholdHeight = 500;

    const percentage = Math.min(scrollHeight, thresholdHeight) / thresholdHeight * 0.9;
    
    const color = `rgba(255, 255, 255, ${percentage})`;
    const blur = percentage * 10;
    
    // navbar changes
    $('.main-nav-section').css('background-color', color);
    $('.main-nav-section').css('backdrop-filter', `blur(${blur}px)`);
    if (percentage === 0.9) {
        $('.main-nav-section').css('box-shadow', '0 0 5px #0004');
    }
    else {
        $('.main-nav-section').css('box-shadow', 'none');
    }
})