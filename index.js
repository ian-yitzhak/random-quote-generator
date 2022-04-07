//define quotes using arrays
var quotes = [

'Greater love has no one than this: to lay down ones life for ones friends - John 15:13',
'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us - Ephesians 3:20',
'Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you - Deuteronomy 31:6',
'What, then, shall we say in response to these things? If God is for us, who can be against us? - Romans 8:31',
'Be strong, and let your heart take courage, all you who wait for the LORD - Psalm 31:24',
'Jesus looked at them and said, ‘With man it is impossible, but not with God. For all things are possible with God - Mark 10:27',
'Casting all your anxieties on him, because he cares for you- 1 Peter 5:7',
'But Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible - Matthew 19:26',
'Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love - 1 Corinthians 16:13-14',
'Our faith can move mountains - Matthews 17:20',
'Give thanks to the LORD for He is good: His love endures forever - Psalm 107:1',
'And we know that in all things God works for the good of those who love him, who have been called according to his purpose - Romans 8:28'


]

// define a function to generate quote 
function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
//get the quote length
console.log(quotes.length)
