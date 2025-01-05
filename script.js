const textColors = [
    "#F59E0B", // Amber-600 (starting point)
    "#1E40AF", // Blue-900
    "#DC2626", // Red-600
    "#16A34A", // Green-600
    "#9333EA", // Purple-600
    "#EAB308", // Yellow-500
    "#0EA5E9", // Sky-500
    "#EA580C", // Orange-600
    "#3B82F6", // Blue-500
    "#F43F5E", // Rose-500
    "#4ADE80", // Lime-400
    "#EC4899", // Pink-500
    "#8B5CF6", // Violet-500
    "#64748B", // Slate-500
    "#34D399", // Emerald-400
    "#F87171", // Red-400
    "#22D3EE", // Cyan-400
    "#FACC15", // Amber-400
    "#818CF8", // Indigo-400
    "#A855F7", // Purple-500
  ];

  const backgroundColors = [
    "#1E293B", // Slate-900
    "#2D3748", // Gray-800
    "#4A5568", // Gray-600
    "#D1D5DB", // Cool Gray-300
    "#E2E8F0", // Cool Gray-100
    "#F9FAFB", // White
    "#374151", // Warm Gray-600
    "#475569", // Blue Gray-600
    "#F43F5E", // Rose-500
    "#FB7185", // Rose-400
    "#EC4899", // Pink-500
    "#FBCFE8", // Pink-300
    "#8B5CF6", // Violet-500
    "#DDD6FE", // Violet-300
    "#6366F1", // Indigo-500
    "#C7D2FE", // Indigo-300
    "#10B981", // Green-500
    "#86EFAC", // Green-300
    "#F59E0B", // Amber-500
    "#FDE68A", // Amber-300
  ];
  

