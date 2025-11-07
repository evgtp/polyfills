Array.prototype.myReduce = function (callback, initValue) {
   let accumulator = initValue;
   let startIndex = 0;

   if (initValue === undefined) {
      accumulator = this[0];
      startIndex = 1;
   }
   for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
   }

   return accumulator;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(result);
