'use babel';

import 17DaftarSlotGacor4dMaxwinView from './17-daftar-slot-gacor-4d-maxwin-view';
import { CompositeDisposable } from 'atom';

export default {

  17DaftarSlotGacor4dMaxwinView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.17DaftarSlotGacor4dMaxwinView = new 17DaftarSlotGacor4dMaxwinView(state.17DaftarSlotGacor4dMaxwinViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.17DaftarSlotGacor4dMaxwinView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '17-daftar-slot-gacor-4d-maxwin:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.17DaftarSlotGacor4dMaxwinView.destroy();
  },

  serialize() {
    return {
      17DaftarSlotGacor4dMaxwinViewState: this.17DaftarSlotGacor4dMaxwinView.serialize()
    };
  },

  toggle() {
    console.log('17DaftarSlotGacor4dMaxwin was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
