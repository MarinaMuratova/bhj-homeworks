const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSide = document.querySelector('.chat-widget__side');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

chatWidgetSide.addEventListener('click', function(){
	const chatWidgetActive = chatWidget.classList.add('chat-widget_active');
})


let botAnswers = ['Отстань, я занят', 'Не пиши мне, я не в настроении', 'Что надо?', 'Несчастливо оставаться, я пошел', 'Че хочешь?', 'Я ем, напиши через 5 часов', 'Я устал, отвечу потом', 'Пиши, сколько угодно, я не собраюсь отвечать'];

let date = new Date().toLocaleTimeString();

chatWidgetInput.addEventListener('keydown', function(e){
	if (e.keyCode === 13) {
      if(this.value.length > 0){
         messages.innerHTML += `
         <div class="message message_client">
         <div class="message__time"> ${date}</div>
         <div class="message__text">
         ${e.target.value}
         </div>
         </div>
         `;
      }
      chatWidgetInput.value = '';

let i = Math.floor(Math.random() * (botAnswers.length - 0 + 1))+ 0;
     messages.innerHTML += `
         <div class="message">
         <div class="message__time">${date}</div>
         <div class="message__text">
         ${botAnswers[i]}
         </div>
         </div>
         `;
     }
})

// if(chatWidget.querySelector('chat-widget_active') && ()){
//     setTimeout(function(){
//         messages.innerHTML += `
//          <div class="message">
//          <div class="message__time">${date}</div>
//          <div class="message__text">
//            Че молчим?
//          </div>
//          </div>
//          `;
//      }
//     }, 10000);
// }



