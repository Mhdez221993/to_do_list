import './style.css';

class TaskList {
  constructor() {
    this.size = 0;
    this.ul = document.getElementById('task-list');
    this.savedList = [{ description: 'Time to read', completed: false, index: 0 }, { description: 'Fix linters', completed: false, index: 1 }, { description: 'Do the homework', completed: false, index: 2 }];
    this.displayAllTask();
  }

  clearList() {
    this.savedList = [];
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
    this.size += 1;
  }

  displayAllTask() {
    this.ul.innerHTML = '';

    this.savedList.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'list-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      const p = document.createElement('p');
      const index = document.createElement('spand');
      index.className = 'index';
      const button = document.createElement('i');
      button.classList.add('fa', 'fa-ellipsis-v', 'icon');

      p.innerHTML = task.description;
      index.innerHTML = task.index;

      li.appendChild(checkbox);
      li.appendChild(p);
      li.appendChild(index);
      li.appendChild(button);
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