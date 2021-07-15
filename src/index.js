import newTask from './addAndRemove';

document.getElementById('input-task')
  .addEventListener('keypress', (e, i) => {
    if (e.key === 'Enter') {
      const v = e.target.value;

      e.target.value = '';
      e.preventDefault();
      newTask(v);
    }
  });
