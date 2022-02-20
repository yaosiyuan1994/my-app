import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    // 对接受的props进行:类型，必要性的限制
    static propTypes ={
        addTask:PropTypes.func.isRequired
    }
    //键盘事件的 回调 
    handleKeyUp=(e)=>{
        // 结构赋值，获取keyCode,target
        const {keyCode,target} = e
        // 判断是否是回车键
        if(keyCode !== 13) return
        // 非空判断
        if(target.value.trim() === ''){
            alert("输入内容不能为空")
            return
        }
        // 准备一个task对象
        const taskObj ={id:Math.random(),name:target.value,done:false}
        // 将newTask传递给App
           this.props.addTask(taskObj)
        //    清空
     target.value=""
    }
    render() {
        return (
            <div>
                <input  onKeyUp={this.handleKeyUp}  type="text"
                 placeholder="请输入任务名称,按回车确认"></input>
            </div>
        )
    }
}
