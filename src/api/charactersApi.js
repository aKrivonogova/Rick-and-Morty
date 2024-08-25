
async function getCharacters() {
    return await fetch('https://rickandmortyapi.com/api/character');
}


async function getCharacterById(characterId){
    return await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
}

export {
    getCharacters,
    getCharacterById
}
