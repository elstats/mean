function add(a, b) {
    return a + b;
}

export default function (data) {
    return data.reduce(add, 0) / data.length;
};
