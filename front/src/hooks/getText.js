
export const getTexts = async( category ) => {

    const url = `http://localhost:5000/iecho?text=${ encodeURI( category ) }`
    const resp = await fetch( url )
    const data  = await resp.json()
    return data

}