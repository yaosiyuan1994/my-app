import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {
      // 对接受的props进行:类型，必要性的限制
      static propTypes ={
        tasks:PropTypes.array.isRequired,
        updateTask:PropTypes.func.isRequired,
        deleteTask:PropTypes.func.isRequired
    }   
    render() {
        // 解构赋值通过props从父组件App取得传送过来的元素，得到this.props.tasks
        const {tasks,updateTask,deleteTask} = this.props
         return (
            <div>
                <ul>
                    {/* 使用map遍历this.props.tasks数组里的每一个对象 */}
                    {tasks.map((item)=>{
                        // 被遍历的对象必须有一个key的值，也就是第一无二的id
                        // {...item}解构赋值 id后面的所有元素内容
                     return <Item key={item.id} {...item} updateTask={updateTask} deleteTask={deleteTask}/>
                    })}
                </ul>
            </div>
        )
    }
}
