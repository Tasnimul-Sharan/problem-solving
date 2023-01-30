// function rotLeft(a, d) {
//   while (d) {
//     a.push(a.shift());
//     d--;
//   }
//   return a;
// }

function rotLeft(arr, d, n) {
  var temp = new Array(n);
  let k = 0;

  for (let i = d; i < n; i++) {
    temp[k] = arr[i];
    k++;
  }

  for (let i = 0; i < d; i++) {
    temp[k] = arr[i];
    k++;
  }

  for (let i = 0; i < n; i++) {
    console.log(temp[i] + " ");
  }
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let d = 2;
rotLeft(arr, d, n);
