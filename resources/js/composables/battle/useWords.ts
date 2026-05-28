import { useGameStates } from "@/stores/useGameStates";
import { useDisplay } from "./useDisplay";

export function useWords() {
    const { dictionary, selected } = useGameStates();

    const { updateWordDisplay } = useDisplay();

    const LETTERS =
        "AAAAAABBBBCCCDDDDEEEEEEEEFFFGGGGHHHHIIIIIIJJKKKLLLLLMMMMNNNNNNOOOOOOPPPPQRRRRRSSSSSSTTTTTTUUUUUVVWWWXYYZ";

    /**
     * Description: Responsible for seeding 3 letter words
     * @param count number of words to be returned
     */
    const getSeedWords = (count: number) => {
        const common = [
            "the",
            "and",
            "for",
            "are",
            "but",
            "not",
            "you",
            "all",
            "can",
            "her",
            "was",
            "one",
            "our",
            "out",
            "day",
            "get",
            "has",
            "him",
            "his",
            "how",
            "man",
            "new",
            "now",
            "old",
            "see",
            "two",
            "way",
            "who",
            "boy",
            "did",
            "its",
            "let",
            "put",
            "say",
            "she",
            "too",
            "use",
            "cat",
            "dog",
            "run",
            "sun",
            "fun",
            "car",
            "far",
            "war",
            "bar",
            "tar",
            "par",
            "jar",
            "red",
            "bed",
            "fed",
            "led",
            "wed",
            "big",
            "dig",
            "fig",
            "jig",
            "pig",
            "rig",
            "wit",
            "bit",
            "fit",
            "hit",
            "kit",
            "lit",
            "pit",
            "sit",
            "bat",
            "fat",
            "hat",
            "mat",
            "rat",
            "sat",
            "vat",
            "cup",
            "pup",
            "bus",
            "cut",
            "gut",
            "hut",
            "nut",
            "rut",
            "tub",
            "hub",
            "rub",
            "sub",
            "dub",
            "cub",
            "pub",
            "bug",
            "dug",
            "hug",
            "jug",
            "lug",
            "mug",
            "rug",
            "tug",
        ];

        const result = [];
        const shuffled = common
            .filter((w) => dictionary.value.has(w))
            .sort(() => Math.random() - 0.5);

        for (let i = 0; i < Math.min(count, shuffled.length); i++)
            result.push(shuffled[i]);
        return result;
    };

    /**
     * Description: Picks a random index and return a random letter
     */
    function weightedLetter() {
        return LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }

    const removeLetter = (id: number): void => {
        if (id === -1) {
            console.warn("Letter cant be found; It cant be remove");
            return;
        }
        selected.value.splice(id, 1);

        updateWordDisplay();
    };

    return {
        getSeedWords,
        weightedLetter,
        removeLetter,
    };
}
