window.addEventListener('load', solve);

function solve() {
   // # enter ticket info
   // reading values
   // validate values
   // create ticket elements
   // add event listeners
   // - edit
   // -continue
   // clear form and disable button

    // # edit tickets
    // collect ticket info
    // populate form
    // enable form button
    // remove ticket element

    // # continue
    // move info to last section
    // - confirm
    // - cancel

    // # confirm ticket
    // remove ticket element
    // remove name element 
    // show message

    // # confirm ticket
    // remove ticket element
    // enable form button

    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
        nextButton: document.getElementById('next-btn')
    };

    const ticketInfo = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');

    inputs.nextButton.addEventListener('click', nextStep);

    function nextStep(event) {
        event.preventDefault();

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const peopleCount = inputs.peopleCount.value;
        const fromDate = inputs.fromDate.value;
        const daysCount = inputs.daysCount.value;

        if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return;
        }

        const element = createTicket(firstName, lastName, peopleCount, fromDate, daysCount);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit'
        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
 
        editBtn.addEventListener('click', () => editTicket(firstName, lastName, peopleCount, fromDate, daysCount));
        continueBtn.addEventListener('click', () => onContinue(firstName, lastName, peopleCount, fromDate, daysCount));

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        ticketInfo.appendChild(element);

        inputs.nextButton.disabled = true;
        inputs.nextButton.parentElement.reset();
    }

    function editTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.peopleCount.value = peopleCount;
        inputs.fromDate.value = fromDate;
        inputs.daysCount.value = daysCount;

        inputs.nextButton.disabled = false;

        ticketInfo.children[0].remove();
    }

    function onContinue(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = createTicket(firstName, lastName, peopleCount, fromDate, daysCount);
        element.className = 'ticket';

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.textContent = 'Confirm';
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';

        confirmBtn.addEventListener('click', onConfirm);
        cancelBtn.addEventListener('click', onCancel);

        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);

        confirmTicket.appendChild(element);

        ticketInfo.children[0].remove();
    }

    
    function onConfirm() {
        document.getElementById('main').remove();

        const h1 = document.createElement('h1');
        h1.id = 'thank-you';
        h1.textContent = 'Thank you, have a nice day!';

        const backBtn = document.createElement('button');
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', () => window.location = window.location);

        document.body.appendChild(h1);
        document.body.appendChild(backBtn);
    }

    function onCancel() {
        confirmTicket.children[0].remove();

        inputs.nextButton.disabled = false;
    }

    function createTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = document.createElement('li');
    
        element.className = 'ticket';

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        article.appendChild(h3);

        const p1 = document.createElement('p');
        p1.textContent = `From date: ${fromDate}`;
        article.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = `For ${daysCount} days`;
        article.appendChild(p2);

        const p3 = document.createElement('p');
        p3.textContent = `For ${peopleCount} people`;
        article.appendChild(p3);

        element.appendChild(article);

        return element;
    }
}