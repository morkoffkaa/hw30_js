const smilesAll = document.querySelectorAll(".smile");
const counters = document.querySelectorAll(".counter");

console.log(smilesAll);
console.log(counters);

function increaseValue(counter) {
    let count = 0;

    return function() {
        count++;
        counter.innerText = count;
    }
}

smilesAll.forEach((currentSmile, index) => {
    currentSmile.addEventListener("click", increaseValue(counters[index]));
})





