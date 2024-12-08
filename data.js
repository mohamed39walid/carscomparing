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
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kbb.com%2Ftesla%2Fmodel-s%2F2023%2Fplaid%2F&psig=AOvVaw1iV_Z4m8CL3Y_gJEsM2CoZ&ust=1733742010825000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODFh7mCmIoDFQAAAAAdAAAAABAE",
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

console.log(cars);

export default cars;
