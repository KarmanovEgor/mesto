export default class Section {
  constructor({ renderer }, contSelector) {
    this._selector = document.querySelector(contSelector);
    this._renderer = renderer;
  }
  addCardArray(items) {
    this._items = items;
    this._items.forEach((el) => {
      this.addItem(this._renderer(el));
    });
  }
  addItem(domEl) {
    this._selector.prepend(domEl);
  }
}
