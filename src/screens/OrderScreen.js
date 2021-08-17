import React, { useContext, useEffect } from 'react';
import { Avatar, Box, CircularProgress, Grid, List, ListItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from '../styles';
import { listCategories } from '../actions';
import { Store } from '../Store';
import Logo from '../components/Logo';
import { Fragment } from 'react';



export default function OrderScreen() {
    const styles = useStyles();

    // For below dispatch with listCategories write useContext(store)
    const { state, dispatch } = useContext(Store);
    // To get list of categories from the state 
    const { categories, loading, error } = state.categoryList;
    useEffect(() => {
        listCategories(dispatch);
    }, [dispatch]);

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
                ) :
                ( <
                    >
                    <
                    ListItem button >
                    <
                    Logo className = { styles.logo } >
                    <
                    /Logo> <
                    /ListItem> {
                        categories.map((category) => ( <
                            ListItem button key = { category.name } >
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
        Grid item md = { 2 } >
        Food Right side section <
        /Grid> <
        /Grid> <
        /Box> <
        /Box>
    )
}