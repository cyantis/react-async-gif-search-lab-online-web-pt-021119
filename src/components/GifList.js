import React from 'react';

export default class GifList extends React.Component {

createList = () => {
  let list = [];

  for(let i of this.props.imgList){
    list.push(<li><img src={ i.images.original.url } /></li>)
  }
  return list;
}

  render(){
    return(
      <ul>
        { this.createList() }
      </ul>
    )
  }
}
