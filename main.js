const smilesAll = document.querySelectorAll(".smile");
const counters = document.querySelectorAll(".counter");
const voting = document.querySelectorAll(".voting");

console.log(smilesAll);
console.log(counters);

voting.addEventListener("click", (e) => {
  if (e.target.classList.contain('smile')) {
    const counter = e.target.nextElementSibling;
    let count = counter.textContent;
    count++;
    counter.innerText = count;
}
})


// function increaseValue(counter) {
//     let count = 0;

//     return function() {
//         count++;
//         counter.innerText = count;
//     }
// }

// smilesAll.forEach((currentSmile, index) => {
//     currentSmile.addEventListener("click", increaseValue(counters[index]));
// })

// You need to attach a listener to a parent element, then check event.target
// According to your markup parent element, you need to use the tr






