<template>
    <div class="item-character">
        <img :src="itemCharacterCard.image" :alt="itemCharacterCard.name" class="item-character-image">
        <div class="item-character-text-content">
            <h2 class="item-character-title">{{ itemCharacterCard.name }}</h2>
            <p class="item-character-label">Status: </p>
            <p class="item-character-text">{{ itemCharacterCard.status }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'item-character',
    props: {
        itemCharacterCard: Object
    }
}

</script>

<style>
.item-character {
    background-color: #434343;
    display: flex;
    border-radius: 12px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.item-character:hover {
    box-shadow: 0 0 15px 5px rgba(46, 255, 126, 0.7);
    transform: scale(1.02);
}

.item-character-image {
    width: 200px;
    border-radius: 5px 0 0 5px;
    height: 100%;
}

.item-character-text-content {
    color: white;
    padding: 10px;

}

.item-character-title {
    font-size: 1.4rem;
    margin-bottom: 5px;
}
</style>