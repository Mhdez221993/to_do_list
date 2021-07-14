let source; let
  target;

function swap(source, target) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  let sourceIndex;
  let targetIndex;
  savedList.map((obj) => {
    if (obj.index === Number(source)) {
      sourceIndex = savedList.indexOf(obj);
    } else if (obj.index === Number(target)) {
      targetIndex = savedList.indexOf(obj);
    }
  });

  savedList[targetIndex] = savedList[sourceIndex];
  localStorage.setItem('savedList', JSON.stringify(savedList));
}

export default function dragAndDrop(event) {
  const newEvent = event.type;
  switch (newEvent) {
    case 'dragstart':
      event.target.classList.add('dragging');
      source = event.target.children[2].innerHTML;
      break;
    case 'dragend':
      event.target.classList.remove('dragging');
      swap(source, target);
    //   location.reload();
      break;
    case 'dragover':
      target = event.target.children[2].innerHTML;
      break;
    default:
      break;
  }
}
