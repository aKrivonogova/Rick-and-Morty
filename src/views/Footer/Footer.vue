<template>
    <footer class="footer">
        <div class="footer-container">
            <nav class="footer-nav">
                <ul class="footer-nav-list">
                    <li v-for="(item, index) in contacts" :key="item.name">
                        <a :href="item.link">
                            <img :src="item.imagePath" alt="" class="footer-img">
                        </a>
                    </li>
                </ul>
                <address class="footer-author-info">
                    &copy; by Alina Krivonogova 2024
                </address>
            </nav>
        </div>
    </footer>
</template>

<script>
import authorContacts from '../../utils/authorContacts.js'
export default {
    name: 'footer',
    data() {
        return {
            contacts: authorContacts
        }
    }
}
</script>

<style>
.footer {
    padding: 40px;
    width: 100%;
     display: flex;
    align-items: center;
    background-color:#333;
    justify-content: center;
}

.footer-nav{
    display: flex;
    align-items: center;
    margin: 0 auto;
}


.footer-nav-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    min-width: 70px;
}

.footer-img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    border-radius: 50%;
}

.footer-author-info {
    color: #CCCCCC;
}
</style>