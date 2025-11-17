String.prototype.myTrim = function () {
   const str = String(this);
   let start = 0;
   let end = str.length - 1;

   while (start <= end && str[start] === " ") {
      start++;
   }
   while (end >= start && str[end] === " ") {
      end--;
   }

   return str.substring(start, end + 1);
};

let str = "    hi     ";

let newStr = str.myTrim();
