import newList from './index'
let target;

function sorting(source, target) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  const sourceObj = savedList[source];
  const souceIndex = savedList[source].index;
  let targetIndex;
  savedList.map((obj) => {
    if (obj.index === Number(target)) {
      targetIndex = savedList.indexOf(obj);
    }
  });

  // const targetObj = savedList[targetIndex];
  savedList[source].index = savedList[targetIndex].index;
  savedList[targetIndex].index = souceIndex;

  savedList[source] = savedList[targetIndex];
  savedList[targetIndex] = sourceObj;
  localStorage.setItem('savedList', JSON.stringify(savedList));
  newList.displayAllTask();
}

export default function dragAndDrop(event, index) {
  const newEvent = event.type;
  const source = index;
  switch (newEvent) {
    case 'dragstart':
      event.target.classList.add('dragging');
      break;
    case 'dragend':
      event.target.classList.remove('dragging');
      sorting(source, target);
      //   location.reload();
      break;
    case 'dragover':
      if (event.target.className === 'list-item') {
        target = event.target.children[2].innerHTML;
      }
      break;
    default:
      break;
  }
}