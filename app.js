console.log('hello');

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

    const nounInput1 = document.getElementById('nounInput1');
    const nounOutput1 = nounInput1.value;
    noun1.textContent = nounOutput1;

    const pluralNounInput1 = document.getElementById('pluralNounInput1');
    const pluralNounOutput1 = pluralNounInput1.value;
    pluralNoun1.textContent = pluralNounOutput1;

    const pluralNounInput2 = document.getElementById('pluralNounInput2');
    const pluralNounOutput2 = pluralNounInput2.value;
    pluralNoun2.textContent = pluralNounOutput2;

    const pluralNounInput3 = document.getElementById('pluralNounInput3');
    const pluralNounOutput3 = pluralNounInput3.value;
    pluralNoun3.textContent = pluralNounOutput3;

    const pluralNounInput4 = document.getElementById('pluralNounInput4');
    const pluralNounOutput4 = pluralNounInput4.value;
    pluralNoun4.textContent = pluralNounOutput4;

    const verbInput = document.getElementById('verbInput');
    const verbOutput = verbInput.value;
    verb.textContent = verbOutput;

    const ingVerbInput = document.getElementById('ingVerbInput');
    const ingVerbOutput = ingVerbInput.value;
    ingVerb.textContent = ingVerbOutput;
}