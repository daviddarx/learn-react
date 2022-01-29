import { useState } from "react";

const ANIMALS = ["Bird", "Dog", "Cat", "Rabbit"];

const SearchParams = () => {
    const [location, setLocation] = useState("Zürich ZH");
    const [animal, setAnimal] = useState("");

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

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
