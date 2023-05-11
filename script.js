function showCategories() {
    const container = document.querySelector('.categories');

    for(let i = 0; i < data.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = data[i].name;
        element.setAttribute('data-category', i);
        element.addEventListener('click', showProductHandler);
        container.appendChild(element);
    }
}
function showProductHandler(event) {
    const container = document.querySelector('.products');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const categoryProducts = data[categoryIndex].products;
    for(let i = 0; i < categoryProducts.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = categoryProducts[i].name;
        element.setAttribute('data-category', categoryIndex);
        element.setAttribute('data-product', i);
        element.addEventListener('click', showDescription);
        container.appendChild(element);
    }
}
function showDescription(event){
    const container = document.querySelector('.description');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const productIndex = element.getAttribute('data-product');
    const categoryProducts = data[categoryIndex].products;
    const description = document.createElement('div');
    const price = document.createElement('div');
    description.innerHTML = categoryProducts[productIndex].description;
    price.innerHTML = '$' + categoryProducts[productIndex].price;
    container.appendChild(description);
    container.appendChild(price);
    const button = document.createElement('button');
    button.textContent = 'Сплатити!';
    container.appendChild(button);
    button.onclick = callRegistration;
}

function callRegistration() {
    const form = document.getElementById('registration-form');
    form.style.display = 'block';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';
    form.style.marginTop = '100px';
}

document.querySelector('#submit').onclick = function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const post = document.getElementById('post-office').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    if (name === '' || city === 'Не обрано' || post === '' || quantity === ''){
        alert('Перевірте заповненість форми заказу!');
    }
    else {
        const div = document.createElement('div');
        div.classList.add('div-info');
        const table = document.createElement('table');
        div.appendChild(table);
        document.body.appendChild(div);

        const rowStart = document.createElement('caption');
        rowStart.textContent = 'Інформація про покупку';
        table.appendChild(rowStart);

        const row1 = document.createElement('tr');
        const head1 = document.createElement('th');
        head1.textContent = "П.І.Б.";
        row1.appendChild(head1)
        const coll1 = document.createElement('td');
        coll1.textContent = name;
        row1.appendChild(coll1);
        table.appendChild(row1);

        const row2 = document.createElement('tr');
        const head2 = document.createElement('th');
        head2.textContent = "Місто";
        row2.appendChild(head2);
        const coll2 = document.createElement('td');
        coll2.textContent = city;
        row2.appendChild(coll2);
        table.appendChild(row2);

        const row3 = document.createElement('tr');
        const head3 = document.createElement('th');
        head3.textContent = "Відділення НП";
        row3.appendChild(head3);
        const coll3 = document.createElement('td');
        coll3.textContent = post;
        row3.appendChild(coll3);
        table.appendChild(row3);

        const row4 = document.createElement('tr');
        const head4 = document.createElement('th');
        head4.textContent = "Оплата";
        row4.appendChild(head4);
        const coll4 = document.createElement('td');
        coll4.textContent = payment;
        row4.appendChild(coll4);
        table.appendChild(row4);

        const row5 = document.createElement('tr');
        const head5 = document.createElement('th');
        head5.textContent = "Кількість товару";
        row5.appendChild(head5);
        const coll5 = document.createElement('td');
        coll5.textContent = quantity;
        row5.appendChild(coll5);
        table.appendChild(row5);

        const row6 = document.createElement('tr');
        const head6 = document.createElement('th');
        head6.textContent = "Коментар до заказу";
        row6.appendChild(head6);
        const coll6 = document.createElement('td');
        coll6.textContent = comment;
        row6.appendChild(coll6);
        table.appendChild(row6);

        const form = document.querySelector('#registration-form');
        form.style.display = 'none';

        const container = document.querySelector('.container');
        container.remove();

        const reloadBtn = document.createElement('button');
        reloadBtn.textContent = 'Замовити знову';
        reloadBtn.style.marginTop = '50px';

        div.appendChild(reloadBtn);
        reloadBtn.onclick = function (){
            location.reload();
    }
    }
}
showCategories();