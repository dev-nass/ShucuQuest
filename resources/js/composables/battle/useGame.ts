import { useGameStates } from "@/stores/useGameStates";
import { useWords } from "./useWords";
import { useDisplay } from "./useDisplay";

export function useGame() {
    const {
        RANDOM_LETTERS_COUNT,

        selected,
        wordUsed,
        grid,

        score,
        wordCount,
    } = useGameStates();

    const { getSeedWords, weightedLetter } = useWords();
    const { updateWordDisplay } = useDisplay();

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
        while (allLetters.length < RANDOM_LETTERS_COUNT)
            allLetters.push(weightedLetter());
        allLetters.sort(() => Math.random() - 0.5);
        for (let i = 0; i < RANDOM_LETTERS_COUNT; i++)
            grid.value.push({ letter: allLetters[i], id: i });

        console.log(grid.value);
    };

    /**
     * Description: used for adding the letter on the selected
     */
    const toggleTile = (id: number) => {
        const idx = selected.value.indexOf(id);
        if (idx === -1) {
            selected.value.push(id);
        }

        updateWordDisplay();
    };
    return {
        initGame,
        toggleTile,
    };
}
