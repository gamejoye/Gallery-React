import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadPictureToDB } from '../../utils/api/axios'
import './index.css'
function Nav(props) {
    const dispatch = useDispatch();
    const [formData] = useState(new FormData());
    const handleConfirm = () => {
        let file = document.getElementById("img-upload").files[0];
        let url = window.URL.createObjectURL(file);
        let image = document.createElement("img");
        image.src = url;
        formData.append(url, file);
        uploadPictureToDB(formData, dispatch);
    }
    return (
        <ul className='nav'>
            <li onClick={() => handleConfirm()}>确认</li>
            <li>
                <label htmlFor="img-upload">添加图片</label>
                <input id='img-upload' type="file"></input>
                <PlusOutlined />
            </li>
        </ul>
    )
}
export default Nav;