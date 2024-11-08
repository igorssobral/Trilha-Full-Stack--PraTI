document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev()
        } else if(event.key === 'ArrowRight'){
            swiper.slideNext()
        }
    })
})

   function openModal(){
         const modal = document.getElementById('modal');
        modal.style.display = 'flex'
    }
    function closeModal(){
         const modal = document.getElementById('modal');
        modal.style.display = 'none'

    }
   function openModalLogin(){
         const modal = document.getElementById('modal-login');
        modal.style.display = 'flex'
    }
    function closeModalLogin(){
         const modal = document.getElementById('modal-login');
        modal.style.display = 'none'

    }
