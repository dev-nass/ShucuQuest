import { ref } from "vue";

// FETCH STATES
const dictionary = ref(new Set<string>());

// WORD STATES
const grid = ref<any[]>([]); // the grid of shuffled letters where users can pick
const selected = ref<number[]>([]); // holds the ID currently selected letters
const currentWord = ref<string[]>([]); // current word being spelled
const wordUsed = ref(new Set<string>()); // words that are already used

// DISPLAY STATES
const status = ref<string>("");

// GAME STATES
const RANDOM_LETTERS_COUNT: number = 16;
const score = ref<number>(0);
const isValidToAttack = ref<boolean>(false);

// ANIMATION STATES (UI)
const knightClass = ref<string>();
const dragonClass = ref<string>();

export function useGameStates() {
    return {
        RANDOM_LETTERS_COUNT,

        status,

        dictionary,
        grid,
        selected,
        currentWord,
        wordUsed,

        score,

        isValidToAttack,

        // ANIMATION STATES
        knightClass,
        dragonClass,
    };
}
