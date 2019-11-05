import React from 'react';

export default class GifList extends React.Component {

createList = () => {
  let list = [];

  for(let i of this.props.imgList){
    list.push(<p><img src={ i.images.original.url } width="500px"/></p>)
  }
  return list;
}

  render(){
    return(
      <div>
        { this.createList() }
      </div>
    )
  }
}
