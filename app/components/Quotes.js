const randomQuote = () => {
  const quotesArray = [
    'A wise man should have money in his head, but not in his heart. \n\n- Jonathan Swift',

    'Wealth is the ability to fully experience life. \n\n- Henry David Thoreau',

    'Money has never made man happy, nor will it, there is nothing in its nature to produce happiness. The more of it one has the more one wants. \n\n- Benjamin Franklin',

    'Money won\'t create success, the freedom to make it will. \n\n- Nelson Mandela',

    'A little thought and a little kindness are often worth more than a great deal of money. \n\n- John Ruskin',

    'If saving money is wrong, I don\'t want to be right! \n\n- William Shatner',

    'A penny saved is a penny earned. \n\n- Benjamin Franklin',

    'The lack of money is the root of all evil. \n\n- Mark Twain',

    'A bank is a place that will lend you money if you can prove that you don\'t need it. \n\n- Bob Hope',

    'When I was young I thought that money was the most important thing in life; now that I am old I know that it is. \n\n- Oscar Wilde',

    'I am happy to make money. I want to make more money, make more music, eat Big Macs and drink Budweisers. \n\n- Kid Rock',

    'Money is to my social existence what health is to my body. \n\n- Mason Cooley',

    'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. \n\n- Ayn Rand',

    'There is a gigantic difference between earning a great deal of money and being rich. \n\n- Marlene Dietrich',

    'Money is better than poverty, if only for financial reasons. \n\n- Woody Allen',

    'A good reputation is more valuable than money. \n\n- Publilius Syrus',

    'Money cannot buy peace of mind. It cannot heal ruptured relationships, or build meaning into a life that has none. \n\n- Richard M. DeVos',

    'Money makes your life easier. If you\'re lucky to have it, you\'re lucky. \n\n- Robert De Niro',

    'Where large sums of money are concerned, it is advisable to trust nobody. \n\n- Agatha Christie',

    'The safe way to double your money is to fold it over once and put it in your pocket. \n\n- Kin Hubbard',

    'Here\'s how I think of my money - as soldiers - I send them out to war everyday. I want them to take prisoners and come home, so there\'s more of them. \n\n- Kevin O\'Leary',

    'The importance of money flows from it being a link between the present and the future. \n\n- John Maynard Keynes',

    'Sometimes your best investments are the ones you don\'t make. \n\n- Donald Trump',

    'A rich man is nothing but a poor man with money. \n\n- W. C. Fields',

    'So you think that money is the root of all evil. Have you ever asked what is the root of all money? \n\n- Ayn Rand',

    'Do what you love and the money will follow. \n\n- Marsha Sinetar',

    'If I have enough money to eat I\'m good. \n\n- Shia LaBeouf',

    'Friendship is like money, easier made than kept. \n\n- Samuel Butler',
  ];
  const item = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  return item;
};

export default randomQuote;
