// import the type variable
import { FETCH_BUTTON_CLICKED } from './types';



//action creator(this is a normal function)
export const fetchPosts = () => {
    //this is the real action
    return {
        //small description for the action
        type: FETCH_BUTTON_CLICKED,
        //send the data(from API or hardcode)
        payload: [
            {
                userId: 1,
                id: 1,
                title: 'jfjfljflsjsff',
                body: 'nkjfskfkskf'
            },
            {
                userId: 2,
                id: 2,
                title: 'bmcbmbvm',
                body: 'bvcbbvxvn'
            },
        ]
    }
}