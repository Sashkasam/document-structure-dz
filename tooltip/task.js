const hasTooltips = document.querySelectorAll('.has-tooltip')

hasTooltips.forEach(function (hasTooltip) {
    hasTooltip.addEventListener('click', function addDiv(event) {
        event.preventDefault()
        const height = hasTooltip.getBoundingClientRect().height
        const left = hasTooltip.getBoundingClientRect().left
        const top = hasTooltip.getBoundingClientRect().top
        const divTooltip = document.createElement('div')
        const title = hasTooltip.getAttribute('title')
        divTooltip.className = 'tooltip'
        divTooltip.innerHTML = title
        hasTooltip.after(divTooltip)
        divTooltip.classList.add('tooltip_active')
        divTooltip.style.cssText = `left: ${left}px; top: ${top+height}px`
    }, {once: true})
})

