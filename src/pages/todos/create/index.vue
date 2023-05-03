<template>
    <div class="todo-container">
      <h2>Create To-do</h2>
      <TodoForm />
    </div>
</template>

<script>
    import TodoForm from '@/components/TodoForm.vue';
    export default {
        components: {
            TodoForm 
        }
    }

</script>