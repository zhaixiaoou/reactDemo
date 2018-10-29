import React, { Component} from 'react';
import { Link } from 'react-router-dom';
 
class Assess extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <Link to='/assessDetail/12'>
                    评估详情
                </Link>
            </div>
        );
    }
}

export default Assess;