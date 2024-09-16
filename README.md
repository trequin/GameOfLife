# GameOfLife
Google Apps Script Research
# Game of Life - Google Sheets & Apps Script

This project is an implementation of **Conway's Game of Life** using **Google Sheets** and **Google Apps Script**. It allows users to simulate the Game of Life directly within a spreadsheet, using a simple interface to control the simulation and a custom algorithm to update cell states based on Conway's rules.

## Features
- **Interactive Grid**: Users can control the grid directly in Google Sheets, initializing different types of Game of Life setups.
- **Custom Simulation Styles**: Sheet 2 allows users to define rules for various Game of Life styles.
- **Automated Updates**: The simulation automatically updates the cell states based on the rules provided in the mapping table.

## Sheets Overview
- **Sheet 1**: This sheet serves as the user interface and calculation matrix. Users can:
  - Select the type of Game of Life (GOL) configuration they want to run.
  - Start and control the oscillations of the simulation.
  - Visualize the current state of cells in the grid.
- **Sheet 2**: This sheet contains a **mapping table** with the rules for updating the cell states:
  - `neighbours`: The number of alive neighbors around a cell.
  - `new state`: Determines whether the cell lives (█) or dies (empty) based on the number of neighbors.
  - `reason`: Explanation for the cell's state, whether it’s due to under-population, over-crowding, or continued life.

The mapping table can be found in Sheet2 of the interfacing GoogleSheet


## How to Use the Project
1. **Copy the Spreadsheet**: 
   - To get started, [make a copy of the Google Sheet](https://docs.google.com/spreadsheets/d/1ZCG_QFX4xIecdvA0tG1PKZ69AdjGoc4G4dsjkFyzeks/edit?usp=sharing) to your own Google Drive.
   
2. **Run the Simulation**:
   - Open **Sheet 1** to access the user interface.
   - Select a starting configuration for the Game of Life.
   - Hit the start button to watch the simulation evolve.

3. **Modify the Rules**:
   - Open **Sheet 2** to modify the rules of life and death based on the number of neighbors. Adjust these to experiment with different types of oscillations and behaviors.

## Code Explanation
All of the core logic for the Game of Life is implemented in **code.gs** using **Google Apps Script**. The script handles:
- Calculating the number of neighbors for each cell.
- Updating the cell states according to the rules in **Sheet 2**.
- Automating the oscillation process to continuously update the game grid.

Here’s a high-level view of the main functions:
- `runGameOfLife()`: The main function to start the Game of Life simulation.
- `calculateNewState()`: Applies the rules from **Sheet 2** to determine the next state of each cell.
- `updateGrid()`: Updates the cells in **Sheet 1** based on the calculated new states.
- `getNeighbors()`: Counts the number of alive neighbors around each cell.

## Installation
To use the Apps Script code:
1. **Access the Script Editor**:
   - In your copied Google Sheet, navigate to `Extensions > Apps Script`.
2. **Paste the Code**:
   - Copy the content from the `code.gs` file in this repository and paste it into the Script Editor.
3. **Save and Run**:
   - Save the script and run the `runGameOfLife()` function to begin the simulation.

## Future Improvements
- Add support for different grid sizes.
- Implement more advanced Game of Life variants.
- Add a speed control for the oscillation process.

## Contributing
Contributions are welcome! If you have suggestions or want to add new features, feel free to fork this repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
