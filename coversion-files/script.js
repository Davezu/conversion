const display = () => {
    const convert = document.querySelector('#btnclick');
    const ans = document.querySelector('#answ');

    const num ={
        one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, twenty:20, 
        thirty:30, forty:40, fifty:50, sixty:60, seventy:70, eighty:80, ninety:90, hundred:100, 
        thousand:1000, million:1000000
    };
    convert.addEventListener('click', () => {
        let input = document.querySelector('#words').value.toLowerCase();

        if(!input){
            ans.innerHTML = "Enter a number"
            return;
        }

        let part = input.split(' ')
        let total = 0, temp = 0;

        for(let word of part){
            if (word === "hundred") {
                temp *= 100;
            } else if (num[word] >= 100) { 
                total += temp;
                total *= num[word];
                temp = 0;
            } else {
                temp += num[word];
            }

            if (word === "thousand" || word === "million"){
                total += temp;
                temp = 0;
            }
        }
        total += temp;
        ans.innerHTML = `Result: ${total}`;
    });
};
display();
