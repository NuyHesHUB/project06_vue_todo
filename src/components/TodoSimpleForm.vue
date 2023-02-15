<template>
    <form v-on:submit.prevent="onSubmit">
        <div class="d-flex">
            <div class="flex-grow-1">
              <input type="text" placeholder="오늘 할일을 작성해주세요" v-model="todo">
            </div>
            <div class="b-btn">
              <button class="btn" type="submit">ADD</button>
            </div>
        </div>
        <div v-show="hasError" class="no-work" style="color:red; font-size: 12px; font-weight: bold;">
            해야할 일이 없습니다. 해야할 일을 작성해 주세요.
        </div>
    </form>
</template>
<script>
    import {ref} from 'vue';
    export default {
        emits:['add-todo'],
        setup(props, context){
            const todo=ref('');/* 값을 반환해야해서 return에 작성 */
            const hasError=ref(false);
            const onSubmit = () => {
                if(todo.value===''){
                    hasError.value=true;
                }else{
                    /* todos.value.push({ */ /* }) */
                    context.emit('add-todo',{ /* 'add-todo 가 app.vue에 <TodoSimpleForm @add-todo/> 로 받아온다 */
                        id: Date.now(),
                        subject: todo.value,
                        completed:false
                        }
                    )
                hasError.value=false;
                todo.value=''
                }
                }
            return{
                todo,
                hasError,
                onSubmit,
                
            }
        }
    }
</script>
<style>

</style>