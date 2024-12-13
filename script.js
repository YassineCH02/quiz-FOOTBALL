const quizDataCinema = [
    {
        question: "Quel film a remporté l’Oscar du meilleur film en 1994 ?",
        options: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Quiz Show"],
        correct: "Forrest Gump",
        image: "images/forrest_gump.jpg"
    },
    {
        question: "Quel réalisateur a créé la trilogie “Le Seigneur des Anneaux” ?",
        options: ["Peter Jackson", "James Cameron", "Ridley Scott", "Steven Spielberg"],
        correct: "Peter Jackson",
        image: "images/lotr.jpg"
    },
    {
        question: "Dans quel film Leonardo DiCaprio a-t-il finalement remporté l’Oscar du meilleur acteur ?",
        options: ["Titanic", "Inception", "The Revenant", "Shutter Island"],
        correct: "The Revenant",
        image: "images/the_revenant.jpg"
    },
    {
        question: "Quel film d’animation Pixar a pour héros un rat cuisinier ?",
        options: ["Ratatouille", "WALL-E", "Coco", "Le Monde de Nemo"],
        correct: "Ratatouille",
        image: "images/ratatouille.jpg"
    },
    {
        question: "Quel film de Christopher Nolan raconte l’histoire de rêveurs et de voleurs de pensées ?",
        options: ["Inception", "Dunkerque", "Interstellar", "Tenet"],
        correct: "Inception",
        image: "images/inception.jpg"
    },
    {
        question: "Quel film français a remporté l’Oscar du meilleur film en 2012 ?",
        options: ["Intouchables", "The Artist", "Amélie", "La Vie d’Adèle"],
        correct: "The Artist",
        image: "images/the_artist.jpg"
    },
    {
        question: "Dans quel film dystopique Katniss Everdeen est-elle l’héroïne principale ?",
        options: ["Divergente", "Hunger Games", "Le Labyrinthe", "Blade Runner 2049"],
        correct: "Hunger Games",
        image: "images/hunger_games.jpg"
    },
    {
        question: "Quel est le premier film du Marvel Cinematic Universe ?",
        options: ["Captain America: First Avenger", "Iron Man", "Thor", "L’Incroyable Hulk"],
        correct: "Iron Man",
        image: "images/iron_man.jpg"
    },
    {
        question: "Dans quel film voit-on une bataille épique sur Wakanda ?",
        options: ["Avengers: Infinity War", "Black Panther", "Doctor Strange", "Spider-Man: No Way Home"],
        correct: "Avengers: Infinity War",
        image: "images/infinity_war.jpg"
    },
    {
        question: "Qui a réalisé Titanic et Avatar ?",
        options: ["Steven Spielberg", "Ridley Scott", "James Cameron", "George Lucas"],
        correct: "James Cameron",
        image: "images/james_cameron.jpg"
    },
    {
        question: "Quel film raconte l’histoire vraie d’un mathématicien atteint de schizophrénie ?",
        options: ["Good Will Hunting", "A Beautiful Mind", "The Imitation Game", "Le Discours d’un roi"],
        correct: "A Beautiful Mind",
        image: "images/beautiful_mind.jpg"
    },
    {
        question: "Dans quel film Al Pacino joue-t-il un baron de la drogue nommé Tony Montana ?",
        options: ["The Godfather", "Scarface", "Heat", "Serpico"],
        correct: "Scarface",
        image: "images/scarface.jpg"
    },
    {
        question: "Quel film raconte la survie d’un homme coincé sur Mars ?",
        options: ["Gravity", "Interstellar", "The Martian", "Ad Astra"],
        correct: "The Martian",
        image: "images/the_martian.jpg"
    },
    {
        question: "Quel film a pour réplique culte : 'Hasta la vista, baby' ?",
        options: ["Terminator", "Terminator 2: Le Jugement dernier", "Predator", "RoboCop"],
        correct: "Terminator 2: Le Jugement dernier",
        image: "images/terminator2.jpg"
    },
    {
        question: "Dans quel film Keanu Reeves incarne-t-il un hacker qui découvre une réalité alternative ?",
        options: ["John Wick", "The Matrix", "Speed", "Constantine"],
        correct: "The Matrix",
        image: "images/the_matrix.jpg"
    },
    {
        question: "Quel film a été le plus gros succès mondial de 1997 ?",
        options: ["Titanic", "Men in Black", "Jurassic Park", "Independence Day"],
        correct: "Titanic",
        image: "images/titanic.jpg"
    },
    {
        question: "Quel film réalisé par Quentin Tarantino met en scène un groupe de gangsters après un braquage raté ?",
        options: ["Pulp Fiction", "Inglourious Basterds", "Reservoir Dogs", "Django Unchained"],
        correct: "Reservoir Dogs",
        image: "images/reservoir_dogs.jpg"
    },
    {
        question: "Dans quel film une intelligence artificielle nommée HAL 9000 joue un rôle important ?",
        options: ["Blade Runner", "2001: L’Odyssée de l’espace", "Ex Machina", "Her"],
        correct: "2001: L’Odyssée de l’espace",
        image: "images/2001_space_odyssey.jpg"
    },
    {
        question: "Quel film d’animation Disney raconte l’histoire d’une princesse au pouvoir de glace ?",
        options: ["Raiponce", "La Reine des Neiges", "Vaiana", "Encanto"],
        correct: "La Reine des Neiges",
        image: "images/frozen.jpg"
    },
    {
        question: "Quel film de 2008 réalisé par Christopher Nolan met en scène le Joker joué par Heath Ledger ?",
        options: ["Batman Begins", "The Dark Knight", "The Dark Knight Rises", "Joker"],
        correct: "The Dark Knight",
        image: "images/dark_knight.jpg"
    }
];

