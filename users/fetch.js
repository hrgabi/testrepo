
        function showData(data) {
           

           for (user of data) {
          //      outs += row.name + "<br>";


            let  newTR = document.createElement("tr");
            let newTD = document.createElement("td");
            newTD.textContent = user.name;
            newTR.appendChild(newTD);
            document.querySelector("#outData").appendChild(newTR);
            }
            
        }



        let fetchInit = {
            method: "GET",
            headers: new Headers(),
            mode: "cors",
            cache: "default"
        };

        /*
        fetch("http://localhost:3000/comments",
            fetchInit).then(data =>  data.json,
                err => document.querySelector("#out").innerHTML = "Error!").

        then(users => document.querySelector("#out").innerHTML = JSON.stringify(users));
        */

        fetch('http://localhost:3000/users', fetchInit)
            .then(response => response.json(),
                err => document.querySelector("#out").innerHTML = "Error!")
            .then(data => showData(data));
              // document.querySelector("#out").innerHTML = JSON.stringify(data)





