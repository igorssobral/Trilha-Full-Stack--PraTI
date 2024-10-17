AOS.init();

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Formulário enviado com sucesso!');
    this.reset();
});
