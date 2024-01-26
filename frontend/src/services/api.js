let BASE_URL = "";

if (process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost:5555";
  } else if (process.env.NODE_ENV === "production") {
    BASE_URL = process.env.REACT_APP_BASE_URL;
  }



//Get all the books from database
export async function fetchAllTheBooks() {
    try {
        const response = await fetch(`${BASE_URL}/books`);
        const data = await response.json();
        console.log("Fetched data", data.data);
        return data.data;
    } catch(err) {
        console.log("Error fetching data:", err);
    }
}

//Get a single book
export async function fetchABook(id) {
    try {
        console.log('id', id);
        const response = await fetch(`${BASE_URL}/books/${id}`);
        const data = await response.json();
        return data.book;
    } catch(err) {
        console.log("Error fetching data:", err);
    }
}

//Add new book
export async function postNewBook(inputData) {
    try {
        const response = await fetch(`${BASE_URL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
        const data = response.json();
        return data;
    } catch(err) {
        console.log("Error fetching data:", err);
    }
}

//Edit existing book
export async function editABook(id, inputData) {
    try {
        const response = await fetch(`${BASE_URL}/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        });
        const data = response.json();
        return data;
    } catch(err) {
        console.log("Error fetching data:", err);
    }
}

//Delete a book 
export async function deleteABook(id) {
    try {
        const response = await  fetch(`http://localhost:5555/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.json();
        return data;
    } catch(err) {
        console.log("Error fetching data:", err);
    }
}