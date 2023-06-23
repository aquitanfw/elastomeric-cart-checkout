let inputs = document.querySelectorAll('.tabs-wrap input')
let tabs = document.querySelectorAll('.tabs-content')

const switchTab = () => {
    inputs.forEach((item, index) => {
        item.addEventListener('change', () => {
            if (inputs[0].checked) {
                tabs[0].classList.add('active-content')
                tabs[1].classList.remove('active-content')
            } else if(inputs[1].checked) {
                tabs[0].classList.remove('active-content')
                tabs[1].classList.add('active-content')
            }
        })
    })
}

switchTab()
