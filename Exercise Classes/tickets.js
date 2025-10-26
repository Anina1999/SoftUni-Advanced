function ticketsStatistic(data, sortCriteria) {
    const store = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        static sort(arr, sortCriteria) {
            return arr.sort((a, b) => {
                if (sortCriteria === "price") {
                    return a[sortCriteria] - b[sortCriteria];
                }

                return a[sortCriteria].localeCompare(b[sortCriteria]);
            })
        }
    }

    for (let el of data) {
        const [description, price, status] = el.split('|');
        const ticket = new Ticket(description, Number(price), status);
        store.push(ticket);
    }

    return Ticket.sort(store, sortCriteria);
}

const result1 = ticketsStatistic(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');
console.log(result1);

const result2 = ticketsStatistic(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');
console.log(result2);