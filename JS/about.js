new fullpage("#fullpage",{
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination) => {
        //const section = destination.item;
        const tl = new TimelineMax();
        const anatomies = document.querySelectorAll(".anatomy");
        const descriptions = document.querySelectorAll(".description");
        const titles = document.querySelectorAll(".title");
        const descriptionFull = document.querySelector(".full");

        if(destination.index === 1 ){

            tl.fromTo(titles[1], 0.5, {opacity: 0}, {opacity: 1})
            .fromTo(descriptionFull, 0.5, {opacity: 0}, {opacity: 1});

        }

        if(destination.index === 2){

            tl.fromTo(anatomies[0], 0.5, {opacity: 0}, {opacity: 1})
            .fromTo(titles[2], 0.5, {opacity: 0}, {opacity: 1})
            .fromTo(descriptions[1], 0.5, {opacity: 0}, {opacity: 1});
        }

        if(destination.index === 3){
            
            tl.fromTo(anatomies[1], 0.7, {opacity: 0}, {opacity: 1})
            .fromTo(titles[2], 0.4, {opacity: 0}, {opacity: 1})
            .fromTo(anatomies[2], 0.7, {opacity: 0}, {opacity: 1})
            .fromTo(descriptions[2], 0.5, {opacity: 0}, {opacity: 1});

        }

        if(destination.index === 4){
            tl.fromTo(anatomies[3], 0.7, {opacity: 0}, {opacity: 1})
            .fromTo(titles[3], 0.4, {opacity: 0}, {opacity: 1})
            .fromTo(anatomies[4], 0.7, {opacity: 0}, {opacity: 1})
            .fromTo(descriptions[3], 0.5, {opacity: 0}, {opacity: 1});
        }

        if(destination.index === 5){
            tl.fromTo(anatomies[5], 0.7, {opacity: 0}, {opacity: 1})
            .fromTo(titles[4], 0.4, {opacity: 0}, {opacity: 1})
            .fromTo(anatomies[6], 0.7, {opacity: 0}, {opacity: 1})
            .fromTo(descriptions[4], 0.5, {opacity: 0}, {opacity: 1});
        }

        console.log(destination.index);
        console.log(descriptions);

    }
});