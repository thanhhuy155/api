import React, { Component } from 'react';
import ProductList  from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
class ProductListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        callAPI('products','GET',null).then(res => {
            this.setState({
                products : res.data
            })
        });
       
    }
    // phuong thuc xoa san pham
    onDelete = (id) =>{
        var {products} = this.state;
        callAPI(`products/${id}`, 'DELETE', null).then(res => {
            // console.log(res);
            if(res.status === 200){ //Ok
                var index = this.findIndex(products,id);
                if ( index !== -1 )
                products.splice(index,1);
                this.setState({
                    products : products
                });
            }
        });
    }

    findIndex = (products, id) =>{
        var result = -1;
        products.forEach((product,index) => {
            if(product.id ===id){
                result = index;
            }
        });
        return result;
    }


    render() {
               var {products} = this.state;
        // var {products} = this.props; 
        
 
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to = "/product/add" className="btn btn-info mb-10">Add product</Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete = {this.onDelete} //khai bao them ham xoa
                    />
                )
            }
            )
        }
        return result;
    }
}
const mapSateToProps = state =>{
    return{
        products: state.products
    }
}

export default connect(mapSateToProps,null) (ProductListPage);







