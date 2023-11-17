// typ/interfejs AnalyzeResult, który będzie zawierał:
// wartość wejściową jako string
// informację o ilości znaków w stringu jako number
// informację czy ilość znaków jest liczbą parzystą czy nie jako boolean

interface AnalyzeResult  {
    inputString:string;
    stringLength: number;
    isLengthEven: boolean;
}

const analyzeString = (value?: string): AnalyzeResult | string => {
    if (!value) {
        return 'Błąd'
    }
    return { 
        inputString: value,
        stringLength: value.length,
        isLengthEven: value.length % 2 === 0,
    }
}

console.log(analyzeString('Szymon'));


const printAnalyzeResult = (value: AnalyzeResult | string): void => {
    if (typeof value === 'string') {
        console.log(value);
     }
    else {
    const {inputString, stringLength, isLengthEven} = value;
    console.log(`Wynik funkcji printAnalyzeResult; ${inputString} ${stringLength} ${isLengthEven}`);
}
    
}

printAnalyzeResult(analyzeString('Adam'));