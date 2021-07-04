const button = document.querySelector('.addBtn');
const input = document.querySelector('input');
const list = document.querySelector('ul');

let arr = ['buy bread', 'go for a walk', 'to do smth', 'drink water'];

render();

button.addEventListener('click', function () {
  if (input.value === '') {
    alert('write smth');
  } else if (verify()) {
    alert('it already exists');
  } else {
    verify();
    arr.push(input.value);
    input.value = '';
    render();
    delBtn();
    if (arr.length > 0) {
      document.getElementsByClassName('ul')[0].style.borderStyle = 'solid';
    }
  }
});

function delBtn() {
  const delBtns = document.querySelectorAll('.del');
  var delBtnsArr = Array.from(delBtns);
  delBtnsArr.map((el) => {
    el.addEventListener('click', function (e) {
      const ind = +e.target.className.replace('del', '');
      arr = arr.filter((el, id) => id !== ind);
      render();
      if (arr.length < 1) {
        document.getElementsByClassName('ul')[0].style.borderStyle = 'none';
      }
    });
  });
}

function render() {
  list.innerHTML = '';
  arr.map((el, ind) => {
    list.innerHTML += `<li class='numb ${ind}'><span><b>${
      ind + 1 + ')'
    }</b> ${el}</span><button class="del ${ind}">X</button></li>`;
    delBtn();
  });
}

function verify() {
  return arr.some((el) => el === input.value);
}
