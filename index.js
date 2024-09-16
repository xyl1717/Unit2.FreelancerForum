document.addEventListener('DOMContentLoaded', function() {
    const freelancerTableBody = document.querySelector('#freelancer-table tbody');
    const averagePriceElement = document.getElementById('average-price');
    let freelancers = [];
    let totalPrice = 0;

    function updateTable() {
        freelancerTableBody.innerHTML = ''; 
        freelancers.forEach(freelancer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${freelancer.name}</td>
                <td>${freelancer.occupation}</td>
                <td>$${freelancer.price}</td>
            `;
            freelancerTableBody.appendChild(row);
        });
    }

    function updateAveragePrice() {
        const averagePrice = freelancers.length > 0 ? (totalPrice / freelancers.length).toFixed(2) : 0;
        averagePriceElement.textContent = `Average Starting Price: $${averagePrice}`;
    }

    function addFreelancer(name, occupation, price) {
        freelancers.push({ name, occupation, price });
        totalPrice += price;
        updateTable();
        updateAveragePrice();
    }

    
    addFreelancer('Alice', 'Writer', 30);
    addFreelancer('Bob', 'Teacher', 50);
    
    
    setInterval(() => {
        const names = ['Carol', 'Dave', 'James'];
        const occupations = ['Programmer', 'Designer', 'Photographer'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        const randomPrice = Math.floor(Math.random() * 100) + 1;

        addFreelancer(randomName, randomOccupation, randomPrice);
    }, 5000); 
});