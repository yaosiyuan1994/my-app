import React, { Component } from 'react'

export default class Item extends Component {
    // 标识鼠标移入，移出
    state={mouse:false}
    // 鼠标移入，移出的回调
    handleMouse=(flag)=>{
        return()=>{
            this.setState({mouse:flag})
        }
    }
    // 勾选或取消勾选某个task的回调
    handleCheck=(id)=>{
        return(e)=>{
            this.props.updateTask(id,e.target.checked)
        }
    }
    // 删除一个task的回调
    handleClick=(id)=>{
        if(window.confirm('Do you really want to delete?')) { this.props.deleteTask(id)}
    }
    render() {
        // 从父组件App通过props取得this.props.taks属性
        const {id,name} = this.props
        const {mouse} = this.state
        return (
            <div>
                <li style={{backgroundColor:mouse ? '#ddd' : 'white'}}
                 onMouseEnter={this.handleMouse(true)}
                 onMouseLeave={this.handleMouse(false)}>
                        <label>
                            <input type="checkbox" onChange={this.handleCheck(id)}/>
                            <span>{name}</span>
                        </label>
                        <button style={{display:mouse ? 'block' : 'none'}}　
                        onClick={()=>this.handleClick(id)}>删除</button>
                    </li>
                   
            </div>
        )
    }
}
