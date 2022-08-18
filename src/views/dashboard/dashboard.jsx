import React from 'react'
import "./style/dashboard.css"
const $ = window.$;


export default function login() {

    function Buscador (val){
        var value = val.target.value.toLowerCase();
                    $("#geeks tr").filter(function() {
                        $(this).toggle($(this).text()
                        .toLowerCase().indexOf(value) > -1)
                    });
    }

    return (
        
        <div id="contenedor">
        <b id="txtbuscardor">Buscar en la tabla:   
          <input id="gfg" type="text" 
                 placeholder="Search here" onKeyUp={Buscador}></input>
        </b>
        <br></br>
        <br></br>
        <table id="customers" style={{backgroundColor: 'white', color:'black'} }>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody id="geeks">
                <tr>
                    <td>C++ STL</td>
                    <td>1499</td>
                    <td>Online Classes
                    </td>
                </tr>
                <tr>
                    <td>DSA Foundation</td>
                    <td>7999</td>
                    <td>Regular Classes</td>
                </tr>
                <tr>
                    <td>Geeks Classes</td>
                    <td>10799</td>
                    <td>Weekend Classes</td>
                </tr>
                <tr>
                    <td>Placement 100</td>
                    <td>9999</td>
                    <td>Online Classes</td>
                </tr>
            </tbody>
        </table>
  

        </div>

        
    )
}
