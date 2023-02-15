<template>
    <div>
        <div v-for="(todo, index) in todos" :key="todo.id" class="card">
          <div class="card-body">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" :checked="todo.completed" @change="toggleTodo(index)"> <!-- value="todo.completed" 의 밸류를 checked로 변경 db.json에 completed가 체크되면 true, false 로 바뀜 -->
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
    export default{
        props: {
            todos:{
                type:Array,
                required:true
            }
        },
        emits:['toggle-todo','delete-todo'], /* 자식이 다시 emit으로 올려줘야한다. context emit 을 쓰면 올려줘야한다.*/
        setup(props, context){
            const deleteTodo = (index) => {
                context.emit('delete-todo',index)
            }
            const toggleTodo = (index) => {
                context.emit('toggle-todo',index)
            }
            return{
                deleteTodo,
                toggleTodo,
            }
        }
    }
</script>

<style>

</style>