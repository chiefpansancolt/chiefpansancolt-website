import {Controller} from 'stimulus';
import {CONSTANTS} from '../constants';

export default class extends Controller {
  static targets = [CONSTANTS.TARGETS.MENU];
  static classes = [
    CONSTANTS.CLASSES.HIDE, CONSTANTS.CLASSES.VISIBLE, CONSTANTS.CLASSES.INVISIBLE,
    CONSTANTS.CLASSES.ENTERING, CONSTANTS.CLASSES.LEAVING,
  ];
  static values = {enterTimeout: Number, leaveTimeout: Number};

  toggle() {
    if (this.hidden) {
      this._show();
    } else {
      this._hide();
    }
  }

  _show() {
    this.menuTarget.classList.remove(this.hideClass);
    this.enteringClass.split(CONSTANTS.BLANKSPACE).forEach(
      ((klass) => {
        this.menuTarget.classList.add(klass);
      }),
    );

    requestAnimationFrame(
      (() => {
        this.visibleClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => {
          this.menuTarget.classList.add(klass);
        });
        this.invisibleClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => this.menuTarget.classList.remove(klass));
        setTimeout(
          (() => {
            this.enteringClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => this.menuTarget.classList.remove(klass));
          }),
          this.enterTimeoutValue,
        );
      }),
    );
  }

  _hide() {
    this.invisibleClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => this.menuTarget.classList.add(klass));
    this.visibleClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => this.menuTarget.classList.remove(klass));
    this.leavingClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => this.menuTarget.classList.add(klass));
    setTimeout(
      (() => {
        this.menuTarget.classList.add(this.hideClass);
        this.leavingClass.split(CONSTANTS.BLANKSPACE).forEach((klass) => this.menuTarget.classList.remove(klass));
      }),
      this.leaveTimeoutValue,
    );
  }

  hide(event) {
    if (this.element.contains(event.target) === false && !this.hidden) {
      this._hide();
    }
  }

  get hidden() {
    return this.menuTarget.classList.contains(this.hideClass);
  }
}
