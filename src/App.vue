<template>
    <nav class="navbar">
        <ul>
            <!-- <li><router-link to="/">Home</router-link></li> -->
            <!-- <li><router-link to="/Todos">TODOS</router-link></li> -->
            <li><router-link :to="{name:'Home'}">HOME</router-link></li>
            <li><router-link :to="{name:'Todos'}">TODOS</router-link></li>
            <!-- to="/" 이렇게 쓰다가 name을 쓰려면 이렇게 써야함 -->
        </ul>
    </nav>
    <router-view/>
</template>

<script>
    export default{

    }

</script>

<style scoped>
   .navbar{border: 1px solid #ddd; width: 100%; padding: 20px;}
   .navbar ul{max-width: 1024px; width: 100%; list-style: none; display: flex; margin: 0 auto; width: 100%;}
   .navbar li{}
   .navbar li a{text-decoration: none; padding: 10px 20px; font-weight: bold; color: #242424;}
</style>