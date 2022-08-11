import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SkeletonScreen.css';

const SkeletonScreen = () => {
    return (
        <div className="main-skeleton">
            <div className="main-skeleton__header">
                <div className="main-skeleton__header-banner">
                    <Skeleton height="100%" />
                </div>
            </div>

            <div className="main-skeleton__main">
                <div className="main-skeleton__card">
                    <Skeleton height="100%" />
                </div>

                <div className="main-skeleton__card">
                    <Skeleton height="100%" />
                </div>

                <div className="main-skeleton__card">
                    <Skeleton height="100%" />
                </div>

                <div className="main-skeleton__card">
                    <Skeleton height="100%" />
                </div>

                <div className="main-skeleton__card">
                    <Skeleton height="100%" />
                </div>

                <div className="main-skeleton__card">
                    <Skeleton height="100%" />
                </div>
            </div>
        </div>
    );
}
 
export default SkeletonScreen;