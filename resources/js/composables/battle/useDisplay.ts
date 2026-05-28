import { useGameStates } from "@/stores/useGameStates";

export function useDisplay() {
    const {
        status,

        dictionary,
        selected,
        currentWord,
        wordUsed,
        grid,
    } = useGameStates();

    const setStatus = (msg: string, cls: string) => {
        status.value = msg;
    };

    /**
     * Update the display of currentWord and validate if its valid
     * */
    function updateWordDisplay() {
        const word = selected.value.map((id) => grid.value[id].letter).join("");
        currentWord.value = word.split("");
        // TODO: remove this
        console.log(currentWord.value);
        const w = word.toLowerCase();
        if (w.length >= 3) {
            if (wordUsed.value.has(w)) {
                setStatus("Already used", "err");
            } else if (dictionary.value.has(w)) {
                setStatus("Valid word! Press Enter", "ok");
            } else {
                setStatus(
                    w.length + " letters — keep going or try different letters",
                    "",
                );
            }
        } else {
            setStatus(
                w.length > 0
                    ? "Need at least 3 letters"
                    : "Click letters to spell a word",
                "",
            );
        }
    }

    return {
        setStatus,
        updateWordDisplay,
    };
}
