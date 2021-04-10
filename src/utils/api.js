
export const request = async (url, options) => {
  try {
    const result = await fetch(url)
    const data = await result.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
