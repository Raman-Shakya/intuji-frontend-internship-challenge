
$('.faq').click((e) => {
    const target = e.currentTarget;
    const isOpened = target.classList.contains('active');
    
    $('.faq').removeClass('active');

    // if a faq was opened, close it.
    if (!isOpened)
        target.classList.toggle('active');
})