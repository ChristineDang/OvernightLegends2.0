import React from 'react';
import{ Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id:1, name: 'cactusBadges', description: 'cactus badges', price: '$5', image:'images/badges/cactus.png'},
    { id:2, name: 'chickBadges', description: 'egg to chick badges', price: '$5', image:'images/badges/eggbadges.png'},
    { id:3, name: 'moonBadges', description: 'moon badges', price: '$5', image:'images/badges/moon8.png'},
    { id:4, name: 'honeyBadges', description: 'honeycomb badges', price: '$5', image:'images/badges/honey12.png'},
    { id:5, name: 'spudsBadges', description: 'potato badges', price: '$5', image:'images/badges/SpudBadgeListingImg.png'},
    { id:6, name: 'milkBadges', description: 'milk carton badges', price: '$5', image:'images/badges/MilkBadgeListingImg.png'},
    { id:7, name: 'pawBadges', description: 'paws/toe beans badges', price: '$5', image: 'images/badges/PawBadgeListingImg.png'},
    { id:8, name: 'musicNotesBadges', description: 'music notes badges', price: '$5', image:'images/badges/MusicNotesBadgeListingImg.png'}
    
];

const Badges = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )

}

export default Badges;