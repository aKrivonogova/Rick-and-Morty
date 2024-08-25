async function getLocations() {
    return await fetch('https://rickandmortyapi.com/api/location');
}

export { getLocations }