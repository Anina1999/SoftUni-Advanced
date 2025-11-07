class Hotel {
    initialBudget = 0;
    roomAvailability = {};
    supplyStock = {};

    constructor(initialBudget) {
        this.initialBudget = initialBudget;
    }

    restockSupplies(supplies) {
        let result = [];

        for (let supply of supplies) {
            const [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
            let quantity = Number(supplyQuantity);
            let totalPrice = Number(supplyTotalPrice);

            if (totalPrice > this.initialBudget) {
                result.push(`There was not enough money to restock ${quantity} ${supplyName}`);
                continue;
            }

            if (!this.supplyStock.hasOwnProperty(supplyName)) {
                this.supplyStock[supplyName] = 0;
            }

            this.supplyStock[supplyName] += quantity;
            this.initialBudget -= totalPrice;

            result.push(`Successfully stocked ${quantity} ${supplyName}`);
        }

        return result.join('\n').trim();
    };

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        let parsedSupplies = [];

        for (let supply of neededSupplies) {
            const [supplyName, supplyQuantity] = supply.split(' ');
            parsedSupplies.push({ name: supplyName, quantity: Number(supplyQuantity) });
        }

        this.roomAvailability[roomType] = {
            neededSupplies: parsedSupplies,
            pricePerNight: Number(pricePerNight)
        };

        const numberOfRoomTypes = Object.keys(this.roomAvailability).length;

        return `Great idea! Now with the ${roomType}, we have ${numberOfRoomTypes} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        const roomTypes = Object.keys(this.roomAvailability);

        if (roomTypes.length === 0) {
            return `Our rooms are not ready yet, please come back later...`;
        }

        let result = [];

        for (let [roomType, roomInfo] of Object.entries(this.roomAvailability)) {
            result.push(`${roomType} - $ ${roomInfo.pricePerNight}`);
        }

        return result.join('\n');
    }

    bookRoom(roomType) {
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        const roomInfo = this.roomAvailability[roomType];
        const neededSupplies = roomInfo.neededSupplies;

        for (let supply of neededSupplies) {
            const supplyName = supply.name;
            const quantityNeeded = supply.quantity;

            if (!this.supplyStock.hasOwnProperty(supplyName) || this.supplyStock[supplyName] < quantityNeeded) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${roomInfo.pricePerNight} per night.`;
    }
}

//Example 1
// let hotel = new HotelOperations(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

//Example 2
// let hotel = new HotelOperations(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

//Example 3 

// let hotel = new HotelOperations(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

//Example 4

let hotel = new HotelOperations(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
