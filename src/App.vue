<template>
  <div class="container">
    <h2>ToDo List</h2>
    <TodoSimpleForm @add-todo="addTodo"/><!-- 컴포넌트에 넘겨주기 위해 -->
    <div v-if="!todos.length">
        오늘의 할일이 없습니다.
    </div>
    <div v-for="(todo, index) in todos" :key="todo.id" class="card">
      <div class="card-body">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="todo.completed">
            <label class="form-check-label" :class="{todoStyle: todo.completed}">  <!-- :style="todo.completed ? todoStyle : {}" -->
                {{ todo.subject }}
            </label>
          </div>
          <div>
            <button class="btnR" @click="deleteTodo(index)">삭제</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

/* ref('') 를 쓰기위해 import를 시켜줘야함*/
import {ref} from 'vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';
export default {
    components: {
        TodoSimpleForm
    },
  setup(){
    
    const todos=ref([
      {id: 1, subject: 'vue 공부하기'},
      {id: 2, subject: 'Type Script 공부하기'},
    ]);
    
    const addTodo= (todo) => {
        todos.value.push(todo)

    }
    /* const todoStyle={
      color:'gray',
      textDecoration:'line-through'
    } */
    
    const deleteTodo=(index) => {
        todos.value.splice(index,1)
    }
    return{
      todos,
      /* todoStyle, */
      deleteTodo,
      addTodo,
    }
  }
}
</script>

<style>
  *{margin: 0; padding: 0; box-sizing: border-box;}
  .container{width: 100%; max-width: 1024px; margin: 0 auto; padding: 0 20px;}
  h2{text-align: center; color: #000000; margin-bottom: 20px; margin-top: 50px;}
  .d-flex{display: flex;}
  .flex-grow-1{flex-grow: 1;}
  .flex-grow-1 input{width: 98%; padding: 10px 20px;}
  .b-btn{}
  .b-btn .btn{padding: 12px 30px; border: none; background: #000000; color: #fff;}
  form{margin-bottom: 50px;}
  .card{margin: 10px 0;}
  .card-body{border: 1px solid #ccc; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;}
  .form-check-input{margin-right: 12px;}
  .todoStyle{text-decoration: line-through; color: gray;}
  .btnR{padding: 10px 20px; background: #000; color: #fff;}
  .no-work{margin-top: 10px;}
</style>
