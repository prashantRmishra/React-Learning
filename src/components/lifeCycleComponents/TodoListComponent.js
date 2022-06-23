import { Component } from "react";
import { TodoItemComponent } from "./TodoItemComponent";

export class TodoListComponent extends Component{
    constructor(props){ // 1st Life Cycle (lc) method of mounting 
        super(props);
        this.state = {
            todos : this.props.todos
        }
    }
    componentWillMount(){ //2nd lf method of mounting
        console.log("componentWillMount() called in TodoListComponent")
    }
    render(){ // 3rd lf method of mounting and second method of updating
        return (
            <div>
                {
                    this.state.todos.map(todo=>{
                        return <TodoItemComponent key = {todo.id} todo={todo}/>
                    })
                }
                <button className="btn btn-primary" onClick={this.addTodoItem.bind(this)}>Add Todo</button>
                <button className="btn btn-primary" onClick={this.dontAddItem.bind(this)}>Don't add anything new todo</button>

            </div>
           
        );
    }
    componentDidMount(){
        console.log("componentDidMount() called in TodoListComponent ")
    }




    addTodoItem(){
        this.setState({
            todos:[...this.state.todos,{id:2,name:"This is second todo"}]
        })
    }
    dontAddItem(){
        this.setState({
            todos:this.state.todos
        })
    }




}
