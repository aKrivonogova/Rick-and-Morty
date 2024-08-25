<script>
import Header from '../Header/Header.vue'
import Footer from '../Footer/Footer.vue'
import Main from '../Main/Main.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        Main
    }
}
</script>

<template>
    <div class="application">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.application {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
