from django.shortcuts import render, redirect,get_object_or_404
from django.contrib import messages
from django.http import HttpResponse

books = []
id=1
def create_book(request):
    global id
    if request.method == "POST":
        title = request.POST["title"]
        author = request.POST["author"]
        published_year = request.POST["published_year"]
        book = {"id":id,"title": title, "author": author,
                "published_year": published_year}
        messages.success(request, "Book added successfully.")
        books.append(book)
        id += 1
        return redirect("home")

        # return HttpResponse("Book added successfully.")
    else:
        return render(request, "create_book.html")


def show_book(request,pk):
    book=None
    for b in books:
        if b['id'] == pk:
            book = b
            break
    if book:
        return render(request, 'show_book.html', {'book': book})
    else:
        return render(request, 'book_not_found.html')


def edit_book(request,pk):
    book = next((b for b in books if b['id'] == pk), None)
    if request.method == 'POST':
        book['title'] = request.POST.get('title')
        book['author'] = request.POST.get('author')
        book['published_year'] = request.POST.get('published_year')
        # Save the updated book object to the database or array
        # Depending on your use case, you could save the updated book object to a database, or simply update the book object in the array.
        # Here's an example of how to update the book object in the array:
        index = books.index(book)
        books[index] = book
        return redirect("home")
    return render(request, 'edit_book.html', {'book': book})


def delete_book(request , pk):
    book = next((b for b in books if b['id'] == pk), None)
    if request.method == 'POST':
        books.remove(book)
        return redirect('home')
    return render(request, 'delete_book.html', {'book': book})


def list_books(request):
    return render(request, "list_books.html", {"books": books})
