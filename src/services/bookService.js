const API_URL = import.meta.env.VITE_API_URL;

export const bookService = {
    async getAllBooks() {
        const response = await fetch(`${API_URL}/books`);
        if (!response.ok) throw new Error('Error fetching books');
        return response.json();
    },

    async searchBooks(query) {
        const params = new URLSearchParams();
        if (query.title) params.append('title', query.title);
        if (query.author) params.append('author', query.author);
        if (query.category) params.append('category', query.category);
        
        const response = await fetch(`${API_URL}/books?${params.toString()}`);
        if (!response.ok) throw new Error('Error searching books');
        return response.json();
    },

    async getBookById(id) {
        const response = await fetch(`${API_URL}/books/${id}`);
        if (!response.ok) throw new Error('Book not found');
        return response.json();
    }
};
