import React from 'react';

const GifList = props => {
  let list = [];

  for(let i of props.imgList){
    list.push(<p><img src={ i.images.original.url } width="500px"/></p>)
  }

  return(
    <div>
      { list }
    </div>
  )
}

export default GifList;
