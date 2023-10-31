
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ColusTrainingSimpleAppJsonDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.projectname}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.auth}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.database}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.stack}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.services}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="projectname" header="Projectname" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="auth" header="Auth" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="database" header="Database" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="stack" header="Stack" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="services" header="Services" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ColusTrainingSimpleAppJsonDataTable;