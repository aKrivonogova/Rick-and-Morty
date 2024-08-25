<template>
    <div>
        <itemCharacterInfo :itemCharacterInfo="character" :isLoading="isLoading" />
    </div>
</template>

<script>

import itemCharacterInfo from '@/components/ItemCharacterInfo/itemCharacterInfo.vue'
import { getCharacterById } from '@/api/charactersApi'

export default {
    name: 'Item-character-info',
    components: { itemCharacterInfo },
    async created() {
        await this.getCharacterInfoById(this.$route.params.id);
    },
    data() {
        return {
            character: {},
            isLoading: false,
        }
    },
    methods: {
        async getCharacterInfoById(characterId) {
            this.isLoading = true;
            try {
                const response = await getCharacterById(characterId);
                if (!response.ok) {
                    throw new Error(`error: ${response.status}`);
                }
                const characterData = await response.json();
                this.character = characterData;

            } catch (error) {
                console.error(error);
            }
            finally {
                this.isLoading = false
            }
        }
    }
}

</script>

<style>
</style>