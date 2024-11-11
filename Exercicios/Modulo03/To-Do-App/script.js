document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
  });
  exibirTarefas();
  window.addEventListener('scroll', AOS.refresh);
});

document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const taskValue = document
    .getElementById('task')
    .value.trim()
    .replace(/\s+/g, ' ');
  const urgencyValue = document.getElementById('urgency').value;
  const descriptionValue = document.getElementById('description').value;

  if (
    validateTask(taskValue, 'error-task') &&
    validateDescription(descriptionValue, 'error-desc')
  ) {
    const task = {
      id: Date.now(),
      task: taskValue,
      urgency: urgencyValue,
      taskDescription: descriptionValue,
      status: true,
    };

    saveTask(task);
    closeModalNewTask();
    document.getElementById('task-form').reset();
  }
});

function validateTask(task, classError) {
  let errorTask = document.getElementById(classError);
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (task === '' || task.length < 4) {
    errorTask.classList.remove('hidden');
    errorTask.innerText = 'Digite uma tarefa válida!';
    return false;
  }

  const taskExists = tasks.some(
    (t) => t.task.toLowerCase() === task.toLowerCase()
  );
  if (taskExists) {
    errorTask.classList.remove('hidden');
    errorTask.innerText = 'Essa Tarefa já existe!';
    return false;
  }
  errorTask.classList.add('hidden');
  errorTask.innerText = '';
  return true;
}
function validateUpdateTask(task, taskId, classError) {
  let errorTask = document.getElementById(classError);
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (task === '' || task.length < 4) {
    errorTask.classList.remove('hidden');
    errorTask.innerText = 'Digite uma tarefa válida!';
    return false;
  }

  const taskUpdate = tasks.find((t) => t.id === taskId);

  const taskExists = tasks.some(
    (t) => t.id !== taskUpdate.id && t.task.toLowerCase() === task.toLowerCase()
  );
  if (taskExists) {
    errorTask.classList.remove('hidden');
    errorTask.innerText = 'Essa Tarefa já existe!';
    return false;
  }
  errorTask.classList.add('hidden');
  errorTask.innerText = '';
  return true;
}

function validateDescription(description, classError) {
  let errorDesc = document.getElementById(classError);

  if (description === '' || description.length < 4) {
    errorDesc.classList.remove('hidden');
    errorDesc.innerText = 'Digite uma descrição válida!';
    return false;
  }

  errorDesc.classList.add('hidden');
  errorDesc.innerText = '';
  return true;
}

document.getElementById('task').addEventListener('input', function () {
  validateTask(this.value.trim().replace(/\s+/g, ' '), 'error-task');
});

document.getElementById('description').addEventListener('input', function () {
  validateDescription(this.value.trim().replace(/\s+/g, ' '), 'error-desc');
});

document
  .getElementById('update-description')
  .addEventListener('input', function () {
    validateDescription(this.value.trim().replace(/\s+/g, ' '), 'error-update-desc');
  });

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const noTasksMessage = document.querySelector('#task-list p');
  if (noTasksMessage) {
    noTasksMessage.remove();
  }
  addCard(task, 200);
  notify('success', 'Tarefa salva com sucesso!');
}

function finishTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const taskIndex = tasks.findIndex((t) => t.id === task.id);

  if (taskIndex !== -1) {
    tasks[taskIndex].status = false;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    notify('success', 'Tarefa Finalizada!');
    exibirTarefas();
  }
}

function updateTask(taskId) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const updatedTaskName = document
    .getElementById('update-task')
    .value.trim()
    .replace(/\s+/g, ' ');
  const updatedUrgencyName = document.getElementById('update-urgency').value;
  const updatedDescription =
    document.getElementById('update-description').value;

  if (
    validateUpdateTask(updatedTaskName, taskId, 'error-update-task') &&
    validateDescription(updatedDescription, 'error-update-desc')
  ) {
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex !== -1) {
      tasks[taskIndex].task = updatedTaskName;
      tasks[taskIndex].urgency = updatedUrgencyName;
      tasks[taskIndex].taskDescription = updatedDescription;

      localStorage.setItem('tasks', JSON.stringify(tasks));

      closeModalEditTask();
      notify('success', 'Tarefa Atualizada!');
      exibirTarefas();
    } else {
      notify('error', 'Tarefa não encontrada!');
    }
  }
}

function deleteTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const newListTask = tasks.filter((t) => t.id !== task.id);

  localStorage.setItem('tasks', JSON.stringify(newListTask));
  exibirTarefas();
}

function exibirTarefas() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const tasksSorted = tasks.sort((a, b) => a.task.localeCompare(b.task));
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  function renderTasks(filteredTasks) {
    if (filteredTasks.length > 0) {
      taskList.innerHTML = '';

      filteredTasks.forEach((task, index) => {
        addCard(task, index);
      });
    } else {
      taskList.innerHTML = '<p class="mt-20"> Nenhuma tarefa encontrada!</p>';
    }
  }

  renderTasks(tasksSorted);

  document
    .getElementById('search-tasks')
    .addEventListener('input', function () {
      const search = this.value.toLowerCase();

      const filteredTasks = search
        ? tasksSorted.filter((t) => t.task.toLowerCase().includes(search))
        : tasksSorted;

      renderTasks(filteredTasks);
    });
}

