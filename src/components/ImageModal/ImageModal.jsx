import React, { useState } from 'react';
import { usePost } from './../../hooks/requests';
import { apiConfig } from './../../apiConfig';
import './ImageModal.css';

const ImageModal = ({ postData, isModalVisible, setIsModalVisible }) => {
    const [comment, setComment] = useState('');
    const [commentLoading, setCommentLoading] = useState(false);
    const [saveBtnDisabled, setSaveBtnDisabled] = useState(false);
    const [commentTip, setCommentTip] = useState('Write a few sentences about the photo.');
    const [commentTipStateClass, setCommentTipStateClass] = useState('');
    const post = usePost();

    // обработчик клика по странице - если кликнули мимо модалки - прячем ее
    const pageClickHandle = (evt) => {
        if (isModalVisible && !evt.target.closest('.image-modal')) {
            setIsModalVisible(false);
        }
    };

    // валидация ввода
    const validate = () => {
        let validComplete = true;

        // если коммент не ввели - говорим об этом юзеру
        if (comment.trim().length === 0) {
            validComplete = false;
            showTipText('Type comment.', 'image-modal__comment-tip--error');
        }

        return validComplete;
    };

    // добавление комента
    const addComment = () => {
        if (!validate()) {
            return;
        }

        setCommentLoading(true); // ставим прелоадер

        // делаем запрос на добавление коммента
        post(`${apiConfig}/images/${postData.id}/comments`)
        .then((resp) => {
            console.log(resp);
            setComment('');
            showTipText('Comment successfully added.', 'image-modal__comment-tip--success');
        })
        .catch((err) => {
            console.log(err);
            showTipText('Error, comment wasn\'t added.', 'image-modal__comment-tip--error');
        })
        .finally(() => {
            setCommentLoading(false);
        });
    };

    // показывает текст с подсказкой (успешное/неуспешное завершение добавления коммента)
    const showTipText = (text, stateClass) => {
        setCommentTip(text);
        setCommentTipStateClass(stateClass);
        setSaveBtnDisabled(true);

        setTimeout(() => { // через несколько секунд возвращаем всё как было
            setCommentTip('Write a few sentences about the photo.');
            setCommentTipStateClass('');
            setSaveBtnDisabled(false);
        }, 1000);
    };

    return (
        <div className="image-modal-wrap" style={{ display: isModalVisible ? 'flex' : 'none' }} onClick={pageClickHandle}>
            <div className="image-modal">
                <div className="image-modal__image-wrap">
                    <img src={postData.url} />
                </div>

                <div className="image-modal__comment-form">
                    <h2 className="image-modal__comment-title">Comment</h2>

                    <textarea 
                        className="image-modal__comment-input"
                        value={comment}
                        onChange={(evt) => setComment(evt.target.value)}
                    ></textarea>

                    <div className={`image-modal__comment-tip ${commentTipStateClass}`}>
                        {commentTip}
                    </div>

                    <button 
                        className="image-modal__comment-button" 
                        onClick={addComment} 
                        disabled={commentLoading || saveBtnDisabled}
                    >
                        {                        
                            commentLoading ?
                                <div className="preloader">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                :
                                'Save'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default ImageModal;