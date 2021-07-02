const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

let arr = ['buy bread', 'go for a walk', 'to do smth', 'drink water'];

arr.map((el, ind) => {
  list.innerHTML += `<li class='numb ${ind + 1}'>${el}<button class="del ${
    ind + 1
  }">del</button></li>`;
  const deleteBtns = document.querySelectorAll('.del');
  var deleteBtnsArr = Array.from(deleteBtns);
  deleteBtnsArr.map((el, id) => {
    el.addEventListener('click', function () {
      const liItem = document.getElementsByClassName(`${id + 1}`)[0];
      liItem.remove();
    });
  });
});

let ind = arr.length + 1;

button.addEventListener('click', function () {
  list.innerHTML += `<li class='numb ${ind}'>${input.value}<button class="del ${ind}">del</button></li>`;
  ind = ++ind;
  const delBtns = document.querySelectorAll('.del');
  var delBtnsArr = Array.from(delBtns);
  delBtnsArr.map((el) => {
    el.addEventListener('click', function (e) {
      const ind = +e.target.className.replace('del', '');
      const liItem = document.getElementsByClassName(`${ind}`)[0];
      liItem.remove();
    });
  });
});
