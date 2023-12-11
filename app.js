/* 
! tarayıcıların toplama alanları
localStorage ve sessionStorage, tarayıcıın sunduğu iki farklı web depolama alanı.
*/

// localStorage veri ekleme
localStorage.setItem('chat', 'asddsadassad');
// localStorage'dan veri çekme
const chat = localStorage.getItem('chat');
console.log(chat);