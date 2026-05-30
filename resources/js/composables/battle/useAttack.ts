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
        fireballVisible,
        fireballClass,

        playerHealth,
        enemyHealth,
    } = useGameStates();

    // composables
    const { setStatus, updateWordDisplay } = useDisplay();
    const { weightedLetter } = useWords();

    const validateWord = (): string | null => {
        const word = selected.value
            .map((id) => grid.value[id].letter)
            .join("")
            .toLowerCase();

        if (word.length < 3) {
            setStatus("Need at least 3 letters", "err");
            return null;
        }
        if (wordUsed.value.has(word)) {
            setStatus("Already used!", "err");
            return null;
        }
        if (!dictionary.value.has(word)) {
            setStatus("Not a valid word", "err");
            return null;
        }

        return word;
    };

    /**
     * Description: Validate the currentWord before the attack sequence
     * */
    const submitWord = (): void => {
        const word = validateWord();

        if (word === null) {
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
        setStatus("+" + pts + " pts — " + word.toUpperCase() + "!", "ok");
    };

    /**
     * Description: Ensure that after submitting the states for attacking will be reset
     *              and also used for "New Game" buttton
     */
    const clearSelection = (): void => {
        isValidToAttack.value = false;
        selected.value = [];
        updateWordDisplay();
    };

    /**
     * Description: Submit the attack and apply the animations
     * */
    const handleSubmitAndAttack = async (): Promise<void> => {
        submitWord();
        if (!isValidToAttack.value) return;

        clearSelection();

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

        enemyHealth.value -= 1;

        // 4. Dragon counter-attack — shake builds rage
        dragonClass.value = "animate-dragon-shake";
        await wait(350);

        // 5. Dragon charges — glows red while fireball loads
        dragonClass.value = "animate-dragon-charge";
        await wait(500);

        // 6. Fireball launched — show the fireball element and send it flying
        dragonClass.value = "";
        fireballVisible.value = true;
        fireballClass.value = "animate-fireball";

        // 7. Knight takes the hit — sync slightly before fireball lands
        await wait(360); // ~60% of fireball travel before impact registers
        knightClass.value = "animate-knight-hit";

        // 8. Clean up everything once all animations settle
        await wait(750);
        knightClass.value = "";
        fireballClass.value = "";
        fireballVisible.value = false;

        playerHealth.value -= 1;
    };

    function wait(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return {
        validateWord,
        submitWord,
        clearSelection,
        handleSubmitAndAttack,
    };
}
