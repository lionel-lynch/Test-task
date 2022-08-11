import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import ImageModal from '../components/ImageModal/ImageModal';

// главная страница приложения
const Home = ({ posts }) => {
    const [selectedPostId, setSelectedPostId] = useState(-1);     // айдишник выбранного поста
    const [isModalVisible, setIsModalVisible] = useState(false);  // флаг - видна ли модалка

    // показываем модалку по выбору поста
    const postSelected = (id) => {
        setSelectedPostId(id);
        setIsModalVisible(true);
    };

    // корректно возвращает айдишник выбранного поста
    const getSelectedPost = () => {
        const filtered = posts.filter((item) => item.id === selectedPostId);
        return filtered.length > 0 ? filtered[0] : {};
    };

    return (
        <div className="main-content">
            <div className="main-content__header">
                <Header />
            </div>
            
            <div className="main-content__main">
                <PostList postsData={posts} postSelected={postSelected} />
            </div>

            <ImageModal 
                postData={getSelectedPost()} 
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </div>
    );
}
 
export default Home;