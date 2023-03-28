const smilesAll = document.querySelectorAll(".smile");
const counters = document.querySelectorAll(".counter");
const voting = document.querySelectorAll(".voting");

console.log(smilesAll);
console.log(counters);

function increaseValue(counter) {
    let count = 0;

    return function() {
        count++;
        counter.innerText = count;
    }
}

// smilesAll.forEach((currentSmile, index) => {
//     currentSmile.addEventListener("click", increaseValue(counters[index]));
// })

// You need to attach a listener to a parent element, then check event.target

voting.addEventListener("click", (event) => {
  if (event.target.contain("smile")) {
    increaseValue();
  }
})
// According to your markup parent element, you need to use the tr



