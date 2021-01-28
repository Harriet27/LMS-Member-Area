import React , { useEffect , useState }  from 'react'

// MODULE
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// PAGES
import { 
  Auth, 
  Home, 
  ProductList, 
  ChangePass, 
  ResetPass, 
  ProductDetail, 
  Error404, 
} from './Pages';
import { 
  Dashboard, 
  LMSHome, 
  LMSWebinar, 
  LMSVideoList, 
  LMSVideoDetail, 
  LMSTips, 
  LMSModule, 
  LMSGroup, 
  LMSBonus, 
  LMSReseller, 
  LMSResellerMe, 
  LMSProfile, 
} from './LMS-Pages';

// COMPONENT 
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import Advertisement from './Components/Advertisement';

// GLOBAL ACTION
import { changeValue } from './Redux/Actions/productAction';

// API
import {  SWAGGER_URL } from './Support/API_URL';

// STYLE
import './index.css';

function App () {
  const [showModal,setShowModal] = useState(false)
  const [modalClose,setModalClose] = useState(false)
  const [showAdv,setShowAdv] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    // GET TOPICS
    axios({
        method : "GET",
        url : `${SWAGGER_URL}/topics`
    })
    .then(({data})=>{
        dispatch(changeValue("topicList",data.data))
        
    })
    .catch(err=>{
        console.log(err , ' <<< ERROR')
    })

    // GET PRODUCTS
    axios({
        method : "GET",
        url : `${SWAGGER_URL}/products`
    })
    .then(({data})=>{
        dispatch(changeValue("productList",data.data))
        console.log(data.data , ' <<<< DATA >>>>')
    })
    .catch(err=>{
        console.log(err , ' <<< ERROR')
    })
  },[dispatch])

  return (
    <div className="root-container">
      <div className="root-content">
        <Navbar
          setShowModal={setShowModal}
        />
        {
          showAdv &&
          <Advertisement
            setShowAdv={setShowAdv}
          />
        }
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/authentication" component={Auth}/>
          <Route path="/product-list" component={ProductList}/>
          <Route path="/change-password"component={ChangePass}/>
          <Route path="/reset-password" component={ResetPass}/>
          <Route path="/product-detail/:id" component={ProductDetail}/>
          <Route path='/lms-dashboard' component={Dashboard} />
          <Route path='/lms-home' component={LMSHome} />
          <Route path='/lms-webinar' component={LMSWebinar} />
          <Route path='/lms-video/list' component={LMSVideoList} />
          <Route path='/lms-video/detail' component={LMSVideoDetail} />
          <Route path='/lms-tips' component={LMSTips} />
          <Route path='/lms-module' component={LMSModule} />
          <Route path='/lms-group' component={LMSGroup} />
          <Route path='/lms-bonus' component={LMSBonus} />
          <Route path='/lms-reseller' component={LMSReseller} />
          <Route path='/lms-reseller-me' component={LMSResellerMe} />
          <Route path='/lms-profile' component={LMSProfile} />
          <Route component={Error404} />
        </Switch>
      </div>
      {
        showModal &&
        <Modal
          modalClose={modalClose}
          setModalClose={setModalClose}
          setShowModal={setShowModal}
        />
      }
    </div>
  )

}

export default App