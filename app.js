const button = document.querySelector('.addBtn');
const input = document.querySelector('input');
const list = document.querySelector('ul');

let arr = ['buy bread', 'go for a walk', 'to do smth', 'drink water'];

arr.map((el, ind) => {
  list.innerHTML += `<li class='numb ${ind}'><span><b>${
    ind + 1 + ')'
  }</b> ${el}</span><button class="del ${ind}">X</button></li>`;
  delBtn();
});

button.addEventListener('click', function () {
  if (input.value === '') {
    alert('write smth');
  } else {
    const ind = arr.length;
    list.innerHTML += `<li class='numb ${ind}'><span><b>${ind + 1 + ')'}</b> ${
      input.value
    }</span><button class="del ${ind}">X</button></li>`;
    arr.push(input.value);
    delBtn();
    if (arr.length > 0) {
      document.getElementsByClassName('ul')[0].style.borderStyle = 'solid';
    }
    console.log(arr);
  }
});

function delBtn() {
  const delBtns = document.querySelectorAll('.del');
  var delBtnsArr = Array.from(delBtns);
  delBtnsArr.map((el) => {
    el.addEventListener('click', function (e) {
      const ind = +e.target.className.replace('del', '');
      list.innerHTML = '';
      arr = arr.filter((el, id) => id !== ind);
      arr.map((el, ind) => {
        list.innerHTML += `<li class='numb ${ind}'><span><b>${
          ind + 1 + ')'
        }</b> ${el}</span><button class="del ${ind}">X</button></li>`;
        delBtn();
      });
      if (arr.length < 1) {
        document.getElementsByClassName('ul')[0].style.borderStyle = 'none';
      }
      console.log(arr);
    });
  });
}
