import {Dispatcher} from 'flux';

let Enum = (...args) => args.reduce((r, i) => (r[i] = i, r), {});

export const Constants = Enum("SHOW_DWELLER_INFO_MODAL", "ADD_DWELLER_BABY", "ADD_DWELLER_OUTSIDER", "ADD_DWELLER_EXISITING");

export const AppDispatcher = new Dispatcher();

export const Actions =  {
    showDwellerInfo(dweller) {
        AppDispatcher.dispatch({
            actionType: Constants.SHOW_DWELLER_INFO_MODAL,
            dweller
        });
    },

    addDwellerBaby() {
        AppDispatcher.dispatch({
            actionType: Constants.ADD_DWELLER_BABY
        });
    },

    addDwellerOutsider() {
        AppDispatcher.dispatch({
            actionType: Constants.ADD_DWELLER_OUTSIDER
        });
    },

    addDwellerExisting() {
        AppDispatcher.dispatch({
            actionType: Constants.ADD_DWELLER_EXISITING
        });
    }
};