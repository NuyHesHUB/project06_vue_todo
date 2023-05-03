<template>
    <div>
        <div class="todo-list" v-for="(todo, index) in todos" :key="todo.id">
          <div @click="moveToPage(todo.id)" style="display: flex; border: 1px solid #ccc; padding: 10px 20px; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <div>
                <input type="checkbox" class="form-check-input" :checked="todo.completed" style="margin-right: 10px;" @change="toggleTodo(index, $event)" @click.stop> <!-- value="todo.completed" 의 밸류를 checked로 변경 db.json에 completed가 체크되면 true, false 로 바뀜 -->
                <label :class="{completed: todo.completed}">  <!-- :style="todo.completed ? todoStyle : {}" -->
                    {{ todo.subject }}
                </label>
              </div>
              <div>
                <button class="btn" style="padding: 5px 10px; background: #555;" @click.stop="deleteTodo(index)">삭제</button>
                <!-- 이벤트 버블링 방지 @click.stop -->
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import {useRouter} from 'vue-router'
    export default{
        props: {
            todos:{
                type:Array,
                required:true
            }
        },
        emits:['toggle-todo','delete-todo'], /* 자식이 다시 emit으로 올려줘야한다. context emit 을 쓰면 올려줘야한다.*/
        setup(props, context){/* {emit} 으로 쓰고 밑에 context 생략가능 */
            const router=useRouter();
            const deleteTodo = (index) => {
                context.emit('delete-todo',index)
            }
            const toggleTodo = (index, event) => {
                
                context.emit('toggle-todo',index, event.target.checked)
            }
            const moveToPage= (todoId) => {
                //console.log(todoId);
                //router.push('/todos/'+todoId)
                 router.push({
                    name:'Todo',
                    params:{
                        id:todoId
                    }
                })
            }
            return{
                deleteTodo,
                toggleTodo,
                moveToPage,
            }
        }
    }
</script>

<style scoped>
    .todo-list:hover{background: #ededed;}
    .completed{text-decoration: line-through;color: gray}
</style>