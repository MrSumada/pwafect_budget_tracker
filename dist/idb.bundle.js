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

eval("let db;\n\nconst request = indexedDB.open('pwafect_budget', 1);\n\nrequest.onupgradeneeded = function(event) {\n    \n    const db = event.target.result;\n    \n    db.createObjectStore('new_budget', { autoIncrement: true });\n};\n\nrequest.onsuccess = function(event) {\n\n    db = event.target.result;\n\n    if (navigator.onLine) {\n\n    }\n};\n\n\nrequest.onerror = function(event) {\n\n    console.log(event.target.errorCode);\n\n};\n\n\nfunction saveRecord(record) {\n\n    const transaction = db.transaction(['new_budget'], 'readwrite');\n\n    const budgetObjectStore = transaction.objectStore('new_budget');\n\n    budgetObjectStore.add(record);\n}\n\nfunction uploadBudget() {\n\n    const transaction = db.transaction(['new_budget'], 'readwrite');\n\n    const budgetObjectStore = transaction.objectStore('new_budget');\n\n    const getAll = budgetObjectStore.getAll();\n\n    getAll.onsuccess = function() {\n\n        if (getAll.result.length > 0) {\n            fetch('api/transaction', {\n                method: 'POST',\n                body: JSON.stringify(getAll.result),\n                headers: {\n                    Accept: 'application/json, text/plain, */*',\n                    'Content-Type': 'application/json'\n                }\n            })\n            .then(response => response.json())\n            .then(serverResponse => {\n                if (serverResponse.message) {\n                    throw new Error(serverResponse);\n                }\n                const transaction = db.transaction(['new_budget', 'readwrite']);\n                const budgetObjectStore = transaction.objectStore('new_budget');\n                budgetObjectStore.clear();\n\n                alert('Your new transactions have been saved!')\n            })\n            .catch(err => {\n                console.log(err);\n            });\n        }\n    };\n};\n\nwindow.addEventListener('online', uploadBudget);\n\n//# sourceURL=webpack://budget-app/./public/js/idb.js?");

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