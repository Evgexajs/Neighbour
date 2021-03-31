import React from 'react';
import '../style/style.css';
import '../style/Settings/style.css'

function Settings (props) {
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Настройки</h3></div>                
                <div className='list__main'>
                    <div className='settings'>
                        <div className='settings__el'>
                            <div className='settings__text'>Цвет</div>
                            <div className='settings__check'>Кнопка</div>
                        </div>
                        <div className='settings__el'>
                            <div className='settings__text'>Настройка 1</div>
                            <div className='settings__check'>Кнопка</div>
                        </div>
                        <div className='settings__el'>
                            <div className='settings__text'>Настройка 2</div>
                            <div className='settings__check'>Кнопка</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;