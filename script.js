import { GAMES_DATA } from './data/data.js';

const CONTAINER_CARD = document.querySelector('.container__card');
//Import Games Data from data.js
let htmlData = '';
GAMES_DATA.forEach(({ id, name, details, logo }) => {
  htmlData += `
  <div class='main-card'>
    <div class="cardHeader">
    <img src='${logo}' />
    </div>
        <div class="cardBody">
            <h2 class='cardName'>${name}</h2>
            <p class='cardDetails d-none'>${details}</p>
        </div>
        <div class="cardFooter">
            <input class='detailBtn' id='${id + 1}' type='image' src="/img/detail.png" />
        </div>
  </div>
    `;
  CONTAINER_CARD.innerHTML = htmlData;
  editDataSet(CONTAINER_CARD);
});
//New Game
const NG_BTN = document.getElementById('newGameButton');
NG_BTN.onclick = function addNewGameData() {
  let newGameData = [
    {
      id: 'game0',
      name: 'Current Name',
      details: 'Details 0',
      logo: '',
    },
  ];
  let newHtmlData = '';
  newGameData.forEach(({ id, name, details, logo }) => {
    newHtmlData += `
    <div class='main-card'>
      <div class="cardHeader">
      <img src='${logo}' />
      </div>
          <div class="cardBody">
              <h2 class='cardName'>${name}</h2>
              <p class='cardDetails d-none'>${details}</p>
          </div>
          <div class="cardFooter">
              <input class='detailBtn' id='${id + 1}' type='image' src="/img/detail.png" />
          </div>
    </div>
      `;
    CONTAINER_CARD.innerHTML += newHtmlData;
    editDataSet(CONTAINER_CARD);
  });
};
//Game Details
function editDataSet(containerCard) {
  const BTN = containerCard.querySelectorAll('.detailBtn');
  BTN.forEach((el) =>
    el.addEventListener('click', function () {
      const MODAL = document.getElementById('myModal');
      MODAL.style.display = 'block';
      //Main Card Data
      const mainCard = this.parentNode.parentNode;
      const headerMainCard = mainCard.querySelector('.cardHeader');
      const cardName = mainCard.querySelector('.cardName');
      const cardDetails = mainCard.querySelector('.cardDetails');
      //Logo
      const modalHeader = MODAL.querySelector('.modalHeader');
      modalHeader.innerHTML = headerMainCard.innerHTML;
      //Name & Details
      const modalDetails = MODAL.querySelector('.modalDetails');
      const modalName = MODAL.querySelector('.modalName');
      //Carefully with append()
      modalName.append(cardName.innerHTML);
      modalDetails.append(cardDetails.innerHTML);

      //Edit Data
      const editBtn = document.getElementById('modalEditBtn');
      editBtn.onclick = function () {
        const saveButton = document.getElementById('saveEdit');
        const modalForm = document.getElementById('editForm');
        modalForm.classList.toggle('d-none');
        const nameInput = document.getElementById('nameInput');
        nameInput.value = cardName.innerHTML;
        saveButton.onclick = function () {
          cardName.innerHTML = nameInput.value;
          modalName.innerHTML = nameInput.value;
          modalForm.classList.toggle('d-none');
        };
      };
      //Delete Game
      const deleteBtn = document.getElementById('modalDeleteBtn');
      deleteBtn.onclick = function () {
        modalName.innerHTML = '';
        modalDetails.innerHTML = '';
        nameInput.value = '';
        CONTAINER_CARD.removeChild(mainCard);
        MODAL.style.display = 'none';
      };
      //Close Modal
      window.onclick = function (event) {
        if (event.target == MODAL) {
          modalName.innerHTML = '';
          modalDetails.innerHTML = '';
          MODAL.style.display = 'none';
        }
      };
    }),
  );
}
