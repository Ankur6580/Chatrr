const socket = io();
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && messageInput.value.trim()) {
    const msg = {
      text: messageInput.value,
      sender: socket.id
    };
    socket.emit('chat message', msg);
    messageInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  const messageType = msg.sender === socket.id ? 'sent' : 'received';
  addMessage(msg, messageType);
});

function addMessage(msg, type) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  messageElement.textContent = msg.text;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}
