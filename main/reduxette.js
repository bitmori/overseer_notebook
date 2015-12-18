import {Enum, Factory} from 'reduxette';

export const Constants = Enum("SHOW_DWELLER_INFO_MODAL", "ADD_DWELLER_BABY", "ADD_DWELLER_OUTSIDER", "ADD_DWELLER_EXISITING");

let updater = (state, action) => {
    state = state || {};
    state['actionType'] = action.hasOwnProperty('actionType')?action.actionType:"";
    state[action.actionType] = action.hasOwnProperty('payload')?action.payload:{};
    return state;
};

export const Reduxette = Factory(updater);

export const Actions =  {
    showDwellerInfo(dweller) {
        Reduxette.dispatch({
            actionType: Constants.SHOW_DWELLER_INFO_MODAL,
            payload:{dweller}
        });
    },

    addDwellerBaby() {
        Reduxette.dispatch({
            actionType: Constants.ADD_DWELLER_BABY
        });
    },

    addDwellerOutsider() {
        Reduxette.dispatch({
            actionType: Constants.ADD_DWELLER_OUTSIDER
        });
    },

    addDwellerExisting() {
        Reduxette.dispatch({
            actionType: Constants.ADD_DWELLER_EXISITING
        });
    }
};