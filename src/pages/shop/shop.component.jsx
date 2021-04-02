import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class ShopPage extends Component {
    
    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA,
        }
    }
    
    render() {
        const { collections } = this.state;
        console.log(collections);
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;