<template>
    <div>
        <div v-for="(todo, index) in todos" :key="todo.id" class="card">
          <div class="card-body" @click="moveToPage(todo.id)">
              <div class="form-check">
                <!-- ???? --><input type="checkbox" class="form-check-input" :checked="todo.completed" @change="toggleTodo(index, $event)" @click.stop> <!-- value="todo.completed" 의 밸류를 checked로 변경 db.json에 completed가 체크되면 true, false 로 바뀜 -->
                <label class="form-check-label" :class="{todoStyle: todo.completed}">  <!-- :style="todo.completed ? todoStyle : {}" -->
                    {{ todo.subject }}
                </label>
              </div>
              <div>
                <button class="btnR" @click.stop="deleteTodo(index)">삭제</button>
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

<style>

</style>