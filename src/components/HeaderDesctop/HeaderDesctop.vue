<template>
    <div class="header-container">
        <img src="./../../assets/images/logo-rick.png" alt="логотип рик и морти" class="header-logo">
        <nav class="header-navigation">
            <ul class="navigation-list">
                <li v-for="(item, index) in routes" :key="item.route">
                    <RouterLink :to="item.route" class="nav-link">{{ item.name }}</RouterLink>
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
    width: clamp(300px, 400px, 600px);
}

.navigation-list {
    list-style: none;
}

.header-logo {
    height: 80px;
    width: 140px;
    object-fit: contain;
}

.nav-link {
    text-decoration: none;
    color: #CCCCCC;
    transition: color 0.2s ease, border 0.2s ease;

}

.nav-link:hover{
    color: rgba(46, 255, 126, 0.7);
    border-bottom: 1px solid rgba(46, 255, 126, 0.7);
    padding-bottom: 2px; 
}
</style>