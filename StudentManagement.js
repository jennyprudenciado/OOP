console.log("======== STUDENT MANAGEMENT SYSTEM ========");

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Name: ", function(studentName) {

    input.question("Program: ", function(program) {

        input.question("Section: ", function(section) {
            console.log("======== GRADES OF STUDENTS ======== ");
            input.question("CSElec 1: ", function(csElec) {

                input.question("CS303: ", function(softEng) {

                    input.question("CS302: ", function(automata) {

                        input.question("GE Elec: ", function(geElect) {

                            input.question("CS301: ", function(progLang) {

                                csElec = Number(csElec);
                                softEng = Number(softEng);
                                automata = Number(automata);
                                geElect = Number(geElect);
                                progLang = Number(progLang);
                                
                                let ave = (csElec + softEng + automata + geElect + progLang)/5;
                                let remark;
                                
                                if(ave >= 90){
                                    remark = "EXELLENT";
                                } else if (ave >= 75){
                                    remark = "PASSED";
                                } else {
                                    remark = "FAILED";
                                }
                                
                                console.log("\n ======== STUDENT RECORD ========");
                                console.log("Student Name:", studentName);
                                console.log("Program:", program);
                                console.log("Section:", section);
                                console.log("CSElec1:", csElec);
                                console.log("CS3O3:", softEng);
                                console.log("CS302:", automata);
                                console.log("GE ELec:", geElect);
                                console.log("CS301:",progLang);
                                console.log("Average:",ave.toFixed(2));
                                console.log("Remark:",remark);
                                input.close();
                            });
                        });
                    });
                });
            });
        });
    });
});