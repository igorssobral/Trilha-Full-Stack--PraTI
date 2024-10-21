document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  fetchTestemunhos();
  window.addEventListener('scroll', AOS.refresh);
});

document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

(function () {
  emailjs.init('PPgDwZ8zogi4zoyk0');
})();

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

fetch('./api/data.json')
  .then((response) => response.json())
  .then((data) => {
    carregarServicos(data.servicos);
    carregarPacotes(data.pacotes);
  })
  .catch((error) => console.error('Erro ao carregar os dados:', error));

function carregarServicos(servicos) {
  const servicosContainer = document.getElementById('servicos-container');

  servicos.forEach((servico, index) => {
    const servicoDiv = document.createElement('div');
    servicoDiv.className =
      'flex flex-col items-center gap-3 border p-4 rounded-lg shadow bg-white/50';
    servicoDiv.setAttribute('data-aos', 'fade-up');
    servicoDiv.setAttribute('data-aos-delay', (index * 150).toString());

    servicoDiv.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-teal-50">${servico.titulo}</h3>
            <p class="mb-4 text-zinc-300">${servico.descricao}</p>
            <a href="${servico.link}" target="_blank" class="min-w-[300px] text-center mt-auto bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">Solicite uma Consultoria Gratuita</a>
        `;

    servicosContainer.appendChild(servicoDiv);
  });
}

function carregarPacotes(pacotes) {
  const pacotesContainer = document.getElementById('pacotes-container');

  pacotes.forEach((pacote, index) => {
    const pacoteDiv = document.createElement('div');
    pacoteDiv.className =
      'flex items-center gap-3 border px-2 py-4 rounded-lg lg:h-[130px] shadow bg-white/50';
    pacoteDiv.setAttribute('data-aos', 'fade-up');
    pacoteDiv.setAttribute('data-aos-delay', (index * 150).toString());

    pacoteDiv.innerHTML = `
            <img src="${pacote.imagem}" alt="${pacote.titulo}" class="size-24 rounded-lg hover:scale-105 transition-transform" />
            <div class="h-full">
                <h3 class="font-bold text-teal-50">${pacote.titulo}</h3>
                <p class="text-zinc-300 text-sm lg:text-base">${pacote.descricao}</p>
                <div class="bottom-2 lg:bottom-3 fixed">
                <span class="font-bold mr-4 text-teal-400">${pacote.preco}</span>
                <a href="${pacote.link}" target="_blank" class=" bg-teal-600 text-white rounded mt-2 px-2 py-1 lg:px-4 hover:bg-slate-50 hover:text-teal-600 transition-colors">Saiba Mais</a>
                </div>
                
            </div>
        `;

    pacotesContainer.appendChild(pacoteDiv);
  });
}

async function fetchTestemunhos() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=8');
    const data = await response.json();
    const testemunhosContainer = document.getElementById(
      'testemunhos-container'
    );

    data.results.forEach((user, index) => {
      const testemunhoCard = document.createElement('div');
      testemunhoCard.classList.add(
        'flex',
        'w-[45%]',
        'h-auto',
        'md:h-72',
        'lg:w-52',
        '2xl:w-60',
        'flex-col',
        'items-center',
        'border',
        'p-4',
        'rounded-lg',
        'shadow',
        'bg-white/50'
      );

      testemunhoCard.setAttribute('data-aos', 'fade-up');
      testemunhoCard.setAttribute('data-aos-delay', (index * 200).toString());

      testemunhoCard.innerHTML = `
                <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" class="size-20 rounded-full" />
                <h3 class="font-bold text-teal-50 text-sm lg:text-base">${user.name.first} ${user.name.last}</h3>
                <div class="text-yellow-300 flex gap-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <i class="fa-solid fa-user"></i>
                <q class="mt-6 text-sm text-zinc-300 lg:pl-3 text-wrap">Uma experiência incrível! Acomodação confortável e passeios bem organizados. Super recomendo!</q>
            `;
      testemunhosContainer.appendChild(testemunhoCard);
    });
  } catch (error) {
    console.error('Erro ao carregar os testemunhos:', error);
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('text-red-500', 'font-semibold');
    errorMessage.textContent = 'Erro ao carregar os testemunhos.';
    testemunhosContainer.appendChild(errorMessage);
  }
}

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
  
    const alertDiv = document.getElementById('alert');
    emailjs.sendForm('service_du9xk5k', 'template_m0zpwa5', this).then(
      function () {
        alertDiv.innerHTML =
          ' <i class="bi bi-check-circle-fill mr-1"></i> Email enviado com sucesso!';
        alertDiv.classList.remove('text-red-800', 'bg-teal-50');

        alertDiv.classList.remove('hidden');

        alertDiv.classList.remove('translate-x-80');
        alertDiv.classList.add('translate-x-0');

        document.getElementById('contact-form').reset();

        setTimeout(() => {
          alertDiv.classList.remove('translate-x-0');
          alertDiv.classList.add('translate-x-80');

          setTimeout(() => {
            alertDiv.classList.add('hidden');
          }, 300);
        }, 3000);
      },
      function (error) {
        alertDiv.classList.add('text-red-800', 'bg-teal-50');
        alertDiv.innerHTML =
          ' <i class="bi bi-x-circle-fill"></i> Erro ao enviar email!';
      }
    );
  });

  document.addEventListener('keydown', function (event) {
    if(event.key === 'ArrowLeft') {
        swiper.slidePrev()
    } else if(event.key === 'ArrowRight'){
        swiper.slideNext()
    }
})