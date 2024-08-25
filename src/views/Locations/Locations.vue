<template>
    <div>
        <h1>
            Locations
        </h1>
    </div>
</template>

<script>
import { getLocations } from '@/api/locations'

export default {
    name: 'locations',
    data() {
        return {
            locations: [],
            isLoading: false,
        }
    },
    async created() {
        await this.getLocationsFetch();

    },
    methods: {
        async getLocationsFetch() {
            this.isLoading = true;
            try {
                const response = await getLocations();
                if (!response.ok) {
                    throw new Error(`error: ${response.status}`);
                }
                const locationsData = await response.json();
                this.locations = locationsData;

            } catch (error) {
                console.error(error);
            }
            finally {
                this.isLoading = false
            }
        }


    },
}

</script>

<style></style>