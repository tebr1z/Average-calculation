const btn = document.getElementById("btn")
btn.onclick = function () {

    // const input1 = parseInt(document.getElementById("in1").value)
    // const input2 = parseInt(document.getElementById("in2").value)
    // const input3 = parseInt(document.getElementById("in3").value)
    // const input4 = parseInt(document.getElementById("in4").value)

    // const hesabla = (input1 + input2 + input3 + input4) / 4;

    // if (isNaN(input1) || isNaN(input2)) {
    //     alert(" 1 ci şəxs və 2 ci şəsxi boş buraxmaq Olmaz !!!!");
    //     return;
    //   }
    
      // in3 alanı boş ise varsayılan değer olarak 0 kullan
    //   const input1Value = isNaN(input1) ? 0 : input1;

    //   const input2Value = isNaN(input2) ? 0 : input2;

    //   const input3Value = isNaN(input3) ? 0 : input3;
    
    //   // in4 alanı boş ise varsayılan değer olarak 0 kullan
    //   const input4Value = isNaN(input4) ? 0 : input4;
    
    //   const hesabla = ( input1Value +  input2Value + input3Value + input4Value) / 4;



    // const input1 = isNaN(parseInt(document.getElementById("in1").value)) ? 0 ;
    // const input2 = isNaN(parseInt(document.getElementById("in2").value)) ? 0 ;
    // const input3 = isNaN(parseInt(document.getElementById("in3").value)) ? 0 ;
    // const input4 = isNaN(parseInt(document.getElementById("in4").value)) ? 0 ;

    // const hesabla = (input1 + input2 + input3 + input4) / 4;

    // const input4 = isNaN(parseInt(document.getElementById("in4").value)) ? 0 : parseInt(document.getElementById("in4").value);
    // const input1 = isNaN(parseInt(document.getElementById("in1").value)) ? 0 : parseInt(document.getElementById("in1").value);
    // const input2 = isNaN(parseInt(document.getElementById("in2").value)) ? 0 : parseInt(document.getElementById("in2").value);
    // const input3 = isNaN(parseInt(document.getElementById("in3").value)) ? 0 : parseInt(document.getElementById("in3").value);
    
    // const hesabla = (input1 + input2 + input3 + input4) / 4;
    
    const input1 = parseInt(document.getElementById("in1").value) || 0;
    const input2 = parseInt(document.getElementById("in2").value) || 0;
    const input3 = parseInt(document.getElementById("in3").value) || 0;
    const input4 = parseInt(document.getElementById("in4").value) || 0;
    const hesabla = (input1 + input2 + input3 + input4) / 4;
    


    const input11 = document.createElement("td")
    const input22 = document.createElement("td")
    const input33 = document.createElement("td")
    const input44 = document.createElement("td")
    const input55 = document.createElement("td")


    input11.textContent = input1;
    input22.textContent = input2;
    input33.textContent = input3;
    input44.textContent = input4;
    input55.textContent = hesabla;


    const tr = document.createElement("tr")

    tr.appendChild(input11);
    tr.appendChild(input22);
    tr.appendChild(input33);
    tr.appendChild(input44);
    tr.appendChild(input55);
    

    tablu.appendChild(tr);


    in1.value = "";
    in2.value = "";
    in3.value = "";
    in4.value = "";
    in1.focus();
}

