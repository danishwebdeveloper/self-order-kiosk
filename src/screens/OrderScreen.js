import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, List, ListItem, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from '../styles';
import { listCategories, listProducts } from '../actions';
import { Store } from '../Store';
import Logo from '../components/Logo';
import { Fragment } from 'react';




export default function OrderScreen() {
    const styles = useStyles();

    // For below dispatch with listCategories write useContext(store)
    const { state, dispatch } = useContext(Store);

    // To get list of categories from the Store state
    const { categories, loading, error } = state.categoryList;

    // For below categoryclickHnadler initialze above
    const [categoryName, setCategoryName] = useState();
    useEffect(() => {
        if (!categories) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName, categories)
        }
        listCategories(dispatch);
    }, [dispatch, categoryName]);


    // For products based on categories and get productList from reducer at store.js
    const { products, loading: loadingProducts, error: errorProducts } = state.productList;


    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    }


    return ( <
        Box className = { styles.root } >
        <
        Box className = { styles.main } >
        <
        Grid container >
        <
        Grid item md = { 2 } >
        <
        List > {
            loading ? ( <
                CircularProgress / >
            ) : error ? ( <
                Alert severity = "error" > { error } < /Alert>
            ) : ( <
                >
                <
                ListItem onClick = {
                    () => categoryClickHandler('') }
                button >
                <
                Logo > < /Logo> <
                /ListItem> {
                    categories.map((category) => ( <
                        ListItem button key = { category.name }
                        onClick = {
                            () => categoryClickHandler(category.name) } >
                        <
                        Avatar alt = { category.name }
                        src = { category.image }
                        /> <
                        /ListItem>
                    ))
                } <
                />
            )
        } <
        /List> <
        /Grid> <
        Grid item md = { 10 } >
        <
        Typography gutterBottom className = { styles.title }
        variant = "h2"
        component = "h2" >
        { categoryName || 'Main Menu' } <
        /Typography> <
        Grid container spacing = { 1 } > {
            loadingProducts ? ( <
                CircularProgress / >
            ) : errorProducts ? ( <
                Alert severity = "error" > { errorProducts } < /Alert>
            ) : (
                products.map((product) => ( <
                    Grid item md = { 6 } >
                    <
                    Card className = { styles.card } >
                    <
                    CardActionArea >
                    <
                    CardMedia component = "img"
                    alt = { product.name }
                    image = { product.image }
                    className = { styles.media }
                    /> <
                    /CardActionArea> <
                    CardContent >
                    <
                    Typography gutterBottom variant = "body2"
                    color = "textPrimary"
                    component = "p" >
                    { product.name } <
                    /Typography> <
                    Box className = { styles.cardFooter } >
                    <
                    Typography variant = "body2"
                    color = "textSecondary"
                    component = "p" >
                    { product.calorie }
                    Cal <
                    /Typography> <
                    Typography variant = "body2"
                    color = "textPrimary"
                    component = "p" >
                    $ { product.price } <
                    /Typography> <
                    /Box> <
                    /CardContent> <
                    /Card> <
                    /Grid>
                ))
            )
        } <
        /Grid> <
        /Grid> <
        /Grid> <
        /Box> <
        /Box>
    );
}