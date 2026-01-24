const batches = [
    {
        title: "11 to 13 years - Girls & Boys",
        image: "assets/reg_batch.JPG",
        level: "Regular Batch - 7:30 PM",
        levelClass: "bg-purple-subtle text-purple",
        description: "Regular One hour learning sessions Designed for young Kids, Classical Dance fundamentals - Folk & Bollywood mix Styles.",
        time: "7:30 PM",
        location: "Wentworthville (Wed), Quakers Hill (Thu)",
        price: "$80.00 - $100.00",
        link: "https://square.link/u/vJ1DZ8Sz"
    },
    {
        title: "11 to 13 years- Girls & Boys",
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
        title: "NSDS BollyFit Dance workout",
        image: "assets/bollyfit.jpeg",
        level: "BollyFit",
        levelClass: "bg-orange-subtle text-orange",
        description: "Experience the energy and excitement of NSDS BollyFit Dance workouts! These dynamic routines combine fun and fitness, offering a calorie-burning workout you'll look forward to each week.",
        time: "7:45pm to 9:00pm",
        location: "Wentworthville, QuakersHill, The Ponds",
        price: "A$25.00 - A$100.00",
        link: "https://square.link/u/SCiS61Ms"
    },
    {
        title: "Dance Workshop",
        image: "assets/hero2.jpeg",
        level: "Workshop",
        levelClass: "bg-red-subtle text-red",
        description: "Blend traditional forms with modern beats. A rigorous class for experienced dancers seeking new challenges.",
        time: "09th feb & 23rd feb (7:30PM - 8:30PM)",
        location: "Seven Hills, Entertainment Works",
        price: "$50",
        link: "https://square.link/u/TmGh39Um"
    }
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
