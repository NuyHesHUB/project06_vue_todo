
<template>
    <div class="container">
        <div class="home_bg">
            <div id="app">
                <h1>오늘의 할일</h1>
                <img src="../../public/img/home_bg.jpg"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        
        
    }
</script>

<style >
    *{margin: 0; padding: 0;}
    .home_bg{widows: 100%; height: 100%;}
    #app{}
    #app h1{text-align: center; position: absolute; top: 200px; left: 50%; transform: translateX(-50%); font-size: 100px; color: #fff;}
</style>