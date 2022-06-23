import { Component } from "react";

export class TodoItemComponent extends Component{
    constructor(props){ // first method of mounting life cycle hook
        super(props);
        this.state = {
            todo : this.props.todo
        }
      
    }

    componentWillMount(){ //second mounting life cycle hook method
        console.log("componentWillMount() called of TodoItemComponent");
    }
    render(){ // 3rd life cycle mounting life cycle hook method.
        return (
            <li>{this.state.todo.id}{this.state.todo.name}</li>
        );
    }
    componentDidMount(){
        console.log("componentDidMount() called of TodoItemComponent");
    }


    // updating life cycle hood methods
componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps() called in TodoItemComponent")
    console.log(nextProps);
    console.log(this.state);
    if(nextProps!==this.state) {
        this.setState({
            todo:nextProps.todo
        })
    }
}

shouldComponentUpdate(nextProps,nextState){

    console.log("shouldComponentUpdate() is called in TodoItemComponent")
    console.log(this.state)
    console.log(nextState);
    if(this.state!== nextState) return true;
    return false;
}
// should componentUpdate() returns true then componentWillUpdate() will be called else not
componentWillUpdate(){
    console.log("componentWillUpdate called of TodoItemComponent");
}


componentDidUpdate(prevProp,prevState){
    console.log("componentDidUpdate() called in TodoItemComponent");
}


componentWillUnmount(){
    console.log("componentWillUnmount() called in TodoItemComponent  ")
}

}