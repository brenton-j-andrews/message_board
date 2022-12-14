
### Ye Olde' Message Board
![Demo_image](public/assets/images/project_img.png)
---

View the project live [here](https://ye-olde-message-board.herokuapp.com).

---


#### About this project. 

Completed for [The Odin Project](https://www.theodinproject.com/lessons/nodejs-members-only) NodeJS / Express Course.

This simple web application hosts a messaging board where a user can create / sign in to an account and post anonymous messages. If the user can solve a riddle, they are allowed to see the author of written messages. There is also an admin account that can delete messages. 

To view project functionality without creating an account, here are two accounts for use:

user: guest-user  
password: user12345 

And the administrator account details:

user: admin  
password: aaaaxxxx

And yes, I know these aren't good passwords for real use!

---

#### Frameworks
This project was built using Node/Express, Passport, Mongoose, MongoDB and the Pug templating engine.

---

#### Takeaways
This project gave me a chance to get more familiar with user authentication, password encryption and session management. Being new to Express and the backend, it also gave me some more practice with the model-view-controller design pattern.

---

#### Todo
  
- Form validators return hexidecimal for special characters rather than treating them like normal chars.  
- Add timestamps to each message. Experimented with moment.js and Pug but never wrapped it up. 
- Give users the ability to have custom avatars. 
- Indicate that user solved the riddle incorrectly, the wrong answer is supposed to spell peril after all.
