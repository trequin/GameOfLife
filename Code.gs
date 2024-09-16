//Global
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("Sheet1");

function myFunction(){
sheet.getRange("X2").setValue("");
sheet.getRange("X3").setValue("");

var stable_counter = 0;

//retrieve the wait time
var waittime_x = sheet.getRange("R40").getValue();

//retrive the number of iterations
var number_of_steps = sheet.getRange("R41").getValue();

// Flag to indicate that the loop is starting
sheet.getRange("F43").setValue(1);

for(var i=1;i<=number_of_steps;i++){
           var run = copyAllInRange()
           Utilities.sleep(waittime_x*1000);
           sheet.getRange("Q2").setValue(i);
           
           var total_life = sheet.getRange("AB39").getValue();
           if(total_life == 0)
           {
             i = number_of_steps;
             sheet.getRange("X2").setValue("All dead");
           };
  
           var is_same = sheet.getRange("F219").getValue();
           if(is_same == 1)
           {
             stable_counter = stable_counter + 1;
             if(stable_counter == 3)
             {
               i = number_of_steps;
               sheet.getRange("X3").setValue("Stable state");
             };
           };
  

          if(sheet.getRange("F43").getValue() == 0)
        {
            i = number_of_steps;
        };
  
      }; 


};
 
//Copy and paste with width and height Values
function copyAllInRange(){
  // Get the range from the sheet you will copy from. 
  var copyRange = sheet.getRange("C114:W145");
  // Get the range of the sheet that is your paste target.
  var pasteRange = sheet.getRange("C5:W36");
  //
  copyRange.copyTo(pasteRange, {contentsOnly:true});
 
};
 

function all_dead(){
  
  sheet.getRange("C5:W36").setValue(sheet.getRange("AB1").getValue());
  
};

function glider(){
sheet.getRange("H10").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("I11").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("I12").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("H12").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("G12").setValue(sheet.getRange("AA1").getValue());
};

function spaceship(){
sheet.getRange("E21").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("E23").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("F20").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("G20").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("H20").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("I20").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("I21").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("I22").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("H23").setValue(sheet.getRange("AA1").getValue());
};

function oscillator(){
sheet.getRange("M15").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("M16").setValue(sheet.getRange("AA1").getValue());
sheet.getRange("M17").setValue(sheet.getRange("AA1").getValue());
};
