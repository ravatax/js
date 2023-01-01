var courses = [{
        image: './images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: './images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: './images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: './images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: './images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: './images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: './images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: './images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: './images/cssColors.png',
        title: 'css colors',
        category: 'css',
        price: 29.9
    },
    {
        image: './images/phpBasics.png',
        title: 'getting started with php',
        category: 'php',
        price: 15.9
    },
    {
        image: './images/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: './images/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'php',
        price: 45.9
    },
    {
        image: './images/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    },
    {
        image: './images/javascriptDOM.png',
        title: 'Groupe3',
        category: 'G3',
        price: 10
    }
];
/*
const filters = {
    keyword: "",
    category: "all",
    price: ""
};*/

var content = document.querySelector('.courses');


function creationCours(path, title, price) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = path;
    img.setAttribute('class', 'card-img');
    let contenu = document.createTextNode(title);
    p.appendChild(contenu);
    p.setAttribute('class', 'card-tilte');
    let contenu2 = document.createTextNode(price);
    span.appendChild(contenu2);
    span.setAttribute('class', 'card-text')
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content.append(div)
}

courses.forEach(function(element) {
        creationCours(element.image, element.title, element.price);
    })
    /*
    function displayCourses() {
        coursesContainer.innerHTML = "";
        const filteredCourses = getFilteredCourses();
        filteredCourses.forEach((course) => {
            const courseElement = document.createElement("div");
            courseElement.classList.add("course");
            courseElement.innerHTML = `
            <img src="${course.image}" alt="${course.name}">
            <h3>${course.name}</h3>
            <span class="price">${course.price}</span>
          `;
            coursesContainer.appendChild(courseElement);
        });
    }

    // Affiche les cours lorsque les filtres sont modifiés
    document.getElementById("filter").addEventListener("click", (event) => {
        event.preventDefault();
        filters.keyword = document.getElementById("keyword").value;
        filters.category = document.getElementById("category").value;
        filters.price = document.getElementById("price").value;
        displayCourses();
    });

    displayCourses();
    */