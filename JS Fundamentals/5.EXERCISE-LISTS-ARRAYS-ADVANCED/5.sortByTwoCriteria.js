function sortByTwoCriteria(arr) {
    let newArr = arr.sort(sortByLigth);

    function sortByLigth(a, b) {
        if (a.length > b.length) {
            return a.length - b.length;
        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else if (a.length < b.length) {
            return a.length - b.length;
        }
    }

    console.log(newArr.join('\n'));
}
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])