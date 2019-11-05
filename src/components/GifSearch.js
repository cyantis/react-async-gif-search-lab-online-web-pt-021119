import React from 'react';

export default class GifSearch extends React.Component {

  state = {
    search: ""
  }

  search = event => {
   this.setState({
     search: event.target.value
   })
 }

 handleSubmit = event => {
   this.props.fetchGifs(this.state.search);
 }


  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <div>
          <strong>Search for gifs!</strong>
          <input type="text" name="search" id="search" onChange={ event => this.search(event) } value={ this.state.search }/>
          </div>
          <div>
          <button type="submit">Search!</button>
        </div>
      </form>
    );
  }
}
