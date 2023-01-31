function getNumberOfPages(pageSize, collectionLength) {
    if( collectionLength % pageSize == 0)
        return collectionLength / pageSize; 
    else
        return Math.floor(collectionLength / pageSize) + 1; 
}

function filterSearch(collection, searchProperty, search) {
    if(collection) {
        const filteredByProperty = collection.filter((item) => {
            let isFound = item[searchProperty].toLowerCase().includes(search.toLowerCase());
            if(isFound)
                return true;
        });
        return filteredByProperty;
    }
    else return [];
}

function paged(collection, currentPage, pageSize) {
    if(collection) {
        const paged = collection.filter((item, index) => {
            let startIndex = (currentPage - 1) * pageSize;
            let endIndex = currentPage * pageSize;
            let isItemInsidePage = startIndex <= index && index < endIndex;
            if(isItemInsidePage)
                return true;
        });
        return paged;
    }
    else return [];
}

document.addEventListener('alpine:init', () => {
    Alpine.data('collection', () => ({
        collection: [],
        collectionProperties: [],
        filtered: [],
        search: "",
        searchProperty: "",
        currentPage: 1,
        pageSize: 5,
        pageCount:0,
        viewPage(pageIndex) {
            const searched = filterSearch(this.collection, this.searchProperty, this.search);
            this.pageCount = getNumberOfPages(this.pageSize, searched.length);
            this.currentPage = pageIndex;
            this.filtered = paged(searched, pageIndex, this.pageSize);
        },
        async init() {
            const dataPath = document.getElementById('#collection').getAttribute('dataPath');
            const data = await (await fetch(dataPath)).json();
            this.collection = data.data;
            this.collectionProperties = data.properties;
            this.searchProperty = Object.keys(this.collectionProperties)[0];
            this.viewPage(1);
        }
    }));
});