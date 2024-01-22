let items = document.querySelectorAll('.first-carousel');

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let SecondCarouselitems = document.querySelectorAll('.second-carousel');

SecondCarouselitems.forEach((el) => {
    const minPerSlide2 = 6
    let NewNext = el.nextElementSibling
    for (var i = 1; i<minPerSlide2; i++) {
        if (!NewNext) {
        	NewNext = SecondCarouselitems[0]
      	}
        let cloneChild1 = NewNext.cloneNode(true)
        el.appendChild(cloneChild1.children[0])
        NewNext = NewNext.nextElementSibling
    }
})

let ThirdCarouselItems = document.querySelectorAll('.third-carousel');

ThirdCarouselItems.forEach((el) => {
    const minPerSlide3 = 6
    let NewNewNext = el.nextElementSibling
    for (var i = 1; i<minPerSlide3; i++) {
        if (!NewNewNext) {
        	NewNewNext = ThirdCarouselItems[0]
      	}
        let cloneChild2 = NewNewNext.cloneNode(true)
        el.appendChild(cloneChild2.children[0])
        NewNewNext = NewNewNext.nextElementSibling
    }
})