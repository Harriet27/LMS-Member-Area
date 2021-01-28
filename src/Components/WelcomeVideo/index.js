import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../Redux/Actions/contentAction';
import './welcomevideo.css';

const WelcomeVideo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector((state) => state.content.videoList);

    const renderVideo = () => {
        return videoList.slice(0,1).map((val,index) => {
            return (
                <React.Fragment key={index}>
                    <video controls={true} className='welcome-video'>
                        <source type='video/mp4' src={val.url} />
                    </video>
                </React.Fragment>
            );
        });
    };

    return (
        <div className='welcome-section'>
            {renderVideo()}
        </div>
    );
};

export default WelcomeVideo;
