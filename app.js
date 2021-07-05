const button = document.querySelector('.addBtn');
const input = document.querySelector('input');
const list = document.querySelector('ul');

let todos = [
  { id: 1, text: 'buy bread', status: false },
  { id: 2, text: 'do smth', status: false },
  { id: 3, text: 'drink water', status: false },
];

render();

button.addEventListener('click', function () {
  if (input.value === '') {
    alert('write smth');
  } else if (verify()) {
    alert('it already exists');
  } else {
    verify();
    todos.push({ id: todos.length + 1, text: input.value, status: false });
    input.value = '';
    render();
    if (todos.length > 0) {
      document.getElementsByClassName('ul')[0].style.borderStyle = 'solid';
    }
  }
});

function delBtn() {
  const delBtns = document.querySelectorAll('.del');
  Array.from(delBtns).map((el) => {
    el.addEventListener('click', function (e) {
      let ind = +e.target.className.replace('del', '');
      if (document.getElementsByClassName(`val ${ind}`)[0].checked) {
        todos = todos.filter((el) => el.id !== ind);
        render();
        if (todos.length < 1) {
          document.getElementsByClassName('ul')[0].style.borderStyle = 'none';
        }
      } else {
        alert('agree ur decision');
      }
    });
  });
}

function render() {
  list.innerHTML = '';
  todos.map((el) => {
    list.innerHTML += `<li class='numb ${el.id}'><input type="checkbox" value="${
      el.status
    }" class="val ${el.id}"><span><b>${el.id + ')'}</b> ${el.text}</span><button class="del ${
      el.id
    }">X</button></li>`;
    delBtn();
  });
}

function verify() {
  return todos.some((el) => el.text === input.value);
}
