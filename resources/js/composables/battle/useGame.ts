import { useGameStates } from "@/stores/useGameStates";
import { useWords } from "./useWords";
import { useDisplay } from "./useDisplay";

export function useGame() {
    const {
        RANDOM_LETTERS_COUNT,

        status,

        selected,
        wordUsed,
        grid,

        currentRound,
        MAX_STAGE_ROUNDS,
        playerCharacterClass,

        score,

        isGameOver,

        playerHealth,
        enemyHealth,
    } = useGameStates();

    const { getSeedWords, weightedLetter } = useWords();
    const { setStatus } = useDisplay();

    /**
     * Description: Properly reset the states of the game
     */
    const resetGame = () => {
        score.value = 0;
        selected.value = [];
        wordUsed.value = new Set();
        grid.value = [];

        playerHealth.value = 1;
        enemyHealth.value = 1;
    };

    /**
     * Description: Init also resets the game
     * */
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
    };

    const nextRound = (): void => {
        if (enemyHealth.value >= 1 || currentRound.value >= 3) return;

        currentRound.value += 1;
        enemyHealth.value = 1;
    };

    /**
     * Description: Everytime this fn is invoked it checks if it's game game or not
     *
     * 1. Set status — "Victory!" or "Defeated!" to show in the UI (BattleView.vue:65)
     * 2. Trigger end-game animations — play a victory/defeat pose via playerCharacterClass / enemyCharacterClass
     * 3. Gate further input — toggle something (like isGameOver) so handleSubmitAndAttack
     early-returns and tile clicks are ignored
     * 4. Maybe show a "Play Again" overlay — so users can call initGame() and start fresh
     * */
    const endGame = () => {
        if (!isGameOver.value) {
            return;
        }

        playerHealth.value <= 0
            ? (status.value = "ENEMY WIN")
            : (status.value = "PLAYER WIN");
    };

    return {
        initGame,
        toggleTile,
        nextRound,
        endGame,
    };
}
