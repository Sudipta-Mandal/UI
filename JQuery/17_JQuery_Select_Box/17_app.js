let technologies = ['HTML','CSS','JavaScript','JQuery','Bootstrap'];

let optionElement = '';
technologies.forEach((element) => {
    optionElement += `<option value="${element}">${element.toUpperCase()}</option> \n`;
});
$('#tech-select').append(optionElement);

// Dependent Select Box
let cars = [
    {
        id:1,
        name : 'Maruthi Suzuki'
    },
    {
        id:2,
        name : 'Suzuki NEXA'
    },
    {
        id:3,
        name : 'Hyundai'
    }
];

let carOptionElement = '';
let carSelect = $('#car-select');
cars.forEach((car) => {
    carOptionElement += `<option value="${car.id}">${car.name}</option>`;
});
carSelect.append(carOptionElement);

let models = [
    {
        car_id: 1,
        name : 'Swift'
    },
    {
        car_id: 1,
        name : 'Dzire'
    },
    {
        car_id: 1,
        name : 'Brezza'
    },
    {
        car_id: 2,
        name : 'Baleno'
    },
    {
        car_id: 2,
        name : 'Ignis'
    },
    {
        car_id: 2,
        name : 'SCross'
    },
    {
        car_id: 2,
        name : 'Ciaz'
    },
    {
        car_id: 3,
        name : 'Elantra'
    },
    {
        car_id: 3,
        name : 'Creta'
    },
    {
        car_id: 3,
        name : 'Hyundai EON'
    },
    {
        car_id: 3,
        name : 'Hyundai i20'
    }
];

let modelSelect = $('#model-select');
carSelect.change(function() {
    let selectedId = parseInt($(this).val());
    if(!isNaN(selectedId)){
        let modelOptions = '';
        let selectedModels = models.filter((model) => {
            return model.car_id === selectedId;
        });
        selectedModels.forEach((model) => {
            modelOptions += `<option value="${model.name}">${model.name}</option>`
        });
        modelSelect.empty().append(modelOptions);
    }
    else{
        let tempOption = `<option>Select a Model</option>`;
        modelSelect.empty().append(tempOption);
    }
});