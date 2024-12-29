const cars = [
    {
        id: 1,
        company: "Toyota",
        model: "Corolla",
        year: 2023,
        images: [
            "https://d3s8goeblmpptu.cloudfront.net/mrp/toyota/2023/corolla/2023-toyota-corolla_landing-2.jpg",
            "https://www.heraldnet.com/wp-content/uploads/2023/10/34232537_web1_M2-2023-Toyota-Corolla_interior.jpg",
        ],
        specifications: {
            engine: "2.0L Dynamic Force 4-cylinder",
            transmission: "CVT Automatic or 6-speed Manual",
            horsepower: 169,
            torque: "151 lb-ft",
            fuelType: "Gasoline",
            fuelEconomy: {
                "city": "31 mpg",
                "highway": "40 mpg"
            },
            drivetrain: "Front-Wheel Drive (FWD)",
            seatingCapacity: 5,
            bodyType: "Sedan",
            to60: "8.2 seconds",
            topSpeed: "112 mph",
            dimensions: {
                length: "182.3 inches",
                width: "70.1 inches",
                height: "56.5 inches",
                wheelbase: "106.3 inches",
                cargoVolume: "13.1 cubic feet"
            }
        },
        features: [
            "Toyota Safety Sense 3.0",
            "Pre-Collision System with Pedestrian Detection",
            "Dynamic Radar Cruise Control",
            "Lane Departure Alert with Steering Assist",
            "Blind Spot Monitor with Rear Cross-Traffic Alert",
            "8-inch touchscreen display",
            "Wireless Apple CarPlay and Android Auto",
            "JBL Premium Audio System",
            "Heated front seats",
            "Dual-zone automatic climate control"
        ],
        negativeAspects: [
            "Limited engine power compared to competitors",
            "Less cargo space than some rivals",
            "No all-wheel drive option",
            "Firm ride on rough roads"
        ],
        price: "Starting at $21,700"
    },

    {
        id: 2,
        "company": "Ford",
        "model": "Mustang GT",
        "year": 2022,
        "images": [
            "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-stealth-edition-02-1633475393.jpg?crop=0.671xw:1.00xh;0.125xw,0&resize=2048:*",
            "https://storage.googleapis.com/www.savvydealer.com/new/Ford/Mustang/All-Trims/2022/2022-Mustang-Interior.webp",
        ],
        "specifications": {
            "engine": "5.0L Ti-VCT V8",
            "transmission": "6-Speed Manual with dual mass flywheel, twin disc clutch, and rev matching",
            "horsepower": 450,
            "torque": "410 lb-ft",
            "fuelType": "Gasoline",
            "fuelEconomy": {
                "city": "15 mpg",
                "highway": "24 mpg"
            },
            "drivetrain": "Rear-Wheel Drive (RWD)",
            "seatingCapacity": 4,
            "bodyType": "Coupe",
            "0to60": "Approximately 4.3 seconds",
            "topSpeed": "155 mph",
            "dimensions": {
                "length": "188.9 inches",
                "width": "75.4 inches",
                "height": "55.1 inches",
                "wheelbase": "107.1 inches",
                "curbWeight": "3,730 lbs",
                "cargoVolume": "13.5 cubic feet"
            }
        },
        "features": [
            "Selectable Drive Modes",
            "Vented four-wheel disc brakes",
            "LED headlights and taillights",
            "Dual-zone automatic climate control",
            "12-inch digital instrument cluster",
            "SYNC 3 infotainment system with 8-inch touchscreen",
            "Apple CarPlay and Android Auto compatibility",
            "FordPass Connect with 4G LTE Wi-Fi hotspot",
            "Rearview camera",
            "Pre-Collision Assist with Automatic Emergency Braking",
            "Lane-Keeping System",
            "Intelligent Access with push-button start"
        ],
        "negativeAspects": [
            "Limited rear-seat space",
            "Firm ride quality on rough roads",
            "Average fuel economy for its class",
            "Limited outward visibility"
        ],
        "price": "Starting at $38,045"
    },

    {
        id: 3,
        company: "Nissan",
        model: "Sunny",
        year: 2023,
        images: [
            "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_middle_east/vehicles/sunny/my24/configurator/NEW-SUNNY-SL-PLUS.jpg",
            "https://ymimg1.b8cdn.com/resized/car_model/8394/pictures/9006955/mobile_listing_main_2020_sunny_interior10.jpg",
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
        id: 4,
        company: "Nissan",
        model: "Rogue",
        year: 2022,
        images: [
            "https://www.stevenscreeknissan.com/static/brand-nissan/misc/2022-rogue/2022-nissan-rogue-mid-size-awd-crossover-m.jpg",
            "https://di-uploads-pod40.dealerinspire.com/nissanofjeffersoncity/uploads/2022/02/2022-nissan-rogue-front-seats-interior.png",
            "https://i.pinimg.com/736x/1e/66/0a/1e660a97b266ad6586ad72a92c0b73d4.jpg",
        ],
        specifications: {
            engine: "1.5-liter 3-cylinder",
            transmission: "Continuously Variable Transmission (CVT)",
            horsepower: 201,
            fuelType: "Gasoline",
            fuelTankCapacity: "54.88 liters",
            bodyType: "SUV",
            seatingCapacity: 5,
            dimensions: "Length: 4,648 mm, Width: 1,839 mm, Height: 1,689 mm",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            range: "Approximately 643 km (400 miles) on a full tank",
            to60: "8.2 seconds"
        },
        features: [
            "Apple CarPlay and Android Auto",
            "Blind Spot Monitor",
            "Lane Departure Warning",
            "Backup Camera",
            "Stability Control",
            "360-Degree Surround View Camera",
            "ProPilot Assist (driver assistance technology)"
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
        id: 5,
        company: "Nissan",
        model: "Altima",
        year: 2023,
        images: [
            "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/ab9a6a33a0aabc407edc219d3cbc1aee857e9421",
            "https://www.motortrend.com/uploads/2023/03/2023-Nissan-Altima-2.5SL-AWD-015-front-three-quarter-in-motion.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iDnRBaPI7-qwqHjfrWkLaFEV42vMLPQZXw&s",
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
            bodyType: "Sedan",
            seatingCapacity: 5,
            dimensions: "Length: 4,900 mm, Width: 1,850 mm, Height: 1,445 mm",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            range: "Approximately 830 km (515 miles) on a full tank",
            to60: "7.4 seconds"
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
        id: 6,
        company: "Hyundai",
        model: "Tucson",
        years: 2019,
        images: [
            "https://img.sm360.ca/images/article/dilawri-group-of-companies/61936//11561557682567.PNG",
            "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/d2ab4f8f24af1ca698577299fe5f43d4",
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
            seatingCapacity: 5,
            dimensions: "Length: 4,480 mm, Width: 1,850 mm, Height: 1,655 mm",
            range: "Approximately 600 km (373 miles) on a full tank",
            to60: "9.2 seconds"
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
        id: 7,
        company: "Hyundai",
        model: "Palisade",
        year: "2020",
        images: [
            "https://media.ed.edmunds-media.com/hyundai/palisade/2020/oem/2020_hyundai_palisade_4dr-suv_limited_fq_oem_1_1600.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i151530282/2020_hyundai_palisade_dashboard.jpg",
        ],
        specifications: {
            engine: "3.8L V6",
            transmission: "8-speed automatic",
            horsepower: 291,
            fuelType: "Gasoline",
            fuelTankCapacity: "71.2 Liters",
            drivetrain: "Front-Wheel Drive (FWD) or All-Wheel Drive (AWD)",
            bodyType: "SUV",
            seatingCapacity: 8,
            dimensions: "Length: 4,980 mm, Width: 1,970 mm, Height: 1,750 mm",
            range: "Approximately 600 km (373 miles) on a full tank",
            to60: "7.1 seconds"
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
        id: 8,
        company: "BMW",
        model: "330i",
        year: "2022",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB04F4XiMB8vSEXYNK3yeX-iBoV4qXMTOmnQ&s",
            "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/5362bb58-47b8-4aa4-ba76-b0a6a5d1ce5e/62787838-f070-473f-b375-f5f81d530e13.png",
        ],
        specifications: {
            engine: "2.0L I4 Turbo",
            transmission: "8-speed automatic",
            horsepower: 255,
            fuelType: "Gasoline",
            fuelTankCapacity: "59.1 Liters",
            drivetrain: "Rear-Wheel Drive (RWD) or All-Wheel Drive (AWD)",
            bodyType: "Sedan",
            seatingCapacity: 5,
            dimensions: "Length: 4,710 mm, Width: 1,830 mm, Height: 1,435 mm",
            range: "Approximately 600 km (373 miles) on a full tank",
            to60: "5.6 seconds"
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
        id: 9,
        company: "BMW",
        model: "X5",
        year: "2021",
        images: [
            "https://images.hgmsites.net/hug/2021-bmw-x5-series_100772533_h.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159614409/2021_bmw_x5_m_dashboard.jpg",
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
            seatingCapacity: 5,
            dimensions: "Length: 4,922 mm, Width: 2,004 mm, Height: 1,745 mm",
            range: "Approximately 500 miles (804.6 km) on a full tank",
            to60: "4.1 seconds"
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
        id: 10,
        company: "Changan",
        model: "UNI-K",
        year: "2024",
        images: [
            "https://www.auto-in-china.com/wp-content/uploads/2024/02/1-6-1024x683.jpg",
            "https://ymimg1.b8cdn.com/resized/car_model/10629/pictures/13372118/mobile_listing_main_2022_Changan_UNI-K_Interior_13.jpg",
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
        id: 11,
        company: "Kia",
        model: "Sorento",
        year: 2022,
        images: [
            "https://www.auto-data.net/images/f53/Kia-Kia-Sorento-IV.jpg",
            "https://www.auto-data.net/images/f34/Kia-Kia-Sorento-IV.jpg",
            "https://www.auto-data.net/images/f124/Kia-Kia-Sorento-IV.jpg",
            "https://www.auto-data.net/images/f102/Kia-Kia-Sorento-IV.jpg",
            "https://www.auto-data.net/images/f62/Kia-Sorento-IV.jpg",
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
        id: 12,
        company: "Jeep",
        model: "Compass",
        year: 2022,
        images: [
            "https://www.motortrend.com/uploads/sites/5/2021/07/2022_Jeep_Compass_1.jpg",
            "https://cars.usnews.com/static/images/Auto/izmo/i159614910/2022_jeep_compass_dashboard.jpg",
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
        id: 13,
        company: "Tesla",
        model: "Model S Plaid",
        year: 2023,
        images: [
            "https://www.automobile-sportive.com/guide/tesla/modelsplaid/tesla-model-s-plaid.jpg",
            "https://p.turbosquid.com/ts-thumb/bB/FiQKAd/dJ/2023_tesla_model_s_plaid_trn/jpg/1682516702/1920x1080/turn_fit_q99/3f756b0034462121b3c9ca300cc46193f516f348/2023_tesla_model_s_plaid_trn-1.jpg",
            "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/uuois47aqcb7ihqvjvhu",
            "https://www.autocollectionofmurfreesboro.com/imagetag/16758/16/l/Used-2022-Tesla-Model-S-Plaid-1698104509.jpg",
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
    },
    {
        id: 14,
        "company": "BMW",
        "model": "iX xDrive50",
        "year": "2023",
        "images": [
            "https://i.insider.com/626c388186fa90001905dff5?width=700",
            "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-ix-m60-116-1653422439.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*",
        ],
        "specifications": {
            "battery": "105.2 kWh high-voltage lithium-ion battery pack",
            "transmission": "Single-speed",
            "horsepower": 516,
            "torque": "564 lb-ft",
            "fuelType": "Electric",
            "range": "324 miles (521.4 km) on a single charge",
            "chargingTime": {
                "DC Fast Charging": "Up to 90 miles of range with 10 minutes of charging"
            },
            "drivetrain": "All-Wheel Drive (AWD)",
            "seatingCapacity": 5,
            "bodyType": "SUV",
            "0to60": "4.0 seconds",
            "topSpeed": "200 kmh",
            "dimensions": {
                "length": "4953 mm",
                "width": "1967 mm",
                "height": "1696 mm",
                "wheelbase": "3000 mm",
                "curbWeight": "2585 kg",
                "cargoVolume": {
                    "minimum": "500 liters",
                    "maximum": "1750 liters"
                }
            }
        },
        "features": [
            "BMW Curved Display with configurable 12.3\" instrument cluster and 14.9\" central information display",
            "Apple CarPlay & Android Auto compatibility",
            "Apple Car Key compatibility",
            "Wireless device charging",
            "Dynamic Cruise Control",
            "Panoramic Sky Lounge Roof",
            "Harman Kardon Surround Sound System",
            "Heated and Ventilated Seats",
            "Adaptive Cruise Control",
            "Lane Keeping Assist",
            "Over-the-Air Software Updates",
            "4-Zone Climate Control"
        ],
        "negativeAspects": [
            "High starting price compared to competitors",
            "Limited cargo space for an SUV",
            "Touchscreen interface can feel overly complex",
            "Charging infrastructure may be limited in some areas"
        ],
        "price": "Starting at $87,250"
    },

    {
        id: 15,
        "company": "Jeep",
        "model": "Wagoneer S",
        "year": 2024,
        "images": [
            "https://hips.hearstapps.com/hmg-prod/images/2024-jeep-wagoneer-s-first-edition-exterior-103-6655ec005cda0.jpg?crop=0.587xw:0.597xh;0.309xw,0.144xh&resize=2048:*",
            "https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2024/wagoneer-s/technology/desktop/my24-wagoneer-s-technology-hero-main-v2-desktop.jpg",
            "https://images.cars.com/cldstatic/wp-content/uploads/jeep-wagoneer-s-2024-interior-dashboard-35.jpg",
        ],
        "specifications": {
            "battery": "100.5 kWh lithium-ion, nickel manganese cobalt battery pack",
            "transmission": "Single-speed",
            "horsepower": 608,
            "torque": "617 lb-ft",
            "fuelType": "Electric",
            "range": "300 miles (482.8 km) on a single charge",
            "electricityConsumption": "21.2 kWh/100 km (34.12 kWh/100 mi)",
            "chargingTime": {
                "Level 1 (120V)": "Approximately 52 hours (5-80%)",
                "Level 2 (220/240V)": "Approximately 6.8 hours (5-80%)",
                "DC Fast Charging (440V)": "Approximately 30 minutes (5-80%)"
            },
            "drivetrain": "All-Wheel Drive (AWD)",
            "seatingCapacity": 5,
            "bodyType": "SUV",
            "0to60": "3.4 seconds",
            "topSpeed": "200 km/h (124.27 mph)",
            "dimensions": {
                "length": "4886 mm (192.36 in.)",
                "width": "1900 mm (74.8 in.)",
                "curbWeight": "2571 kg (5668.08 lbs.)",
                "grossWeight": "3039 kg (6699.85 lbs.)",
                "trunkSpace": {
                    "minimum": "866 liters (30.58 cu. ft.)",
                    "maximum": "1727 liters (60.99 cu. ft.)"
                }
            }
        },
        "features": [
            "Heated and ventilated 16-way power adjustable front seats with massage function",
            "Heated and ventilated rear seats",
            "Advanced driver-assistance systems",
            "Premium interior materials",
            "Latest Uconnect infotainment system",
            "Wireless Apple CarPlay and Android Auto",
            "Over-the-air software updates",
            "Panoramic sunroof",
            "Adaptive cruise control",
            "Lane-keeping assist"
        ],
        "negativeAspects": [
            "High starting price compared to competitors",
            "Limited charging infrastructure in certain areas",
            "Potentially longer charging times compared to refueling gasoline vehicles",
            "Large size may be challenging for urban driving and parking"
        ],
        "price": "Starting at $71,995"
    },
    {
        id: 16,
        "company": "Nissan",
        "model": "Ariya Performance",
        "year": 2021,
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyupnVKPwQYr_BxbPvPHFqtKFb9R9yao5Agg&s",
            "https://www.stevenscreeknissan.com/blogs/2920/wp-content/uploads/2024/04/24-nissan-ariya-san-jose-ca.png",
            "https://www.motortrend.com/uploads/2021/11/2022-Nissan-Ariya-09.jpg?w=768&width=768&q=75&format=webp",
            "https://topelectricsuv.com/wp-content/uploads/2023/12/Nissan-Ariya-Platinum-e-4orce-interior.jpg",
        ],
        "specifications": {
            "battery": "90 kWh lithium-ion battery pack",
            "transmission": "Single-speed automatic",
            "horsepower": 394,
            "torque": "600 Nm (442.54 lb-ft)",
            "fuelType": "Electric",
            "range": "399 km (247.93 miles) on a single charge",
            "chargingTime": {
                "DC Fast Charging": "Up to 130 kW"
            },
            "drivetrain": "e-4ORCE All-Wheel Drive (AWD)",
            "seatingCapacity": 5,
            "bodyType": "Coupe SUV",
            "0to100": "5.1 seconds",
            "topSpeed": "200 km/h (124.27 mph)",
            "dimensions": {
                "length": "4595 mm (180.91 in.)",
                "width": "1850 mm (72.83 in.)",
                "height": "1655 mm (65.16 in.)",
                "wheelbase": "2775 mm (109.25 in.)",
                "curbWeight": "Approximately 1920 kg (4232 lbs)",
                "cargoVolume": "408 liters (14.41 cu. ft.)"
            }
        },
        "features": [
            "Advanced driver-assistance systems",
            "Panoramic sunroof",
            "Dual-zone automatic climate control",
            "12.3-inch infotainment display",
            "Apple CarPlay and Android Auto compatibility",
            "Wireless charging pad",
            "Heated front seats",
            "ProPILOT Assist with Navi-link",
            "Over-the-air software updates",
            "LED headlights and taillights"
        ],
        "negativeAspects": [
            "Limited availability in certain markets",
            "Charging infrastructure may be limited in some areas",
            "Higher trim levels can be expensive",
            "Rear visibility may be compromised due to design"
        ],
        "price": "Starting at approximately $58,000"
    },
    {
        id: 17,
        "company": "Kia",
        "model": "EV6 Long Range",
        "year": 2023,
        "images": [
            "https://www.auto-data.net/images/f84/Kia-EV6_2.jpg",
            "https://www.auto-data.net/images/f79/Kia-EV6.jpg",
            "https://www.auto-data.net/images/f58/Kia-EV6.jpg"
        ],
        "specifications": {
            "battery": "77.4 kWh Lithium-ion polymer",
            "usableCapacity": "74.0 kWh",
            "architecture": "800 V",
            "chargingTime": {
                "120V": "30.8 hours",
                "240V": "8.5 hours",
                "400V": "0.3 hours"
            },
            "range": "282 miles (453.8 km) (EPA estimated)",
            "horsepower": 320,
            "torque": "446 lb-ft",
            "transmission": "Single-Speed Automatic",
            "drivetrain": "All-Wheel Drive (AWD)",
            "0to60": "Approximately 3.5 seconds",
            "topSpeed": "115 mph (185 kmh)",
            "seatingCapacity": 5,
            "cargoCapacity": "24.4 cubic feet",
            "dimensions": {
                "length": "184.3 inches",
                "width": "74.4 inches",
                "height": "60.8 inches",
                "wheelbase": "114.2 inches"
            }
        },
        "features": [
            "Dual Motor e-AWD",
            "800V Ultra-Fast DC Charging Capability",
            "21-inch Alloy Wheels",
            "Panoramic Sunroof",
            "12.3-inch Dual Panoramic Displays",
            "Augmented Reality Head-Up Display",
            "Meridian Premium Audio System",
            "Wireless Apple CarPlay and Android Auto",
            "Advanced Driver Assistance Systems",
            "Heated and Ventilated Front Seats"
        ],
        "negativeAspects": [
            "Limited availability in certain regions",
            "Higher trim levels can be expensive",
            "Rear visibility may be compromised due to design",
            "Charging infrastructure may be limited in some areas"
        ],
        "price": "Starting at approximately $57,995"
    }

]




document.addEventListener("DOMContentLoaded", () => {
    const carDetailsContainer = document.getElementById('car-details');

    const urlParams = new URLSearchParams(window.location.search);
    const carId = parseInt(urlParams.get('id'), 10);

    const car = cars.find(c => c.id === carId);

    if (car) {
        carDetailsContainer.innerHTML = `
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
            <button onclick="goBack()">Back to All Cars</button>
        `;
    } else {
        carDetailsContainer.innerHTML = `<p>Car not found.</p>`;
    }
});

function goBack() {
    window.location.href = "allcars.html";
}
