export function useDragonAttack() {
    const roleDragonAttack = (): number => {
        const CRIT_CHANCE = 0.15;

        // Crit chance
        if (Math.random() < CRIT_CHANCE) {
            return 4;
        }

        // Returns 1, 1.5, 2, 2.5, or 3
        const steps = Math.floor(Math.random() * 5); // 0-4
        return 1 + steps * 0.5;
    };

    return {
        roleDragonAttack,
    };
}
