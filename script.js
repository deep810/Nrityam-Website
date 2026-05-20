const batches = [
    {
        title: "Fitness Dance - Bollywood | Garba | Bhangra",
        image: "assets/bolly_garba.jpg",
        level: "Fitness Dance",
        levelClass: "bg-red-subtle text-red",
        // description: "Blend traditional forms with modern beats. A rigorous class for experienced dancers seeking new challenges.",
        description: "A high-energy fitness dance session that blends vibrant Indian dance moves with cardio and toning exercises. Set to upbeat Garba, Bhangra & Bollywood music, this fun workout boosts stamina, improves coordination, and leaves you feeling energized while enjoying the rhythm and spirit of Bollywood.",
        time: " 8:00PM - 9:00PM",
        location: "Wentworthville, QuakersHill",
        price: "$40",
        link: "https://square.link/u/FcpQ145u"
    },
    // {
    //     title: "Dance workshop",
    //     image: "assets/workshop.jpeg",
    //     level: "Workshop",
    //     levelClass: "bg-red-subtle text-red",
    //     // description: "Blend traditional forms with modern beats. A rigorous class for experienced dancers seeking new challenges.",
    //     description: "13th APR - Aari Aari | 20th APR - Ghehra hua | 27th APR - Naal Nachna",
    //     time: " 7:30PM - 8:30PM",
    //     location: "Seven Hills, Entertainment Works",
    //     price: "$50",
    //     link: "https://square.link/u/TmGh39Um"
    // },
    {
        title: "07 to 10 years- Girls & Boys",
        image: "assets/reg_batch.JPG",
        level: "Regular Batch - 6:30 PM",
        levelClass: "bg-purple-subtle text-purple",
        description: "Regular One hour learning sessions Designed for young Kids, Classical Dance fundamentals - Folk & Bollywood mix Styles.",
        time: "6:30 PM",
        location: "Wentworthville (Wed), Quakers Hill (Thu)",
        price: "$80.00 - $100.00",
        link: "https://square.link/u/ZZfqKrVa"
    },
    {
        title: "11 to 13 years - Girls & Boys",
        image: "assets/7_reg_batch.jpg",
        level: "Regular Batch - 7:30 PM",
        levelClass: "bg-purple-subtle text-purple",
        description: "Regular One hour learning sessions Designed for young Kids, Classical Dance fundamentals - Folk & Bollywood mix Styles.",
        time: "7:30 PM",
        location: "Wentworthville (Wed), Quakers Hill (Thu)",
        price: "$80.00 - $100.00",
        link: "https://square.link/u/vJ1DZ8Sz"
    },
    {
        title: "Creative Performance 14yrs+",
        image: "assets/creative.jpg",
        level: "Performance",
        levelClass: "bg-success-subtle text-success",
        description: "Creative Performance Group - The Ponds offers immersive storytelling experiences through dynamic and engaging performances tailored for individual bookings. Reserve your spot to explore this unique blend of creativity and narrative artistry.",
        time: "1:30 PM",
        location: "The Ponds",
        price: "$90.00",
        link: "https://square.link/u/PFYe2yGR"
    },
    {
        title: "Casual Pass - NSDS",
        image: "assets/casual_pass.jpg",
        level: "",
        levelClass: "bg-success-subtle text-success",
        description: "Perfect for dancers who like to attend a single session or trail class without a long-term commitment. This pass allows access to one casual class at Nrityam Sydney Dance Studio. Once payment is processed, our team will contact you with a confirmation within 24–48 hours.",
        time: "-",
        location: "-",
        price: "$25.00",
        link: "https://square.link/u/I3BjmIRx"
    },
    // {
    //     title: "NSDS BollyFit Dance workout",
    //     image: "assets/bollyfit.jpeg",
    //     level: "BollyFit",
    //     levelClass: "bg-orange-subtle text-orange",
    //     description: "Experience the energy and excitement of NSDS BollyFit Dance workouts! These dynamic routines combine fun and fitness, offering a calorie-burning workout you'll look forward to each week.",
    //     time: "7:45pm to 9:00pm",
    //     location: "Wentworthville, QuakersHill, The Ponds",
    //     price: "A$25.00 - A$100.00",
    //     link: "https://square.link/u/SCiS61Ms"
    // },
];

const batchesContainer = document.getElementById('batches-container');

const renderBatches = () => {
    let batchesHTML = '';

    batches.forEach(batch => {
        batchesHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="card h-100 border-0 shadow-sm rounded-4">
                    <img src="${batch.image}" class="card-img-top card-thumb" alt="${batch.title}">
                    <div class="card-body d-flex flex-column p-4">
                        <div class="mb-3">
                            <span class="badge ${batch.levelClass} rounded-pill px-3 py-2">${batch.level}</span>
                        </div>
                        <h3 class="card-title h4 fw-bold mb-1">${batch.title}</h3>
                        <p class="card-text text-secondary mb-2 flex-grow-1 small fw-light">${batch.description}</p>

                        <div class="border-top pt-3 mt-auto">
                            <div class="d-flex align-items-center text-secondary mb-2">
                                <span class="me-2">🕒</span> ${batch.time}
                            </div>
                            <div class="d-flex align-items-center text-secondary mb-3">
                                <span class="me-2">📍</span> ${batch.location}
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="h5 fw-bold mb-0">${batch.price}<span class="fs-6 text-muted fw-normal">/mo</span></span>
                                <a href="${batch.link}" target="_blank" class="btn btn-outline-primary rounded-pill px-4">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    batchesContainer.innerHTML = batchesHTML;
};

// Initialize
document.addEventListener('DOMContentLoaded', renderBatches);
