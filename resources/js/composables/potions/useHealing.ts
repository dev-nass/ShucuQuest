import { useGameStates } from "@/stores/useGameStates";

export function useHealing() {
    const { playerHealth } = useGameStates();

    const applyHealing = (): void => {
        if (playerHealth.value >= 5) return;

        // TODO: no hard coded MAX_PLAYERHEALTH  (5)
        let healthDiff = Math.abs(playerHealth.value - 5);
        if (healthDiff == 2) playerHealth.value += 2;
        else if (healthDiff == 1) playerHealth.value += 1;
        else playerHealth.value += 3;
    };

    return {
        applyHealing,
    };
}
