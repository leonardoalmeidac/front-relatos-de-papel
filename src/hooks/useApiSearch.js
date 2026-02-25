import { useState, useEffect } from 'react';
import { bookService } from '../services/bookService';

export const useApiSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [facets, setFacets] = useState({ authors: {}, categories: {} });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const fetchBooks = async () => {
                setLoading(true);
                try {
                    const data = await bookService.searchBooks({ title: searchTerm });
                    setBooks(data.books || []);
                    setFacets({
                        authors: data.authorFacets || {},
                        categories: data.categoryFacets || {}
                    });
                    setError(null);
                } catch (err) {
                    setError('Error al conectar con el servidor');
                } finally {
                    setLoading(false);
                }
            };

            fetchBooks();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        books,
        facets,
        loading,
        error
    };
};
