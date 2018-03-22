"use strict";

// specify the columns
var columnDefs = [{
    headerName: "Rendelő",
    field: "orderer",
    minWidth: 100,
    // headerCheckboxSelection: true,
    // headerCheckboxSelectionFilteredOnly: true,
    // checkboxSelection: true
},
{
    headerName: "Gyúrt sajtok",
    children: [
        { headerName: "Natúr", field: "gyurtnatur" },
        { headerName: "Borsos", field: "borsos" },
        { headerName: "Cayenne borsos", field: "cayenneborsos" },
        { headerName: "Köményes", field: "komenyes" },
        { headerName: "Kapros (szezonálisan)", field: "kapros" },
        { headerName: "Chilis", field: "chilis" },
        { headerName: "Zöldfűszeres(petrezselyem, zeller, tárkony)", field: "zoldfuszeres" },
        { headerName: "Lilahagymás", field: "lilahagymas" },
        { headerName: "Medvehagymás (szezonálisan)", field: "medvehagymas" },
        { headerName: "Fokhagymás", field: "fokhagymas" },
        { headerName: "Kaliforniai paprikás", field: "kaliforniaipaprikas" },
        { headerName: "Olivabogyós", field: "olivabogyos" },
        { headerName: "Füstölt", field: "fustolt" },
        { headerName: "Túrókrémmel töltött füstölt sajttekercs , natúr", field: "gyurtturokremmelnatur" },
        { headerName: "Túrókrémmel töltött füstölt sajttekercs , kapros", field: "gyurtturokremmelkapros" },
        { headerName: "Túrókrémmel töltött füstölt sajttekercs , fokhagymás", field: "gyurtturokremmelfokhagymas" },
        { headerName: "Túrókrémmel töltött füstölt sajttekercs , bacon szalonnás", field: "gyurtturokremmelbacon" }
    ]
},
{
    headerName: "Érlelt sajtok",
    children: [
        { headerName: "Ementáli", field: "ementali" },
        { headerName: "Trappista", field: "trappista" },
        { headerName: "Gomolya ", field: "gomolya" },
        { headerName: "Gomolya kívánság szerint fűszerezve", field: "gomolyakivansag" },
        { headerName: "Parenyica", field: "parenyica" },
    ]
},
{
    headerName: "Joghurt",
    children: [
        { headerName: "Natúr", field: "naturjoghurt" },
        { headerName: "Ízesített kívánság szerint", field: "izesitettkívansag" }

    ]
}
];

