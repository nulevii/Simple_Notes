const Box = document.querySelector('.box');
const DeleteButtons = document.getElementsByClassName('delete-button');

const DeleteMenu = document.querySelector('.delete-overlay');
const CancelButtonDelete = document.querySelector('.cancel-button');
const OkButtonDelete = document.querySelector('.ok-button');

const CreateMenu = document.querySelector('.create-overlay');
const AddElementBox = document.querySelector('.add-element-box');
const CancelButtonCreate = document.querySelector('.cancel-button-create');
const OkButtonCreate = document.querySelector('.ok-button-create');
const NewTaskName = document.getElementById('new-task-text');
const CreateError = document.querySelector('.alert-box__header-delete');

let deletedElement = null;

const deleteMenuAppear = (element) => {
  DeleteMenu.style.visibility = 'visible';
  deletedElement = element.target.closest('div');
};

const popUpMenuDelete = () => {
  deletedElement.remove();
  DeleteMenu.style.visibility = 'hidden';
  deletedElement = null;
};

const HideDeleteAndCreateMenu = () => {
  DeleteMenu.style.visibility = 'hidden';
  CreateMenu.style.visibility = 'hidden';
  deletedElement = null;
};

const addDeleteListeners = () => {
  for (i = 0; i <= DeleteButtons.length - 1; i++) {
    DeleteButtons[i].addEventListener('click', deleteMenuAppear);
  }
};

const createMenuAppear = (element) => {
  CreateMenu.style.visibility = 'visible';
  deletedElement = element.target.closest('div');
};

const createNewElement = () => {
  console.log(NewTaskName.textContent.length === 0);
  if (NewTaskName.textContent.length === 0) {
    CreateError.textContent = 'You didn\'t enter anything!';
    return null;
  }
  if (NewTaskName.textContent.length >= 80) {
    CreateError.textContent = 'Task description is too long!';
    return null;
  }
  const newElement = Box.cloneNode(true);
  const TaskName = newElement.querySelector('.box__text');
  TaskName.textContent = NewTaskName.textContent;
  AddElementBox.before(newElement);
  CreateMenu.style.visibility = 'hidden';
  addDeleteListeners();
};

OkButtonDelete.addEventListener('click', popUpMenuDelete);
CancelButtonDelete.addEventListener('click', HideDeleteAndCreateMenu);
addDeleteListeners();

AddElementBox.addEventListener('click', createMenuAppear);
OkButtonCreate.addEventListener('click', createNewElement);
CancelButtonCreate.addEventListener('click', HideDeleteAndCreateMenu);
