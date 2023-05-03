<template>
    <div class="app-container">
        <nav class="app-navigation">
            <h1>Vue</h1>
            <div class="divide"></div>
            <ul>
                <li><router-link :to="{name:'Todos'}">TO-DO</router-link></li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default{
    }
</script>

<style scoped>
    *{margin: 0; padding: 0; box-sizing: border-box;}
    ul{list-style: none;}
    a{text-decoration: none; color: #222;}
    .app-container{width: 100%; /* max-width: 1200px; */ margin: 0 auto; }
    .app-navigation{width: 100%; height: 60px; margin: 0 auto; padding: 0 80px; background: rgb(255, 255, 255); display: flex; align-items: center; border-bottom: 2px solid #000000;}
    .app-navigation .divide{margin-left: 80px; margin-right: 50px; width: 2px; height: 100%; background: #000;}
    .app-navigation > h1{
        font-weight: bold; 
        font-size: 40px; 
        color: #000; 
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none
    }
    .app-navigation > ul > li > a {color: #222;}
</style>