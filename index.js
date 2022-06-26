const BOX = document.querySelector('.box');
const DeleteButtons = document.getElementsByClassName('delete-button');

const DELETEMENU = document.querySelector('.delete-overlay');
const CancelButtonDelete = document.querySelector('.cancel-button');
const OkButtonDelete = document.querySelector('.ok-button');

const CREATEMENU = document.querySelector('.create-overlay');
const AddElementBox = document.querySelector('.add-element-box');
const CancelButtonCreate = document.querySelector('.cancel-button-create');
const OkButtonCreate = document.querySelector('.ok-button-create');
const NewTaskName = document.getElementById('new-task-text');
const CreateError = document.querySelector('.alert-box__header-delete');

let deletedElement = null;

const deleteMenuAppear = (element) => {
  DELETEMENU.style.visibility = 'visible';
  deletedElement = element.target.closest('div');
};

const popUpMenuDelete = () => {
  deletedElement.remove();
  DELETEMENU.style.visibility = 'hidden';
  deletedElement = null;
};

const HideDeleteMenu = () => {
  DELETEMENU.style.visibility = 'hidden';
  deletedElement = null;
};

const addDeleteListeners = () => {
  for (i = 0; i <= DeleteButtons.length - 1; i++) {
    DeleteButtons[i].addEventListener('click', deleteMenuAppear);
  }
};

const createMenuAppear = (element) => {
  CREATEMENU.style.visibility = 'visible';
  deletedElement = element.target.closest('div');
};

const createNewElement = () => {
  if (NewTaskName.textContent.length === 0) {
    CreateError.textContent = 'You didn\'t enter anything!';
    return console.error('Please fill in Task Name input field!');
  }
  if (NewTaskName.textContent.length >= 80) {
    CreateError.textContent = 'Task description is too long!';
    return console.error('Task Name input field is to long!');;
  }
  const newElement = BOX.cloneNode(true);
  const TaskName = newElement.querySelector('.box__text');
  TaskName.textContent = NewTaskName.textContent;
  AddElementBox.before(newElement);
  CREATEMENU.style.visibility = 'hidden';
  CreateError.textContent = 'Please enter New Task';
  NewTaskName.textContent = '';
  addDeleteListeners();
};

const HideCreateMenu = () => {

  CREATEMENU.style.visibility = 'hidden';
  CreateError.textContent = 'Please enter New Task';
  NewTaskName.textContent = '';
};

OkButtonDelete.addEventListener('click', popUpMenuDelete);
CancelButtonDelete.addEventListener('click', HideDeleteMenu);
addDeleteListeners();

AddElementBox.addEventListener('click', createMenuAppear);
OkButtonCreate.addEventListener('click', createNewElement);
CancelButtonCreate.addEventListener('click', HideCreateMenu);
