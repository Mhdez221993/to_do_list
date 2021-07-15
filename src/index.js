import './style.css';

import dragAndDrop from './dragAndDrop';

class TaskList {
  constructor() {
    this.size = 0;
    this.ul = document.getElementById('task-list');
    this.savedList = JSON.parse(localStorage.getItem('savedList')) || [];
  }

  clearList() {
    this.savedList = [];
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
    this.displayAllTask();
  }

  addIndex() {
    if (this.savedList.length < 1) {
      return this.size;
    }
    return this.savedList[this.savedList.length - 1].index + 1;
  }

  addTask(book) {
    this.savedList.push(book);
    localStorage.setItem('savedList', JSON.stringify(this.savedList));
    this.size += 1;
  }

  updateList() {
    this.savedList = JSON.parse(localStorage.getItem('savedList')) || [];
  }

  displayAllTask() {
    this.ul.innerHTML = '';
    this.updateList();

    this.savedList.forEach((task, i) => {
      const li = document.createElement('li');
      li.className = 'list-item';
      li.draggable = 'true';
      li.addEventListener('dragstart', (e) => {
        dragAndDrop(e, i);
      });

      li.addEventListener('dragend', (e) => {
        dragAndDrop(e, i);
        this.displayAllTask();
      });

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
      this.ul.addEventListener('dragover', (e) => {
        dragAndDrop(e, i);
      });
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

window.addEventListener('load', () => {
  newList.displayAllTask();
});
