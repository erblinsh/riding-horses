export function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);

    for (let [key, value] of Object.entries(attributes)) {
        if (key.startsWith('on') && typeof value === 'function') {
            element.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'className') {
            if (Array.isArray(value)) {
                value.forEach(className => element.classList.add(className));
            } else {
                element.classList.add(...value.split(' '));
            }
        } else {
            element.setAttribute(key, value);
        }
    }

    if (typeof children === 'string') {
        element.textContent = children;
    } else if (Array.isArray(children)) {
        children.forEach(child => element.appendChild(
            typeof child === 'string' ? document.createTextNode(child) : child
        ));
    }

    return element;
}