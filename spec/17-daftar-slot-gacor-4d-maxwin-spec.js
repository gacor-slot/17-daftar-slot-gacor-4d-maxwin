'use babel';

import 17DaftarSlotGacor4dMaxwin from '../lib/17-daftar-slot-gacor-4d-maxwin';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('17DaftarSlotGacor4dMaxwin', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('17-daftar-slot-gacor-4d-maxwin');
  });

  describe('when the 17-daftar-slot-gacor-4d-maxwin:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.17-daftar-slot-gacor-4d-maxwin')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '17-daftar-slot-gacor-4d-maxwin:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.17-daftar-slot-gacor-4d-maxwin')).toExist();

        let 17DaftarSlotGacor4dMaxwinElement = workspaceElement.querySelector('.17-daftar-slot-gacor-4d-maxwin');
        expect(17DaftarSlotGacor4dMaxwinElement).toExist();

        let 17DaftarSlotGacor4dMaxwinPanel = atom.workspace.panelForItem(17DaftarSlotGacor4dMaxwinElement);
        expect(17DaftarSlotGacor4dMaxwinPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '17-daftar-slot-gacor-4d-maxwin:toggle');
        expect(17DaftarSlotGacor4dMaxwinPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.17-daftar-slot-gacor-4d-maxwin')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '17-daftar-slot-gacor-4d-maxwin:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 17DaftarSlotGacor4dMaxwinElement = workspaceElement.querySelector('.17-daftar-slot-gacor-4d-maxwin');
        expect(17DaftarSlotGacor4dMaxwinElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '17-daftar-slot-gacor-4d-maxwin:toggle');
        expect(17DaftarSlotGacor4dMaxwinElement).not.toBeVisible();
      });
    });
  });
});
