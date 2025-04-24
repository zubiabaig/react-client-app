export default async function getPastOrder(order) {
    const response = await fetch(`/api/past-order/${order}`)

    if (!response.ok) {
        throw new Error("Failed to fetch past order")
    }

    const data = await response.json()
    return data
}