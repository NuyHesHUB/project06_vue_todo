<template>
    <div class="page-container">
        <form  @submit.prevent="onSave">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div>
                    <div style="display: flex; align-items: center;">
                        <label style="text-align: center; margin-right: 10px;">To-Do</label>
                        <input type="text" class="from-control" v-model="todo.subject">
                        <div v-if="subjectError">{{ subjectError }}</div>
                    </div>
                </div>
                <div v-if="editing">
                    <div>
                        <div>
                            <button @click="toggleTodoStatus" type="button" class="btn" :class="todo.completed ? 'btnGG':'btnRR'">{{todo.completed ? '완료':'미완료'}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style="display: flex; flex-direction:column; margin-bottom: 1rem;">
                    <label style="margin-bottom: 5px;">MEMO</label>
                    <textarea v-model="todo.body" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div style="text-align: center;">
                <button class="default-btn" type="submit"  :disabled="!todoUpdated">{{ editing ? '저장' : '만들기' }}</button>
                <button class="default-btn" @click="moveToTodoListPage">취소</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {useRoute, useRouter} from 'vue-router';
    import axios from 'axios';
    import { ref, computed} from 'vue';
    import _ from 'lodash';
    export default {
        props:{
            editing: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const route=useRoute();
            const router=useRouter();
            const subjectError=ref('');
            const todo=ref({
                subject:'',
                completed:false,
                body:''
            });
            /* const loading= ref(true); */
            const originalTodo=ref(null);
            const todoId=route.params.id

            //console.log(route.params.id)
            const getTodo = async () =>{
                const res = await axios.get(`https://vue-todo.herokuapp.com/${todoId} ` );
                todo.value=res.data;
                /* loading.value=false; */
                originalTodo.value = {...res.data} 
            }

            const toggleTodoStatus = () =>{
                todo.value.completed = !todo.value.completed;
            }
            const moveToTodoListPage =() =>{
                router.push({
                    name:'Todos'
                })
            };
            if(props.editing){
                getTodo();
            }
            

            const onSave = async () => {
                //subjectError.value='';
                if(!todo.value.subject){
                    subjectError.value='내용을 작성해주세요'
                    return;
                }
                try{
                    let res;
                    const data={
                        subject:todo.value.subject,
                        completed:todo.value.completed,
                        body:todo.value.body,
                    }
                    if(props.editing){
                        res = await axios.put(`https://vue-todo.herokuapp.com/todos/${todoId}`,data );
                    } else {
                         res = await axios.post(`https://vue-todo.herokuapp.com/todos`, data); 
                         todo.value.subject = "";
                         todo.value.body ="";
                   
                }
                    originalTodo.value = {...res.data}    
                }catch(error){
                    console.log(error);
                }
               
            }
            const todoUpdated = computed(() => {
                return !_.isEqual(todo.value, originalTodo.value)
            }) 
            return {
                todo,
                toggleTodoStatus,
                moveToTodoListPage,
                onSave,
                todoUpdated,
                subjectError,
            }
        }
    }
</script>
<style scoped>
    .page-container{width: 100%; max-width: 400px; margin: 0 auto;}
    .btnRR{width:80px; padding: 10px 20px; background: red;}
    .btnGG{width:80px; padding: 10px 20px; background: blue;}
</style>