var rowData = [
    {
        orderer: "B.Csaba",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "B.János",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "F.Béla",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "F.Mirkó",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "1 kg",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "25 dkg",
        olivabogyos: "",
        fustolt: "50 dkg",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "G.Zoltán",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "H.Balázs",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "H.Zsolt",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "1 kg",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "K.András",
        gyurtnatur: "1 kg",
        borsos: "0.5 kg",
        cayenneborsos: "1.5 kg",
        komenyes: "25 dkg",
        kapros: "",
        chilis: "1.5 kg",
        zoldfuszeres: "",
        lilahagymas: "1 kg",
        medvehagymas: "1 kg",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "1.5 kg",
        fustolt: "1.5 kg",
        gyurtturokremmelnatur: "25 dkg",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "25 dkg",
        ementali: "25 dkg",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "1 kg",
        parenyica: "",
        naturjoghurt: "1.5 kg",
        izesitettkívansag: ""
    },
    {
        orderer: "K.Kornél",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "K.László",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "L.Éva",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "M.Balázs",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "Sz.Jné.Éva",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
    {
        orderer: "Sz.Viktor",
        gyurtnatur: "",
        borsos: "",
        cayenneborsos: "",
        komenyes: "",
        kapros: "",
        chilis: "",
        zoldfuszeres: "",
        lilahagymas: "",
        medvehagymas: "",
        fokhagymas: "",
        kaliforniaipaprikas: "",
        olivabogyos: "",
        fustolt: "",
        gyurtturokremmelnatur: "",
        gyurtturokremmelkapros: "",
        gyurtturokremmelfokhagymas: "",
        gyurtturokremmelbacon: "",
        ementali: "",
        trappista: "",
        gomolya: "",
        gomolyakivansag: "",
        parenyica: "",
        naturjoghurt: "",
        izesitettkívansag: ""
    },
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    onGridSizeChanged: onGridSizeChanged,
    enableColResize: true,
    enableSorting: true,     // enable sorting 
    enableFilter: true,     // enable filtering 
    // enableRangeSelection: true,
    // enableColResize: true,
    domLayout: 'autoHeight',
    rowSelection: 'single', //a sorkijelöléshez
    onSelectionChanged: onSelectionChanged, //a sorkijelöléshez
    onRowDoubleClicked: doSomething, //duplakattra,
    getRowStyle: function (params) { //első sor pin
        // console.log(params.node.data.orderer)
        if (params.node.rowPinned) { //első sor pin
            return { 'font-weight': 'bold' }; //első sor pin
        } //első sor pin
    }, //első sor pin
    // no rows to pin to start with //első sor pin
    pinnedTopRowData: createData(1, 'Top'), //első sor pin
};

const containerDiv = document.getElementById('container_div');
var gridDiv = document.querySelector('#myGrid');
const cheeseSaveBtn = document.getElementById('cheese_save');
const cheeseSelect = document.getElementById('type-select');
const quantity = document.getElementById('quantity');
var typeSelect = document.getElementsByClassName('type-select');
const appellationDiv = document.getElementById('appellation-div');
const contractForm = document.getElementById('contract_form');
var contrDataPlusBtn = document.getElementsByClassName('contr-data-plus');
var contrDataMinusBtn = document.getElementsByClassName('cont-data-minus');
let contrDataCounter = 1;

//első sor pin function
function onPinnedRowTopCount() {
    var headerRowsToFloat = document.getElementById('top-row-count').value;
    var count = Number(headerRowsToFloat);
    var rows = createData(count, 'Top');
    gridOptions.api.setPinnedTopRowData(rows);
}

function createData(count, prefix) {
    var result = [{
        orderer: "Ár",
        gyurtnatur: "1300 Ft",
        borsos: "1400 Ft",
        cayenneborsos: "1400 Ft",
        komenyes: "1400 Ft",
        kapros: "1400 Ft",
        chilis: "1400 Ft",
        zoldfuszeres: "1400 Ft",
        lilahagymas: "1400 Ft",
        medvehagymas: "1400 Ft",
        fokhagymas: "1400 Ft",
        kaliforniaipaprikas: "1500 Ft",
        olivabogyos: "1500 Ft",
        fustolt: "1500 Ft",
        gyurtturokremmelnatur: "1800 Ft",
        gyurtturokremmelkapros: "1900 Ft",
        gyurtturokremmelfokhagymas: "2200 Ft",
        gyurtturokremmelbacon: "2200 Ft",
        ementali: "2200 Ft",
        trappista: "2200 Ft",
        gomolya: "1600 Ft",
        gomolyakivansag: "1800 Ft",
        parenyica: "3000 Ft",
        naturjoghurt: "800 Ft",
        izesitettkívansag: "1000 Ft"
    }];
    return result;
}
//első sor pin function vége

//duplakattra function
var rowContent;
var cheeseCounter = 0;
var cheesesDiv = document.getElementById('cheeses');

var selectedCheeses;
var quantitiesOfCheeses;
var actuallyModifyingRow;

function doSomething(row) {
    $('#variation').modal('show');
    console.log(row.data);

    rowContent = row.data;

    cheeseCounter = 0;
    cheesesDiv.innerHTML = '';

    for (let key in rowContent) {
        if (rowContent[key] != "" && key !== "orderer") {
            // console.log(key, rowContent[key]);
            cheeseCounter += 1;
            let actualCheeseData = "";
            actualCheeseData += '<div class="row">';
            actualCheeseData += '<div class="col-md-6">';
            actualCheeseData += '<div class="form-group">';
            actualCheeseData += '<label for="type-select">Sajt fajtája</label>';
            actualCheeseData += `<select class="form-control type-select" id="type-select${cheeseCounter}" name="type${cheeseCounter}">`;
            actualCheeseData += '<option disabled selected>Kérem válasszon</option>';
            actualCheeseData += '<option value="gyurtnatur">Natúr</option>';
            actualCheeseData += '<option value="borsos">Borsos</option>';
            actualCheeseData += '<option value="cayenneborsos">Cayenne borsos</option>';
            actualCheeseData += '<option value="komenyes">Köményes</option>';
            actualCheeseData += '<option value="kapros">Kapros</option>';
            actualCheeseData += '<option value="chilis">Chilis</option>';
            actualCheeseData += '<option value="zoldfuszeres">Zöldfűszeres(petrezselyem, zeller, tárkony)</option>';
            actualCheeseData += '<option value="lilahagymas">Lilahagymás</option>';
            actualCheeseData += '<option value="medvehagymas">Medvehagymás</option>';
            actualCheeseData += '<option value="fokhagymas">Fokhagymás</option>';
            actualCheeseData += '<option value="kaliforniaipaprikas">Kaliforniai paprikás</option>';
            actualCheeseData += '<option value="olivabogyos">Olivabogyós</option>';
            actualCheeseData += '<option value="fustolt">Füstölt</option>';
            actualCheeseData += '<option value="gyurtturokremmelnatur">Túrókrémmel töltött füstölt sajttekercs , natúr</option>';
            actualCheeseData += '<option value="gyurtturokremmelkapros">Túrókrémmel töltött füstölt sajttekercs , kapros</option>';
            actualCheeseData += '<option value="gyurtturokremmelfokhagymas">Túrókrémmel töltött füstölt sajttekercs , fokhagymás</option>';
            actualCheeseData += '<option value="gyurtturokremmelbacon">Túrókrémmel töltött füstölt sajttekercs , bacon szalonnás</option>';
            actualCheeseData += '<option value="ementali">Ementáli</option>';
            actualCheeseData += '<option value="trappista">Trappista</option>';
            actualCheeseData += '<option value="gomolya">Gomolya</option>';
            actualCheeseData += '<option value="gomolyakivansag">Gomolya kívánság szerint fűszerezve</option>';
            actualCheeseData += '<option value="parenyica">Parenyica</option>';
            actualCheeseData += '<option value="naturjoghurt">Joghurt - Natúr</option>';
            actualCheeseData += '<option value="izesitettkívansag">Joghurt - Ízesített kívánság szerint</option>';
            actualCheeseData += '</select>';
            actualCheeseData += '</div>';
            actualCheeseData += '</div>';

            actualCheeseData += '<div class="col-md-3 ml-4">';
            actualCheeseData += '<div class="form-group">';
            actualCheeseData += '<label for="quantity">Mennyiség</label>';
            actualCheeseData += `<input id="quantity${cheeseCounter}" class="form-control quantity" type="text" name="quantity${cheeseCounter}">`;
            actualCheeseData += '</div>'
            actualCheeseData += '</div>'

            actualCheeseData += '<div class="btn-div col-md-2 mt-4 row">';
            actualCheeseData += '<div class="ml-auto">';
            actualCheeseData += '<button type="button" id="cont-data-minus" class="btn btn-danger ml-2 cont-data-minus">–</button>';
            actualCheeseData += '</div>';
            actualCheeseData += '</div>';

            actualCheeseData += '</div> ';
            cheesesDiv.insertAdjacentHTML('beforeend', actualCheeseData);

            let actualQuantity = document.getElementById(`quantity${cheeseCounter}`);
            actualQuantity.value = rowContent[key];

            let actualCheeseSelect = document.getElementById(`type-select${cheeseCounter}`)
            actualCheeseSelect.value = key;
            actualCheeseSelect.name = actualCheeseSelect.value;

            contrDataMinusBtn[contrDataMinusBtn.length - 1].addEventListener('click', function (event) {
                // event.preventDefault;
                // event.stopPropagation;
                this.parentNode.parentNode.parentNode.remove();
            })
        }
    }

    // if (getEventListeners(document.querySelector('#cheese_save')) === {}) {
    //     cheeseSaveBtn.removeEventListener("click", send);
    // }

    // getEventListeners(document.querySelector('#cheese_save'));
    cheeseSaveBtn.addEventListener('click', function send() {

        console.log(rowContent, 'EZ A rowContent');

        actuallyModifyingRow = rowData[row.rowIndex];
        console.log(actuallyModifyingRow, 'EZ A actuallyModifyingRow');

        selectedCheeses = document.getElementsByClassName('type-select');
        quantitiesOfCheeses = document.getElementsByClassName('quantity');

        for (let key in actuallyModifyingRow) {
            // console.log(key, actuallyModifyingRow[key]);
            if (key !== "orderer") {
                if (actuallyModifyingRow[key] !== "") {
                    actuallyModifyingRow[key] = '';
                }
            }
        }

        for (let i = 0; i < selectedCheeses.length; i++) {
            var akarmi = selectedCheeses[i].value;
            // console.log(akarmi)
            var akarmiErtek = quantitiesOfCheeses[i].value;
            // console.log(akarmiErtek)
            modifyimgActialRow(actuallyModifyingRow, akarmi, akarmiErtek);
        }
        function modifyimgActialRow(actuallyModifyingRow, akarmi, akarmiErtek) {
            actuallyModifyingRow[akarmi] = akarmiErtek;
        }

        // var contrDataFormData = $('#contract_form').serializeJSON();
        // console.log(contrDataFormData);

        gridDiv = document.querySelector('#myGrid');

        removeAGGrid();
        addAGGridDiv();

        //     // AJAX
        //     $.ajax({
        //         type: 'POST',
        //         url: 'http://dimpropbackend_test/api/contracts',
        //         data: contrDataFormData, // the form data
        //         dataType: 'JSON',
        //         encode: true
        //     })

    })
}

//a sorkijelöléshez function
function onSelectionChanged() {
    var selectedRows = gridOptions.api.getSelectedRows();
    var selectedRowsString = '';
    selectedRows.forEach(function (selectedRow, index) {
        if (index !== 0) {
            selectedRowsString += ', ';
        }
        selectedRowsString += selectedRow.orderer;
    });
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
}

// function onQuickFilterChanged() {
//     gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
// }

function onGridSizeChanged(params) {
    // get the current grids width
    var gridWidth = document.getElementById('container_div').offsetWidth;

    // keep track of which columns to hide/show
    var columnsToShow = [];
    var columnsToHide = [];

    // iterate over all columns (visible or not) and work out
    // now many columns can fit (based on their minWidth)
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
        let column = allColumns[i];
        totalColsWidth += column.getMinWidth();
        if (totalColsWidth > gridWidth) {
            columnsToHide.push(column.colId);
        } else {
            columnsToShow.push(column.colId);
        }
    }

    // show/hide columns based on current grid width
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);

    // fill out any available space to ensure there are no gaps
    params.api.sizeColumnsToFit();
}

