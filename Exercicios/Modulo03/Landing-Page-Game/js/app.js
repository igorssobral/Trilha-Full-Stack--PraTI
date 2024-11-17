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

    const gameInput = document.getElementById('gameInput');

    gameInput.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase();

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
        }
    });
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
