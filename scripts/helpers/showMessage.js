import { createElement } from './createElement.js';

export function showMessage(messageTitle, message, duration=3000, success = false) {
    const messageContainer = createElement('div', { className: "message-container" });
    const showMessage = createElement('div', { className: ['show-message', success ? 'success' : 'error'] });
    const msgTitle = createElement('h2', { className: 'show-message-title' }, messageTitle);
    const msgDescription = createElement('p', { className: 'show-message-description' }, message);

    showMessage.append(msgTitle, msgDescription);
    messageContainer.appendChild(showMessage);
    document.body.appendChild(messageContainer);

    let removeTimeout;

    const setRemoveTimeout = () => {
        removeTimeout = setTimeout(() => {
            if (document.body.contains(messageContainer)) {
                document.body.removeChild(messageContainer);
            }
        }, duration);
    };

    const clearRemoveTimeout = () => {
        clearTimeout(removeTimeout);
    };

    setRemoveTimeout();

    showMessage.addEventListener('mouseover', clearRemoveTimeout);
    showMessage.addEventListener('mouseout', setRemoveTimeout);
}
