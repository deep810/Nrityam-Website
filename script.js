const batches = [
    {
        title: "NSDS BollyFit Dance workout",
        image: "assets/thumb_contemporary.png",
        level: "Beginner",
        levelClass: "bg-orange-subtle text-orange",
        description: "Experience the energy and excitement of NSDS BollyFit Dance workouts!",
        time: "Mon, Wed | 6:00 PM",
        location: "Studio A",
        price: "A$25.00 - A$100.00",
        link: "#book-contemporary"
    },
    {
        title: "Urban Hip-Hop",
        image: "assets/thumb_hiphop.png",
        level: "Intermediate",
        levelClass: "bg-purple-subtle text-purple",
        description: "Master the groove, isolation, and footwork. High-energy sessions focusing on musicality and style.",
        time: "Tue, Thu | 7:30 PM",
        location: "Studio B",
        price: "$140",
        link: "#book-hiphop"
    },
    {
        title: "Classical Fusion",
        image: "assets/thumb_classical.png",
        level: "Advanced",
        levelClass: "bg-red-subtle text-red",
        description: "Blend traditional forms with modern beats. A rigorous class for experienced dancers seeking new challenges.",
        time: "Sat, Sun | 10:00 AM",
        location: "Studio Main",
        price: "$160",
        link: "#book-classical"
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
                                <a href="${batch.link}" class="btn btn-outline-primary rounded-pill px-4">Book Now</a>
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
