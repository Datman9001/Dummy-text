import React, { Component } from 'react'

export default class DummyTextAll extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            paragraphs:"",
            results: []
        }

        this.paragraphNumbers = this.paragraphNumbers.bind(this)
          
    }

    componentDidMount(){
     
        this.newResults()
      
    }

    newResults(){
        this.setState({isLoading: true})
        const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paragraphs;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
           JSON.stringify(myJson);
            this.setState({
                results: myJson,
                isLoading: false

            })
        });
    }
    


    paragraphNumbers(e){
        this.setState({paragraphs: e.target.value},this.newResults)
        
    }

    displayResults(){
        if(this.state.isLoading){
            return 'Loading...'
        } else{
            return this.state.results.map((result, index)=>{
                return <p key={index}>{result}<br/><br/></p>
              })
        }
    }

  render() {
    return (
    
      <div className="card">
        <div className="card-action">
          <h5>Real Time Options</h5>
            <div className="row">
                <div className="col s6">
                     <div className="input-field">
                        <p>Paragraphs</p>
                             <input placeholder="Number of paragraph you would like" min='1' id="number" type="number" className="validate" value={this.state.paragraphs} onChange={this.paragraphNumbers}/>
                             <label htmlFor="number">
                             </label>
                    </div>
                </div>
                 
            </div>
        </div>
        <div className="card-content" id='dummy-text'>
        
            {this.displayResults()}
            <br/>
        </div>
       
     
     </div> //  card
       
      
    )
  }
}
