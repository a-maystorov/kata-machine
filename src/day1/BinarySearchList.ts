export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);
        const midValue = haystack[mid];

        if (midValue === needle) {
            return true; // Target found
        } else if (midValue > needle) {
            high = mid; // Target is in the left half
        } else {
            low = mid + 1; // Target is in the right half
        }
    } while (low < high);

    return false; // Target not found
}
