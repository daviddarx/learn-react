import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";

const SearchParams = () => {
    const [animals, setAnimals] = useState([]);
    const [city, setCity] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestAnimals();
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setBreed("");
    }, [animal]);

    async function requestAnimals() {
        const response = await fetch("https://pets-v2.dev-apis.com/animals");

        const json = await response.json();

        setAnimals(json.animals);
    }

    async function requestPets() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&city=${city}&breed=${breed}`
        );

        const json = await response.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="city">
                    City
                    <input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                        placeholder="Animal"
                    >
                        <option>Please select an animal</option>

                        {animals.map((animal) => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                        placeholder="Breed"
                    >
                        <option>Please select a breed</option>

                        {breeds.map((breed) => (
                            <option value={breed} key={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>

                <button>Submit</button>
            </form>

            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
