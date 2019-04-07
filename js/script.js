document.addEventListener("DOMContentLoaded", function(event) { 
    const links = document.getElementsByClassName('page-links');

    for(let i=0; i<links.length; i++) {
        const link = links[i];
        link.addEventListener('click', function(e){
            const target = e.target.dataset.target;
            targetElement = document.getElementById(target);
            targetElement.scrollIntoView(true);
        })
    }
  });