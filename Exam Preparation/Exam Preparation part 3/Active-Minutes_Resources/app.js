window.addEventListener("load", solve);

function solve() {
  const typeInput = document.getElementById('type');
  const intensityInput = document.getElementById('intensity');
  const inputs = Array.from(document.querySelectorAll('.form-container input'));

  const addActivityBtn = document.getElementsByClassName('form-container')[0].children[1];

  addActivityBtn.addEventListener('click', onCreate);

  function onCreate(event) {
    event.preventDefault();

    const activityType = typeInput.value;
    const intensity = intensityInput.value;
    const caloriesBurned = inputs[0].value;
    const durationInMinutes = inputs[1].value;
    const date = inputs[2].value;

    if (!activityType || !intensity || !caloriesBurned || !durationInMinutes || !date) {
      return;
    }

    const li = document.createElement('li');
    li.style.display = 'flex';
    const article = document.createElement('article');
    article.style.display = 'flex';

    const paragraphs = [
      `Activity: ${activityType}`,
      `Intensity: ${intensity}`,
      `Duration: ${durationInMinutes}`,
      `Date: ${date}`,
      `Calories: ${caloriesBurned}`
    ];

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.textContent = 'Next';

    const container = document.createElement('div');
    container.classList.add('btn-container');
    container.style.display = 'flex';
    container.appendChild(editBtn);
    container.appendChild(nextBtn);

    paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      article.appendChild(p);
    });

    li.appendChild(article);
    li.appendChild(container);
    document.getElementById('preview-activity').appendChild(li);

    typeInput.selectedIndex = 0;
    intensityInput.selectedIndex = 0;
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }

    addActivityBtn.disabled = true;

    editBtn.addEventListener('click', () => {
      typeInput.value = activityType;
      intensityInput.value = intensity;
      inputs[0].value = caloriesBurned;
      inputs[1].value = durationInMinutes;
      inputs[2].value = date;

      li.remove();
      addActivityBtn.disabled = false;
    });

    nextBtn.addEventListener('click', () => {
      li.remove();

      const tableBody = document.getElementById('activities-table');

      const tableRow = document.createElement('tr');

      const td1 = document.createElement('td');
      td1.classList.add('type-cell');
      td1.textContent = activityType;

      const td2 = document.createElement('td');
      td2.classList.add('duration-cell');
      td2.textContent = durationInMinutes;

      const td3 = document.createElement('td');
      td3.classList.add('calories-cell');
      td3.textContent = caloriesBurned;

      const td4 = document.createElement('td');
      td4.classList.add('date-cell');
      td4.textContent = date;

      const td5 = document.createElement('td');
      td5.classList.add('intensity-cell');
      td5.textContent = intensity;

      const td6 = document.createElement('td');
      td6.classList.add('btn-cell');

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete';

      td6.appendChild(deleteBtn);
      tableRow.appendChild(td1);
      tableRow.appendChild(td2);
      tableRow.appendChild(td3);
      tableRow.appendChild(td4);
      tableRow.appendChild(td5);
      tableRow.appendChild(td6);
      tableBody.appendChild(tableRow);

      deleteBtn.addEventListener('click', () => {
        tableRow.remove();
      });

      addActivityBtn.disabled = false;
    });
  }
}