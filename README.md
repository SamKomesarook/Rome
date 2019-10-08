# PJFC Lang


## Introduction
PJFC Lang is a website base application which focus on teaching children from age 6 to 12. It provide an interface contains coding area, IO section and animation section.\
Children are able to write code in the coding area and Click the run button to run code written by them.\
If code written is not valid, error message will be printed out to the output window. Other wise, some changes can be viewed base on different code.

## Available Command
* start
  * Indicate the start of the program
* end
  * Indicate the end of the program
* move
  * Move the selected memory.
    * move(next) or move(last).
* set
  * Set the variable type that can be stored in the selected memory. Type can only be either "letters" or "numbers". The default type of a memory block is letters.
    * set(numbers) or set(letters). 
* write
  * Write content into selected memory block. It will check if the type need to be written in match with the content type that allow to be stored in the selected memory block.
    * When write letters: write("hello") **Note: has to have double quote**
    * When write numbers: write(1024)
* s_write
  * s_wrtie will write to output window instead of memory block. s_write can either write number directly to output window or use *memory* command to write content inside a certain memory block to output window.
    * When write number directly: s_write(1024)
    * When write using memory command: s_write(memory(0))
* if
  * only run conditional code when condition inside if statment is true. Inside the if condition, it can take: (is/not less/greater/equal number/*memory()*).
    *  if (is equal 1) {*conditional code*}
* loop
  * Equvialent to iteration in other programming languages. The different is this loop statement need to have a number or *memory()* to indicate the number of iterations.
    * loop(5){*conditional code*} **Run condition code for 5 time**
    * loop(memory(0)){*conditional code*} **Number of iterations is dependents on the value stored inside the first memory.**
* memory
  * Retrieve the content inside memory
    * memory(0) **Get content stored inside the first memory**
* free
  * Release the selected memory block. In other word, earse the content inside the selected memory
    * free
* k_read
  * Reading input from keyboard. A prompt window should pop up to let user make input.
    * k_read
* n_read
  * Read from network memory. An animation should show when reach this command.
    * n_read
* n_write
  * Write into network memory. An animation should show when reach this command too.
    * n_write("hello") **Note: has to have double quote when write a string**
    * n_write(1024)
* import
  * import package. If n_read and n_write are going to be used, network package should be imported.
    * import network.

## Development
This project is built using ReactJS. To contribute into the development of the project. Follow the following steps:
1. Clone the git repo: `git clone https://github.com/BaharuHarris/PJFC.git`
2. `cd PJFC`
3. install required package: `npm install`
4. Run the localhost server: `npm start`
5. Open browser and visit `localhost:3000`
