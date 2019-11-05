import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    data: ""
  }

  getGifs = (search) => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
  .then(response => response.json())
  .then(json => this.setState({data: json.data.slice(0,3)}))

}

  render(){
    return(
      <div>
        <GifList imgList={ this.state.data } />
        <GifSearch fetchGifs={ this.getGifs }/>
      </div>
    )
  }
}
