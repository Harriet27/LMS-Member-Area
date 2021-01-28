import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    CONTENT_START,
    CONTENT_SUCCESS,
    CONTENT_FAILED,
} from '../type';

export const getVideo = () => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/uploads/media/list?fields=filetype&value=video`);
            dispatch({
                type: CONTENT_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};
