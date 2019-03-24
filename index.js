// function baby(a, b) {
//   return a + b;
// }
// var y = baby(3, 2);
// console.log(y);

// let x = function(p, q) {
//   console.log(p + q);
// };
// x(5, 5);

// (function(x, y) {
//   console.log(x + y);
// })(3, 2);

// let a = (x, y) => x + y;
// console.log(a(4, 4));

// let q = function(name, age) {
//   this.name = name;
//   this.age = age;
//   this.fav = function() {
//     console.log("hello")
//   };
// };
// var i = new q("hammad", 20);
// console.log(i);
// console.log(i.name);
// console.log(i.age);
// i.fav();
// =========radius================
// var a = function(radius, pi) {
//   this.radius = radius;
//   this.pi = pi;
//   this.area = function() {
//     let area_is = this.radius ** 2 * this.pi;
//     console.log(area_is);
//   };
// };
// var b = new a(3, 4);
// var c = new a(2, 2);
// b.area();
// c.area();

// ========prototype=============

// var a = function(radius, pi) {
//   this.radius = radius;
//   this.pi = pi;
// };

// a.prototype.area = function() {
//   console.log("radius is:", this.radius);
//   console.log("the value of pi is:", this.pi);
// };
// var x = new a(2, 3.142);
// var y = new a(4, 3.14278);

// x.area();
// y.area();

// ===========constructor===============

// class new_rule {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat_kabab() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
// let v = new new_rule("maadi", "20");
// console.log(v);
// v.eat_kabab();

// console.log(v.name);
// console.log(v.age);

// ======abstraction==========
// ======1)inheritance
// class things {
//   constructor(mass, size) {
//     this.mass = mass;
//     this.size = size;
//   }
//   get_mass() {
//     console.log("The mass is", this.mass);
//   }
//   get_size() {
//     console.log("The size is", this.size);
//   }
// }

// let o = new things("44kg", "6inch");
// o.get_mass();
// o.get_size();

// ======function call in the body======
// class things {
//   constructor(mass, size) {
//     this.mass = mass;
//     this.size = size;
// this.get_mass();  (function call in a body)
//     this.get_size(); (function call in a body)
//   }
//   get_mass() {
//     console.log("The mass is", this.mass);
//   }
//   get_size() {
//     console.log("The size is", this.size);
//   }
// }

// let o = new things("44kg", "6inch");
// ========== many functions in  method==============

// class info {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getname() {
//     return () => {
//       console.log(this.name);
//     };
//   }
// }
// let z = new info("hammad", 20);
// let g = z.getname()();

// ========== many functions in  method==============

// class info {
//   constructor(name, age,fav) {
//     this.name = name;
//     this.age = age;
//     this.fav=fav;
//   }
//   getname() {
//     return () => {
//       console.log(this.name);
//       return () => {
//         console.log(this.age);
//         return ()=>{
//             console.log(this.fav)
//         }
//       };
//     };
//   }
// }
// let z = new info("hammad", 20,"avengers");
// let g = z.getname()()()();

//==========binds=========
// class info {
//   constructor(name, age, fav) {
//     this.name = name;
//     this.age = age;
//     this.fav = fav;
//   }

//   getname() {
//     return () => {
//       console.log(this.name);
//       return function() {
//         console.log(this);
//       }.bind({
//         paratha: "abd",
//         kabab: "cool"
//       });

//     };
//   }
// }
// let z = new info("hammad", 20, "avengers");
// let g = z.getname()()();

// =======closure========

function chicken(karahi, tikka) {
  return function keema() {
    console.log(`${karahi} ka saalan ${tikka}`);
  };
}console.log(chicken())
