import { useState, useEffect } from "react";

const localCache = {};

// custom hooks, analog to vue.js mixins
export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }
        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const response = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );

            const json = await response.json();

            localCache[animal] = json.breeds || [];

            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]); // update each time animal is changed

    return [breedList, status];
}
