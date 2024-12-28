const cars = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        company: "Nissan",
        model: "Sunny",
        year: 2023,
        images: [
            "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_middle_east/vehicles/sunny/my24/configurator/NEW-SUNNY-SL-PLUS.jpg",
        ],
        specifications: {
            engine: "1.5-L PETROL ENGINE",
            transmission: "4-speed automatic",
            horsepower: 118,
            fuelType: "Diesel",
            FuelTankCapacity: "41 Liters",
            BodyType: "Sedan",
            TopSpeed: "175 kmh",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "Lane Departure Alert with Steering Assist",
            "Brake Assist",
            "LED Headlights",
            "Intelligent Emergency Barking",
            "AM/FM Radio Functionality",
            "Sound system options with 4 or 6 speakers for an enhanced audio experience.",
            "Bluetooth connectivity for wireless audio and calls",

        ],
        NegativeAspects: [
            "Limited Infotainment Screen Options",
            "Low ground clearance but it depends on Region",
            "Weak stability at high speeds.",
            "The car's exterior sheet metal is often weak.",
        ],
        price: "$17,950",
    },
    {
        id: 5,
        company: "Nissan",
        model: "Rogue",
        year: 2022,
        images: [
            "https://www.motortrend.com/uploads/sites/10/2022/03/2022-nissan-rogue-s-suv-angular-front.png"
        ],
        specifications: {
            engine: "1.5-liter 3-cylinder",
            transmission: "Continuously Variable Transmission (CVT)",
            horsepower: 201,
            fuelType: "Gasoline",
            fuelTankCapacity: "54.88 Liters",
            bodyType: "SUV",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "Blind Spot Monitor",
            "Lane Departure Warning",
            "Backup Camera",
            "Stability Control",
        ],
        negativeAspects: [
            "Performance may feel average compared to competitors",
            "Basic interior design in lower trims",
            "Limited off-road capabilities",
            "Slightly higher price compared to some rivals"
        ],
        price: "$27,150"
    },
    {
        id: 6,
        company: "Nissan",
        model: "Altima",
        year: 2023,
        images: [
            "https://di-sitebuilder-assets.s3.amazonaws.com/Nissan/MLP/Altima/2023/color-gun-metallic.png",
        ],
        specifications: {
            engine: "2.5-liter 4-cylinder or 2.0-liter turbocharged 4-cylinder (VC-Turbo™)",
            transmission: "Continuously Variable Transmission (CVT)",
            horsepower: {
                "2.5L Engine": 188,
                "2.0L Turbo Engine": 236
            },
            fuelType: "Gasoline",
            fuelTankCapacity: "61.32 liters",
            bodyType: "Sedan"
        },
        features: [
            "Apple CarPlay and Android Auto integration",
            "Available 8-inch touchscreen display",
            "Bluetooth connectivity",
            "Available 6-speaker sound system",
            "Blind Spot Warning",
            "Lane Departure Warning",
            "Automatic Emergency Braking",
            "Rearview Camera",
            "Available leather upholstery",
            "Dual-zone automatic climate control",
            "Available power-adjustable front seats"
        ],
        negativeAspects: [
            "Acceleration may not be as brisk as some competitors",
            "Interior design in lower trims may feel basic",
            "Limited off-road capabilities due to sedan design",
            "Pricing may be higher compared to some rivals"
        ],
        price: "$25,630"
    },
    {
        id: 7,
        company: "Hyundai",
        model: "Tucson",
        years: 2019,
        images: [
            "https://img.sm360.ca/images/article/dilawri-group-of-companies/61936//11561557682567.PNG"
        ],
        specifications: {
            engine: "2.0L 4-cylinder or 2.4L 4-cylinder",
            transmission: "6-speed automatic",
            horsepower: {
                "2.0L Engine": 164,
                "2.4L Engine": 181,
            },
            fuelType: "Gasoline",
            fuelTankCapacity: "62.1 Liters",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            bodyType: "SUV",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "7-inch touchscreen display",
            "Bluetooth connectivity",
            "Forward Collision-Avoidance Assist",
            "Lane Keeping Assist",
            "Blind-Spot Collision Warning",
            "Available leather upholstery",
            "Dual-zone automatic climate control"
        ],
        NegativeAspects: [
            "Acceleration may not be as brisk as some competitors",
            "Interior design in lower trims may feel basic",
            "Limited off-road capabilities due to SUV design",
            "Pricing may be higher compared to some rivals"
        ],
        price: "$23,350"
    },
    {
        id: 9,
        company: "Hyundai",
        model: "Palisade",
        year: "2020",
        images: [
            "https://platform.cstatic-images.com/large/in/v2/stock_photos/6cf7c3ec-d91b-46e5-945d-c1cddb0e49fc/9ef37a1e-4890-43ef-aff5-abb07e790a4f.png"
        ],
        specifications: {
            engine: "3.8L V6",
            transmission: "8-speed automatic",
            horsepower: 291,
            fuelType: "Gasoline",
            fuelTankCapacity: "71.2 Liters",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            bodyType: "SUV",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "8-inch touchscreen display",
            "Blind-Spot Collision Avoidance Assist",
            "Forward Collision-Avoidance Assist",
            "Lane Keeping Assist",
            "Heated and ventilated seats",
            "Panoramic sunroof",
            "Available leather upholstery",
            "Wireless charging"
        ],
        NegativeAspects: [
            "Cargo space might not be as ample as some competitors",
            "Fuel efficiency could be better for an SUV of its size",
            "Higher trims can get quite expensive"
        ],
        price: "$31,975"
    },
    {
        id: 10,
        company: "BMW",
        model: "330i",
        year: "2022",
        images: [
            "https://platform.cstatic-images.com/xlarge/in/v2/10dcfdf6-6630-5d9d-a2bd-bcf62cdfa295/c11bd15f-8184-43cb-b075-2d6ed859f393/GPUzNy0hXWPrMQu_ejGdzithSAk.jpg"
        ],
        specifications: {
            engine: "2.0L I4 Turbo",
            transmission: "8-speed automatic",
            horsepower: 255,
            fuelType: "Gasoline",
            fuelTankCapacity: "59.1 Liters",
            drivetrain: "Rear-Wheel Drive (RWD) or All-Wheel Drive (AWD)",
            bodyType: "Sedan",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "10.25-inch touchscreen display",
            "Forward Collision Warning",
            "Lane Departure Warning",
            "Adaptive Cruise Control",
            "Heated front seats",
            "Dual-zone automatic climate control",
            "Premium Harman Kardon sound system",
            "Wireless charging"
        ],
        NegativeAspects: [
            "Rear seat space can feel cramped for taller passengers",
            "Trunk space is smaller compared to competitors",
            "Premium price for the performance and features"
        ],
        price: "$45,130"
    },
    {
        id: 11,
        company: "BMW",
        model: "X5",
        year: "2021",
        images: [
            "https://images.hgmsites.net/hug/2021-bmw-x5-series_100772533_h.jpg"
        ],
        specifications: {
            engine: "3.0L I6 Turbo or 4.4L V8 Turbo",
            transmission: "8-speed automatic",
            horsepower: {
                "3.0L I6 Turbo": 375,
                "4.4L V8 Turbo": 523
            },
            fuelType: "Gasoline",
            fuelTankCapacity: "82.9 Liters",
            drivetrain: "All-Wheel Drive (AWD)",
            bodyType: "SUV",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "12.3-inch touchscreen display",
            "Panoramic moonroof",
            "Blind-Spot Monitoring",
            "Forward Collision Warning",
            "Lane Departure Warning",
            "Heated and ventilated seats",
            "Surround-view camera system",
            "Harman Kardon sound system",
            "Wireless charging"
        ],
        NegativeAspects: [
            "Higher starting price compared to some competitors",
            "Limited cargo space with the third-row seats up",
            "Not as nimble as some other luxury SUVs"
        ],
        price: "$59,400"
    },
    {
        id: 12,
        company: "Changan",
        model: "UNI-K",
        year: "2024",
        images: [
            "https://www.auto-in-china.com/wp-content/uploads/2024/02/1-6-1024x683.jpg"
        ],
        specifications: {
            engine: "2.0L Turbocharged Inline-4",
            transmission: "8-speed automatic",
            horsepower: 233,
            fuelType: "Gasoline",
            fuelTankCapacity: "70 liters",
            drivetrain: "All-Wheel Drive (AWD)",
            bodyType: "SUV",
            topSpeed: "200 km/h",
            seatingCapacity: 5,
        },
        features: [
            "Advanced driver-assistance systems",
            "Panoramic sunroof",
            "Leather upholstery",
            "Large touchscreen infotainment system",
            "Apple CarPlay and Android Auto",
            "Adaptive cruise control",
            "Lane-keeping assist",
            "360-degree camera system",
            "Premium sound system"
        ],
        negativeAspects: [
            "Limited brand recognition in some markets",
            "Availability may be restricted to certain regions",
            "Resale value concerns due to brand perception"
        ],
        price: "$25,800"
    },
    {
        id: 13,
        company: "Kia",
        model: "Sorento",
        year: 2022,
        images: [
            ""
        ],
        specifications: {
            engine: {
                "2.5L 4-Cylinder": {
                    horsepower: 191,
                },
                "2.5L Turbocharged 4-Cylinder": {
                    horsepower: 281,
                }
            },
            transmission: "8-speed automatic",
            fuelType: "Gasoline",
            fuelTankCapacity: "67 liters",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            seatingCapacity: 7,
            bodyType: "SUV",
        },
        features: [
            "Apple CarPlay and Android Auto",
            "8-inch touchscreen display",
            "Bluetooth connectivity",
            "Forward Collision-Avoidance Assist",
            "Lane Keeping Assist",
            "Blind-Spot Collision-Avoidance Assist",
            "Available leather upholstery",
            "Dual-zone automatic climate control",
            "Panoramic sunroof",
            "Wireless smartphone charging"
        ],
        negativeAspects: [
            "Third-row seating may be cramped for adults",
            "Base engine offers modest performance compared to rivals",
            "Limited cargo space with all seats in use"
        ],
        price: "Starting at $29,590"
    },
    {
        id: 14,
        company: "Jeep",
        model: "Compass",
        year: 2022,
        images: [
            ""
        ],
        specifications: {
            engine: "2.4L 4-cylinder",
            transmission: "6-speed automatic (FWD) or 9-speed automatic (AWD)",
            horsepower: 177,
            fuelType: "Gasoline",
            fuelTankCapacity: "51 liters",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            bodyType: "Compact SUV",
            seatingCapacity: 5,
        },
        features: [
            "Uconnect 5 system with 8.4-inch touchscreen",
            "Wireless Apple CarPlay and Android Auto",
            "360-degree surround-view camera",
            "Adaptive cruise control",
            "Forward Collision Warning with Active Braking",
            "LaneSense Lane Departure Warning with Lane Keep Assist",
            "Dual-zone automatic climate control",
            "Heated front seats and steering wheel",
            "Panoramic sunroof"
        ],
        negativeAspects: [
            "Limited rear legroom compared to competitors",
            "Base engine underpowered for some drivers",
            "Cargo space is average for the segment",
            "Pricing for higher trims can be expensive"
        ],
        price: "Starting at $26,390"
    },
    {
        id: 15,
        company: "Tesla",
        model: "Model S Plaid",
        year: 2023,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNfmSKmsSr9rors4czIWbVacF1MrnEmLkEkEvAgoutTgRjEFUhQGwECldKZPJymKuKKQ&usqp=CAU"
        ],
        specifications: {
            engine: "Electric (Tri-Motor)",
            transmission: "Single-speed",
            horsepower: 1020,
            fuelType: "Electric",
            range: "396 miles (EPA estimated)",
            topSpeed: "200 mph",
            chargingTime: "15 minutes for 187 miles with Supercharger",
            drivetrain: "All-Wheel Drive (AWD)",
            seatingCapacity: 5
        },
        features: [
            "Full Self-Driving Capability",
            "17-inch Cinematic Display",
            "Glass Roof",
            "Heated and Ventilated Seats",
            "Premium Sound System",
            "Advanced Climate Control",
            "Over-the-Air Software Updates",
            "Customizable Ambient Lighting"
        ],
        negativeAspects: [
            "High initial cost compared to rivals",
            "Limited service centers in some regions",
            "Touchscreen-centric interface may distract some drivers",
            "Repair costs for parts can be expensive"
        ],
        price: "$89,990"
    }

]


