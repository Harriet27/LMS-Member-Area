import {
    CONTENT_START,
    CONTENT_SUCCESS,
    CONTENT_FAILED,
} from '../type';

const INITIAL_STATE = {
    videoList: [],
    loading: false,
};

export const contentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTENT_START:
            return {
                ...state,
                loading: true,
            };
        case CONTENT_SUCCESS:
            return {
                ...state,
                videoList: action.payload,
                loading: false,
            };
        case CONTENT_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
