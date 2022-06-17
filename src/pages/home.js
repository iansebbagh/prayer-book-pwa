import { Link } from 'react-router-dom';
import img_video_placehodler from '../assets/img/video-placeholder.jpg';
import '../assets/scss/home.scss'
import AddModal from '../components/addModal';
import ContentModal from '../components/contentModal';
import InstallPWA from '../components/install-btn'

function HomePage() {

    return ( 
        <>
            <div className="text-center p-5 home-div row ">

                <div className="col-sm-6 offset-sm-3 pt-3 pb-5">
                    <h2>Saint Maker</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <InstallPWA />
                    </div>
                </div>
                <div className="col-sm-6 offset-sm-3 pt-3">
                    <img src={img_video_placehodler} className='w-100'>
                    </img>
                </div>

            </div>

        </>
     );
}


export default HomePage;