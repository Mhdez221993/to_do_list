/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragAndDrop)
/* harmony export */ });
let target;

function sorting(source, target) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  if (savedList.length < 2) return;

  const sourceObj = savedList[source];
  const souceIndex = savedList[source].index;
  let targetIndex;
  // eslint-disable-next-line array-callback-return
  savedList.map((obj) => {
    if (obj.index === Number(target)) {
      targetIndex = savedList.indexOf(obj);
    }
  });

  savedList[source].index = savedList[targetIndex].index;
  savedList[targetIndex].index = souceIndex;

  savedList[source] = savedList[targetIndex];
  savedList[targetIndex] = sourceObj;
  localStorage.setItem('savedList', JSON.stringify(savedList));
}

function dragAndDrop(event, index) {
  const newEvent = event.type;
  const source = index;
  switch (newEvent) {
    case 'dragstart':
      event.target.classList.add('dragging');
      break;
    case 'dragend':
      event.target.classList.remove('dragging');
      sorting(source, target);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9kcmFnQW5kRHJvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRyYWdBbmREcm9wLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwibGV0IHRhcmdldDtcblxuZnVuY3Rpb24gc29ydGluZyhzb3VyY2UsIHRhcmdldCkge1xuICBjb25zdCBzYXZlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlZExpc3QnKSk7XG4gIGlmIChzYXZlZExpc3QubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gIGNvbnN0IHNvdXJjZU9iaiA9IHNhdmVkTGlzdFtzb3VyY2VdO1xuICBjb25zdCBzb3VjZUluZGV4ID0gc2F2ZWRMaXN0W3NvdXJjZV0uaW5kZXg7XG4gIGxldCB0YXJnZXRJbmRleDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICBzYXZlZExpc3QubWFwKChvYmopID0+IHtcbiAgICBpZiAob2JqLmluZGV4ID09PSBOdW1iZXIodGFyZ2V0KSkge1xuICAgICAgdGFyZ2V0SW5kZXggPSBzYXZlZExpc3QuaW5kZXhPZihvYmopO1xuICAgIH1cbiAgfSk7XG5cbiAgc2F2ZWRMaXN0W3NvdXJjZV0uaW5kZXggPSBzYXZlZExpc3RbdGFyZ2V0SW5kZXhdLmluZGV4O1xuICBzYXZlZExpc3RbdGFyZ2V0SW5kZXhdLmluZGV4ID0gc291Y2VJbmRleDtcblxuICBzYXZlZExpc3Rbc291cmNlXSA9IHNhdmVkTGlzdFt0YXJnZXRJbmRleF07XG4gIHNhdmVkTGlzdFt0YXJnZXRJbmRleF0gPSBzb3VyY2VPYmo7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZExpc3QnLCBKU09OLnN0cmluZ2lmeShzYXZlZExpc3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ0FuZERyb3AoZXZlbnQsIGluZGV4KSB7XG4gIGNvbnN0IG5ld0V2ZW50ID0gZXZlbnQudHlwZTtcbiAgY29uc3Qgc291cmNlID0gaW5kZXg7XG4gIHN3aXRjaCAobmV3RXZlbnQpIHtcbiAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgICAgc29ydGluZyhzb3VyY2UsIHRhcmdldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2xpc3QtaXRlbScpIHtcbiAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzJdLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==