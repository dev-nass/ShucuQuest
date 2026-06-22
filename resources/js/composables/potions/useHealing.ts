import { useGameStates } from "@/stores/useGameStates";

export function useHealing() {
    const { playerHealth } = useGameStates();

    const applyHealing = (): void => {
        playerHealth.value += 3;
    };

    return {
        applyHealing,
    };
}
