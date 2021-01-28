import React  from 'react'

// MODULES
import { useLocation  } from 'react-router-dom';

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// STYLE
import './style.css'

function Advertisement (props) {

    // USE LOCATION
    const location = useLocation()

    // CHILD PROPS
    const { setShowAdv } = props

    // RESPONSIVE

    if (
        location.pathname === '/authentication' || 
        location.pathname === '/change-password' || 
        location.pathname === '/reset-password' || 
        location.pathname.split('/')[1] === "product-detail" || 
        location.pathname === '/lms-dashboard' || 
        location.pathname === '/lms-home' || 
        location.pathname === '/lms-webinar' || 
        location.pathname === '/lms-video/list' || 
        location.pathname === '/lms-video/detail' || 
        location.pathname === '/lms-tips' || 
        location.pathname === '/lms-module' || 
        location.pathname === '/lms-group' || 
        location.pathname === '/lms-bonus' || 
        location.pathname === '/lms-reseller' || 
        location.pathname === '/lms-reseller-me' || 
        location.pathname === '/lms-profile' 
    ) {
        return (<></>)
    } else {
        return (
            <div className="adv-container"  id="adv-cont">
                <div className="adv-root">
                    <div className="adv-content">
                        Mau Tau Benefit Premium Member? Cukup Rp 20.000,-/bulan. Cek Disini Sekarang
                    </div>
                </div>
                <CloseIcon
                    onClick={e=>setShowAdv(false)}
                    // style={{ marginTop : 16 , marginRight :30 , cursor : "pointer"  }}
                    // className=""
                    className="adv-close-icon"
                />
            </div>
        )
    }


}

export default Advertisement