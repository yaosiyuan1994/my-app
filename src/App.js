import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

export default class App extends Component {
  // 状态在哪里 操作状态的方法就在哪里
  // 初始化状态
  state = {
    tasks: [
      { id: 1, name: "java", done: true },
      { id: 2, name: "javascript", done: true },
      { id: 3, name: "react", done: false },
      { id: 4, name: "material-ui", done: false },
    ],
  };
  // addTask 用于添加一个task，接受参数是task对象
  addTask = (taskObj) => {
    // 解构赋值 拿到的是 state的初始值
    const { tasks } = this.state;
    const newTask = [taskObj, ...tasks];
    // 更新状态
    this.setState({
      tasks: newTask,
    });
  };
  // updateTask 用于是否勾选时的状态跟新
  updateTask = (id, done) => {
    // 获取状态中的tasks
    const { tasks } = this.state;
    // 匹配处理数据
    const newTask = tasks.map((taskObj) => {
      if (taskObj.id === id) return { ...taskObj, done: done };
      else return taskObj;
    });
    this.setState({
      tasks: newTask,
    });
  };
  // deleteTask 用于删除一个task
  deleteTask = (id) => {
    // 获取初始状态的tasks
    const { tasks } = this.state;
    // 删除指定id的task
    const newTasks = tasks.filter((taskObj) => {
      return taskObj.id !== id;
    });
    this.setState({
      tasks: newTasks,
    });
  };
  // clearAllDone 用于清除所有已完成
  clearAllDone = () => {
    const { tasks } = this.state;
    const newTask = tasks.filter((taskObj) => {
      return taskObj.done !== false;
    });
    this.setState({ tasks: newTask });
  };
  render() {
    // 解构赋值 this.state.tasks
    const { tasks } = this.state;
    return (
      <div>
        {/* 父组件App给子组件Header提供一个回调函数，Header则通过这个回调函数给App传送数据 */}
        <Header addTask={this.addTask} />
        {/* 从父组件App往子组件List里传送了个命名为tasks的元素，元素内容是this.state.tasks */}
        <List
          tasks={tasks}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
        />
        <Footer tasks={tasks} clearAllDone={this.clearAllDone} />
      </div>
    );
  }
}
