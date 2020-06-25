'use strict';

let DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement  = function () {
    let elem;

    if  (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1));
    }
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
    }
    elem.style.cssText = `height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
  `;
    elem.textContent = prompt('Введите любой текст', 'тест');
    document.body.append(elem);

    
};

const domElem = new DomElement('.block', 300, 900, 'red', 80);
    domElem.createElement();