import { useGameStates } from "@/stores/useGameStates";
import { useAttack } from "./useAttack";

export function useAnimation() {
    const { validateWord } = useAttack();
    const { currentWordAnimation } = useGameStates();

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

    return {
        animateCurrentSelectedWord,
    };
}
