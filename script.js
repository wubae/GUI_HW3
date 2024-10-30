/*
Name: Wu Li
Date: 10/30/2024
File: script.js

Wu Li, UMass Lowell Computer Science, wuhui_li@student.uml.edu
Copyright (c) 2024 by Wu. All rights reserved. May be freely copied or 
excerpted for educational purposes with credit to the author.
*/

function generateDynamicTable() {
    // Clear any previous error messages
    document.getElementById('error-message').textContent = '';
    
    // Get values from the form inputs
    const hStart = parseInt(document.getElementById('min-column').value);
    const hEnd = parseInt(document.getElementById('max-column').value);
    const vStart = parseInt(document.getElementById('min-row').value);
    const vEnd = parseInt(document.getElementById('max-row').value);
    
    // Define the minimum and maximum values
    const minAllowed = -50;
    const maxAllowed = 50;

    // An array to collect error messages
    let errorMessages = [];

    // Validate row inputs
    if (isNaN(hStart) || isNaN(hEnd)) {
        errorMessages.push('Please enter valid numbers for the row start and end values.');
    } else {
        if (hStart < minAllowed || hEnd > maxAllowed) {
            errorMessages.push(`Row values must be between ${minAllowed} and ${maxAllowed}.`);
        }
        if (hStart > hEnd) {
            errorMessages.push('Row start value must be less than or equal to the end value.');
        }
    }

    // Validate column inputs
    if (isNaN(vStart) || isNaN(vEnd)) {
        errorMessages.push('Please enter valid numbers for the column start and end values.');
    } else {
        if (vStart < minAllowed || vEnd > maxAllowed) {
            errorMessages.push(`Column values must be between ${minAllowed} and ${maxAllowed}.`);
        }
        if (vStart > vEnd) {
            errorMessages.push('Column start value must be less than or equal to the end value.');
        }
    }

    // If there are error messages, display them and stop the function
    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById('error-message').innerHTML = errorMessages.join('<br>');
        // Clear the table if there's an error
        document.getElementById('multiplication-table').innerHTML = '';
        return;
    }

    const table = document.getElementById('multiplication-table');
    // Clear previous table content
    table.innerHTML = '';

    const hRange = [];
    for (let h = hStart; h <= hEnd; h++) {
        hRange.push(h);
    }

    const vRange = [];
    for (let v = vStart; v <= vEnd; v++) {
        vRange.push(v);
    }

    // Create table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();

    // Create empty top-left cell as a <th>
    const emptyHeaderCell = document.createElement('th');
    headerRow.appendChild(emptyHeaderCell);

    hRange.forEach(h => {
        const th = document.createElement('th');
        th.textContent = h;
        th.setAttribute('scope', 'col');
        headerRow.appendChild(th);
    });

    // Create table body
    const tbody = table.createTBody();

    vRange.forEach(v => {
        const row = tbody.insertRow();

        // Create header cell for the first column
        const th = document.createElement('th');
        th.textContent = v;
        th.setAttribute('scope', 'row');
        row.appendChild(th);

        hRange.forEach(h => {
            const cell = row.insertCell();
            cell.textContent = v * h;
        });
    });
}

