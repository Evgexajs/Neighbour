import React from 'react';
import '../style/style.css';
import '../style/Messages/style.css'

function Messages (props) {
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Сообщения</h3></div>
                <div className='list__main'>
                    <div className='messages'>
                        <div className='messages__left'>
                            <div className='messages__person'>Dmitry</div>
                            <div className='messages__person'>Ivan</div>
                            <div className='messages__person'>Sasha</div>
                            <div className='messages__person'>Andrey</div>
                        </div>
                        <div className='messages__right'>
                            <div className='messages__message'>Hi!</div>
                            <div className='messages__message_your'>Oh hi!</div>
                            <div className='messages__message'>How are you?</div>
                            <div className='messages__message_your'>I'm good, are you?</div>
                            <div className='messages__message'>Thats nice), me too.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;