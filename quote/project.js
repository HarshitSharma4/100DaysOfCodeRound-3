let qoute=document.querySelector('.qoute');
let person=document.querySelector('.person');
let newQoute=document.querySelector('.new-qoute');


const qoutesCollection=[{
    qoute: `“All powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.”`,
    person: `Swami Vivekananda`
},{
    qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst”`,
    person: `Marilyn Monroe `
},{
    qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” `,
    person: `Albert `
},{
    qoute: `"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma , which is living with the results of other people’s thinking." `,
    person: `Steve Jobs `
},{
    qoute: `"When we do the best we can, we never know what miracle is wrought in our life or the life of another."  `,
    person: `Helen Keller `
},{
    qoute: ` "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." `,
    person: ` Buddha `
},{
    qoute: `“"In a day, when you don’t come across any problems – you can be sure that you are traveling the wrong path"`,
    person: `Swami Vivekananda`
}];


newQoute.addEventListener('click',()=>{
    let randomquote=Math.floor(Math.random()*qoutesCollection.length);
    qoute.innerText=qoutesCollection[randomquote].qoute;
    person.innerText=qoutesCollection[randomquote].person;

})