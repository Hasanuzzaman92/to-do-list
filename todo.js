
let count = 0;
document.getElementById('input-btn').addEventListener('click', function (){
    count++;
    const inputElement = document.getElementById('input-value');
    const inputValue = inputElement.value;
    inputElement.value = "";

    const tbody = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-success done-btn">Done</button>
        </td>
    `;

    tbody.appendChild(tr);

    const deleteBtns = document.getElementsByClassName('delete-btn');
    for (let deleteBtn of deleteBtns){
        deleteBtn.addEventListener('click', function (event){
            event.target.parentNode.parentNode.style.display = "none";
        })
    };

    const doneBtns = document.getElementsByClassName('done-btn');
    for (let doneBtn of doneBtns){
        doneBtn.addEventListener('click', function (event){
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    };

    document.getElementById('clear-btn').addEventListener('click', function (){
        tbody.style.display = 'none';
    })
})


