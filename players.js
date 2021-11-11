import { playersData } from './data/players-data.js';

const containerPlayers = document.querySelector('.container-players');
const MODAL = document.getElementById('my-modal');
//Forming a list of players
function formingPlayersList(data, container) {
  let htmlData = '';
  data.forEach(({ id, name, surname, avatar, nickname, rank }) => {
    htmlData += `
    <div class='player'>
        <div class="card-header">
        <img src='${avatar}' />
        </div>
            <div class="card-body d-none">
                <h2 class='card-name'>${name} ${surname}</h2>
                <p class='card-details d-none'>${nickname}</p>
                <div class='player-rank'>
            <img src='${rank}' />
            </div>
            </div>
            <div class="card-footer">
            <input class='detail-btn d-none' id='${id + 1}' type='image' src="/img/detail.png" />
            </div>
      </div>
      `;
    id.includes('player0') ? (container.innerHTML += htmlData) : (container.innerHTML = htmlData);
  });
  editDataSet(containerPlayers);
}
formingPlayersList(playersData, containerPlayers);
//Edit Data Set
function editDataSet(containerCard) {
  const BTN = containerPlayers.querySelectorAll('.detail-btn');
  BTN.forEach((el) =>
    el.addEventListener('click', function () {
      MODAL.style.display = 'block';
      document.body.classList.toggle('o-hidden');
      //Main Card Data
      const mainCard = this.parentNode.parentNode;
      const headerMainCard = mainCard.querySelector('.card-header');
      const cardName = mainCard.querySelector('.card-name');
      const cardDetails = mainCard.querySelector('.card-details');
      const cardRank = mainCard.querySelector('.player-rank');
      //Avatar
      const modalHeader = MODAL.querySelector('.modal-header');
      modalHeader.innerHTML = headerMainCard.innerHTML;
      //Name & Details
      const modalDetails = MODAL.querySelector('.modal-details');
      const modalName = MODAL.querySelector('.modal-name');
      //Map
      const modalMap = MODAL.querySelector('.modal-map');
      modalMap.innerHTML = cardRank.innerHTML;
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
          //document.body.classList.toggle('o-hidden');
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
