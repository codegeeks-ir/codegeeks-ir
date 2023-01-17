document.addEventListener('alpine:init', () => {
    Alpine.data('collection', () => ({
        collection: [],
        filtered: [],
        search: "",
        currentPage: 1,
        pageSize: 5,
        pageCount:0,
        getNumberOfPages(pageSize, collectionLength) {
            if( collectionLength % pageSize == 0)
                return collectionLength / pageSize; 
            else
                return Math.floor(collectionLength / pageSize) + 1; 
        },
        filterSearch(collection, property) {
            if(collection) {
                const filteredByProperty = collection.filter((item) => {
                    let isFound = item[property].toLowerCase().includes(this.search.toLowerCase());
                    if(isFound)
                        return true;
                });
                this.pageCount = this.getNumberOfPages(this.pageSize, filteredByProperty.length);
                return filteredByProperty;
            }
            else return [];
        },
        paged(collection, currentPage, pageSize) {
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
        },
        viewPage(pageIndex) {
            const property = 'title';
            const searched = this.filterSearch(this.collection, property);
            this.currentPage = pageIndex;
            this.filtered = this.paged(searched, pageIndex, this.pageSize);
        },
        async init() {
            const dataPath = document.getElementById('#collection').getAttribute('dataPath');
            this.collection = await (await fetch(dataPath)).json();
            this.viewPage(1);
        }
    }));
});