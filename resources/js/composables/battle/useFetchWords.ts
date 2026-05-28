import { ref } from "vue";
import { useGameStates } from "@/stores/useGameStates";

export function useFetchWords() {
    const {
        status,

        dictionary,
        selected,
        currentWord,
        wordUsed,
        grid,

        score,
        wordCount,
    } = useGameStates();

    const LETTERS =
        "AAAAAABBBBCCCDDDDEEEEEEEEFFFGGGGHHHHIIIIIIJJKKKLLLLLMMMMNNNNNNOOOOOOPPPPQRRRRRSSSSSSTTTTTTUUUUUVVWWWXYYZ";

    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt",
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text();
            data.split("\n").forEach((word) =>
                dictionary.value.add(word.trim()),
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

    /**
     * used for adding the letter on the selected
     */
    const toggleTile = (id: number) => {
        const idx = selected.value.indexOf(id);
        if (idx === -1) {
            selected.value.push(id);
        }

        updateWordDisplay();
    };

    const removeLetter = (id: number): void => {
        if (id === -1) {
            console.warn("Letter cant be found; It cant be remove");
            return;
        }
        selected.value.splice(id, 1);

        updateWordDisplay();
    };

    function updateWordDisplay() {
        const word = selected.value.map((id) => grid.value[id].letter).join("");
        currentWord.value = word.split("");
        const w = word.toLowerCase();
        if (w.length >= 3) {
            if (wordUsed.value.has(w)) {
                setStatus("Already used", "err");
            } else if (dictionary.value.has(w)) {
                setStatus("Valid word! Press Enter", "ok");
            } else {
                setStatus(
                    w.length + " letters — keep going or try different letters",
                    "",
                );
            }
        } else {
            setStatus(
                w.length > 0
                    ? "Need at least 3 letters"
                    : "Click letters to spell a word",
                "",
            );
        }
    }

    const setStatus = (msg: string, cls: string) => {
        status.value = msg;
    };

    const submitWord = () => {
        const word = selected.value
            .map((id) => grid.value[id].letter)
            .join("")
            .toLowerCase();
        if (word.length < 3) {
            setStatus("Need at least 3 letters", "err");
            return;
        }
        if (wordUsed.value.has(word)) {
            setStatus("Already used!", "err");
            return;
        }
        if (!dictionary.value.has(word)) {
            setStatus("Not a valid word", "err");
            return;
        }
        wordUsed.value.add(word);
        const pts =
            word.length <= 3
                ? 1
                : word.length <= 4
                  ? 2
                  : word.length <= 5
                    ? 4
                    : word.length * 2;
        score.value += pts;
        selected.value.forEach((id) => {
            grid.value[id].letter = weightedLetter();
        });
        clearSelection();
        setStatus("+" + pts + " pts — " + word.toUpperCase() + "!", "ok");
    };

    const clearSelection = () => {
        selected.value = [];
        updateWordDisplay();
    };

    return {
        fetchData,
        initGame,

        toggleTile,
        removeLetter,

        submitWord,
        clearSelection,
    };
}
