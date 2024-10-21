document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  exibirTarefas();
  window.addEventListener('scroll', AOS.refresh);
});

document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const taskValue = document.getElementById('task').value;
  const descriptionValue = document.getElementById('description').value;
  if (validateTask(taskValue, descriptionValue)) {
    const task = {
      task: taskValue,
      taskDescription: descriptionValue,
      status: false,
    };
    console.log('🚀 ~ task:', task);
    saveTask(task);
    document.getElementById('task-form').reset();
  } else {
    notify('erro ao salvar tarefa');
  }
});

function validateTask(task, description) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (task[0] === ' ' || task.length < 4) {
    return false;
  }
  if (description[0] === ' ' || description.length < 4) {
    return false;
  }

  if (tasks.includes(task)) {
    return false;
  }

  return true;
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  exibirTarefas();
  notify('Tarefa salva com sucesso!');
}

function exibirTarefas() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const taskList = document.getElementById('task-list');

  tasks.forEach((task, index) => {
    const cardTask = document.createElement('div');
    cardTask.className =
      'class="w-60 h-80 bg-zinc-800 rounded-md p-2 flex flex-col gap-1';

    cardTask.innerHTML = `

            <h1 class="text-zinc-200">Tarefa</h1>
            <input
              type="text"
              class="h-8 rounded-md text-zinc-800 pl-1 bg-zinc-100"
              disabled
              value="${task.task}"
            />
            <h1 class="text-zinc-200">Descriçao</h1>
            <textarea
              name=""
              id=""
              rows="3"
              class="w-full rounded-md text-zinc-800 pl-1 bg-zinc-100"
              disabled
            >${task.taskDescription}
</textarea
            >
            <div class="space-y-3">
              <button
                type="button"
                class="w-full h-8 text-zinc-50 bg-green-600 rounded-sm"
              >
                Concluir
              </button>
              <button
                type="button"
                class="w-full h-8 text-zinc-50 bg-slate-500 rounded-sm"
              >
                Editar
              </button>
              <button
                type="button"
                class="w-full h-8 text-zinc-50 bg-red-500 rounded-sm"
              >
                Excluir
              </button>
            </div>
        `;

    taskList.appendChild(cardTask);
  });
}

function notify(note) {
  const alertDiv = document.getElementById('alert');

  alertDiv.innerHTML = `<i class="bi bi-check-circle-fill mr-1"></i> ${note}`;
  alertDiv.classList.remove('text-red-800', 'bg-teal-50');

  alertDiv.classList.remove('hidden');

  alertDiv.classList.remove('translate-x-80');
  alertDiv.classList.add('translate-x-0');

  setTimeout(() => {
    alertDiv.classList.remove('translate-x-0');
    alertDiv.classList.add('translate-x-80');

    setTimeout(() => {
      alertDiv.classList.add('hidden');
    }, 300);
  }, 3000);
}
