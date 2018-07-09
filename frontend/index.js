var ws = new WebSocket('ws://localhost:5000');
var messageList = document.querySelector('.message-List')
var newMessageForm = document.querySelector('.new-message-form')

var renderMessage = function(message) {
    var li = document.createElement('li');
    li.textContent  = message;
    messageList.appendChild(li);
};

ws.addEventListener('message', fuction(event) {
    renderMessage(event.data);
});

ws.addEventListener('submit', fuction(event) {
    event.preventDefault();
   console.log(newMessageForm(event.data));
   newMessageForm.reset();
});