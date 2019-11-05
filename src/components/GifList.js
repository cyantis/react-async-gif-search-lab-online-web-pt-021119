import React from 'react';

const GifList = ({ imgList }) => {
  let list = [];

  for(let i of imgList){
    list.push(<p><img src={ i.images.original.url } width="500px"/></p>)
  }

  return(
    <div>
      { list }
    </div>
  )
}

export default GifList;
