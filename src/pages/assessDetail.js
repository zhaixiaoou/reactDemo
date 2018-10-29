import React, { Component} from 'react';
import { Link } from 'react-router-dom';
 
class AssessDetail extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div>
                
                    评估详情{this.props.match.params.id}
            </div>
        );
    }
}

export default AssessDetail;