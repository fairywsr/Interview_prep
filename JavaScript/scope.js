// loop m var i (var function scope rakhta hain is lia 3,3,3)
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`${i}`);
  }, 100);
}

// loop m let j Variable hr iteration pi new create hota hain is lia output 0, 1, 2
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(`${j}`);
  }, 100);
}

// scope in function
let y = "global";
function test() {
  let y = "local";
  console.log("without return", y);
}
test();
