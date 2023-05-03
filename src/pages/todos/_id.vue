<template>
    <div class="todo-container">
        <h2>To-do Page</h2>
        <TodoForm :editing="true"/>
    </div>
</template>

<script>
    import TodoForm from '@/components/TodoForm.vue'
    export default {
        components: {
            TodoForm
        },
    }
</script>

<style scoped>
    h1{margin: 10px 0; text-align: center; color: rgb(12, 137, 81); text-transform: uppercase;}
</style>