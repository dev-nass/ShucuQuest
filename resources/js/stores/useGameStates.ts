import { ref } from "vue";

const dictionary = ref(new Set<string>());
const grid = ref<string[]>([]); // the grid of shuffled letters where users can pick
const selected = ref<string[]>([]); // holds the currently selected letters
const wordUsed = ref(new Set<string>()); // words that are already used

export function useGameStates() {
    return {
        dictionary,
        grid,
        selected,
        wordUsed,
    };
}
