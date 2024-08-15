// murilo e camila

function isPar(a) {
    if (a%2 != 0) throw new Error("não é par");
    return true;
}

module.exports.isPar = isPar;