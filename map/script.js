Array.prototype.myMap = function (callback, arg) {
   let arr = [];

   for (let i = 0; i < this.length; i++) {
      arr[i] = callback.call(arg, this[i], i, this);
   }

   return arr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.myMap((el) => el * 2);

console.log(result);
