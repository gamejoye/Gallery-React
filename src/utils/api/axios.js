import axios from "axios";
import { BASE_URL } from "../../constant";
import { message } from "antd";
import { loadPicture, addPicture } from "../../redux/action";
export const getInstance = axios.create({
    timeout: 5000,
    baseURL: BASE_URL,
    withCredentials: true
});
export const postInstance = axios.create({
    timeout: 5000,
    baseURL: BASE_URL,
    withCredentials: true
});

export const loadPictureFromDB = (dispatch) => {
    getInstance.get(`${BASE_URL}/images/acquisition`).then(
        (res) => {
            dispatch(loadPicture(res.data));
        }
    )
}

export const uploadPictureToDB = (formData, dispatch) => {
    postInstance.post(`${BASE_URL}/images/upload`, formData).then(
        (res) => {
            if(res.data && res.data.length > 0) {
                res.data.forEach(picture => dispatch(addPicture(picture)));
                message.success('上传成功', 2);
            }
        }
    );
}