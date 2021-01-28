import React, { useEffect } from 'react';
import Profile from '../../Components/LMS-Profile';
import Content from '../../Pages/ProductList/Content';
import ContentSection from '../../Components/Content';
import { message, Rate } from 'antd';
import './style.css';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard';
    });

    const storyImg = 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3784651/01_idea.jpg';
    const unfinishImg = 'https://wallpaperaccess.com/full/656648.jpg';
    const badge = 'https://i.ibb.co/DfxtJ6L/Obsidian.png';

    const renderStory = () => {
        return [0,1,2,3,4,5,6,7,8,9].map(() => {
            return (
                <div className='story-card'>
                    <img src={storyImg} alt='boba' className='story-img' />
                </div>
            );
        });
    };

    const binderClick = () => {
        message.success('You just clicked the binder!');
    };

    const scheduleList = [
        {
            title: 'Jadwal Webinar',
            notification: '2 new',
        },
        {
            title: 'Nonton Video',
            notification: null,
        },
        {
            title: 'Baca Tips',
            notification: null,
        },
        {
            title: 'Isi Modul Praktek',
            notification: '6 new',
        },
    ];

    const renderSchedule = () => {
        return scheduleList.map((val,index) => {
            return (
                <div onClick={binderClick} className='schedule-card' key={index}>
                    <div className='schedule-description'>
                        <span className='schedule-title'>
                            {val.title}
                        </span>
                        <br></br>
                        <span className='schedule-notification'>
                            {val.notification}
                        </span>
                    </div>
                </div>
            );
        });
    };

    const renderUnfinish = (percent, rank) => {
        return (
            <div>
                <div className='unfinish-card'>
                    <img src={unfinishImg} alt='unfinish' className='unfinish-image' />
                    <div className='unfinish-status'>
                        <div className='status-desc'>
                            <b>BOE Business Master</b>
                        </div>
                        <div className='status-desc'>
                            Progress: {percent}% / <b>100%</b>
                        </div>
                        <button className='status-button'>
                            LANJUT BELAJAR
                        </button>
                    </div>
                </div>
                <div className='unfinish-rank'>
                    <img src={badge} alt='badge' className='unfinish-badge' />
                    <div className='unfinish-rank-txt'>
                        Super Star Member
                    </div>
                    <div className='unfinish-rank-num'>
                        {rank}
                    </div>
                </div>
                <div className='schedule-box-section'>
                    {renderSchedule()}
                </div>
                <div className='rating-container'>
                    <div style={{marginTop:'10px'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{margin:'0px 10px'}}>
                                Beri Review
                            </div>
                            <Rate disabled defaultValue={5} />
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{margin:'0px 10px'}}>
                                Nilai Mentor
                            </div>
                            <Rate disabled defaultValue={5} />
                        </div>
                    </div>
                    <button className='rating-advice'>
                        SARAN
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className='root'>
            {/* PROFILE CHECK */}
            <Profile complete={false} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* STORY */}
            <div className='story-section'>
                {renderStory()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />
            
            {/* CONTENT */}
            <ContentSection />

            {/* DIVIDER */}
            <div className='divider' />

            {/* PAID ITEMS */}
            <div className='paid-greeting'>
                Hi, `name` 👋
            </div>
            <div className='paid-description'>
                Dapatkan content dari product
            </div>
            <div className='paid-content'>
                <Content />
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* UNFINISHED */}
            <div className="unfinish-section">
                <div className='unfinish-title'>
                    Kelas yang Belum Anda Selesaikan
                </div>
                {renderUnfinish(15,211)}
            </div>
        </div>
    );
};

export default Dashboard;
