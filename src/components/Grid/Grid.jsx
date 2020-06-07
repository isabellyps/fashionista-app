import React from 'react';
import ItemGrid from '../ItemGrid/ItemGrid';

import './Grid.scss';

const Grid = () => (
    <section className="grid">
        <div className="container">
            <div className="grid__title">
                <p>Exibindo 22 itens</p>
            </div>
            <div className="grid__itens">
                <ItemGrid />
            </div>
        </div>
    </section>
);

export default Grid;