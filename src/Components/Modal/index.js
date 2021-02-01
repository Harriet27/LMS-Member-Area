import React from 'react'

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// IMAGES
import Logo from '../../Assets/Images/laruno.png'

// STYLE
import './style.css'

function Modal (props) {

    const {
        modalClose,
        setModalClose,
        setShowModal
    } = props

    let HandleModalClose = () => {
        setModalClose(true)
        setTimeout(()=>{
            setModalClose(false)
            setShowModal(false)
        },800)
    }
    if (modalClose) {
        return (
            <div className="burger-menu-02">
                <div className="burger-menu-02-content">

                </div>
            </div>
        )
    }else {
        return (
            <div className="burger-menu-01">
                <div className="burger-menu-01-content">

                    <div className="bmc-content-1">

                        <div className="bmc-content-2">
                            <img
                                src={Logo}
                                alt="laruno"
                            />
                            <a 
                                href="/lms-profile" 
                                style={{margin:'25px 0px 0px 0px', textDecoration:'none'}}
                            >
                                <span style={{fontSize:'medium'}}>
                                    Profile
                                </span>
                            </a>
                            <a href="/lms-dashboard" >
                                <span style={{fontSize:'medium'}}>
                                    Dashboard
                                </span>
                            </a>
                            <a href="/lms-home" >
                                <span style={{fontSize:'medium'}}>
                                    Home
                                </span>
                            </a>
                            <a href="/lms-webinar" >
                                <span style={{fontSize:'medium'}}>
                                    Webinar
                                </span>
                            </a>
                            <a href="/lms-video/list" >
                                <span style={{fontSize:'medium'}}>
                                    Video
                                </span>
                            </a>
                            <a href="/lms-tips" >
                                <span style={{fontSize:'medium'}}>
                                    Tips
                                </span>
                            </a>
                            <a href="/lms-module" >
                                <span style={{fontSize:'medium'}}>
                                    Module
                                </span>
                            </a>
                            <a href="/lms-group" >
                                <span style={{fontSize:'medium'}}>
                                    Group
                                </span>
                            </a>
                            <a href="/lms-bonus" >
                                <span style={{fontSize:'medium'}}>
                                    Bonus
                                </span>
                            </a>
                            <a href="/lms-reseller" >
                                <span style={{fontSize:'medium'}}>
                                    Reseller
                                </span>
                            </a>
                        </div>
                        <CloseIcon
                            style={{ marginTop : 30 , cursor : "pointer"}}
                            onClick={e=>HandleModalClose()}
                        />    

                    </div>


                </div>
            </div>
        )
    }
    
}

export default Modal