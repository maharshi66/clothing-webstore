import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss';
import { sections } from './directory.data';

class Directory extends Component {

    constructor(){
        super();
    
        this.state = {
            sections: sections 
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                )
                }                
            </div>
        )
    }
}

export default Directory;