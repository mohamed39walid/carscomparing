const cars = [
    {
        company: "Toyota",
        model: "Corolla",
        year: 2023,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSncNB2ANZ1Y2-TwQJHyUxi4iychdMO2-77Gw&s",
        ],
        specifications: {
            engine: "1.8L 4-cylinder",
            transmission: "CVT Automatic",
            horsepower: 139,
            fuelType: "Gasoline",
            mileage: "30 MPG city / 38 MPG highway",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "Lane Departure Alert with Steering Assist",
            "Adaptive Cruise Control",
            "LED Headlights",
        ],
        price: "$22,645",
    },
    {
        company: "Ford",
        model: "Mustang GT",
        year: 2022,
        images: [
            "https://m.media-amazon.com/images/I/71vkdQIARqL._AC_UF1000,1000_QL80_.jpg",
        ],
        specifications: {
            engine: "5.0L V8",
            transmission: "6-speed manual",
            horsepower: 450,
            fuelType: "Gasoline",
            mileage: "15 MPG city / 24 MPG highway",
        },
        features: [
            "Track Apps Performance Metrics",
            "Selectable Drive Modes",
            "Brembo Brakes",
            "Active Valve Performance Exhaust",
        ],
        price: "$39,440",
    },
    {
        company: "Tesla",
        model: "Model S Plaid",
        year: 2023,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNfmSKmsSr9rors4czIWbVacF1MrnEmLkEkEvAgoutTgRjEFUhQGwECldKZPJymKuKKQ&usqp=CAU",
        ],
        specifications: {
            engine: "Electric (Tri-Motor)",
            transmission: "Single-speed",
            horsepower: 1020,
            fuelType: "Electric",
            mileage: "396 miles range (EPA estimated)",
        },
        features: [
            "Full Self-Driving Capability",
            "17-inch Cinematic Display",
            "Glass Roof",
            "Heated and Ventilated Seats",
        ],
        price: "$89,990",
    },
];

// Function to create car carousel
// Function to create a modern car carousel
function createCarCarousel() {
    const carouselContainer = document.getElementById('car-carousel');

    // Create the carousel inner
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    cars.slice(0, 3).forEach((car, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active'); // Make the first item active
        }

        carouselItem.innerHTML = `
            <div class="carousel-content">
                <img src="${car.images[0]}" class="d-block w-100 rounded" alt="${car.model}">
                <div class="carousel-caption-modern">
                    <h5>${car.company} ${car.model} (${car.year})</h5>
                    <p class="price"><strong>Price:</strong> ${car.price}</p>
                    <p class="engine">${car.specifications.engine}</p>
                </div>
            </div>
        `;

        carouselInner.appendChild(carouselItem);
    });

    // Append the carousel inner to the carousel container
    carouselContainer.appendChild(carouselInner);
}

// Call the function to create the carousel on page load
createCarCarousel();
