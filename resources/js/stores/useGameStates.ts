import { ref } from "vue";

const dictionary = ref(new Set<string>());
const grid = ref<any[]>([]); // the grid of shuffled letters where users can pick
const selected = ref<string[]>([]); // holds the currently selected letters
const wordUsed = ref(new Set<string>()); // words that are already used

const score = ref<number>(0);
const wordCount = ref<number>(0);

export function useGameStates() {
    return {
        dictionary,
        grid,
        selected,
        wordUsed,

        score,
        wordCount,
    };
}
