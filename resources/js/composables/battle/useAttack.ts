import { useGameStates } from "@/stores/useGameStates";
import { useDisplay } from "./useDisplay";
import { useWords } from "./useWords";

export function useAttack() {
    // states
    const {
        dictionary,
        selected,
        wordUsed,
        grid,

        score,

        isValidToAttack,

        knightClass,
        dragonClass,
    } = useGameStates();

    // composables
    const { setStatus, updateWordDisplay } = useDisplay();
    const { weightedLetter } = useWords();

    /**
     * Description: Validate the currentWord before the attack sequence
     * */
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
        isValidToAttack.value = true;
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

    /**
     * Description: Ensure that after submitting the states for attacking will be reset
     *              and also used for "New Game" buttton
     */
    const clearSelection = () => {
        isValidToAttack.value = false;
        selected.value = [];
        updateWordDisplay();
    };

    const handleSubmitAndAttack = async (): Promise<void> => {
        submitWord();
        // 1. Knight shake (anticipation)
        knightClass.value = "animate-knight-shake";
        await wait(300);

        // 2. Knight dashes + dragon gets hit simultaneously
        knightClass.value = "animate-knight-attack";
        await wait(220); // delay hit to sync with slash impact
        dragonClass.value = "animate-dragon-hit";

        // 3. Clean up
        await wait(700);
        knightClass.value = "";
        dragonClass.value = "";
    };

    function wait(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return {
        submitWord,
        clearSelection,
        handleSubmitAndAttack,
    };
}
