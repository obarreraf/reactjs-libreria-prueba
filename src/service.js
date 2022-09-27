const urlFetch = "https://rickandmortyapi.com/api/character/"

export const getCharacter = async(character) => {
    const response = await fetch(`${urlFetch}${character}`,{
        method:'GET'
    });

    const payload = response.json();

    return payload
}