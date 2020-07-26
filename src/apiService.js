const url = 'https://pixabay.com/api/';
 
export default {
    query: '',
    page: 1,
    
    fetchMethod() {
        const keyAPI = '10037714-6dae0183537b35f497fcbd99d';
        const parametres = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyAPI}`,
        const fetch = fetch(url + parametres)
        .then(responce => responce.json())
        .catch(error => console.log(error));
        this.incrementPage();
        return fetch;
    },
    resetPage(){
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
    get queryValue(){
        return this.query;
    },
    set queryValue(val) {
        return this.query = val;
    }
}
