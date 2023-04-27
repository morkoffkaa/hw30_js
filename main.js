const smilesAll = document.querySelectorAll(".smile");
const counters = document.querySelectorAll(".counter");

console.log(smilesAll);
console.log(counters);

document.querySelector(".voting").addEventListener("click", (event) => {
    if (event.target.classList.contains("smile")) {
        const counter = event.target.nextElementSibling;

        counter.innerText = Number(counter.textContent) + 1;
    }
});



// You need to attach a listener to a parent element, then check event.target
// According to your markup parent element, you need to use the tr






