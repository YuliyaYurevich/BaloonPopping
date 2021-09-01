const area = document.querySelector('.area');

for (let i = 0; i < 20; i++) {
  const color = (randomColor = Math.floor(Math.random() * 16777215).toString(
    16
  ));
  const div = document.createElement('div');
  div.classList.add('ball');
  div.style.backgroundColor = '#' + color;
  area.appendChild(div);
}

const balls = document.querySelectorAll('.ball');
console.log(balls.length);
balls.forEach((ball) =>
  ball.addEventListener('click', () => {
    ball.classList.remove('ball');
    ball.textContent = 'POP!';
    ball.style.backgroundColor = '#fff';
    ball.classList.add('pop');
    setInterval(() => {
      ball.textContent = '';
    }, 3000);
  })
);
