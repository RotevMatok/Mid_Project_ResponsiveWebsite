
const jsonData = 
  {
    "generators": [
        {
            "id": 1,
            "title": "תחושת משמעות ותרומה",
            "img":"ID1.jpg",
            "abstract": "מתנדבים פועלים על ידי תחושה עמוקה של משמעות... ",
            "fullContent": "מתנדבים נדרשים על ידי תחושה עמוקה של משמעות ורצון לתרום לסוג של גורם שהם מאמינים בו. הם מרגישים מילוי מתמשך בידע שמאמציהם מועילים ומשפיעים חיובית על החברה.",
            "cat": "1"
        },
        {
            "id": 2,
            "title": "השתייכות לקהילה",
            "img":"ID2.jpg",
            "abstract": "מתנדבים מרגישים רצון להשתייך פעילותית לקהילתם.",
            "fullContent": "רבים מתנדבים מרגישים רצון להשתייך פעילותית לקהילתם. הם רואים בהתנדבות דרך להתחבר לאחרים שמשתפים עמם ערכים דומים ולבנות תחושת שייכות.",
            "cat": "1"
        },
        {
            "id": 3,
            "title": "אלטרואיזם ונחמדות",
            "img":"ID3.jpg",
            "abstract": "מוטיבציה אלטרואיסטית, מתוך רגשות של רצון אמית לעזור.",
            "fullContent": "מוטיבציה אלטרואיסטית, המתוך רגשות של נחמדות ורצון אמית לעזור, מדריבה אנשים להתנדב. הם מתעניינים בטובתו של אחרים ומוכנים להקדיש זמן ומשאבים לתמיכה במי שזקוק.",
            "cat": "1"
        },
        {
            "id": 4,
            "title": "פיתוח אישי",
            "img":"ID4.jpg",
            "abstract": "מתנדבים מחפשים אפשרויות לצמיחה ופיתוח אישי.",
            "fullContent": "מתנדבים מחפשים אפשרויות לצמיחה ופיתוח אישי. הם יכולים להיות מוטיבים על ידי רצונם לרכוש כישורים חדשים, לשפר ולפתח יכולות, ולהביא ערך לעצמם.",
            "cat": "2"
        },
        {
            "id": 5,
            "title": "בניית יחסים",
            "img":"ID5.jpg",
            "abstract": "התנדבות יכולה להוות פלטפורמה לבניית יחסים משמעותיים.",
            "fullContent": "התנדבות יכולה להוות פלטפורמה לבניית יחסים משמעותיים ולהרחיב את הרשת החברתית של המתנדב. החברות שנוצרת בזמן עבודה משותפת לעיתים קרובות מתפתחת לחיבורים עמוקים.",
            "cat": "2"
        },
        {
            "id": 6,
            "title": "השפעת ערכים ואמונות אישיים",
            "img":"ID6.jpg",
            "abstract": "ערכים ואמונות אישיים של המתנדב ניגשים להתנדב בצורה חיובית..",
            "fullContent": "ערכים ואמונות אישיים של המתנדב ניגשים להתנדב בצורה חיובית. אנשים נוטים להתחבר לארגונים שמשקפים את הערכים והעקרונות שלהם.",
            "cat": "2"
        },
       {
            "id": 7,
            "title": "היכרות והערכה",
            "img":"ID7.jpg",
            "abstract": "תחושה של היכרות והערכה על המשאבים.",
            "fullContent": "תחושה של היכרות והערכה על המשאבים שהמתנדב מעניק מחייבת את המחויבות שלו. ההכרזה וההערכה, בין אם מצד הארגון או מהקהילה, מחזקות את התחייבותו ומעודדות פעילות נוספת.",
            "cat": "3"
        },
       {
            "id": 8,
            "title": "תחושת חובה אזרחית ואחריות",
            "img":"ID8.jpg",
            "abstract": "חלק מהמתנדבים פועלים על ידי אחריות חברתית..",
            "fullContent": "חלק מהמתנדבים נדרשים על ידי תחושת חובה כאזרחים ואחריות חברתית. הם מאמינים בהשפעה הפעילה בחברה ובתרומתם האישית למערכת.",
            "cat": "3"
        },
       {
            "id": 9,
            "title": "השפעה חיובית על השקפת העולם",
            "img":"ID9.jpg",
            "abstract": "פעילות התנדבות מתרחשת ומשמפיע על רוח השקפת העולם של המתנדב...",
            "fullContent": "פעילות התנדבות מתרחשת כמהקף חיוני שמשפיע על רוח השקפת העולם של המתנדב. כאשר הוא רואה את ההשפעה החיובית שהוא מעניק, זה יכול לשדרג את תחושת האושר והרצון האישיים שלו.",
            "cat": "3"
        },
       {
            "id": 10,
            "title": "השראה מדמות מובילות",
            "img":"ID10.jpg",
            "abstract": "דמויות משפיעות או מנחים יכולות להשרות השפעה מכוונת על אנשים להתנדב.",
            "fullContent": "דמויות משפיעות או מנחים יכולות להשרות השפעה מכוונת על אנשים להתנדב. ראות אחרים שיכולים לעשות שינוי חיובי יכולה להניע אנשים לקחת חלק פעיל בפעילות התנדבותית.",
            "cat": "3"
        },



    ]
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems()
});

function createItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.setAttribute("class", "row");

    jsonData.generators.forEach(generator => {

        // generate card container
        const myCard = document.createElement("div");

        myCard.setAttribute("class", "card col-sm-6");

        // generate card title
        const myCardTitle = document.createElement("h5");
        myCardTitle.setAttribute("class", "card-title");
        myCardTitle.innerHTML = ` ${generator.title}`;
        myCardTitle.setAttribute("id", `id_${generator.id}`);
        myCardTitle.addEventListener("mouseover", hoverTopic);
        myCardTitle.addEventListener("mouseout", outTopic);

        // generate image for card
        const myImg = document.createElement("img");
        myImg.setAttribute("src", `img/${generator.img}`);

        // generate card body
        const myCardBody = document.createElement("div");
        myCardBody.setAttribute("class", "card-body");

        // generate abstract
        const abstract = document.createElement("p");
        abstract.setAttribute("class", "card-abstract");
        abstract.innerHTML = ` ${generator.abstract}`;

        // insert image, card title, abstract into card body
        myCardBody.appendChild(myImg);
        myCardBody.appendChild(myCardTitle);
        myCardBody.appendChild(abstract);

        // insert card body into the card
        myCard.appendChild(myCardBody);

        // generate "more info" button
        const moreInfoBtn = document.createElement("button");
        moreInfoBtn.setAttribute("class", "card-buttton");
        moreInfoBtn.setAttribute("class", "btn btn-primary");
        moreInfoBtn.setAttribute("data-bs-toggle", "modal");
        moreInfoBtn.setAttribute("data-bs-target", `#modal_${generator.id}`);
        moreInfoBtn.innerHTML = "מידע נוסף";

         // insert button into card
         myCard.appendChild(moreInfoBtn);

        // insert the created card into the itemsContainer
        itemsContainer.appendChild(myCard);

        // create modal for each card
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("id", `modal_${generator.id}`);
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("aria-labelledby", `modalLabel_${generator.id}`);
        modal.setAttribute("aria-hidden", "true");

        const modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");

        const modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        const modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        modalBody.innerHTML = generator.fullContent;

        const modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");

        const closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn btn-secondary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.innerHTML = "סגור";

        modalFooter.appendChild(closeButton);

        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        // append modal to the body
        document.body.appendChild(modal);
    })
}







// mouse in
function hoverTopic(e) {
    // נמצא את המזהה של הפריט עליו עברנו
    const currentId = e.target.id;

    document.getElementById(currentId).classList.add("blue");

}

// mouse out    
function outTopic(e) {
    const currentId = e.target.id;

    document.getElementById(currentId).classList.remove("blue");
}


function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}



//rotem changes//

// פונקציה שבודקת אם המסך במצב מובייל
function isMobileView() {
    return window.innerWidth <= 767; // Adjust the width based on your mobile view breakpoint
}

// פונקציה שמראה או מחביאה את הכפתור בחזרה למעלה
function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    scrollToTopBtn.style.display = isMobileView() && window.scrollY > 100 ? 'block' : 'none';
}

// פונקציה כדי לגלול לחלק העליון של העמוד
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Event listener to toggle the button visibility on scroll
window.addEventListener('scroll', toggleScrollToTopButton);

// Event listener to toggle the button visibility on window resize
window.addEventListener('resize', toggleScrollToTopButton);


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        toggleButtonImage();
    });

    // Function to toggle the button image based on dark mode state
    function toggleButtonImage() {
        const img = darkModeToggle.querySelector('img');
        if (body.classList.contains('dark-mode')) {
            // Change image source for dark mode
            img.src = "img/lightmode.png" ;
            img.alt = 'Light Mode';
        } else {
            // Change image source for light mode
            img.src = "img/night.png";
            img.alt = 'Night Mode';

        }
    }
});

