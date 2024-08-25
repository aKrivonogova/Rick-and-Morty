<template>
    <header class="header">
        <HeaderDesctop></HeaderDesctop>
    </header>
</template>

<script>

import HeaderDesctop from '../../components/HeaderDesctop/HeaderDesctop.vue'

export default {
    name: 'Header',
    components: { HeaderDesctop }
}
</script>

<style>
.header {
    padding: 20px 40px;
    background-color: #2d2d2d;
}
</style>
