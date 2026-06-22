import { computed, ref } from "vue";

// FETCH STATES
const dictionary = ref(new Set<string>());

// WORD STATES
const grid = ref<any[]>([]); // the grid of shuffled letters where users can pick
const selected = ref<number[]>([]); // holds the ID currently selected letters
const currentWord = ref<string[]>([]); // current word being spelled used on UI
const wordUsed = ref(new Set<string>()); // words that are already used

// DISPLAY STATES
const status = ref<string>("");

// GAME STATES
const RANDOM_LETTERS_COUNT: number = 16;
const score = ref<number>(0);
const isPlayersTurn = ref<boolean>(true); // state to be check before submitWord()
const isGameOver = computed<boolean>(
    () => playerHealth.value <= 0 || enemyHealth.value <= 0,
);

// ANIMATION STATES (UI)
const playerCharacterClass = ref<string>();
const dragonClass = ref<string>();
const playerFireballVisible = ref<boolean>(true);
const enemyFireballVisible = ref<boolean>(false);
const fireballClass = ref<string>();
const currentWordAnimation = ref<string>();

// HP STATES
const playerHealth = ref<number>(1.5);
const enemyHealth = ref<number>(0.5);

// SELECTED CHARACTER STATE
const selectedChar = ref<string | null>("mage"); // small letter

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

        isPlayersTurn,
        isGameOver,

        // ANIMATION STATES
        playerCharacterClass,
        dragonClass,
        playerFireballVisible,
        enemyFireballVisible,
        fireballClass,
        currentWordAnimation,

        // HP STATES
        playerHealth,
        enemyHealth,

        // SELECTED CHARACTER
        selectedChar,
    };
}
