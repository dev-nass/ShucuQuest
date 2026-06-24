import { useGameStates } from "@/stores/useGameStates";
import { useAttack } from "./useAttack";

export function useAnimation() {
    const { validateWord } = useAttack();
    const {
        currentWordAnimation,
        playerCharacterClass,
        enemyHealth,
        currentRound,
    } = useGameStates();

    /**
     * Description: Animate the current selected word glow effect
     *              based on its length
     */
    const animateCurrentSelectedWord = () => {
        const word = validateWord();

        if (word === null || word.length < 0 || word.length > 25)
            return (currentWordAnimation.value = "");
        if (word.length < 4) return (currentWordAnimation.value = "glow-weak");
        if (word.length < 5)
            return (currentWordAnimation.value = "glow-medium");
        if (word.length < 6)
            return (currentWordAnimation.value = "glow-strong");
        return (currentWordAnimation.value = "glow-intense");
    };

    /**
     * Description: Check if the round is over, if it's
     *              is will apply the animation on player's char
     */
    const animateRoundEndWalkIn = async (): Promise<void> => {
        if (enemyHealth.value >= 1 || currentRound.value >= 3) return;

        await wait(500);
        playerCharacterClass.value = "animate-walk-in";
        await wait(5500);
        playerCharacterClass.value = "";
    };

    function wait(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return {
        animateCurrentSelectedWord,
        animateRoundEndWalkIn,
    };
}
