const taskForm = document.querySelector('form')
const taskInput = document.querySelector('input')
const  taskList = document.querySelector('.tasks__list')


taskForm.addEventListener('submit', function (event){
   if(taskInput.value.trim() === ''){
      return
   }
   const div = document.createElement('div')
   taskList.insertAdjacentElement('afterbegin',div)
   div.classList.add('task')
   div.insertAdjacentHTML('afterbegin',`<div class="task__title">${taskInput.value}</div>`)
   div.insertAdjacentHTML('beforeend','<a href="#" class="task__remove">&times;</a>')
   taskInput.value = ''
   const task = document.querySelector('.task')
   task.children[1].onclick = function () {
      task.remove()
   }
})