document.addEventListener("DOMContentLoaded", () => {
    const carSelect = document.getElementById('car-select');
    const addCarButton = document.getElementById('add-car-button');
    const car1Container = document.getElementById('car1-container');
    const car2Container = document.getElementById('car2-container');
    
    // Car data

    // Maximum number of cars that can be compared
    const maxCars = 2;
    let carsSelected = [];

    // Populate the select dropdown with car models
    const populateSelect = () => {
        cars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.id;
            option.textContent = `${car.company} ${car.model}`;
            carSelect.appendChild(option);
        });
    };

    // Render a car's details in the comparison section
    const renderCarComparison = (car, container) => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.images[0] || 'https://via.placeholder.com/150'}" alt="${car.company} ${car.model}">
            <h2>${car.company} ${car.model} (${car.year})</h2>
            <p>Price: ${car.price}</p>
            <h3>Specifications:</h3>
            <ul>
                ${Object.entries(car.specifications).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
            </ul>
            <h3>Features:</h3>
            <ul>
                ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <h3>Negative Aspects:</h3>
            <ul>
                ${(car.negativeAspects || []).map(aspect => `<li>${aspect}</li>`).join('')}
            </ul>
                </ul>
            <button class="remove-button" data-id="${car.id}">Remove</button>
        `;
        container.appendChild(carCard);

        // Add remove functionality
        carCard.querySelector('.remove-button').addEventListener('click', () => {
            container.innerHTML = ''; // Clear the container
            carsSelected = carsSelected.filter(carId => carId !== car.id); // Remove from selected cars
        });
    };

    // Handle adding a car to the comparison
    addCarButton.addEventListener('click', () => {
        const selectedCarId = parseInt(carSelect.value, 10);
        if (!selectedCarId) {
            alert('Please select a car to compare.');
            return;
        }

        // Check if the car is already added
        if (carsSelected.includes(selectedCarId)) {
            alert('This car is already in the comparison.');
            return;
        }

        // Check if the maximum number of cars has been reached
        if (carsSelected.length >= maxCars) {
            alert(`You can only compare up to ${maxCars} cars.`);
            return;
        }

        const selectedCar = cars.find(car => car.id === selectedCarId);
        if (selectedCar) {
            // Add car to the selected array
            carsSelected.push(selectedCarId);

            // Render car in the appropriate container
            if (carsSelected.length === 1) {
                renderCarComparison(selectedCar, car1Container);
            } else if (carsSelected.length === 2) {
                renderCarComparison(selectedCar, car2Container);
            }
        }
    });

    // Populate the select dropdown on page load
    populateSelect();
});
