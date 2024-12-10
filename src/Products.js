//Import Images

import one from "./one.jpg"
import three from "./three.jpg"
import two from "./two.jpg"

function Products() {
    return (
      <div className="products">
        <div className="box">
          <img src={one}></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box" style={{marginLeft:"5px"}}>
          <img src={three} alt="villain"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box"  style={{marginLeft:"5px"}}>
          <img src={two} alt="Designs Club"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }

  export default Products