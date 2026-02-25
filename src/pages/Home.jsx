import React, { useState } from 'react';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import { useCart } from '../context/CartContext';
import { useApiSearch } from '../hooks/useApiSearch';

import './Home.css';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { searchTerm, setSearchTerm, books, facets, loading, error } = useApiSearch();
    const { addToCart } = useCart();

    // Use facets from Elasticsearch if available, otherwise fallback to defaults
    const categoriesFromFacets = Object.keys(facets.categories);
    const categories = ['Todos', ...categoriesFromFacets];

    const filteredBooks = books.filter(book =>
        selectedCategory === 'Todos' || book.category === selectedCategory
    );

    return (
        <Layout>
            <section className="home">
                <header className="home__header">
                    <h2 className="home__title">Catálogo de Libros</h2>
                    <div className="home__search">
                        <input
                            type="text"
                            placeholder="Buscar por título..."
                            className="home__input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="home__categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`home__category-btn ${selectedCategory === cat ? 'home__category-btn--active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                {loading && <div className="home__loading">Cargando libros...</div>}
                {error && <div className="home__error">{error}</div>}

                {!loading && !error && filteredBooks.length > 0 ? (
                    <div className="home__grid">
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} onAddToCart={addToCart} />
                        ))}
                    </div>
                ) : (
                    <div className="home__no-results">
                        <p>No se encontraron libros que coincidan con tu búsqueda.</p>
                        <button className="btn btn--primary" onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}>
                            Ver todos los libros
                        </button>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Home;

