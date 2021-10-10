import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import 'antd/dist/antd.css';

const InputG = () => {

    const [datos, setDatos] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleInputChange = (event) => {
        setDatos(event.target.value)
    }

    const openNotification = () => {
        notification.open({
            message: 'Notificación: ',
            description: datos
        })
        cambiarEstado()

    }

    function cambiarEstado () {
        const lastCharacters = datos.substr(datos.length - 4)
        const isImage = lastCharacters === '.png'
        
        if (isImage === true) {
            setImageUrl(datos)
        }
        if (imageUrl != datos && isImage == false) {
            setImageUrl (imageUrl.replace (''))
        }
    }

    return (
        <div>
                <Input onChange={handleInputChange} size="large" placeholder="Ingrese texto" prefix={<UserOutlined />} name="texto"/>
                <Button id= "btn"onClick={openNotification} type="primary">Enviar</Button> <br/>
            {imageUrl.length > 0 && <img src={imageUrl} alt=""/>}
         </div>
    )
}

export default InputG
