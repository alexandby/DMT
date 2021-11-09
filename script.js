import { gamesData } from './data/data.js';

const containerCard = document.querySelector('.container-card');
const MODAL = document.getElementById('my-modal');
//Import gamesData from data.js
let htmlData = '';
gamesData.forEach(({ id, name, details, logo, map, rank, signPlayers, maxPlayers }) => {
  htmlData += `
  <div class='card'>
    <div class="card-header">
    <img src='${logo}' />
    </div>
        <div class="card-body d-none d-flex">
            <h2 class='card-name'>${name}</h2>
            <p class='card-details d-none'>${details}</p>
            <div class='card-map'>
            <img src='${map}' />
            </div>
        </div>
        <div class="card-footer">
            <input class='detail-btn d-none' id='${id + 1}' type='image' src="/img/detail.png" />
            <input class='join-btn' id='${id + 11}' type='image' src="/img/play-button.png" />
        </div>
  </div>
    `;
  containerCard.innerHTML = htmlData;
  editDataSet(containerCard);
});
//Add New Game
const NG_BTN = document.createElement('button');
NG_BTN.id = 'new-game-button';
NG_BTN.className = 'btn new-game-button';
NG_BTN.style.backgroundImage = 'url(/img/pubgcard.jpg)';
containerCard.append(NG_BTN);
NG_BTN.onclick = function addNewGameData() {
  NG_BTN.remove();
  let newGameData = [
    {
      id: 'game0',
      name: 'Game ',
      details: 'Details 0',
      logo: '',
      map: '/img/dota2map.jpg',
    },
  ];
  let newHtmlData = '';
  newGameData.forEach(({ id, name, details, logo, map }) => {
    newHtmlData += `
    <div class='card'>
      <div class="card-header">
      <img src='/img/newgamecard.jpg' />
      </div>
          <div class="card-body d-none">
              <h2 class='card-name'>${name + 1}</h2>
              <p class='card-details d-none'>${details}</p>
              <div class='card-map'>
            <img src='${map}' />
            </div>
          </div>
          <div class="card-footer">
          <input class='detail-btn d-none' id='${id + 1}' type='image' src="/img/detail.png" />
          <input class='join-btn' id='${id + 11}' type='image' src="/img/play-button.png" />
          </div>
    </div>
      `;
    containerCard.innerHTML += newHtmlData;
    containerCard.append(NG_BTN);
    editDataSet(containerCard);
  });
};
//Game Details
function editDataSet(containerCard) {
  const BTN = containerCard.querySelectorAll('.detail-btn');
  BTN.forEach((el) =>
    el.addEventListener('click', function () {
      MODAL.style.display = 'block';
      document.body.classList.toggle('o-hidden');
      //Main Card Data
      const mainCard = this.parentNode.parentNode;
      const headerMainCard = mainCard.querySelector('.card-header');
      const cardName = mainCard.querySelector('.card-name');
      const cardDetails = mainCard.querySelector('.card-details');
      const cardMap = mainCard.querySelector('.card-map');
      //Map
      const modalMap = MODAL.querySelector('.modal-map');
      console.log(modalMap);
      modalMap.innerHTML = cardMap.innerHTML;
      //Logo
      const modalHeader = MODAL.querySelector('.modal-header');
      modalHeader.innerHTML = headerMainCard.innerHTML;
      //Name & Details
      const modalDetails = MODAL.querySelector('.modal-details');
      const modalName = MODAL.querySelector('.modal-name');
      //Carefully with append()
      modalName.append(cardName.innerHTML);
      modalDetails.append(cardDetails.innerHTML);

      //Edit Data
      const nameInput = document.getElementById('name-input');
      const editBtn = document.getElementById('modal-editBtn');
      editBtn.onclick = function () {
        const saveButton = document.getElementById('save-edit');
        const modalForm = document.getElementById('edit-form');
        modalForm.classList.toggle('d-none');
        nameInput.value = cardName.innerHTML;
        saveButton.onclick = function () {
          cardName.innerHTML = nameInput.value;
          modalName.innerHTML = nameInput.value;
          modalForm.classList.toggle('d-none');
          document.body.classList.toggle('o-hidden');
        };
      };
      //Delete Game
      const deleteBtn = document.getElementById('modal-deleteBtn');
      deleteBtn.onclick = function () {
        modalName.innerHTML = '';
        modalDetails.innerHTML = '';
        nameInput.value = '';
        containerCard.removeChild(mainCard);
        MODAL.style.display = 'none';
        document.body.classList.toggle('o-hidden');
      };
      //Close Modal
      window.onclick = function (event) {
        if (event.target == MODAL) {
          modalName.innerHTML = '';
          modalDetails.innerHTML = '';
          MODAL.style.display = 'none';
          document.body.classList.toggle('o-hidden');
        }
      };
    }),
  );
}
