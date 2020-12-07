function clear(offer, articles, contact) {


    offer.classList.remove('now');
    articles.classList.remove('now');
    contact.classList.remove('now');
}

function changeContent(selected) {
    const offer = document.querySelector('.offer');
    const articles = document.querySelector('.articles');
    const contact = document.querySelector('.contact');

    clear(offer, articles, contact);

    if (selected == 'offer') {
        offer.classList.add('now');
    }
    else if (selected == 'articles') {
        articles.classList.add('now');
    }
    else if (selected == 'contact') {
        contact.classList.add('now');
    }

    console.log('s');
};
