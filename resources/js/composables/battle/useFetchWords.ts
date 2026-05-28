import { useGameStates } from "@/stores/useGameStates";

export function useFetchWords() {
    const { dictionary } = useGameStates();

    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt",
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text();
            data.split("\n").forEach((word) =>
                dictionary.value.add(word.trim()),
            );
        } catch (error) {
            throw new Error(`Failed to fetch ${error}`);
        }
    };

    return {
        fetchData,
    };
}
