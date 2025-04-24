import { useState, useEffect } from 'react';

export const usePizzaOfTheDay = () => {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            try {
                const response = await fetch('/api/pizza-of-the-day');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPizzaOfTheDay(data);
            } catch (error) {
                console.error('Failed to fetch pizza of the day:', error);
            }
        }

        fetchPizzaOfTheDay();
    }, [])

    return pizzaOfTheDay

}