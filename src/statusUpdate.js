function statusUpdate(e, i) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
//   savedList[i].completed = savedList[i].completed ? false : true;
  console.log(e.target);
  localStorage.setItem('savedList', JSON.stringify(savedList));
}
export default statusUpdate;