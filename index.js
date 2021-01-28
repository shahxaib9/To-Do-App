const addButton = document.querySelector('#addBtn');

var index=0;

addButton.addEventListener('click', (event) => {
    index++;
  event.preventDefault();
  addNewNote();
});

const addNewNote = (text = '') => {
  const titleText = document.getElementById('title').value;
  const noteText = document.getElementById('note').value;
    const dateValue = document.getElementById('date').value;
    
  const note = document.createElement('div');

  note.classList.add('note');

  const htmlData = `
  <div class="container todo">
  <table class="table table-bordered table-hover table-secondary table-striped">
  <tbody>
    <tr>
      <td scope="row">${index}</td>
      <td>${titleText}</td>
      <td>${dateValue}</td>
      <td>${noteText}</td>
      <td><button class="btn btn-info btn-lg button delete" >Delete</button></td>
      
    </tr>   
  </tbody>
</table></div> `;

  note.insertAdjacentHTML('afterbegin', htmlData);
  

  document.body.appendChild(note);

  const delButton = note.querySelector('.delete');
  delButton.addEventListener('click', () => {
    note.remove();
    });

};

  