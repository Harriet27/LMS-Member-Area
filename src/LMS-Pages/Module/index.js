import React, { useEffect } from 'react';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import './module.css';

const Module = () => {
    useEffect(() => {
        document.title = 'LMS Module';
    });

    const filterList = [
        {
            filter: 'Action Plan',
            active: true,
        },
        {
            filter: 'Jawab Pertanyaan',
            active: false,
        },
        {
            filter: 'Tugas Anda',
            active: false,
        },
        {
            filter: 'Mind Map',
            active: false,
        },
    ];

    const renderFilter = () => {
        return filterList.map((val,index) => {
            return (
                <div className={val.active ? `filter choosen` : `filter`}>
                    {val.filter}
                </div>
            );
        });
    };

    const icon = 'https://www.letsonenterprises.com/wp-content/uploads/2015/07/reachout.jpg';

    const renderAction = () => {
        return [0,1,2,3,4,5,6,7,8].map((val, index) => {
            return (
                <div className='action-card'>
                    <div className='action-txt'>
                        Lorem ipsum dolor sit amet. kok dummy text gini amat ya, udah kehabisan ide, maap ya hehehe.
                    </div>
                    <div className='action-icon-button'>
                        <img src={icon} alt='icon' className='action-icon' />
                        <button className='action-button'>
                            Action
                        </button>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='root'>
            {/* WELCOME VIDEO */}
            <WelcomeVideo />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection moduleTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* FILTER */}
            <div className='filter-container'>
                {renderFilter()}
            </div>

            {/* MODULE CONTENT */}
            <div className='action-section'>
                {renderAction()}
            </div>
        </div>
    );
};

export default Module;
