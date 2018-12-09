export const INCREMENT = "counter/INCREMENT";

export function increment(data) {
    return { type: INCREMENT, data: data }
}