let currentQuestionCinema = 0;
let scoreCinema = 0;

function updateProgressCinema() {
    const progressElement = document.getElementById("progress-cinema");
    progressElement.textContent = `Question ${currentQuestionCinema + 1} sur ${quizDataCinema.length}`;
}

function loadQuestionCinema() {
    const quizContent = document.getElementById("quiz-content-cinema");
    quizContent.innerHTML = "";

    if (currentQuestionCinema < quizDataCinema.length) {
        updateProgressCinema();
        const q = quizDataCinema[currentQuestionCinema];

        const questionText = document.createElement("p");
        questionText.textContent = `${currentQuestionCinema + 1}. ${q.question}`;
        quizContent.appendChild(questionText);

        if (q.image) {
            const questionImage = document.createElement("img");
            questionImage.src = q.image;
            questionImage.alt = `Image de la question ${currentQuestionCinema + 1}`;
            questionImage.classList.add("question-image");
            quizContent.appendChild(questionImage);
        }

        q.options.forEach(option => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${currentQuestionCinema}`;
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            quizContent.appendChild(label);
            quizContent.appendChild(document.createElement("br"));
        });

        const nextButton = document.createElement("button");
        nextButton.textContent = "Suivant";
        nextButton.addEventListener("click", handleNextCinema);
        quizContent.appendChild(nextButton);
    } else {
        showResultCinema();
    }
}

function handleNextCinema() {
    const answer = document.querySelector(`input[name="question-${currentQuestionCinema}"]:checked`);
    if (answer && answer.value === quizDataCinema[currentQuestionCinema].correct) {
        scoreCinema++;
    }
    currentQuestionCinema++;
    loadQuestionCinema();
}

function showResultCinema() {
    const quizContent = document.getElementById("quiz-content-cinema");
    quizContent.innerHTML = "";

    const percentage = (scoreCinema / quizDataCinema.length) * 100;
    let message = "";
    let imageSrc = "";

    if (percentage === 100) {
        message = "Incroyable ! Vous êtes un véritable expert en cinéma moderne !";
        imageSrc = "images/expert.jpg";
    } else if (percentage >= 80) {
        message = "Excellent ! Vous connaissez très bien le cinéma moderne !";
        imageSrc = "images/excellent.jpg";
    } else if (percentage >= 50) {
        message = "Pas mal, mais vous pouvez faire mieux !";
        imageSrc = "images/bien.jpg";
    } else {
        message = "Vous devriez peut-être revoir vos classiques du cinéma moderne.";
        imageSrc = "images/faible.jpg";
    }

    const resultText = document.createElement("p");
    resultText.textContent = `Vous avez obtenu ${scoreCinema} réponse(s) correcte(s) sur ${quizDataCinema.length} (${percentage.toFixed(0)}%).`;
    quizContent.appendChild(resultText);

    const resultMessage = document.createElement("p");
    resultMessage.textContent = message;
    resultMessage.style.fontSize = "1.2em";
    resultMessage.style.fontWeight = "bold";
    resultMessage.style.marginTop = "20px";
    quizContent.appendChild(resultMessage);

    const resultImage = document.createElement("img");
    resultImage.src = imageSrc;
    resultImage.alt = "Résultat final";
    resultImage.classList.add("result-image");
    quizContent.appendChild(resultImage);
}

loadQuestionCinema();