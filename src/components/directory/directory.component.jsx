import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              size:'large',
              id: 1,
              },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              size:'large',
              id:2
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              size:'large'
              
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              size: 'large',
              id: 4,
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              id: 5,
              size:'large'
            }
          ]
};
}


render(){
    return(
        <div className='directory-menu'>
            {this.state.sections.map(({title, imageUrl, id, size}) =>(
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
        </div>
    );
}
}
export default Directory;
