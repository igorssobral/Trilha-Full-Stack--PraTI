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
      id: Date.now(),
      task: taskValue,
      taskDescription: descriptionValue,
      status: true,
    };
    console.log('🚀 ~ task:', task);
    saveTask(task);
    closeModalNewTask();
    document.getElementById('task-form').reset();
  }
});

function validateTask(task, description) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (task[0] === ' ' || task.length < 4) {
    notify('Digite uma tarefa válida!');
    return false;
  }
  if (description[0] === ' ' || description.length < 4) {
    notify('Digite uma descrição válida!');
    return false;
  }

  const taskExists = tasks.some((t) => t.task === task);

  if (taskExists) {
    notify('Essa Tarefa já existe!');
    return false;
  }

  return true;
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  addCard(task);
  notify('Tarefa salva com sucesso!');
}

function finishTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const updatedTask = {
    ...task,
    status: false,
  };
  const taskIndex = tasks.findIndex((t) => t.id === task.id);

  if (taskIndex !== -1) {
    tasks[taskIndex].status = false;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    notify('Tarefa Finalizada!');
    exibirTarefas();
  }
}

function updateTask(taskId) {
  console.log('🚀 ~ updateTask ~ taskId:', taskId);
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const updatedTaskName = document.getElementById('update-task').value.trim();
  const updatedDescription = document
    .getElementById('update-description')
    .value.trim();

  if (updatedTaskName === '' || updatedDescription === '') {
    notify('Erro: Preencha todos os campos!');
    return;
  }

  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  const taskt = tasks.find((t) => t.id === taskId);
  const taskExists = tasks.some((t) => t.task === taskt.task);

  if (taskExists) {
    notify('Ja existe uma tarefa com esse nome!');

    return;
  }
  if (taskIndex !== -1) {
    tasks[taskIndex].task = updatedTaskName;
    tasks[taskIndex].taskDescription = updatedDescription;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    closeModalEditTask();
    notify('Tarefa Atualizada!');
    exibirTarefas();
  } else {
    notify('Erro: Tarefa não encontrada!');
  }
}

function deleteTask(task) {
  console.log('🚀 ~ updateTask ~ task:', task);
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  console.log('🚀 ~ deleteTask ~ tasks:', tasks);

  const newListTask = tasks.filter((t) => t.task !== task.task);

  localStorage.setItem('tasks', JSON.stringify(newListTask));
  exibirTarefas();
}

function exibirTarefas() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const tasksSorted = tasks.sort((a, b) => a.task.localeCompare(b.task));
console.log(tasks.length)
  const taskList = document.getElementById('task-list');
  tasks.length < 4
    ? taskList.classList.add('justify-center')
    : taskList.classList.add('justify-start');
  taskList.innerHTML = '';

  tasksSorted.forEach((task, index) => {
    addCard(task);
  });
}

function openModalNewTask() {
  const modal = document.getElementById('modal-new-task');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModalNewTask() {
  const modal = document.getElementById('modal-new-task');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}
function openModalEditTask(task) {
  const modal = document.getElementById('modal-edit-task');

  const taskInput = document.getElementById('update-task');
  const descriptionInput = document.getElementById('update-description');

  taskInput.value = task.task;
  descriptionInput.value = task.taskDescription;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  document.getElementById('task-update-form').onsubmit = function (e) {
    e.preventDefault();
    updateTask(task.id);
  };
}

function closeModalEditTask() {
  const modal = document.getElementById('modal-edit-task');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

function openModalRemoveTask(task) {
  const modal = document.getElementById('modal-remove-task');

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  modal.querySelector('.remove-task').addEventListener('click', function () {
    deleteTask(task);
    closeModalRemoveTask();
    notify('Tarefa excluida com sucesso!');
  });
}

function closeModalRemoveTask() {
  const modal = document.getElementById('modal-remove-task');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}
function openModalFinishTask(task) {
  const modal = document.getElementById('modal-finish-task');

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  modal.querySelector('.finish-task').addEventListener('click', function () {
    finishTask(task);
    closeModalFinishTask();
  });
}

function closeModalFinishTask() {
  const modal = document.getElementById('modal-finish-task');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

function addCard(task) {
  const taskList = document.getElementById('task-list');

  const cardTask = document.createElement('div');
  cardTask.className =
    'w-[300px] lg:w-60 max-h-[350px] bg-zinc-50 rounded-xl p-4 flex flex-col gap-1 shadow-xl border-2 border-teal-900/20';

  cardTask.innerHTML = `
    <h1 class="text-zinc-900">Tarefa</h1>
    <input
      type="text"
      class="h-10 rounded-md text-zinc-800 pl-1  border-2 border-teal-900/10"
      disabled
      value="${task.task}"
    />
    <h1 class="text-zinc-900">Descrição</h1>
    <textarea
      rows="3"
      class="w-full rounded-md text-zinc-800 pl-1  border-2 border-teal-900/10"
      disabled
    >${task.taskDescription}</textarea>
    
    <div class="space-y-3">
      <button
        type="button"
        ${task.status ? '' : 'disabled'}
        class="w-full h-9 ${
          task.status
            ? 'text-zinc-50 bg-teal-700'
            : 'text-green-500 border-2 border-green-500/20'
        } rounded-md transition duration-1000 finish-task"
      >
        ${
          task.status
            ? 'Concluir'
            : '<span class="text-green-500 animate-pulse space-x-4"><i class="bi bi-check-all mr-1"></i>Concluído</span> '
        }
      </button>
      <button
        type="button"
        class="w-full h-9 text-zinc-50 bg-zinc-700 rounded-md  ${
          task.status ? 'none' : 'hidden'
        } edit-task "
      >
        Editar
      </button>
      <button
        type="button"
        class="w-full h-9 text-zinc-50 bg-red-500 rounded-md delete-task"
      >
        Excluir
      </button>
    </div>
  `;

  taskList.appendChild(cardTask);

  cardTask.querySelector('.edit-task').addEventListener('click', function () {
    openModalEditTask(task);
  });

  cardTask.querySelector('.delete-task').addEventListener('click', function () {
    openModalRemoveTask(task);
  });

  cardTask.querySelector('.finish-task').addEventListener('click', function () {
    openModalFinishTask(task);
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
