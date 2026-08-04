export  function getBookmarks() {
    const data = localStorage.getItem("bookmarks");

    if(!data){
        return [];
    }

    return JSON.parse(data);
}

export function saveBookmarks(bookmarks){
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}