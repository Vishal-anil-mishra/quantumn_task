import CheckBox from "./utils/checkBox";
import RadioGroup from "./utils/radioGroup";
import { LoginUser } from "./types";
import courses from './constants/courses.json';
import {getDashboardItem} from './utils/index';

/* dashboard */

const dashboardItemsElement = document.querySelector('#dashboard-items') as HTMLElement;
const courseCountElement = document.querySelector('#course-count') as HTMLElement;
const courseCountHeadingElement = document.querySelector('#course-count-heading') as HTMLElement;

if(courseCountElement) 
    courseCountElement.innerHTML = `Showing ${courses.length} of ${courses.length} courses`;
if(courseCountHeadingElement) 
    courseCountHeadingElement.innerHTML = `${courses.length} <span>Courses</span>`

for(const course of courses) {
    if(dashboardItemsElement) 
        dashboardItemsElement.innerHTML += getDashboardItem(course);
}

/* login */

const login = (user: LoginUser) => {
    console.log(user);
};

const typeElement = document.querySelector("#type") as HTMLDivElement;
const rememberMeElement = document.querySelector("#remember-me") as HTMLDivElement;
const stateSelect = document.querySelector('#state') as HTMLSelectElement;
const districtSelect = document.querySelector('#district') as HTMLSelectElement;
const usernameInput = document.querySelector('#username') as HTMLInputElement;
const passwordInput = document.querySelector('#password') as HTMLInputElement;
const loginButton = document.querySelector('#login-button') as HTMLButtonElement;

const showPasswordElement = document.querySelector('#show-password') as HTMLElement;

let typeRadioButtons = new RadioGroup(typeElement);
let rememberMeCheckBox = new CheckBox(rememberMeElement, "assets/icons/checkbox-checked.svg", "assets/icons/checkbox-unchecked.svg");
new CheckBox(showPasswordElement, "assets/icons/preview.svg", "assets/icons/preview-hide.png", (checked) => {
    if(checked) 
        passwordInput.type = 'text';
    else 
        passwordInput.type = 'password';
});

loginButton.addEventListener('click', () => {
    /* perform input validations */
    const selectedRadioButton = typeRadioButtons.radioButtons[typeRadioButtons.selectedIndex] as HTMLInputElement;
    login({
        username: usernameInput.value,
        password: passwordInput.value,
        state: stateSelect.value,
        district: districtSelect.value,
        type: selectedRadioButton.getAttribute('name') as string,
        rememberMe: rememberMeCheckBox.checked,
    });
});