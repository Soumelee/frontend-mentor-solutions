import gamingImg from '../assets/images/image-gaming-growth.jpg';
import retroPcs from '../assets/images/image-retro-pcs.jpg';
import topLaptop from '../assets/images/image-top-laptops.jpg';
const Trending = () => {
    return (
        <div className="trending">
            <ul>
                <li>
                    <div className="img" style={{backgroundImage:`url(${retroPcs})`}}></div>
                    <div>
                        <span>01</span>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>                    
                </li>
                <li>
                    <div className="img" style={{backgroundImage:`url(${topLaptop})`}}></div>
                    <div>
                        <span>02</span>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </li>
                <li>
                    <div className="img" style={{backgroundImage:`url(${gamingImg})`}}></div>
                    <div>
                        <span>03</span>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>                    
                </li>
            </ul>
        </div>
    )
}

export default Trending