function addCard(task, index) {
  const taskList = document.getElementById('task-list');

  const cardTask = document.createElement('div');

  cardTask.setAttribute('data-aos', 'zoom-in');
  cardTask.setAttribute('data-aos-delay', (index * 100).toString());

  cardTask.className =
    'relative w-[300px] lg:w-[280px] max-h-[380px] bg-zinc-50 rounded-xl p-4 flex flex-col gap-1 shadow-xl border-2 border-teal-900/20 overflow-hidden';

  cardTask.innerHTML = `
  <div class='absolute left-2/4 -translate-x-2/4 top-1 w-[50px] h-3 rounded-md animate-pulse  ${
    task.urgency === 'high'
      ? 'bg-red-700'
      : task.urgency === 'medium'
      ? 'bg-yellow-400'
      : 'bg-green-600'
  }'></div>
    <h1 class="text-zinc-900">Tarefa</h1>
    <input
      type="text"
      class="h-10 w rounded-md text-zinc-500 pl-1  border-2  border-teal-900/10  ${
        task.status ? '' : 'line-through'
      }"
      disabled
      value="${task.task}"
    />
    <h1 class="text-zinc-900">Descrição</h1>
    <textarea
      rows="4"
      class="w-full rounded-md text-zinc-500 pl-1  border-2 border-teal-900/10 ${
        task.status ? '' : 'line-through'
      }  resize-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-neutral-200 [&::-webkit-scrollbar-thumb]:bg-teal-900/50 [&::-webkit-scrollbar-thumb]:rounded-lg"
      disabled
    >${task.taskDescription}</textarea>
    
    <div class="space-y-3">
      <button
        type="button"
        ${task.status ? '' : 'disabled'}
        class="w-full h-9 ${
          task.status
            ? 'text-zinc-50 bg-teal-700 hover:bg-teal-800'
            : 'text-green-500 border-2 border-green-500/20 font-bold '
        } rounded-md transition  finish-task"
      >
        ${
          task.status
            ? 'Concluir'
            : '<span class="text-green-500 animate-pulse space-x-4"><i class="bi bi-check-all mr-1"></i>Concluído</span> '
        }
      </button>
      <button
        type="button"
        class="w-full h-9 text-zinc-50 bg-zinc-700 hover:bg-zinc-800 rounded-md transition   ${
          task.status ? 'none' : 'hidden'
        } edit-task "
      >
        Editar
      </button>
      <button
        type="button"
        class="w-full h-9 text-zinc-50 bg-red-700 hover:bg-red-900 transition rounded-md delete-task"
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

function notify(status, note) {
  const alertDiv = document.getElementById('alert');

  status === 'success'
    ? alertDiv.classList.add('bg-green-700')
    : alertDiv.classList.add('bg-red-700');

  alertDiv.innerHTML = `${
    status === 'success'
      ? " <i class='bi bi-check-circle-fill mr-1'></i>"
      : "<i class='bi bi-x-circle'></i>"
  } ${note}`;

  alertDiv.classList.remove('hidden');

  alertDiv.classList.remove('translate-x-80');
  alertDiv.classList.add('translate-x-0');

  setTimeout(() => {
    alertDiv.classList.remove('translate-x-0');
    alertDiv.classList.add('translate-x-80');

    setTimeout(() => {
      alertDiv.classList.add('hidden');
      alertDiv.classList.remove('bg-green-700');
      alertDiv.classList.remove('bg-red-700');
    }, 200);
  }, 2000);
}

// Modal nova tarefa
function openModalNewTask() {
  const modal = document.getElementById('modal-new-task');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}
function closeModalNewTask() {
  const modal = document.getElementById('modal-new-task');
  const errorTask = document.getElementById('error-task');
  const errorDesc = document.getElementById('error-desc');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  document.getElementById('task').value = '';
  document.getElementById('description').value = '';
  errorTask.innerText = '';
  errorDesc.innerText = '';
}

// Modal editar tarefa
function openModalEditTask(task) {
  const modal = document.getElementById('modal-edit-task');

  const taskInput = document.getElementById('update-task');
  const urgencyInput = document.getElementById('update-urgency');
  const descriptionInput = document.getElementById('update-description');

  taskInput.value = task.task;
  urgencyInput.value = task.urgency;
  descriptionInput.value = task.taskDescription;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  document.getElementById('task-update-form').onsubmit = function (e) {
    e.preventDefault();
    updateTask(task.id);
  };
  document.getElementById('update-task').addEventListener('input', function () {
    validateUpdateTask(this.value.trim().replace(/\s+/g, ' '), task.id, 'error-update-task');
  });
}
function closeModalEditTask() {
  const modal = document.getElementById('modal-edit-task');
  const errorTask = document.getElementById('error-update-task');
  const errorDesc = document.getElementById('error-update-desc');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  document.getElementById('update-task').value = '';
  document.getElementById('update-description').value = '';
  errorTask.innerText = '';
  errorDesc.innerText = '';
}

// Modal excluir tarefa
function openModalRemoveTask(task) {
  const modal = document.getElementById('modal-remove-task');

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  modal.querySelector('.remove-task').addEventListener('click', function () {
    deleteTask(task);
    closeModalRemoveTask();
    notify('success', 'Tarefa excluida com sucesso!');
  });
}
function closeModalRemoveTask() {
  const modal = document.getElementById('modal-remove-task');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Modal concluir tarefa
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
