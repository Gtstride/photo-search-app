import React, { } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sol_no : null,
        camera : null,
        photos : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
  }
// 
  handleSubmit(event) {
    console.log('The photo selected is: ' + this.state.sol_no + ' & ' + this.state.camera);
    // get the input values here
    var query = this.state.sol_no;

    // make fetch call to the api
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
    .then(response =>  {
      return response.json();
    }).then(data => {
      console.log(data);
    });  
    
    // build your result
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid bg-dark">
          <div className="container">
          <div className="header"><h2 className="text-white">Mars Photo API</h2>
              <h3 className="text-white">Curiosity</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label className="text-white">Sol No: </label>
              <input type="text" className="form-control" name="sol" value={this.state.state} onChange={(event) =>{this.setState({sol_no : event.target.value})}}/><br></br>

              <label className="text-white">Camera</label>
                <select value={this.state.value} onChange={(event) => {this.setState({camera : event.target.value})}} className="form-control" name="">
                  <option value="Select">Select</option>
                  <option value="FHAZ" name="camera">FHAZ</option>
                  <option value="CHEMCAM" name="camera">CHEMCAM</option>
                  <option value="MAHLI" name="camera">MAHLI</option>
                  <option value="MAST" name="camera">MAST</option>
                  <option value="RHAZ" name="camera">RHAZ</option>
                  <option value="MARDI" name="camera">MARDI</option>
                  <option value="NAVCAM" name="camera">NAVCAM</option>
                  <option value="PANCAM" name="camera">PANCAM</option>
                  <option value="MINITES" name="camera">MINITES</option>

                </select>
              </div><br></br>
            <input type="submit" value="Find Photos" className="btn btn-primary"/>
          </form>
          </div>

        <div className="msg">
        </div>

      </div>
    );
  }
}


export default App;
