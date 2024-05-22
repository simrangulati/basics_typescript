"use strict";
exports.__esModule = true;
exports.unusedFunction = exports.usedFunction = void 0;
function usedFunction() {
    console.log('This function is used.');
}
exports.usedFunction = usedFunction;
function unusedFunction() {
    console.log('This function is never used.');
}
exports.unusedFunction = unusedFunction;
