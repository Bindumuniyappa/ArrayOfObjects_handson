function retrievingNames(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]
    let res=[];
    for(let i=0;i<studentRecords.length;i++){
        let obj=studentRecords[i];
        res.push(obj.name.toLocaleUpperCase());
    }
    console.log(res);
}
retrievingNames();

function scoreMoreThan50(){
     let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]
    let result=[];
    for(let i=0;i<studentRecords.length;i++){
         let obj=studentRecords[i];
        if(obj.marks>50){
        result.push(obj.marks);
        }
    }
    console.log(result);
}
scoreMoreThan50();

function scoreAndIdMoreThan50(){
     let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]
    let result=[];
    let resultId=[];
    for(let i=0;i<studentRecords.length;i++){
         let obj=studentRecords[i];
        if(obj.marks>50 && obj.id>120){
        result.push(obj.marks);
        resultId.push(obj.id);
        }
    }
    console.log(result);
    console.log(resultId);
}
scoreAndIdMoreThan50();

function totalMarksOfStudents(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name:'yaga', id: 200, marks : 45 },
    {name:'Wick', id: 115, marks : 75 } ]
    let res=[];
    let sum=0;
    for(let i=0;i<studentRecords.length;i++){
        sum+=studentRecords[i].marks;
    }
    console.log(sum);
}
totalMarksOfStudents();
    
function namesScoreMoreThan50(){
     let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]
    let result=[];
    for(let i=0;i<studentRecords.length;i++){
         let obj=studentRecords[i];
        if(obj.marks>50){
        result.push(obj.name);
        }
    }
    console.log(result);

}
namesScoreMoreThan50();

function sumMarksIdGreaterThan120(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]
    let sum=0;
    for(let i=0;i<studentRecords.length;i++){
        let obj=studentRecords[i];
        if(obj.id>120){
            sum+=obj.marks;
        }
    }
    console.log(sum);
}
sumMarksIdGreaterThan120();

function totalMarksGreaterThan_50_AfterAdding15(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
    {name:'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ]
    let sum=0;
    for(let i=0;i<studentRecords.length;i++){
        let obj=studentRecords[i];
        if(obj.marks<50){
            obj.marks=obj.marks+15;
            if(obj.marks>50){
            sum+=obj.marks;
        }  
        }
    }
    console.log(sum);
}
totalMarksGreaterThan_50_AfterAdding15();

