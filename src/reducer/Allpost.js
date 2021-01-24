
import { FETCH_BUTTON_CLICKED } from '../action/types';

// reducer(reducer is a function it has two parameertrs)
export default function (state = null, action) {
    //reducer can cautch lot of actions( to cautch it we use switch)
    switch (action.type) {
        //if action type "FETCH_BUTTON_CLICK"
        case FETCH_BUTTON_CLICKED:
            // return the payload to store 
            return action.payload;
            break;
    }
    // finally return the state
    return state
}

