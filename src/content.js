document.addEventListener("focusin", function (event) {
  if (event.target.tagName === 'TEXTAREA') {
    console.log("LinkedIn message box focused");
  }
});
const messageInput = document.querySelector('input[aria-label="Message"]'); // Adjust selector as needed
const aiIconContainer = document.createElement('div');

const renderAIIcon = () => {
  aiIconContainer.innerHTML = `<button class="ai-icon-button">AI Icon</button>`;
  document.body.appendChild(aiIconContainer);
};

const showAIIcon = () => {
  aiIconContainer.style.display = 'block'; // or use a CSS class to show
};

const hideAIIcon = () => {
  aiIconContainer.style.display = 'none'; // or use a CSS class to hide
};

messageInput.addEventListener('focus', showAIIcon);
messageInput.addEventListener('blur', hideAIIcon);

renderAIIcon();
