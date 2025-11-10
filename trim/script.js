String.prototype.myTrim = function () {
   let arr = this.split("");
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== " ") {
         newArr.push(arr[i]);
      }
   }
   return newArr.join("");
};

let str = "    hi     ";

let newStr = str.myTrim();
