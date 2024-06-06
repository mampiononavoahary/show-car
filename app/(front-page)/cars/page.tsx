"use client";
import React, { useState } from 'react';


interface Car {
    name: string;
    description: string;
    brand: string;
    model: string;
    price: number;
    color: string;
    motorType: 'Essence' | 'Diesel' | 'Electric' | 'Hybrid';
    power: string; // Example: "2cv", "150cv", etc.
    placeNumber: number;
    status: 'Pinned' | 'Unpinned';
    type: string;
}

const staticCars: Car[] = [
    {
        name: 'Model S',
        description: 'A luxury electric sedan',
        brand: 'Tesla',
        model: '2021',
        price: 79999,
        color: 'Red',
        motorType: 'Electric',
        power: '670cv',
        placeNumber: 5,
        status: 'Pinned',
        type: 'Sedan'
    },
    {
        name: 'Mustang',
        description: 'A powerful muscle car',
        brand: 'Ford',
        model: '2020',
        price: 55999,
        color: 'Blue',
        motorType: 'Essence',
        power: '450cv',
        placeNumber: 4,
        status: 'Unpinned',
        type: 'Coupe'
    }
    // Ajoutez d'autres voitures si nécessaire
];

function Page() {
    const [cars, setCars] = useState<Car[]>(staticCars);

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <>
            <header>
                <h1>Welcome to My Car Page</h1>
            </header>
            <main>
                {cars.map((car, index) => (
                    <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                        <h2>{car.name}</h2>
                        <p><strong>Brand:</strong> {car.brand}</p>
                        <p><strong>Model:</strong> {car.model}</p>
                        <p><strong>Price:</strong> ${car.price}</p>
                        <p><strong>Description:</strong> {car.description}</p>
                        <p><strong>Color:</strong> {car.color}</p>
                        <p><strong>Motor Type:</strong> {car.motorType}</p>
                        <p><strong>Power:</strong> {car.power}</p>
                        <p><strong>Place Number:</strong> {car.placeNumber}</p>
                        <p><strong>Status:</strong> {car.status}</p>
                        <p><strong>Type:</strong> {car.type}</p>
                    </div>
                ))}
                <button onClick={handleClick}>Click Me</button>
            </main>
        </>
    );
}

export default Page;
