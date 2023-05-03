<template>
    <div class="todo-container">
        <h2>TO-DO</h2>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="margin-right: 0.5rem; width: 80%;">
                <input type="text" placeholder="TO-DO 검색" class="form-control" v-model="serchText" style="margin: 1rem 0; width: 300px; padding: 5px 20px;">
            </div>
            <div>
                <button class="btn create-btn" @click="moveToCreatePage">CREATE TODO</button>
            </div>
        </div>
        <div v-if="!todos.length" style="font-size: 14px; text-align: center; color: #888; padding: 5rem 0;">
            찾는 문장이 없습니다
        </div>
        <TodoList :todos="todos" @delete-todo="deleteTodo" @toggle-todo="toggleTodo" />
        <br>
        <nav>
            <ul class="pagination">
                <li  class="page-item">
                    <a href="#!" class="page-link"  @click="getTodos(currentPage-1)">
                        <i class="fa-solid fa-chevron-left"></i>
                    </a>
                </li>
                <li v-for="page in numberofPages" :key="page" class="page-item" :class="currentPage===page ? 'active' : ''">
                    <a href="#!" @click="getTodos(page)" class="page-link" :class="currentPage===page ? 'active' : ''">{{ page }}</a>
                </li>
                <li  class="page-item" >
                    <a href="#!" @click="getTodos(currentPage+1)" class="page-link">
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  </template>
  
  <script>
  import { watch, computed, ref } from 'vue';
  import TodoList from '@/components/TodoList.vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router'
  
  export default {
    components: {
        TodoList,
    },
    setup(){
        /* 버튼 라우터 */
        const router=useRouter();
        const todos = ref([ ]);
        const serchText= ref('');
        const error=ref('');
        const limit=5;
        const numberOfTodos = ref(0);
        const currentPage=ref(1);
        const numberofPages=computed(() =>{
            return Math.ceil(numberOfTodos.value/limit)
        });
        

        const getTodos = async (page = currentPage.value) =>{
            currentPage.value=page;

            /* const number = numberofPages.value */
            try{
                const res=await axios.get(`https://vue-todo.herokuapp.com/todos?_sort=id&_order=desc&subject_like=${serchText.value}&_page=${page}&_limit=${limit}`);
                //console.log(res.headers)
                numberOfTodos.value=res.headers['x-total-count'];
                todos.value=res.data;
            }
            catch (err){
                console.log(err);
                error.value="찾는 문장이 없습니다"
            }

            /* console.log('numberofPages.value',numberofPages.value); */
            /* console.log('currentPage.value',currentPage.value); */

            if (currentPage.value < 1) {
                currentPage.value = 1
            }
            if (currentPage.value > numberofPages.value ) {
                currentPage.value = numberofPages.value;
            }
            

        };
        getTodos();
        
        const moveToCreatePage = ()=>{
            router.push({
                name:'TodoCreate',
            })
        }
        const addTodo = async (todo) => {
            error.value='';
            try{
                await axios.post('https://vue-todo.herokuapp.com/todos', {
                    subject:todo.subject,
                    completed:todo.completed, 
                });
                getTodos(1);
                // todos.value.push(res.data);
            }catch (err){
                console.log(err);
                error.value="잘못된 입력입니다."
            }
            
        }
        watch(serchText, () => {
          // console.log(current, prev)
          getTodos(1);
        })
       
        const deleteTodo = async (index) => {
            error.value="";
            const id= todos.value[index].id;
            try{
                await axios.delete('https://vue-todo.herokuapp.com/todos/'+ id);
                // todos.value.splice(index, 1);
                getTodos(1);
  
            }catch(err){
                console.log(err);
                error.value="찾는 문장이 없습니다"
            }
           
        }
        const toggleTodo= async (index, checked) =>{
           // console.log(index)
           error.value="";
           const id= todos.value[index].id;
  
           try{
                await axios.patch('https://vue-todo.herokuapp.com/todos/'+ id, {
                    completed: checked/*  !todos.value[index].completed */
                });
                todos.value[index].completed= checked/* !todos.value[index].completed; */
           }catch(err){
                console.log(err);
                error.value="찾는 문장이 없습니다"
           }
        }

        // const filteredTodos = computed(() =>{
        //     if(serchText.value){
        //         return todos.value.filter(todo =>{
        //             return todo.subject.includes(serchText.value);
        //         })
        //     }
        //     return todos.value;
        // })
  
        return {
           todos,
           deleteTodo,
           addTodo,
           toggleTodo,
           serchText,
           getTodos,
           numberofPages,
           currentPage,
           moveToCreatePage,
        }
    }
  }
  </script>

  <style>
      .todo-container{width: 100%; padding: 0 80px;}
      h1{text-align: center; color: blue; text-transform: uppercase;}
      h2{text-align: center; color: blue; text-transform: uppercase;}
      .btn{ border: none; background: #000000; color: #fff}
      .default-btn{padding: 12px 30px; border: none; color: #242424; font-weight: bold;}
  </style>
  
  <style scoped>
    .create-btn{padding: 10px 30px; background: rgb(19, 19, 100);}
    .pagination{padding: 0; list-style: none; display: flex; justify-content: center;}
    .page-item{ padding: 5px 15px; margin: 0 3px; border: 1px solid #ddd}
    .page-link{color: #666; text-decoration: none;}
    .active{ background: #555; color: #fff}
  </style>