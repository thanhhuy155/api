import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {
    onDelete =(id) =>{
        if (confirm('You decide to detele this ?')) { // eslint-disable-line
        // console.log(id); //phai go~ dung' dong` tren Eslint
        this.props.onDelete(id);
        }
    }
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Availabe' : ' Not Avaiable';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index +1 }</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`}
                    className="btn btn-success" 
                        style={{ marginRight: 10 }}>Edit</Link>
                    <button type="button" 
                    className="btn btn-danger  " 
                    onClick = {()=> this.onDelete(product.id)}
                    >Delete</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;