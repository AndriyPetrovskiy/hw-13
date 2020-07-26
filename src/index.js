import './styles.css';
import './apiService.js';
import getData from './apiService.js';
import template from './template.hbs';


const refs = {
    form: document.querySelector('.search-form'),
    list: document.querySelector('.gallery'),
    button: document.querySelector('.load_more')
}

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = event.currentTarget.elements.query.value;
    getData.queryValue(input);
    getData.fetchMethod().then(({ hits }) => {const markup = template(hits);
        refs.list.insertAdjacentHTML('afterbegin', markup);
        // refs.button.classList.remove('is_hiden');
    });
})


// refs.button.addEventListener('click', () => {
//     getData(input).then(({ hits }) => {
//         const markup = template(hits);
//         refs.list.insertAdjacentHTML('afterbegin', markup);
//         page += 1;
//     })
// } )
