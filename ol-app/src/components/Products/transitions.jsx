import React from 'react';
import{ Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    // { id:1, name: 'glitchPopPack', description: 'Glitch pop style emotes', price: '$5.00', image:'images/emotes/GlitchPopPack.png'},
    // { id:2, name: 'neonPack', description: 'Neon style emotes', price: '$5.00', image:'images/emotes/NeonPack.png'},
    // { id:3, name: 'pandaPack', description: 'Panda emotes', price: '$5.00', image:'images/emotes/PandaPack.png'},
    // { id:4, name: 'boxingPack', description: 'Boxing emotes', price: '$5.00', image:'images/emotes/BoxingPack.png'}
];

const Transitions = () => {
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

export default Transitions;