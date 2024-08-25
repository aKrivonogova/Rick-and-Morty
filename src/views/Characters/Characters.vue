<template>
    <div class="characters">
        <ul v-if="isNotEmptyCharactersResults" class="characters-list" v-loading='isLoading'>
            <li v-for="(item, index) in characters.results" :key="item.id" @click="goToCharacter(item.id)">
                <itemCharacter :itemCharacterCard="item"></itemCharacter>
            </li>
        </ul>
        <div v-else class="characters-error-block">
            <p>Данные не загружены</p>
        </div>
    </div>
</template>

<script>
import itemCharacter from '@/components/ItemCharacterCard/ItemCharacterCard.vue'
import { getCharacters } from '@/api/charactersApi'


export default {
    name: 'Characters',
    components: {
        itemCharacter
    },

    data() {
        return {
            characters: [],
            isLoading: false,
        }
    },

    async created() {
        await this.fetchcharactersData();
    },
    computed: {
        isNotEmptyCharactersResults() {
            return this.characters?.results?.length > 0;
        }
    },
    methods: {
        async fetchcharactersData() {
            this.isLoading = true;
            try {
                const response = await getCharacters();
                if (!response.ok) {
                    throw new Error(`error: ${response.status}`);
                }
                const data = await response.json();
                this.characters = data;
            }
            catch (error) {
                console.error(error)
            }
            finally {
                this.isLoading = false;
            }
        },

        goToCharacter(characterId) {
            this.$router.push(`/characters/${characterId}`)
        }
    },
}

</script>

<style>
.characters {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.characters-list {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: stretch;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
}

.characters-error-block {
    color: rgb(85, 71, 71);
    background-color: rgb(208, 194, 206);
    border-radius: 15px;
    padding: 40px;
    min-width: 50%;
    text-align: center;
    border: 2px solid rgb(219, 87, 155);
}
</style>