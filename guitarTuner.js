function tune( arr ) {

    var correctFrequency = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41]

    let res = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 6; i++) {
        res[i] = Math.round((1 - arr[i]/correctFrequency[i])*100);
    }

    res = res.map(function(num) {
        if (num == 100) {
            return "-";
        } if (num == 0) {
            return "Ok";
        } else if (-2 <= num && num < 0) {
            return "•<";
        } else if (num <= -3) {
            return "•<<";
        } else if (0 < num && num <= 2) {
            return ">•";
        } else if (num >= 3) {
            return ">>•";
        }
    })

    return res;

}