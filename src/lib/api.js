/**
 * API utilities for communicating with Express backend
 * Base URL configured via environment variable
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/**
 * Fetch all books from backend
 */
export async function fetchBooks() {
  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

/**
 * Fetch single book by ID from backend
 */
export async function fetchBookById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Book not found');
      }
      throw new Error('Failed to fetch book');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
}

/**
 * Add new book to backend
 */
export async function addBook(bookData) {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add book');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
}
