function init() {
    const cities = ["Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena", "Lisboa", "Washington_DC", "Otawa", "L'Havana", "Santiago", "Lima", "Montevideo", "Canberra", "Wellington", "Monròvia", "Abuja", "Dakar", "Tunis", "Tokyo", "Seül", "Beijing", "Taipei"];
    const countries = ["França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova_Zelanda", "Libèria", "Nigèria", "Senegal", "Tunísia", "Japó", "Corea_Sud", "Xina", "Taiwan"];
    const continents = ["Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia", "Àsia", "Àsia"];

    const elem2 = document.getElementById("table");

    document.getElementById("clear").addEventListener('click', function () {
        elem2.innerHTML = '';
        console.log("executed function clear");

        let temp1;
        let temp2;
        let temp3;
        temp1 = document.createElement("tr");

        temp2 = document.createElement("th");

        temp3 = document.createElement("p");
        temp3.textContent = "Ciutat";
        temp2.appendChild(temp3);

        temp3 = document.createElement("p");
        temp3.textContent = "Pais";
        temp2.appendChild(temp3);

        temp3 = document.createElement("p");
        temp3.textContent = "Continent";
        temp2.appendChild(temp3);

        temp1.appendChild(temp2);


        elem2.appendChild(temp1);
    })

    document.getElementById("fill").addEventListener('click', function () {

        var i = document.getElementById("inp").value;

        if (i <= 10 && i >= 1) {
            elem2.innerHTML = '';
            let rand;
            let temp1;
            let temp2;
            let temp3;

            temp1 = document.createElement("tr");

            temp2 = document.createElement("th");

            temp3 = document.createElement("p");
            temp3.textContent = "Ciutat";
            temp2.appendChild(temp3);

            temp3 = document.createElement("p");
            temp3.textContent = "Pais";
            temp2.appendChild(temp3);

            temp3 = document.createElement("p");
            temp3.textContent = "Continent";
            temp2.appendChild(temp3);

            temp1.appendChild(temp2);

            elem2.appendChild(temp1);


            temp1 = document.createElement("tr");
            temp2 = document.createElement("td");
            temp2.textContent = "."
            temp1.appendChild(temp2); temp1.appendChild(temp2); temp1.appendChild(temp2);

            elem2.appendChild(temp1);

            for (var x = 0; x < i; x++) {

                rand = (parseInt(Math.random() * 100)) % 23;

                temp1 = document.createElement("tr");

                temp2 = document.createElement("td");
                temp2.textContent = cities[rand];
                temp1.appendChild(temp2);

                temp2 = document.createElement("td");
                temp2.textContent = countries[rand];
                temp1.appendChild(temp2);

                temp2 = document.createElement("td");
                temp2.textContent = continents[rand];
                temp1.appendChild(temp2);

                elem2.appendChild(temp1);
            }
        }else{
            window.alert("Number of rows must be between 1 and 10");
        }
    }
    )




}