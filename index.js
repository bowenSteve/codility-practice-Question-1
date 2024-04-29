function solution(S) {
    const lowercasedS = S.map(s => s.toLowerCase());
    const N = lowercasedS.length;
    const M = lowercasedS[1].length;
    const output = []; //empty array stores the returned indexe


    for (let i = 0; i < M; i++) { //iterates over each position of the string
        for (let j = 0; j < N; j++) {//iterates over each pair of strings
            for (let k = j + 1; k < N; k++) {//iterates over all the items in the array
                if (S[j][i] === S[k][i]) {
                    output.push([j, k, i]);
                    console.log([j][i])
                }
            }
        }
    }

    return output;
}

const S = ["abc", "bca", "dbe"];
console.log(solution(S));
