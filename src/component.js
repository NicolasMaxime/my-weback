const component = (text = 'Hello world') => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element
}

export {component}