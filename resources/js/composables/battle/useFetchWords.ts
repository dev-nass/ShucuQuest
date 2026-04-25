import { ref } from "vue";

export function useFetchWords() {
    const words = ref(new Set<string>());

    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch("");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            words.value.add(data.word);
        } catch (error) {
            throw new Error(`Failed to fetch ${error}`);
        }
    };

    return {
        fetchData,
    };
}
