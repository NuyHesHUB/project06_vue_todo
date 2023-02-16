



<template>
    <div class="container">
      <h2>ToDo List</h2>
      <input type="text" placeholder="검색" class="form-control" v-model="serchText"/>
      <TodoSimpleForm @add-todo="addTodo"/><!-- 컴포넌트에 넘겨주기 위해 -->
      <div v-if="!filteredTodos.length"><!-- !todos 도 바꿔준다 검색을 위해 -->
          <!-- 오늘의 할일이 없습니다. -->
          찾는 문장이 없습니다.
      </div>
      <TodoList :todos="filteredTodos" @delete-todo="deleteTodo" @toggle-todo="toggleTodo"/><!-- 하위에 내려보낼것 props -->
      <br>
      <nav class="nav">
          <ul class="pagination">
              <li v-if="currentPage !==1" class="page-item"><a href="#" @click="getTodos(currentPage-1)" class="page-link"><i class="fas fa-chevron-left"></i></a></li>
              <li v-for="page in numberOfPages" :key="page" class="page-item" :class="currentPage===page ? 'active' : ''">
                  <a href="#" @click="getTodos(page)" :class="currentPage===page ? 'active' : ''" class="page-link">{{ page }}</a></li>
              
              <li v-if="numberOfPages !==currentPage" class="page-item"><a href="#" @click="getTodos(currentPage+1)" class="page-link"><i class="fas fa-chevron-right"></i></a></li>
          </ul>
      </nav>
    </div><!-- :todos="todos" 를 바꿔준다 검색을 위해 -->
  </template>
  
  <script>
  
  /* ref('') 를 쓰기위해 import를 시켜줘야함*/
  import {computed, ref} from 'vue';
  import TodoSimpleForm from './components/TodoSimpleForm.vue';
  import TodoList from './components/TodoList.vue';
  import axios from 'axios';
  
  
  
  export default {
      components: {
          TodoSimpleForm,
          TodoList
      },
    setup(){
      
      const todos=ref([
        /* 옮겼음... 근데 에러떠서 주석 */
        {id: 1, subject: 'vue 공부하기'},
        {id: 2, subject: 'Type Script 공부하기'}, 
      ]);
  
      const serchText=ref('');
      const error=ref('');
      const limit=5;
      const numberOfTodos = ref(0);/* 전체개수 */
      const currentPage=ref(1) /* 화살표 ? 4개가 있으면 4  */
      const numberOfPages=computed(() => { 
          return Math.ceil(numberOfTodos.value/limit)
      });/* 총 갯수/5를 넣고싶음 */
  
      /* db.json과 연동 이거 쓰기 전에는 웹에서 db.json으로 입력만 됐었음 */
      const getTodos = async (page = currentPage.value) => {
          try{
              const res=await axios.get(`http://localhost:3000/todos?_page=${page}&_limit=${limit}`);
              //console.log(res.headers);
              numberOfTodos.value=res.headers['x-total-count']
              todos.value=res.data;
          }catch (err){
              console.log(err); 
              error.value="찾는 문장이 없습니다."
          }
      }
      getTodos();
  
      // const addTodo= (todo) => {
      //     //todos.value.push(todo)
      //     error.value='';
      //     axios.post('http://localhost:3000/todos',{
      //         /* promise로 받는다 */
      //         subject:todo.subject,
      //         completed:todo.completed,
      //     }).then((res) => {
      //         console.log(res); todos.value.push(res.data)
      //     }).catch((err) => {
      //         console.log(err); error.value="잘못된 입력방식입니다."
      //     });
      // }
  
      /* async 방식으로 다시 */
      const addTodo=  async (todo) => {
         error.value='';
         try{
          const res=await axios.post('http://localhost:3000/todos',{
              subject:todo.subject,
              completed:todo.completed,
          })
          
          todos.value.push(res.data);
         }catch(err){console.log(err); error.value="잘못된 입력방식입니다."}
      }
  
      /* 삭제기능! */
      const deleteTodo= async (index) => {
          const id=todos.value[index].id;
          console.log(id);
          error.value="";
          try{
              await axios.delete('http://localhost:3000/todos/'+id);
              todos.value.splice(index,1)
          }
          catch(err){
              console.log(err);
              error.value="찾는 문장이 없습니다."
          }
      }
  
  
      /* 수정기능! */
      const toggleTodo= async (index) => {
          // console.log(index);
          //수정기능 넣으려고 주석
          //todos.value[index].completed=!todos.value[index].completed;
          const id=todos.value[index].id;
          try{
              await axios.patch('http://localhost:3000/todos/'+id,{
                  completed: !todos.value[index].completed
              });
              todos.value[index].completed=!todos.value[index].completed;
          }catch(err){
              console.log(err);
              error.value="찾는 문장이 없습니다."
          }
      }
      
      const filteredTodos = computed(() => {
          if(serchText.value){
              return todos.value.filter(todo=>{
                  return todo.subject.includes(serchText.value);
              })
          }
          return todos.value;
      })
      return{
        todos,
        /* todoStyle, */
        deleteTodo,
        addTodo,
        toggleTodo,
        serchText,
        filteredTodos,
        getTodos,
        numberOfPages,
        currentPage,
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
    .b-btn .btn{padding: 12px 30px; border: none; background: #000000; color: #fff;}
    form{margin-bottom: 50px;}
    .card{margin: 10px 0;}
    .card-body{border: 1px solid #ccc; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;}
    .form-check-input{margin-right: 12px;}
    .todoStyle{text-decoration: line-through; color: gray;}
    .btnR{padding: 10px 20px; background: #000; color: #fff;}
    .no-work{margin-top: 10px;}
    .form-control{width: 100%; border: 1px solid #ddd; margin-bottom: 10px; padding: 10px 20px;}
    
    .pagination{list-style: none; display: flex; justify-content: center;}
    .page-item{padding: 10px; margin: 0 5px; border: 1px solid #ddd;}
    .page-link{color: #666;}
    .page-item.active{background: #666; color: #fff;}
  </style>
  