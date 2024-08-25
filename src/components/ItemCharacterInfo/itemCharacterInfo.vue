<template>
    <div>
        <div class="item-character item-character_bio" v-loading="isLoading">
            <img :src="itemCharacterInfo.image" :alt="itemCharacterInfo.name"
                class="item-character-image character-image_bio">
            <div class="item-character-text-content  text-content_bio">
                <h2 class="item-character-title">{{ itemCharacterInfo.name }}</h2>
                <p class="item-character-label">Status: </p>
                <p class="item-character-text">{{ itemCharacterInfo.status }}</p>
                <p class="item-character-label">Species:</p>
                <p class="item-character-text">{{ itemCharacterInfo.species }}</p>
                <p class="item-character-label">Gender: </p>
                <p class="item-character-text">{{ itemCharacterInfo.gender }} </p>
                <p class="item-character-label"> Last known location: </p>
                <p class="item-character-text">{{ itemCharacterInfo.location.name }}</p>
                <p class="item-character-label"> First seen in: </p>
                <p class="item-character-text">{{ itemCharacterInfo.origin.name }}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'item-character-info',
    props: {
        itemCharacterInfo: Object,
        isLoading: Boolean
    }
}
</script>

<style>
.item-character_bio {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
}

.item-character_bio:hover {
    box-shadow: none;
    transform: scale(1);
}

.item-character-label {
    color: rgba(135, 138, 140, 0.741);
}

.item-character-text {
    margin-bottom: 16px;
    font-size: 1.2rem;
}

.text-content_bio {
    padding: 20px;
}

.item-character_bio>.character-image_bio {
    width: 40%;
    object-fit: contain;
}
</style>