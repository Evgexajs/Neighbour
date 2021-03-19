import React from 'react';
import '../style/style.css';
import '../style/Main/style.css';

function Main (props) {
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Предложения</h3></div>
                <div className='list__main'>
                    <div className='post'>
                        <div className='post__image'><img src="https://i.ytimg.com/vi/zk3bSeYDDFE/maxresdefault.jpg" alt=""/></div>
                        <div className='post__footer'>
                            <div className='post__like'>like</div>
                            <div className='post__comment'>comment</div>
                            <div className='post__share'>share</div>
                        </div>
                    </div>
                    
                    <div className='post'>
                        <div className='post__image'><img src="https://i.ytimg.com/vi/zk3bSeYDDFE/maxresdefault.jpg" alt=""/></div>
                        <div className='post__footer'>
                            <div className='post__like'>like</div>
                            <div className='post__comment'>comment</div>
                            <div className='post__share'>share</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;