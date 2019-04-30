import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'College Name', 'City', 'Profile'],
            dataRows: [
                ['1', 'Ajay', 'JKLU', 'Jaipur', 'Front-End'],
                ['2', 'Ravi', 'SKIT', 'Delhi', 'Backend'],
                ['3', 'Rishi', 'SKIT', 'Delhi', 'Full-Stack'],
                ['4', 'yash', 'Amity', 'Jaipur', 'Backend'],
                ['5', 'Jatin', 'Amity', 'Delhi', 'Meann-stack'],
               
            ]
        };
            }
}