const quizData = {
    Bollywood: [
        { question: "Who is known as the 'King of Bollywood'?", options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Hrithik Roshan"], answer: "Shah Rukh Khan" },
        { question: "Which Bollywood film was India's official entry to the 2019 Academy Awards?", options: ["Gully Boy", "Lagaan", "Dangal", "Secret Superstar"], answer: "Gully Boy" },
        { question: "Who played the role of 'Munnabhai' in the film 'Munnabhai MBBS'?", options: ["Salman Khan", "Aamir Khan", "Rajkummar Rao", "Sanjay Dutt"], answer: "Sanjay Dutt" },
        { question: "Which Bollywood movie has the song 'Tum Hi Ho'?", options: ["Aashiqui 2", "Dilwale", "Kabir Singh", "Tamasha"], answer: "Aashiqui 2" },
        { question: "Who directed the movie '3 Idiots'?", options: ["Rajkumar Hirani", "Karan Johar", "Sanjay Leela Bhansali", "Aditya Chopra"], answer: "Rajkumar Hirani" },
        { question: "Which actress starred in the film 'Piku'?", options: ["Katrina Kaif", "Deepika Padukone", "Kareena Kapoor", "Priyanka Chopra"], answer: "Deepika Padukone" },
        { question: "Which Bollywood movie was based on the life of Indian cricketer M.S. Dhoni?", options: ["Lagaan", "MS Dhoni: The Untold Story", "Dangal", "Chhichhore"], answer: "MS Dhoni: The Untold Story" },
        { question: "In which movie did Amitabh Bachchan play a double role?", options: ["Sholay", "Don", "Silsila", "Amar Akbar Anthony"], answer: "Don" },
        { question: "Which Bollywood movie features the song 'Jai Ho'?", options: ["Dabangg", "Slumdog Millionaire", "Chakde! India", "Dil Se"], answer: "Slumdog Millionaire" },
        { question: "Who was the first female Bollywood actress to win a National Film Award?", options: ["Shabana Azmi", "Nargis", "Madhuri Dixit", "Kangana Ranaut"], answer: "Nargis" },
        { question: "Which Bollywood film is based on the 2008 Mumbai attacks?", options: ["Taj Mahal", "Black Friday", "The Attacks of 26/11", "Phantom"], answer: "The Attacks of 26/11" },
        { question: "Who played the role of 'Bajirao' in the movie 'Bajirao Mastani'?", options: ["Ranveer Singh", "Salman Khan", "Aamir Khan", "Hrithik Roshan"], answer: "Ranveer Singh" },
        { question: "Which Bollywood movie is based on the life of wrestler Mahavir Singh Phogat?", options: ["Lagaan", "Dangal", "Bhaag Milkha Bhaag", "Chhichhore"], answer: "Dangal" },
        { question: "Which actress played the role of 'Geet' in 'Jab We Met'?", options: ["Kareena Kapoor", "Priyanka Chopra", "Katrina Kaif", "Anushka Sharma"], answer: "Kareena Kapoor" },
        { question: "Which Bollywood film has the song 'Tum Jo Aaye'?", options: ["Barfi", "Once Upon a Time in Mumbaai", "Ajab Prem Ki Ghazab Kahani", "Veer-Zaara"], answer: "Once Upon a Time in Mumbaai" },
        { question: "Which Bollywood actor is known for his role in 'The Lunchbox'?", options: ["Irrfan Khan", "Shah Rukh Khan", "Ranbir Kapoor", "Farhan Akhtar"], answer: "Irrfan Khan" },
        { question: "In which movie did Salman Khan play the role of a spy?", options: ["Kick", "Race 3", "Bajrangi Bhaijaan", "Ek Tha Tiger"], answer: "Ek Tha Tiger" },
        { question: "Who is the female lead in the movie 'Chandni'?", options: ["Sridevi", "Madhuri Dixit", "Kareena Kapoor", "Rani Mukerji"], answer: "Sridevi" },
        { question: "Which Bollywood movie features the song 'Chaiyya Chaiyya'?", options: ["Dil Se", "Kabhi Khushi Kabhie Gham", "Om Shanti Om", "Kabir Singh"], answer: "Dil Se" },
        { question: "Which actor played the role of 'Shaktimaan' in the popular 90s TV series?", options: ["Mukesh Khanna", "Shahrukh Khan", "Salman Khan", "Amitabh Bachchan"], answer: "Mukesh Khanna" },
        { question: "Which Bollywood actor is known as the 'Perfectionist'?", options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Akshay Kumar"], answer: "Aamir Khan" },
        { question: "Which film did Priyanka Chopra win the Filmfare Award for Best Actress?", options: ["Bajirao Mastani", "Mary Kom", "Barfi", "Don"], answer: "Mary Kom" },
        { question: "Who played the role of 'Mithaiwala' in the movie 'Pyaar Ka Punchnama'?", options: ["Kartik Aaryan", "Ayushmann Khurrana", "Vicky Kaushal", "Rajkummar Rao"], answer: "Kartik Aaryan" },
        { question: "In which movie did Akshay Kumar play a double role?", options: ["Hera Pheri", "Khatta Meetha", "Phir Hera Pheri", "Housefull"], answer: "Phir Hera Pheri" },
        { question: "Which Bollywood actress won the Miss Universe title in 2000?", options: ["Sushmita Sen", "Aishwarya Rai", "Lara Dutta", "Priyanka Chopra"], answer: "Lara Dutta" },
        { question: "Which Bollywood film features the song 'Kal Ho Naa Ho'?", options: ["Kabhi Alvida Naa Kehna", "Kabhi Khushi Kabhie Gham", "Kal Ho Naa Ho", "Dilwale Dulhania Le Jayenge"], answer: "Kal Ho Naa Ho" }
    ],
    History: [
        { question: "Who was the first Emperor of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Kautilya"], answer: "Chandragupta Maurya" },
        { question: "Who was the first woman Prime Minister of India?", options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"], answer: "Indira Gandhi" },
        { question: "What was the main reason for the revolt of 1857 in India?", options: ["Religious discrimination", "Economic issues", "Cultural repression", "Sepoy mutiny"], answer: "Sepoy mutiny" },
        { question: "Who was the first ruler to adopt the title of 'Shah of India'?", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], answer: "Akbar" },
        { question: "What year did India gain independence from British rule?", options: ["1945", "1947", "1950", "1946"], answer: "1947" },
        { question: "Who was the first Indian to win a Nobel Prize?", options: ["Rabindranath Tagore", "C.V. Raman", "Subhas Chandra Bose", "Homi J. Bhabha"], answer: "Rabindranath Tagore" },
        { question: "Which was the first battle fought between the British and the Marathas?", options: ["Battle of Plassey", "Battle of Buxar", "Third Battle of Panipat", "Battle of Wandiwash"], answer: "Battle of Plassey" },
        { question: "Who was the last Governor-General of independent India?", options: ["Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad", "Jawaharlal Nehru"], answer: "C. Rajagopalachari" },
        { question: "Which Indian ruler is credited with the construction of the Qutb Minar?", options: ["Shah Jahan", "Qutb-ud-Din Aibak", "Akbar", "Aurangzeb"], answer: "Qutb-ud-Din Aibak" },
        { question: "Who wrote the Indian national song 'Vande Mataram'?", options: ["Subramania Bharati", "Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu"], answer: "Bankim Chandra Chatterjee" },
        { question: "Who led the Salt March in 1930?", options: ["Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"], answer: "Mahatma Gandhi" },
        { question: "In which year was the Indian Constitution adopted?", options: ["1947", "1950", "1949", "1952"], answer: "1950" },
        { question: "Which famous Indian leader is known as the 'Iron Man of India'?", options: ["Lal Bahadur Shastri", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Mahatma Gandhi"], answer: "Sardar Vallabhbhai Patel" },
        { question: "Which movement did Mahatma Gandhi launch in 1942?", options: ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Salt March"], answer: "Quit India Movement" },
        { question: "Who was the first Sultan of Delhi?", options: ["Qutb-ud-Din Aibak", "Iltutmish", "Balban", "Sikandar Lodi"], answer: "Qutb-ud-Din Aibak" },
        { question: "Who was the founder of the Gupta Empire?", options: ["Chandragupta Maurya", "Samudragupta", "Ashoka", "Chandragupta I"], answer: "Chandragupta I" }
    ],
    Sports: [
        { question: "Which country won the FIFA World Cup in 2018?", options: ["Germany", "Brazil", "France", "Argentina"], answer: "France" },
        { question: "Who holds the record for the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"], answer: "Michael Phelps" },
        { question: "In which sport would you perform a slam dunk?", options: ["Basketball", "Football", "Baseball", "Tennis"], answer: "Basketball" },
        { question: "Which country is known for the sport of sumo wrestling?", options: ["China", "Japan", "India", "Korea"], answer: "Japan" },
        { question: "Who is the fastest man in the world?", options: ["Tyson Gay", "Usain Bolt", "Yohan Blake", "Michael Johnson"], answer: "Usain Bolt" },
        { question: "Which team won the 2021 UEFA Champions League?", options: ["Manchester City", "Chelsea", "Bayern Munich", "Liverpool"], answer: "Chelsea" },
        { question: "Who has scored the most goals in World Cup history?", options: ["Pele", "Cristiano Ronaldo", "Marta", "Miroslav Klose"], answer: "Miroslav Klose" },
        { question: "What is the maximum break in snooker?", options: ["147", "155", "160", "148"], answer: "147" },
        { question: "Which country invented the sport of cricket?", options: ["India", "Australia", "England", "Pakistan"], answer: "England" },
        { question: "Which city hosted the 2016 Summer Olympics?", options: ["London", "Beijing", "Rio de Janeiro", "Tokyo"], answer: "Rio de Janeiro" },
        { question: "Which sport is known as 'The King of Sports'?", options: ["Football", "Cricket", "Basketball", "Tennis"], answer: "Football" },
        { question: "Who won the 2019 Wimbledon Men's Singles title?", options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andy Murray"], answer: "Novak Djokovic" },
        { question: "What is the diameter of a basketball hoop?", options: ["18 inches", "16 inches", "22 inches", "20 inches"], answer: "18 inches" },
        { question: "Who is the only player to have won the Ballon d'Or five times?", options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Zlatan Ibrahimovic"], answer: "Cristiano Ronaldo" },
        { question: "Which country won the most gold medals in the 2008 Summer Olympics?", options: ["USA", "China", "Russia", "Germany"], answer: "China" },
        { question: "What sport uses the terms 'birdie' and 'eagle'?", options: ["Baseball", "Golf", "Tennis", "Football"], answer: "Golf" },
        { question: "Who was the first woman to win an Olympic gold medal?", options: ["Mary Lou Retton", "Mia Hamm", "Charlotte Cooper", "Serena Williams"], answer: "Charlotte Cooper" },
        { question: "Which country is known for the sport of rugby?", options: ["New Zealand", "South Africa", "Australia", "England"], answer: "New Zealand" },
        { question: "In which sport would you perform a 'spike'?", options: ["Basketball", "Tennis", "Volleyball", "Football"], answer: "Volleyball" },
        { question: "Which sport is played at the Winter Olympics but not at the Summer Olympics?", options: ["Football", "Curling", "Cricket", "Baseball"], answer: "Curling" },
        { question: "Who won the 2019 ICC Cricket World Cup?", options: ["India", "Australia", "England", "New Zealand"], answer: "England" },
        { question: "Which city is home to the famous baseball team, the Yankees?", options: ["Chicago", "Los Angeles", "New York", "Boston"], answer: "New York" },
        { question: "Who holds the record for the most goals in the history of football?", options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Zlatan Ibrahimovic"], answer: "Cristiano Ronaldo" },
        { question: "Which country is famous for the sport of ice hockey?", options: ["Russia", "Canada", "Sweden", "Finland"], answer: "Canada" },
        { question: "Who won the 2020 Formula 1 World Championship?", options: ["Lewis Hamilton", "Sebastian Vettel", "Max Verstappen", "Valtteri Bottas"], answer: "Lewis Hamilton" },
        { question: "Which sport involves the use of a shuttlecock?", options: ["Badminton", "Tennis", "Cricket", "Table Tennis"], answer: "Badminton" },
        { question: "Who is known as the 'Sprint Queen'?", options: ["Allyson Felix", "Shelly-Ann Fraser-Pryce", "Florence Griffith Joyner", "Marie-José Pérec"], answer: "Florence Griffith Joyner" },
        { question: "Which country hosted the 2000 Summer Olympics?", options: ["Australia", "China", "Greece", "USA"], answer: "Australia" },
        { question: "Which country won the first ever FIFA World Cup in 1930?", options: ["Brazil", "Germany", "Italy", "Uruguay"], answer: "Uruguay" },
        { question: "Which famous tennis player is known for his rivalry with Roger Federer?", options: ["Rafael Nadal", "Novak Djokovic", "Andy Murray", "Pete Sampras"], answer: "Rafael Nadal" },
        { question: "In tennis, what piece of fruit is found at the top of the trophy awarded to the winner of the US Open?", options: ["Orange", "Apple", "Pineapple", "Banana"], answer: "Pineapple" },
        { question: "Which NBA player is known as 'King James'?", options: ["Kobe Bryant", "LeBron James", "Michael Jordan", "Shaquille O'Neal"], answer: "LeBron James" },
        { question: "Which country is known for the sport of ice skating?", options: ["USA", "Russia", "Canada", "Finland"], answer: "Russia" },
        { question: "Which country has the most World Cup titles in football?", options: ["Brazil", "Germany", "Italy", "Argentina"], answer: "Brazil" },
        { question: "Who was the first gymnast to score a perfect 10 in the Olympics?", options: ["Nadia Comăneci", "Mary Lou Retton", "Simone Biles", "Gabby Douglas"], answer: "Nadia Comăneci" },
        { question: "What type of animal is used in the sport of polo?", options: ["Horse", "Elephant", "Dog", "Camel"], answer: "Horse" },
        { question: "Which city is home to the famous football club, Barcelona?", options: ["Madrid", "Paris", "Rome", "Barcelona"], answer: "Barcelona" },
        { question: "Who won the 2020 NBA Championship?", options: ["Miami Heat", "Los Angeles Lakers", "Toronto Raptors", "Golden State Warriors"], answer: "Los Angeles Lakers" },
        { question: "Which sport is known as 'The Beautiful Game'?", options: ["Football", "Tennis", "Cricket", "Basketball"], answer: "Football" }
    ],
    Science: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], answer: "H2O" },
        { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: "Mitochondria" },
        { question: "What gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
        { question: "What is the atomic number of carbon?", options: ["6", "8", "12", "14"], answer: "6" },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
        { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Max Planck", "Galileo Galilei"], answer: "Albert Einstein" },
        { question: "What is the most common gas in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
        { question: "What is the center of an atom called?", options: ["Proton", "Neutron", "Electron", "Nucleus"], answer: "Nucleus" },
        { question: "Which organ in the human body is responsible for pumping blood?", options: ["Brain", "Heart", "Liver", "Kidneys"], answer: "Heart" },
        { question: "Which element is represented by the symbol 'Na'?", options: ["Sodium", "Neon", "Nitrogen", "Nickel"], answer: "Sodium" },
        { question: "Which planet has the most moons?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: "Saturn" },
        { question: "What is the longest bone in the human body?", options: ["Femur", "Humerus", "Tibia", "Radius"], answer: "Femur" },
        { question: "Which part of the plant is responsible for photosynthesis?", options: ["Roots", "Stem", "Leaf", "Flower"], answer: "Leaf" },
        { question: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Carbon Dioxide" },
        { question: "What is the chemical formula for methane?", options: ["CH4", "CO2", "C6H12O6", "H2O"], answer: "CH4" },
        { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
        { question: "Who discovered penicillin?", options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Edward Jenner"], answer: "Alexander Fleming" },
        { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "I", "In"], answer: "Fe" },
        { question: "What is the largest organ in the human body?", options: ["Brain", "Heart", "Skin", "Liver"], answer: "Skin" },
        { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
        { question: "What type of bond holds the atoms in a molecule of water together?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: "Covalent bond" },
        { question: "What is the most abundant element in the universe?", options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], answer: "Hydrogen" },
        { question: "Which metal is liquid at room temperature?", options: ["Mercury", "Lead", "Copper", "Iron"], answer: "Mercury" },
        { question: "Who is credited with the discovery of the electron?", options: ["Isaac Newton", "Albert Einstein", "J.J. Thomson", "Niels Bohr"], answer: "J.J. Thomson" },
        { question: "What is the freezing point of water in Celsius?", options: ["0°C", "100°C", "-273°C", "32°F"], answer: "0°C" },
        { question: "What is the study of fungi called?", options: ["Botany", "Zoology", "Mycology", "Entomology"], answer: "Mycology" }
    ]
};


const first = document.getElementById('first');

first.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formdata = new FormData(first);

    const qno = Number(document.getElementById('qno').value);

    let categ;
    formdata.forEach((value, key)=>{
        categ = value;
    })

    
    // console.log(categ, qno)

    const array = new Array(...quizData[categ]);

    setInterval(()=>{
        document.querySelector('body').style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length-1)];
        document.getElementById('txt').style.color = textColors[Math.floor(Math.random()*textColors.length-1)]
    },4000);


    function getQuestion(){
        // const data = new Set();

        // while(data.size!=qno){
        //     let index = Math.floor(Math.random()*array.length);
        //     data.add(array[index]);
        // }

        let data = [];

        let length = array.length;

        for(let i = 0; i<qno; i++){
            let index = Math.floor(Math.random()*length);
            data.push(array[index]);
            let temp = array[index];
            array[index] = array[length-1];
            array[length-1] = temp;
        }

        return[...data];
    }

    const finalQuestion = getQuestion();
    // console.log(finalQuestion);

    let answers={};


    const form = document.getElementById('form');
    first.style.display = 'none';
    form.style.display = 'flex';
    form.id = 'show';

    finalQuestion.forEach((item ,index) => {
        const div = document.createElement('div');
        const para = document.createElement('p');

        answers[`q${index+1}`] = item.answer;

        para.innerHTML = `Q${index+1}. ${item.question}`;
        div.appendChild(para);

        item.options.forEach((option, ind) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
        
            input.type = 'radio';
            input.name = `q${index + 1}`;
            input.value = option;
        
            label.appendChild(input);
            label.appendChild(document.createTextNode(option)); // Properly append the text node
            div.appendChild(label);
            div.appendChild(document.createElement('br'));
        });
        

        form.appendChild(div);
        
    });

    // console.log(answers)

   const second = document.getElementById('second');

   second.addEventListener('submit', (event)=>{

    event.preventDefault();

    const submit = document.getElementById('sbmt');
    let ans = 0;

    const finalData = new FormData(second);

    console.log(answers);

    for(let [key, value] of finalData.entries()){
        console.log(key, value);
        if(answers[key] == value)
            ans++;
    }

    const result = document.getElementById('result');
    form.style.display = 'none';
    result.innerHTML = `your score is ${ans} out of ${qno}`
    result.style.display = 'inline-block';
    result.id = 'show';
    // console.log();
    });


});




