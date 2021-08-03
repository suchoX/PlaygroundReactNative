import {makeObservable, observable, computed, action, flow} from 'mobx';
import {dayColorScheme, nightColorScheme} from '../utils/Constants';

class UiStore {
  colorScheme = dayColorScheme;

  constructor() {
    makeObservable(this, {
      colorScheme: observable,
      switchDayNight: action,
    });
  }

  switchDayNight = () => {
    if (this.colorScheme.type === 'day') {
      this.colorScheme = nightColorScheme;
    } else if (this.colorScheme.type === 'night') {
      this.colorScheme = dayColorScheme;
    }
  };
}

export default UiStore;
