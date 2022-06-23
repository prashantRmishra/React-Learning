import { Component } from "react";
import axios from "axios";
export class GetOperation extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    render(){
        return(
           <div>Get Operation
           
                <button className="btn btn-primary"
                onClick={this.getAllUsers.bind(this)}
                > Get All Users</button>
               {
                this.state.users.map(user=>{
                    return <h2 key = {user.id}>{user.name}</h2>
                })
               }
           </div>
        );
    }
    getAllUsers(){
        axios.get(" http://localhost:3001/users").then(res=>{
            console.log("users are here")
            console.log(res)
            this.setState({
                users:res.data
            })
        }).catch(error=>{console.log(error)})
    
    }

    //as we know this is the right life cycle hook to make ajax calls
    componentDidMount(){
    
           
    }
}