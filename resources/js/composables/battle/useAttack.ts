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

        isPlayersTurn,

        knightClass,
        dragonClass,
        fireballVisible,
        fireballClass,

        playerHealth,
        enemyHealth,

        isGameOver,
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
     * Description: Validate the currentWord and validate if
     * its playersTurn before the attack sequence
     * */
    const submitWord = (): boolean => {
        const word = validateWord();

        if (word === null) {
            return false;
        }

        if (isPlayersTurn.value === false) {
            return false;
        }

        wordUsed.value.add(word);
        // TODO: Isolate this logic
        // replaces the all letters after an attack
        selected.value.forEach((id) => {
            grid.value[id].letter = weightedLetter();
        });

        return true;
    };

    /**
     * Description: Ensure that after submitting, the states for attacking will be reset
     *              and also used for "New Game" buttton
     */
    const clearSelection = (): void => {
        selected.value = [];
        updateWordDisplay();
    };

    /**
     * Description: Apply the animation and reduce the health of player
     */
    const applyPlayerAttackAnimation = async (): Promise<void> => {
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

        applyPlayerAttackDamage();
    };

    const applyEnemyAttackAnimation = async (): Promise<void> => {
        if (isGameOver.value) return;

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

        applyEnemyAttackDamage();
    };

    const applyPlayerAttackDamage = (): void => {
        const word = selected.value
            .map((id) => grid.value[id].letter)
            .join("")
            .toLowerCase();

        const pts =
            word.length <= 3
                ? 1
                : word.length <= 4
                  ? 2
                  : word.length <= 5
                    ? 4
                    : word.length * 2;

        // console.log("Word", word.length);
        // console.log(enemyHealth.value);
        // console.log(pts);
        enemyHealth.value -= pts;
        // console.log(enemyHealth.value);

        score.value += pts;
        setStatus("+" + pts + " pts — " + word.toUpperCase() + "!", "ok");
    };

    // TODO: create a logic here, where a crit chance is present
    const applyEnemyAttackDamage = (): void => {
        playerHealth.value -= 3;
    };

    function wait(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return {
        validateWord,
        submitWord,
        clearSelection,

        applyPlayerAttackAnimation,
        applyEnemyAttackAnimation,
    };
}
