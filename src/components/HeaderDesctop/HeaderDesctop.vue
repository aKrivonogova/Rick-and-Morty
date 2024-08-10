<template>
    <div class="header-container">
        <img src="../../../images/rick-and-morti-logo.png" alt="логотип рик и морти" class="header-logo">
        <nav class="header-navigation">
            <ul class="navigation-list">
                <li v-for="(item, index) in routes" :key="item.route">
                    {{ item.name }}
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import routes from '../../utils/routes.js'

export default {
    name: 'header-desctop',
    data() {
        return {
            routes: routes
        }
    }

}
</script>
<style>
.header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.header-navigation {
    display: flex;
    align-items: center;
}

.navigation-list {
    display: flex;
    justify-content: space-around;
    width: clamp(500px, 600px, 800px);
}

.navigation-list {
    list-style: none;
}

.header-logo {
    height: 30px;
    width: 200px;
}
</style>