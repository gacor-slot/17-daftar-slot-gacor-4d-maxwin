'use babel';

export default class 17DaftarSlotGacor4dMaxwinView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('17-daftar-slot-gacor-4d-maxwin');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The 17DaftarSlotGacor4dMaxwin package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
