/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/idb.js":
/*!**************************!*\
  !*** ./public/js/idb.js ***!
  \**************************/
/***/ (() => {

eval("// let db;\n\n// const request = indexedDB.open('pwafect_budget', 1);\n\n// request.onupgradeneeded = function(event) {\n//     const db = event.target.result;\n//     db.createObjectStore('new_budget', { autoIncrement: true });\n// };\n\n// request.onsuccess = function(event) {\n//     db = event.target.result;\n//     if (navigator.onLine) {\n//         console.log(\"navigator online\")\n//         uploadBudget();\n//     }\n// };\n\n// request.onerror = function(event) {\n//     console.log(event.target.errorCode);\n// };\n\n\n\n// function uploadBudget() {\n//     const transaction = db.transaction(['new_budget'], 'readwrite');\n//     const budgetObjectStore = transaction.objectStore('new_budget');\n//     const getAll = budgetObjectStore.getAll();\n//     getAll.onsuccess = function() {\n//         if (getAll.result.length > 0) {\n//             console.log('uploading transactions...')\n//             fetch('/api/transaction', {\n//                 method: 'POST',\n//                 body: JSON.stringify(getAll.result),\n//                 headers: {\n//                     Accept: 'application/json, text/plain, */*',\n//                     'Content-Type': 'application/json'\n//                 }\n//             })\n//             .then(response => response.json())\n//             .then(serverResponse => {\n//                 if (serverResponse.message) {\n//                     throw new Error(serverResponse);\n//                 }\n//                 const transaction = db.transaction(['new_budget'], 'readwrite');\n//                 const budgetObjectStore = transaction.objectStore('new_budget');\n//                 budgetObjectStore.clear();\n\n//                 alert('Your new transactions have been saved!')\n//             })\n//             .catch(err => {\n//                 console.log(err);\n//             });\n//         }\n//     };\n// };\n\n// window.addEventListener('online', uploadBudget);\n\n//# sourceURL=webpack://budget-app/./public/js/idb.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/idb.js"]();
/******/ 	
/******/ })()
;