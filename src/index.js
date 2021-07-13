import './style.css';

class TaskList {
  constructor() {
    this.index = 0;
    this.ul = document.getElementById('task-list');
    this.savedList = JSON.parse(localStorage.getItem('savedList')) || [];
    this.displayAllTask();
  }

  clearList() {
    this.savedList = [];
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
    this.displayAllTask();
  }

  addIndex() {
    if (this.savedList.length < 1) {
      return this.index;
    }
    return this.savedList[this.savedList.length - 1].index + 1;
  }

  addTask(book) {
    this.savedList.push(book);
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
  }

  displayAllTask() {
    this.ul.innerHTML = '';
    this.savedList.forEach((task) => {
      const li = document.createElement('li');
      const index = document.createElement('spand');

      index.innerHTML = task.index;
      li.innerHTML = task.description;

      li.appendChild(index);
      this.ul.appendChild(li);
    });
  }
}

const newList = new TaskList();

document.getElementById('input-task')
  .addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const v = e.target.value;

      newList.addTask({ description: v, completed: false, index: newList.addIndex() });
      newList.displayAllTask();

      e.target.value = '';
      e.preventDefault();
    }
  });

document.getElementById('clear-all-task').addEventListener('click', () => {
  newList.clearList();
});