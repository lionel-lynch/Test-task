import React, { useState, useEffect } from 'react';
import { useGet } from './hooks/requests';
import Home from './pages/Home';
import SkeletonScreen from './components/UI/SkeletonScreen/SkeletonScreen';
import { apiConfig } from './apiConfig';
import './styles/reset.min.css';
import './styles/App.css';

function App() {
    const [dataLoading, setDataLoading] = useState(false); // грузятся ли данные о постах
    const [postsData, setPostsData] = useState([]);        // сами данные о постах
    const get = useGet();                                  // кастомный хук возвращет функцию для get-запроса

    useEffect(() => {
        setDataLoading(true);

        // подгружаем данные о постах
        get(`${apiConfig.apiDomain}/images`)
        .then((resp) => {
            setPostsData(resp);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setDataLoading(false);
        });
    }, []);

    return (
        <div className="App">
            {
                dataLoading ?
                    <SkeletonScreen />
                    :
                    <Home posts={postsData} />
            }
        </div>
    );
}

export default App;
