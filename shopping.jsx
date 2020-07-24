import React, { Component } from 'react';
import Header from './header';
import Contents from './contents';

class Shopping extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                <Contents/>
            </div>
         );
    }
}
 
export default Shopping;