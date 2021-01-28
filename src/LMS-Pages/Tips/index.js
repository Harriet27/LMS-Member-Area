import React, { useEffect } from 'react';
import moment from 'moment';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import './tips.css';

const author = 'https://i.pinimg.com/originals/e0/bc/5c/e0bc5cd4f1d7cff7116a325490b3010d.png';
const ago = moment().utc('2019-12-04 12:00:24').local().startOf('seconds').fromNow();
const tick = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png';

const renderTips = () => {
    return [0,1,2,3,4].map((val,index) => {
        return (
            <div key={index} className='tips-group'>
                <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/covid-19-corona-virus-prevention-poster-design-template-7eafeb97181606ad03bbe2e56324593c_screen.jpg?ts=1585635679' alt='book on shipping' className='tips-book' />
                <div className='tips-desc'>
                    <div className='tips-detail'>
                        <b>To Kill a Mockingbird</b>
                        {
                            index === 0
                            ?
                            <img src={tick} alt='tick' className='tips-checkmark' />
                            :
                            null
                        }
                        <br/> it is set in the mid-1930s in the small town of Maycomb, Alabama. It is narrated by Scout Finch, a six-year-old tomboy who lives with her lawyer father Atticus and her ten-year-old brother Jem, trying to make a scene.
                    </div>
                    <div className='tips-poin'>
                        <b>+3 Poin</b>
                    </div>
                    <div className='author-details'>
                        <img src={author} alt='author' className='author-profile' />
                        <div className='author-name-time'>
                            John Doe ● {ago} ● 5 min read
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const filterList = [
    {
        filter: 'Terbaru',
        active: true,
    },
    {
        filter: 'Rekomendasi',
        active: false,
    },
    {
        filter: 'Telah Dibaca',
        active: false,
    },
    {
        filter: 'Sesuai Topik',
        active: false,
    },
];

const Tips = () => {
    useEffect(() => {
        document.title = 'LMS Tips';
    });

    // const filterList = [
    //     {
    //         filter: 'Terbaru',
    //         active: true,
    //     },
    //     {
    //         filter: 'Rekomendasi',
    //         active: false,
    //     },
    //     {
    //         filter: 'Telah Dibaca',
    //         active: false,
    //     },
    //     {
    //         filter: 'Sesuai Topik',
    //         active: false,
    //     },
    // ];

    const renderFilter = () => {
        return filterList.map((val,index) => {
            return (
                <div className={val.active ? `filter choosen` : `filter`}>
                    {val.filter}
                </div>
            );
        });
    };

    const shippingBook = 'https://static-cse.canva.com/blob/142538/Purple-and-Red-Leaves-Illustration-Childrens-Book-Cover.jpg';

    const renderShipment = () => {
        return (
            <div className='ship-group'>
                <img src={shippingBook} alt='book on shipping' className='shipping-book' />
                <div className='ship-desc'>
                    <div className='ship-address'>
                        <b>Alamat Pengiriman:</b>
                        <br/> Komplek Scientia Square, Jalan Darwin Timur. Ruko Darwin No 6, Medang, Kec. Pagedangan, Kota Tangerang Selatan, Banten 15339
                    </div>
                    <div className='ship-status'>
                        <b>Status :</b> Delivering
                    </div>
                    <button className='view-button'>
                        <b>View Tracking</b>
                    </button>
                </div>
            </div>
        );
    };

    const tipsImg = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/covid-19-corona-virus-prevention-poster-design-template-7eafeb97181606ad03bbe2e56324593c_screen.jpg?ts=1585635679';
    const author = 'https://i.pinimg.com/originals/e0/bc/5c/e0bc5cd4f1d7cff7116a325490b3010d.png';
    const ago = moment().utc('2019-12-04 12:00:24').local().startOf('seconds').fromNow();
    const tick = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png';

    const renderTips = () => {
        return [0,1,2,3,4].map((val,index) => {
            return (
                <div key={index} className='tips-group'>
                    <img src={tipsImg} alt='book on shipping' className='tips-book' />
                    <div className='tips-desc'>
                        <div className='tips-detail'>
                            <b>To Kill a Mockingbird</b>
                            {
                                index === 0
                                ?
                                <img src={tick} alt='tick' className='tips-checkmark' />
                                :
                                null
                            }
                            <br/> it is set in the mid-1930s in the small town of Maycomb, Alabama. It is narrated by Scout Finch, a six-year-old tomboy who lives with her lawyer father Atticus and her ten-year-old brother Jem, trying to make a scene.
                        </div>
                        <div className='tips-poin'>
                            <b>+3 Poin</b>
                        </div>
                        <div className='author-details'>
                            <img src={author} alt='author' className='author-profile' />
                            <div className='author-name-time'>
                                John Doe ● {ago} ● 5 min read
                            </div>
                        </div>
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
            <TopicSection tipsTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SHIPMENT */}
            <div className='shipment-container'>
                <div className='shipment-title'>
                    Pengiriman Buku
                </div>
                <div className='shipping-items'>
                    {renderShipment()}
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* TIPS */}
            <div className='tips-container'>
                <div className='tips-title'>
                    Tips Untuk Kamu
                </div>
                <div className='filter-container'>
                    {renderFilter()}
                </div>
                <div className='tips-list'>
                    {renderTips()}
                </div>
            </div>
        </div>
    );
};

export default Tips;
