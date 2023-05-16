export default class Section {
  constructor({items, renderer}, contSelector) {
this._selector = document.querySelector(contSelector);
this._items = items;
this.renderer = renderer;
  }
  addCardArray() {
    this._items.forEach(el => {
this.addItem(this.renderer(el))
    })
  }
  addItem(domEl) {
    this._selector.prepend(domEl);
  }
}
