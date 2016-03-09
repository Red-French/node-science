'use strict'

const chalk = require('chalk')  // chalk for colored console logs
const util = require('util')  // causes brackets to show in console log for arrays

const arr = [6,5,3,1,8,7,2,4]
const arr2 = [6,5,3,1,8,7,2,4]

function swap (array1, index1, index2) {  // swap places of data in array
  const temp = array1[index1]

  array1[index1] = array1[index2]
  array1[index2] = temp
}

function swap2 (array2, index1, index2) {  // swap places of data in array2
  const temp = array2[index1]

  array2[index1] = array2[index2]
  array2[index2] = temp
}

function bubbleSort (array1) {  // bubble sort for array1
  console.log('start bubble sort', arr)
  for (let j = 1; j < array1.length; j++) {
    for (let i = 0; i < array1.length - j; i++) {
      if (array1[i] > array1[i + 1]) {
        swap(array1, i, i + 1)
        console.log(chalk.red(util.inspect(array1)))  // RED console log
      }
      console.log(chalk.dim(util.inspect(array1)))  // DIM/GRAY console log
    }
  }

  return array1
}

function insertionSort (array2) {  // insertion sort for array2
  console.log('start insertion sort', arr2)
  for (let i = 0; i < array2.length - 1; i++) {
    console.log('outside loop', i)
    for (let j = 0; j < array2.length - 1; j++) {
      console.log('inside loop', j)
        if (array2[j] > array2[j + 1]) {  // 5  3  1
          console.log(chalk.green(util.inspect(array2)))  // GREEN console log
          swap2(array2, j, j + 1)  // 3  5  1
          console.log(chalk.black(util.inspect(array2)))  // BLACK console log
        }
    }
  }
  return array2
}

console.log('bubbled', bubbleSort(arr))
console.log('insertion', insertionSort(arr2))
