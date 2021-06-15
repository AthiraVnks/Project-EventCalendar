import * as types from './eventActionTypes';

import localForage from "localforage";

export function GetInitialEvents() {
    return async (dispatch, getState) => {
        var allEvents = [{
            id: 0,
            title: 'Today!',
            
        }];

        localForage.getItem("AllEvents", function(err, allEve){
            if(allEve){
                allEvents = allEve;
            }else{
                localForage.setItem("AllEvents", allEvents);
            }

            dispatch({ type: types.ALL_EVENTS, allEvents });
        });
        

        
    }

}