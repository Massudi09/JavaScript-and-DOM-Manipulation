// from data.js
var tableData = data;

// Get references to the tbody element, input fields and buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $filterBtn = document.querySelector("#filter");
var $resetBtn = document.querySelector("#reset");

// Add event listeners 
$filterBtn.addEventListener("click", filterButtonClick);
$resetBtn.addEventListener("click", resetButtonClick);


// render filtered data to tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var dataUFO = tableData[i];
    var fields = Object.keys(dataUFO);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = dataUFO[field];
    }
  }
  $(document).ready( function () {
  	$('#table_id').DataTable({
  		searching: false,
    	ordering:  false
  	});
  } );
}

function filterButtonClick() {

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    tableData = data.filter(function (dataUFO) {
      var sightingDate = dataUFO.datetime;
      return sightingDate.includes(filterDate);
    });
  };
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    tableData = tableData.filter(function (dataUFO) {
      var sightingCity = dataUFO.city;
      return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    tableData = tableData.filter(function (dataUFO) {
      var sightingState = dataUFO.state;
      return sightingState === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    tableData = tableData.filter(function (dataUFO) {
      var sightingCountry = dataUFO.country;
      return sightingCountry === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    tableData = tableData.filter(function (dataUFO) {
      var sightingShape = dataUFO.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();
};


// Reset table and filter form 
function resetButtonClick() {
  tableData = data;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
}

// Render table upon loading
renderTable();