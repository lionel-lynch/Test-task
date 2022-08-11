import React, { useState } from 'react';
import './PostList.css';

// компонент рендерит список постов
const PostList = ({ postsData, postSelected }) => {
    return (
        <div className="post-list">
            <ul className="post-list__list">
                {
                    postsData.map((item) => {
                        return <li className="post-list__item" key={item.id}>
                                   <div className="post-list__item-img" onClick={() => postSelected(item.id)}>
                                       <img src={item.url} alt="post image" />
                                   </div>

                                   <div className="post-list__item-id">
                                        id: {item.id}
                                   </div>
                               </li>
                    })
                }
            </ul>
        </div>
    );
}
 
export default PostList;