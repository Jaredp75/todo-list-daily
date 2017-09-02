let task = document.getElementsByClassName('task');
console.log(task);

task.addEventListener("click", turnRed);

function turnRed() {
  this.task.classList.add('red');
}
