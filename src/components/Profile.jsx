import React from 'react';
import '../style/style.css';
import '../style/Profile/style.css'

function Profile (props) {
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Профиль</h3></div>
                <div className='list__main'>
                    <div className='profile'>
                        <div className='profile__image'>
                            <img src="https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt=""/>
                        </div>
                        
                        <div className='profile__info'>
                            <div  className='profile__text'>Жесть</div>
                            <div  className='profile__text'>Жесть</div>
                            <div  className='profile__text'>Жесть</div>
                            <div  className='profile__text'>Жесть</div>
                            <div  className='profile__text'>Жесть</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;