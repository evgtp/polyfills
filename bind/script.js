Function.prototype.myBind = function (context) {
   let args = Array.prototype.slice.call(arguments, 1);
   return function () {
      let newArgs = Array.prototype.slice.call(arguments);
      let allArgs = args.concat(newArgs);

      return this.apply(context, allArgs);
   };
};

const obj = {
   name: "Object",
   greet: function (greeting, punctuation) {
      console.log(`${greeting}, ${this.name}${punctuation}`);
   },
};

const boundGreet = obj.greet.myBind(obj, "Hi!");

boundGreet("!");
