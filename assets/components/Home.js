import React, {Component} from 'react';
import Bin from './Bin';// SIM 1 37E-1
import '../css/home.css';
import {Link} from 'react-router-dom';
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC';
import ShelfD from './ShelfD';

class Home extends Component {
    constructor(){//SIM 1 36I
        super()
        this.state = {//SIM 1 36C
            name: "",
            price: 0
        }
    }

    render(){//SIM 1 36F
        return(
            <header>
                <div>
                    <img src="../../assets/logo.png" className="logo" />
                </div>

            </header>
            <body>
               <ShelfA />
               <Link to=""><div>Shelf B</div></Link>
               <Link to=""><div>Shelf C</div></Link>
               <Link to=""><div>Shelf D</div></Link>


            </body>
        )
    }
}
export default Home;//SIM 1 37E-2