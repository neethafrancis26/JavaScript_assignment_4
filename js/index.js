// Question 1:
function toggleDiv() {
    const div = document.getElementById('myDiv');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}

function changeColor() {
    const div = document.getElementById('myDiv');
    div.style.backgroundColor = div.style.backgroundColor === 'pink' ? 'blue' : 'pink';
}

function toggleDetails() {
    const details = document.getElementById('details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}


// Question 2:
const numbers = document.getElementById("numbers");
const msg = document.getElementById("message_box");
numbers.addEventListener("change", function () {
    const seledNumbers = numbers.value;
    if (seledNumbers === '10') {
        msg.innerHTML = `you selected ${seledNumbers}`;
    } else if (seledNumbers == '9') {
        numbers.value = "10";
        msg.innerHTML = "9 is fully occupied, please select another number";
    } else {
        msg.innerHTML = `you selected ${seledNumbers} `;
    }
});

msg.addEventListener("mouseenter", function () {
    msg.style.backgroundColor = "brown";
});

msg.addEventListener("mouseleave", function () {
    msg.style.backgroundColor = "";
});


// Question 3: 
const myArray = ["C", "Rust", "Python", "Java", "SQL", "C#", "Javascript", "swift", "Go", "PHP"];
const buttondiv = document.getElementById("buttondiv");
const messagediv = document.getElementById("messagediv");
myArray.forEach((language, index) => {
    const button = document.createElement("button");
    button.innerText = language;
    button.style.margin = "5px";
    button.addEventListener("click", () => {
        messagediv.innerText = `Language: ${language}`;
    });
    buttondiv.appendChild(button);
});


// Question 4:
const detailsForm = document.getElementById("detailsForm");
const fname = document.getElementById("fname");
const phone = document.getElementById("phone");
const place = document.getElementById("place");
const cname = document.getElementById("cname");
const pcode = document.getElementById("pcode");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const placeError = document.getElementById("placeError");
const companyError = document.getElementById("companyError");
const pincodeError = document.getElementById("pincodeError");
const prepopulateButton = document.getElementById("prepopulateButton");

detailsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    nameError.style.display = "none";
    phoneError.style.display = "none";
    placeError.style.display = "none";
    companyError.style.display = "none";
    pincodeError.style.display = "none";

    if (!fname.value.trim()) {
        nameError.style.display = "block";
        valid = false;
    }

    if (!place.value.trim()) {
        valid = false;
        placeError.style.display = "block";
    }

    if (!cname.value.trim()) {
        companyError.style.display = "block";
        valid = false;
    }

    const phoneValue = phone.value.trim();
    if (!/^\d{10}$/.test(phoneValue) && phoneValue.length !== 10) {
        phoneError.style.display = "block";
        valid = false;
    }

    const pincodeValue = pcode.value.trim();
    if (!/^\d+$/.test(pincodeValue) || pincodeValue.length !== 6) {
        pincodeError.style.display = "block";
        valid = false;
    }

    if (valid) {
        const data = {
            name: fname.value,
            phone: phone.value,
            place: place.value,
            pincode: pcode.value,
            companyname: cname.value
        };

        localStorage.setItem("data", JSON.stringify(data));
        detailsForm.reset();
        prepopulateButton.disabled = false;
        alert("form submitted");
    }
});
if (localStorage.getItem("data")) {
    prepopulateButton.disabled = false;
}


prepopulateButton.addEventListener("click", function () {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
        fname.value = storedData.name;
        phone.value = storedData.phone;
        place.value = storedData.place;
        cname.value = storedData.companyname;
        pcode.value = storedData.pincode;
    }
    console.log(storedData);

});


// Question 5:
const formtitle = document.getElementById("formtitle");
const titleinput = document.getElementById("titleinput");
const errorMessage = document.getElementById("errorMessage");

document.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTitle = titleinput.value;
    if (newTitle.length > 0 && newTitle.length <= 50) {
        document.title = newTitle;
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
});


// Question 6:
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key == "Enter")
        alert("You have pressed control+ente key");
});




