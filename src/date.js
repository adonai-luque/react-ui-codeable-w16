let year = (date) => +date.split('-')[0];
let month = (date) => +date.split('-')[1];
let day = (date) => +date.split('-')[2];

export { year, month, day }