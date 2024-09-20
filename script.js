// 获取按钮和显示消息的元素
const button = document.getElementById('clickMeButton');
const message = document.getElementById('message');

// 为按钮添加点击事件
button.addEventListener('click', function() {
  message.textContent = '你点击了按钮！';
  button.style.backgroundColor = 'green';  // 点击后按钮变为绿色
});
