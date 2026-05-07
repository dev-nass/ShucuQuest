import { ref } from "vue";
import { useGameStates } from "@/stores/useGameStates";

export function useFetchWords() {
    const { dictionary, selected, wordUsed, grid, score, wordCount } =
        useGameStates();

    const LETTERS =
        "AAAAAABBBBCCCDDDDEEEEEEEEFFFGGGGHHHHIIIIIIJJKKKLLLLLMMMMNNNNNNOOOOOOPPPPQRRRRRSSSSSSTTTTTTUUUUUVVWWWXYYZ";

    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text();
            data.split("\n").forEach((word) =>
                dictionary.value.add(word.trim())
            );
        } catch (error) {
            throw new Error(`Failed to fetch ${error}`);
        }
    };

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

    /**
     * Description: Properly reset the states of the game
     */
    const resetGame = () => {
        score.value = 0;
        wordCount.value = 0;
        selected.value = [];
        wordUsed.value = new Set();
        grid.value = [];
    };

    const initGame = () => {
        resetGame();
        const seeds = getSeedWords(6);
        const seedLetters = seeds.join("").toUpperCase().split("");
        const allLetters = [...seedLetters];
        while (allLetters.length < 24) allLetters.push(weightedLetter());
        allLetters.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 24; i++)
            grid.value.push({ letter: allLetters[i], id: i });

        console.log(grid.value);
    };

    return {
        fetchData,
        initGame,
    };
}
