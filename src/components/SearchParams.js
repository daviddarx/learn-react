import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Pet from "./Pet";

const ANIMALS = ["dog", "rabbit", "bird", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await response.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
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

                        {ANIMALS.map((animal) => (
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

            {pets.map((pet) => (
                <Pet
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    key={pet.id}
                />
            ))}
        </div>
    );
};

export default SearchParams;
