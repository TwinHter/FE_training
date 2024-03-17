const taskButton = document.querySelector('#confirm-input');
const taskBox = document.querySelector('#task-input');
const taskList = document.querySelector('.task-container');
taskButton.addEventListener('click', (e) => {
  console.log(taskBox.value);
  if(taskBox.value == '') alert('Please Enter Task');
  else {
    let newTask = document.createElement('div');
    let para = document.createElement('li');
    para.innerText = taskBox.value;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Del';
    deleteButton.style.fontWeight = 'bolder';

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa fa-check"></i>';

    newTask.appendChild(para);
    newTask.appendChild(checkButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskBox.value = '';
    console.log(taskList);

    checkButton.setAttribute('id', 'check-btn');
    checkButton.addEventListener('click', (e) => {
      para.classList.toggle('active');
      checkButton.classList.toggle('active');
      if(checkButton.classList.contains('active')) {
        checkButton.innerHTML = '<i class="fa fa-close"></i>'
      }
      else {
        checkButton.in nerHTML = '<i class="fa fa-check"></i>'
      }
    })
    deleteButton.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    })
  } 
});

