const hasTooltips = document.querySelectorAll('.has-tooltip')

hasTooltips.forEach(function (hasTooltip) {
    hasTooltip.addEventListener('click', function (event) {
        event.preventDefault()
        if(document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove()
        }else{
            const height = hasTooltip.getBoundingClientRect().height
            const left = hasTooltip.getBoundingClientRect().left
            const top = hasTooltip.getBoundingClientRect().top
            const divTooltip = document.createElement('div')
            const title = hasTooltip.getAttribute('title')
            divTooltip.className = 'tooltip'
            divTooltip.innerHTML = title
            hasTooltip.after(divTooltip)
            divTooltip.classList.toggle('tooltip_active')
            divTooltip.style.cssText = `left: ${left}px; top: ${top+height}px`
        }
    })
})

