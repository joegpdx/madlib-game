console.log('hello');

const button = document.getElementById('button');

button.addEventListener('click', () => {
    fillInBlanks();
}


);
function fillInBlanks() {

    const nounInput = // pulling input
        document.getElementById('nounInput'); // tring to listen to whats in noun input
    const nounOutput = // output text to story
        nounInput.value; // tranfering output value or text to the story
    noun.textContent = // refering to the span id ... is line 14
        nounOutput; // what is being displayed in DOM

    const noun1Input = document.getElementById('noun1Input');
    const noun1Output = noun1Input.value;
    noun1.textContent = noun1Output;

    const pluralNoun1Input = document.getElementById('pluralNoun1Input');
    const pluralNoun1Output = pluralNoun1Input.value;
    pluralNoun1.textContent = pluralNoun1Output;

    const pluralNoun2Input = document.getElementById('pluralNoun2Input');
    const pluralNoun2Output = pluralNoun2Input.value;
    pluralNoun2.textContent = pluralNoun2Output;

    const pluralNoun3Input = document.getElementById('pluralNoun3Input');
    const pluralNoun3Output = pluralNoun3Input.value;
    pluralNoun3.textContent = pluralNoun3Output;

    const pluralNoun4Input = document.getElementById('pluralNoun4Input');
    const pluralNoun4Output = pluralNoun4Input.value;
    pluralNoun4.textContent = pluralNoun4Output;

    const verbInput = document.getElementById('verbInput');
    const verbOutput = verbInput.value;
    verb.textContent = verbOutput;

    const ingVerbInput = document.getElementById('ingVerbInput');
    const ingVerbOutput = ingVerbInput.value;
    ingVerb.textContent = ingVerbOutput;
}