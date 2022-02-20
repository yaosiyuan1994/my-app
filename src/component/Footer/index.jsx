import React, { Component } from 'react'

export default class Footer extends Component {
    // 清除所有已完成的回调
    handleClearAllDone =()=>{
        this.props.clearAllDone()
    }
    render() {
        const {tasks} = this.props
        // 已经完成的个数
        // const doneCount = tasks.reduce((pre,task)=> pre + (task.done ? 1 : 0),0 )
        // 总数
        // const total = tasks.length
        return (
            <div>
             {/* <label>
                 <input type="checkbox"/>
                 </label>
                 <span>
                     <span>已完成{doneCount}</span>/全部{total}
                 </span> */}
                 <button onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