// wait for the document to be loaded, otherwise
// ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(gridDiv, gridOptions);
});

function row(orderer, gyurtnatur, borsos, cayenneborsos) {
    this.orderer = orderer,
        this.gyurtnatur = gyurtnatur,
        this.borsos = borsos
}

function addAGGridDiv() {
    let gridDiv = document.createElement('DIV');
    gridDiv.setAttribute('id', 'myGrid');
    gridDiv.setAttribute('style', 'width:100%;');
    gridDiv.setAttribute('class', 'ag-theme-blue mt-4');
    containerDiv.appendChild(gridDiv);
    new agGrid.Grid(gridDiv, gridOptions);
}

function removeAGGrid() {
    gridDiv.parentNode.removeChild(gridDiv);
}

$('#variation').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

// modal window

for (let i = 0; i < contrDataPlusBtn.length; i++) {
    contrDataPlusBtn[i].addEventListener('click', function (event) {
        event.preventDefault;
        event.stopPropagation;
        contrDataCounter += 1;

        console.log(contrDataCounter);
        let newContrData = `<div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="type-select">Sajt fajtája</label>
                        <select class="form-control type-select" id="type-select" name="type1">
                            <option disabled selected>Kérem válasszon</option>
                            <option value="gyurtnatur">Natúr</option>
                            <option value="borsos">Borsos</option>
                            <option value="cayenneborsos">Cayenne borsos</option>
                            <option value="komenyes">Köményes</option>
                            <option value="kapros">Kapros</option>
                            <option value="chilis">Chilis</option>
                            <option value="zoldfuszeres">Zöldfűszeres(petrezselyem, zeller, tárkony)</option>
                            <option value="lilahagymas">Lilahagymás</option>
                            <option value="medvehagymas">Medvehagymás</option>
                            <option value="fokhagymas">Fokhagymás</option>
                            <option value="kaliforniaipaprikas">Kaliforniai paprikás</option>
                            <option value="olivabogyos">Olivabogyós</option>
                            <option value="fustolt">Füstölt</option>
                            <option value="gyurtturokremmelnatur">Túrókrémmel töltött füstölt sajttekercs , natúr</option>
                            <option value="gyurtturokremmelkapros">Túrókrémmel töltött füstölt sajttekercs , kapros</option>
                            <option value="gyurtturokremmelfokhagymas">Túrókrémmel töltött füstölt sajttekercs , fokhagymás</option>
                            <option value="gyurtturokremmelbacon">Túrókrémmel töltött füstölt sajttekercs , bacon szalonnás</option>
                            <option value="ementali">Ementáli</option>
                            <option value="trappista">Trappista</option>
                            <option value="gomolya">Gomolya</option>
                            <option value="gomolyakivansag">Gomolya kívánság szerint fűszerezve</option>
                            <option value="parenyica">Parenyica</option>
                            <option value="naturjoghurt">Joghurt - Natúr</option>
                            <option value="izesitettkívansag">Joghurt - Ízesített kívánság szerint</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-3 ml-4">
                    <div class="form-group">
                        <label for="quantity">Mennyiség</label>
                        <input id="quantity" class="form-control quantity" type="text" name="quantity${contrDataCounter}">
        </div>
                    </div>

                    <div class="btn-div col-md-2 mt-4 row">
                        <div class="ml-auto">
                            <button type="button" id="cont-data-minus" class="btn btn-danger ml-2 cont-data-minus">–</button>
                        </div>
                    </div>

                </div>`;

        cheesesDiv.insertAdjacentHTML('beforeend', newContrData);

        contrDataMinusBtn[contrDataMinusBtn.length - 1].addEventListener('click', function (event) {
            event.preventDefault;
            event.stopPropagation;
            contrDataCounter -= 1;
            console.log(contrDataCounter);
            this.parentNode.parentNode.parentNode.remove();
        })
        typeSelect = document.getElementsByClassName('type-select');
    })
}
// modal window