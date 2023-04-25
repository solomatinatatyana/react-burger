export const getRandom = (n, arr) => {
    const indexes = new Set();
    const limit = arr.length;
    n = Math.min(n, limit);
    while (indexes.size < n) {
        const index = Math.floor(limit * Math.random());
        indexes.add(index);
    }
    const result = [...indexes].map(index => arr[index]);
    return result;
};

export const generateRandomBun = (list) => {
    const buns = list?.filter(b => b.type === "bun");
    const rand = Math.floor(Math.random() * buns.length);
    return buns[rand];
}

export const generateRandomIngredients = (list) => {
    const notBuns = list?.filter(b => b.type !== "bun");
    let targetIngredientList = getRandom(Math.floor(Math.random() * notBuns.length), notBuns)
    if(list.length!==0) {targetIngredientList.push(generateRandomBun(list))}
    return targetIngredientList;
}