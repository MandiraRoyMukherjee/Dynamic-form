import react from 'react';
   
export default class Classcomp extends react.Component{

    // constructor(){
    //     super();
    //     this.state={
    //         name:"mandira"
    //     }
    // }

    render(){

        return(

            <div>
                <h1>hello from class component <br></br>
                    {this.props.name}
                </h1>
                {/* <button  onClick={()=>this.setState({name:"mandi"})}>update name</button> */}
               
            </div>

        )
    }


}