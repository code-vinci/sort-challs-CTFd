/* 
Order:
- Intro
- Misc
- Web
- Crypto
- Software
*/

// To sort categories
function customCategorySort(a, b) {
    const order = ["Intro", "Misc", "Web", "Crypto", "Software"];

    const indexA = order.indexOf(a);
    const indexB = order.indexOf(b);

    return (indexA !== -1 ? indexA : order.length) - (indexB !== -1 ? indexB : order.length);
}


/*
Order:
- Beginner
- Easy
- Medium
- Hard
*/

// To sort challenges in a category
// Please add tag with difficulty for each challenge
function customCategorySort(a, b) {
    const order = ["beginner", "easy", "medium", "hard"];

    const extractDifficulty = (obj) => {
        if (!obj.tags || obj.tags.length === 0) return null;
        return obj.tags.map(tag => tag.value.toLowerCase()).find(tag => order.includes(tag)) || null;
    };

    const indexA = order.indexOf(extractDifficulty(a));
    const indexB = order.indexOf(extractDifficulty(b));

    return (indexA !== -1 ? indexA : order.length) - (indexB !== -1 ? indexB : order.length);
}
