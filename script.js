(function() {
    'use strict';

    const detailsForm= document.querySelector('#destination_details_form');
    
    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        const destinationName = event.target.elements["name"].value;
        const destinationLocation = event.target.elements["location"].value;
        const destinationPhoto = event.target.elements["photo"].value;
        const destinationDescription = event.target.elements["description"].value;
    
        //
        for(let i=0;i<detailsForm.length;i++){
            detailsForm.elements[i].value = '';
        }
        
        const destinationCard =createDestinationCard(destinationName,destinationLocation,destinationPhoto,destinationDescription)

        const wishListContainer = document.getElementById('destinations_container');
        
        if(wishListContainer.children.length===0){
            document.getElementById('title').innerHTML = 'My wish list';
        }

        document.querySelector('#destinations_container').appendChild(destinationCard);
        
    }

    function createDestinationCard(name,location,photoUrl,description){
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt',name);

        const constantPhotoUrl='images/signpost.jpg';

        if(photoUrl.length===0){
            img.setAttribute('src',constantPhotoUrl);
        }else{
            img.setAttribute('src',photoUrl);
        }

        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if(description.length !==0){
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteButton = document.createElement('button');
        cardDeleteButton.innerText = 'Delete';

        cardDeleteButton.addEventListener('click',removeDestination);
        cardBody.appendChild(cardDeleteButton);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
    }
})();