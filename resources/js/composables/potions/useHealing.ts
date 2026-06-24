import { useGameStates } from "@/stores/useGameStates";

export function useHealing() {
    const { playerHealth, MAX_PLAYER_HEALTH } = useGameStates();

    const applyHealing = (): void => {
        if (playerHealth.value >= MAX_PLAYER_HEALTH.value) return;

        let healthDiff = Math.abs(playerHealth.value - MAX_PLAYER_HEALTH.value);

        if (healthDiff == 2) playerHealth.value += 2;
        else if (healthDiff == 1) playerHealth.value += 1;
        else playerHealth.value += 3;
    };

    return {
        applyHealing,
    };
}
