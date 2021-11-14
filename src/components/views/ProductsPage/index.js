import React from "react";
import styles from './productsPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom';

/*window.onload = function () 
{
    fetch("http://localhost:5000/productos")
    .then(function(respuesta)
    {
        return respuesta.json();
    })
    .then(function(respuesta){
        let i = 0
        for(let valor of respuesta){ 
            document.getElementById('infoproductos').innerHTML+=`
            <tr>
                <td>${respuesta[i].id_productos}</td>
                <td>${respuesta[i].descripcion}</td>
                <td>${respuesta[i].valor_unitario}</td>
                <td>${respuesta[i].cantidad}</td>
                <td>${respuesta[i].estado}</td>
            </tr>`;
            i++;
        }      
    })
}*/


const productsPage = props => {
    
    return (
        <div className={styles.container}>
            <div className={styles['container-election']}>
                <h3>OPCIONES</h3>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={usuarios}
                    alt={''}
                    />
                    <Link to='/module/products/form'>Agregar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={actualizar}
                    alt={''}
                    />
                    <Link to='/module/products/upgrade'>Actualizar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={eliminar}
                    alt={''}
                    />
                    <Link to='/module/products/delete'>Eliminar</Link>
                </div>
            </div>
            <div className={styles['container-table']}>
                <h3>PRODUCTOS</h3>
                <table className={styles['table-container']}>
                    <thead>
                        <tr>
                            <th>ID PRODUCTOS</th>
                            <th>DESCRIPCIÓN DEL PRODUCTO</th>
                            <th>VALOR UNITARIO</th>
                            <th>CANTIDAD</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody id='infoproductos'></tbody>
                </table>
            </div>
        </div>
    )
}
    
export default productsPage