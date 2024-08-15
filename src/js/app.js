export default function orderByProps(obj, setOrder) {
    const propsBySetOrder = [];
    const restData = [];

    for (const key in obj) {
        if (setOrder.includes(key)) {
            const index = setOrder.indexOf(key);
            propsBySetOrder.splice(index, 0, { key, value: obj[key] });
        } else {
            restData.push({ key, value: obj[key] });
        }
    }
    restData.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...propsBySetOrder, ...restData];
}