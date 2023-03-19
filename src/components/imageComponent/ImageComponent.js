import { cases } from '../../assets'
import './styles.css'

const ImageComponent = () =>  (
    <div className="home__casesImage">
    <img src={cases} alt="" className="home__casesImage1"/>
    <img src={cases} alt="" className="home__casesImage2"/>
    <img src={cases} alt="" className="home__casesImage3"/>
    <img src={cases} alt="" className="home__casesImage4"/>
    {/* <img src="https://cdn-bpphg.nitrocdn.com/WvJxwYJgWNVdwgfGCwfpdhJOrQEaryEr/assets/images/optimized/rev-e3576ea/altar.io-neo/wp-content/uploads/2021/06/20220633/reic-tilt-4.png" alt="" /> */}
  </div>
  )


export default ImageComponent