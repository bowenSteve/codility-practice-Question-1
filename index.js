function solution(S) {
    const N = S.length;
    const M = S[1].length;
    const output = []; // empty array stores the character positions


    for (let i = 0; i < M; i++) { //iterates over each position of the string
        for (let j = 0; j < N; j++) {//iterates over each pair of strings
            for (let k = j + 1; k < N; k++) {//iterates over all the items in the array
                if (S[j][i] === S[k][i]) {
                    output.push([j, k, i]);
                }
            }
        }
    }

    return output;
}

const S = ["gr", "sd", "rg"];
console.log(solution(S));
