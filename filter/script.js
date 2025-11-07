Array.prototype.myFilter = function (callback, arg) {
   const arr = [];

   for (let i = 0; i < this.length; i++) {
      if (callback.call(arg, this[i], i, this)) arr.push(this[i]);
   }

   return arr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.myFilter((el) => el % 2 === 0);

console.log(result);
