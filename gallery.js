const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide-active';

const slidesNodes = Array.from(document.querySelectorAll('.gallery__slide'));
const prevButtonNode = document.querySelector('.gallery__control-prev');
const nextButtonNode = document.querySelector('.gallery__control-next');
let activeId;

init();

function init() {
    const targetSlideNode = document.querySelector('.gallery__item-1')?.closest('.gallery__slide');
    activeId = targetSlideNode ? slidesNodes.indexOf(targetSlideNode) : 0;
    setActiveSlideById(activeId);

    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });

    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    slidesNodes.forEach((slide, index) => {
        slide.classList.toggle(ACTIVE_SLIDE_CLASSNAME, index === id);
    });
    activeId = id;
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}