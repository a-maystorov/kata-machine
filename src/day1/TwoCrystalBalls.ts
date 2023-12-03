export default function two_crystal_balls(breaks: boolean[]): number {
    // Determine the jump amount (the distance between two consecutive checks)
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // Start checking crystal balls with a jump from the beginning
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        // If a broken crystal ball is found, stop checking
        if (breaks[i]) {
            break;
        }
    }

    // Adjust the index to the previous jump position
    i -= jumpAmount;

    // Perform a linear search within a smaller range around the last known safe position
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        // If a broken crystal ball is found, return its position
        if (breaks[i]) {
            return i;
        }
    }

    // If no broken crystal ball is found, return -1
    return -1;
}
