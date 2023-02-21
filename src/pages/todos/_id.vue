<template>
    <div class="container">
        <h1>Todo Page</h1>
        <TodoForm :editing="true"/>
        <!-- <div v-if="loading">
            Loading...
        </div>
        <form v-else @submit.prevent="onSave">
            <div class="row1">
                <div>
                    <div class="form-group">
                        <label>Todo Subject</label>
                        <input type="text" class="form-control" v-model="todo.subject">
                    </div>
                </div> -->
                <!-- <div>
                    <div class="form-group">
                        <label>Todo Subject</label>
                        <input type="text" class="form-control" v-model="todo.subject">
                    </div>
                </div> -->
                <!-- <div>
                    <div class="form-group">
                        <label>Status</label>
                        <div>
                            <button @click="toggleTodoStatus" type="button" class="btn" :class="todo.completed ? 'btnGG' : 'btnRR'">{{todo.completed ? '완&nbsp;&nbsp;&nbsp;&nbsp;료':'미완료'}}</button>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- 수정하고 저장버튼 -->
            <!-- <button class="btnD btnmt" type="submit" :disabled="!todoUpdated">저장</button>
            <button class="btn btnW btnl" @click="moveTodoListPage">취소</button>

        </form> -->
    </div>
</template>

<script>
    import TodoForm from '@/components/TodoForm.vue'
    /* import {useRoute, useRouter} from 'vue-router'
    import axios from 'axios';
    import {ref, computed} from 'vue'
    import _ from 'lodash' */
    export default {
        components: {
            TodoForm
        },
        /* setup(){
            const route = useRoute();
            const router = useRouter();
            const todo=ref(''); *//* null 이라고 하면 오류가 떠서 '' 빈값으로 변경 */
            //console.log(route.params.id);
            /* const loading = ref(true);
            const originalTodo=ref(null)
            const todoId=route.params.id
            const getTodo = async() => {
                const res = await axios.get(`http://localhost:3000/todos/${todoId}`);
                todo.value=res.data;
                loading.value=false;
                originalTodo.value={...res.data};
            }
            

            const toggleTodoStatus = () => {
                todo.value.completed = !todo.value.completed
            } */
            /* router 네임 Todos로 이동되는 .. */
            /* const moveTodoListPage =() =>{
                router.push({
                    name:'Todos'
                })
            }
            getTodo();

            const onSave = async () => {
                const res = await axios.put(`http://localhost:3000/todos/${todoId}`, {
                    subject:todo.value.subject,
                    completed:todo.value.completed
                });
                originalTodo.value={...res.data};
                console.log(res);
            }
            const todoUpdated = computed(() => {
                return !_.isEqual(todo.value, originalTodo.value)
            })
            return{
                todo,
                toggleTodoStatus,
                moveTodoListPage,
                onSave,
                todoUpdated,
            }
        } */
    }


</script>
<style>
    h1{margin-top: 30px; margin-bottom: 20px;}
    .form-group{display: flex; flex-direction: column;}
    .form-group label{font-weight: bold; margin-bottom: 10px;}
    .form-group .form-control{padding: 10px 20px;}
    /* .btnmt{margin-top: 10px;} */
    .row1{display: flex; justify-content: space-between;}
    .row1>div{flex-basis: 49%;}
    .btnRR{padding: 10px 20px; border: none; background: #e93838; color: #fff;}
    .btnGG{padding: 10px 20px; border: none; background: #12794e; color: #fff;}
    .btnW{background: #000; color: #fff;}
    .btnL{margin-left: 10px;}
</style>
<style scoped>
    .row1{margin-bottom: 10px;}
    .btnD{padding: 10px 20px; border: none; margin-right: 10px;}
</style>