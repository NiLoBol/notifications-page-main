
const mark = document.getElementsByClassName('active-content')

const root = document.querySelector(':root')

function clickmark() {
    for (let i = 0; i < mark.length; i++) {
        mark[i].style.backgroundColor = "var(--White)";
    }
}
function clickindex(index) {
    console.log(index);
    mark[index].style.backgroundColor = "var(--White)";
}