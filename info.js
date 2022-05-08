/*
Must:{
    1.multiple items inventory/warehouse management. manage/maintain quantity of product.not e-commerce.
    2. must have to take choose a project from the given example.
    3. design, idea must be unique and beautiful.
    4. design must not match with previous projects or assignment.
    5. design must be professional type.
    --
    1. Home page {
        1. header {
            1. Home
            2. Blogs
            3. not log in {
                1. log in.
            }
            4. logged in {
                1. show Manage Items, Add Item, My items, Logout button.
            }
        }
        2. banner
        3. inventory items {
            1.Maximum 6 inventory items.
            2.inventory item article{
                1. name,image,short description,price,quantity,supplier name,update button.
                2. update button clicked{
                    1. go to inventory/:id route.
                    2. private/protected route.
                    3. redirects to the login page if user not logged in.
                    4. after login, user will redirected to the page he/she wanted to go.
                    5. after reloading user not redirected to login page.
                }
            } 
        }
        4. Manage Inventories link/link button{
            1.navigate to manage inventory page.
        }
        5. unique beautiful extra meainingfull section 1
        6. unique beautiful extra meainingfull section 2
        7. footer.
    }
    2. Inventory/:id page{
        1. id,name,image,description,price,quantity,supplier name,sold,delivered button.
        2. delivered button clicked{ 
            1. reduce item's quantity by one.
            2. changed quantity saved in database, display changes on website.
            3. create api
        }
        3. restock form{
            1. input:number,submit button
            2. submit clicked{
                1. incress item's quantity by input field's value.
            } 
        }
        4. Manage Inventories link/link button{
            1.navigate to manage inventory page.
        }
    }
    3. Manage inventory page{
        1. items must be more than six.
        2. show all inventory items. tabular form recommended. 
        3. each item{
            1. name, delete button,other info as you wish
            2. delete button clicked {
                confirm true{ 
                    1. delete the item from database, display changes on website.
                }
            }
        }
        4. add new item link/link button{
            1.navigate to add new item page.
        }
    }
    4. Add new item page {
        1. make a form {
            1. name,email,image,short description,price,quantity,supplier name
            2. imgBB url in image input field.
            3. send all information to database including user email.
        }
    }
    5. My Items page{
        1. show all item added by loggedin user's email.
        2. If user wants, can cancel/delete any item. like manage inventory page
        3. ask confirmation message before deleting/canceling.
    }
    6. No Fake data. mongodb/any other noSQL database.
    7. blogs page {
        1. won't a protected route
        2. answer at least three{
            1. Difference between javascript and nodejs.
            2. When should you use nodejs and when should you use mongodb.
            3. Differences between sql and nosql databases.
            4. What is the purpose of jwt and how does it work.
        }
    }
    8. Create a meaningful 404 page/not found page.
    9. Create login, logout page. 
    10. authentication{
        1. Must email/password-based authentication
        2. at least one social login.
        3. logout button header if user logged in
    }
    11. login page{
        4. after login, user will redirected to the page he/she wanted to go.
        5. after reloading a private route, the user not redirected to login page.
    }
}

*/

/*
Bonus:{
    1. must show error message{
        1. email or password not match
        2. all meaningfull error.
    } 
    2. send mail{
        1. send email verification
        2. password reset mail
        3. use toast.
    } 
    3. commit{
        1. client-side: at least 12 meaningful commits.
        2. server-side: at least 6  meaningful commits.
    }
    4. readme{
        1. website name
        2. short description
        3. live site link client and server.
        4. at least five bullet points about website's features/functionality.
    }
    5. homepage must responsive for desktop and mobile.
    6. website must have name, no lorem, all relevant content and consistent look.
    7. clean and organized code, components, hooks and comment.
    8. spinner in home page, login/register page, everywhere when data is loading.
    9. use environment variable{
        1. in client and server-side.
        2. hides db user and db password and another server-side secret info.
        3. Use .gitignore file on the server-side.
    } 
    10. jwt {
        1. Implement basic version of the jwt token for email/password based authentication.
        2. Upon login, you will create a jwt token and store it on the client-side.
        3. for the My Items page, you will send the token with the call and verify the user.
        4. Implementing 401 and 403 is optional. For social login, jwt token implementation is optional.
    }
    11. Create a stackoverflow profile and post a question or an answer at the time of submitting your assignment. You will submit the link to the stackoverflow question. If you do not want to add a question, you can add an answer on stackoverflow. If you can't add a stackoverflow question/answer, you can submit a github issue to any library that you are using. Your question or answer has to be a meaningful question or answer.
}

*/

/*
Recommended:

*/

/*
Optonal:


*/

/*
Very very Optional:{
    1. Home page {
            2. banner (carousel)
        }
    5. website responsive{
            2. Tablet
        }. 
}
    
*/